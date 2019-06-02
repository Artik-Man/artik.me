function debounce(func, wait, immediate = false) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        let later = function () {
            timeout = undefined;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

class SiteServiceWorker {
    urls = new Set();
    debouncedCompareCommits = debounce(this.checkUpdates, 1000);
    cacheName = '';
    commitsUrl = '';

    constructor(cacheName, commitsUrl) {
        this.cacheName = cacheName;
        this.commitsUrl = commitsUrl;
    }

    async get(request, noCache = false) {
        try {
            const response = await fetch(request, {
                cache: noCache ? 'no-cache' : 'default'
            });

            if (!noCache) {
                const cache = await caches.open(this.cacheName);
                cache.put(request, response.clone());
            }

            return response;
        } catch (e) {
            console.warn('[SW]: No internet connection');
            return;
        }
    }

    async updateCache(clone) {
        console.log('[SW]: Update cache');

        await caches.delete(this.cacheName);

        const cache = await caches.open(this.cacheName);
        cache.put(this.commitsUrl, clone);

        [...this.urls.values()].forEach(url => {
            this.get(url);
        })
    };

    async checkUpdates(justFetch = false) {
        const fetchedResponse = await this.get(this.commitsUrl, true);
        if (!fetchedResponse) {
            return;
        }

        const clone = fetchedResponse.clone();
        const cache = await caches.open(this.cacheName);

        if (justFetch) {
            cache.put(this.commitsUrl, clone);
            return;
        }

        const cachedResponse = await cache.match(this.commitsUrl);
        if (!cachedResponse) {
            return;
        }

        const sha = (commitsResponse) => {
            if (!commitsResponse) {
                return null;
            }

            const commits = commitsResponse.json().then(c => c);
            const last = Array.isArray(commits) ? commits.shift() : null;

            if (last) {
                return last.sha;
            }

            return null;
        };

        if (sha(fetchedResponse) !== sha(cachedResponse)) {
            this.updateCache(clone);
            this.newVersionIsAvailable();
        }
    }

    async newVersionIsAvailable() {
        const message = {
            message: '[SW]: Update me, please',
            code: 1
        };

        clients.matchAll({ includeUncontrolled: true, type: 'window' }).then(clients => {
            clients.forEach(client => {
                client.postMessage(JSON.stringify(message));
            })
        })
    }

    async onFetch(request) {
        const canBePreCached = request.url.indexOf(location.origin) === 0;

        if (canBePreCached) {
            this.urls.add(request.url);

            this.debouncedCompareCommits();

            const cache = await caches.open(this.cacheName);
            const resp = await cache.match(request);

            return resp || await this.get(request);
        } else {
            return await this.get(request, true)
        }
    }
}

const serviceWorker = new SiteServiceWorker('cache-v4', 'https://api.github.com/repos/Artik-Man/artik.me/commits');

self.addEventListener('install', event => {
    serviceWorker.checkUpdates(true);
});

self.addEventListener('fetch', event => {
    event.respondWith(serviceWorker.onFetch(event.request));
});