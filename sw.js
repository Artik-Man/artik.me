"use strict";
function throttle(func, ms) {
    let isThrottled = false, savedArgs, savedThis;
    function wrapper() {
        if (isThrottled) {
            savedArgs = arguments;
            savedThis =
                this;
            return;
        }
        func.apply(this, arguments);
        isThrottled = true;
        setTimeout(function () {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }
    return wrapper;
}
class SiteServiceWorker {
    constructor(cacheName, commitsUrl) {
        this.cacheName = cacheName;
        this.commitsUrl = commitsUrl;
        this.urls = new Set();
        this.lazyCheckUpdates = throttle(this.checkUpdates, 60 * 60 * 1000);
    }
    async get(request, noCache = false) {
        try {
            const response = await fetch(request, {
                cache: noCache ? 'no-cache' : 'default',
            });
            if (!noCache) {
                const cache = await caches.open(this.cacheName);
                await cache.put(request, response.clone());
            }
            return response;
        }
        catch (e) {
            console.warn('[SW]: No internet connection');
        }
        return;
    }
    async updateCache(clone, clean = true) {
        console.log('[SW]: Update cache');
        if (clean) {
            const cachesKeys = await caches.keys();
            cachesKeys.forEach(key => {
                caches.delete(key).then();
            });
        }
        else {
            const cache = await caches.open(this.cacheName);
            await cache.put(this.commitsUrl, clone);
            [...this.urls.values()].forEach((url) => {
                this.get(url);
            });
        }
    }
    async checkUpdates(justFetch = false) {
        console.log('[SW]: Check updates...');
        const fetchedResponse = await this.get(this.commitsUrl, true);
        if (!fetchedResponse) {
            return;
        }
        const clone = fetchedResponse.clone();
        const cache = await caches.open(this.cacheName);
        const cachedResponse = await cache.match(this.commitsUrl);
        if (!cachedResponse) {
            justFetch = true;
        }
        if (justFetch) {
            this.updateCache(clone, false);
            return;
        }
        const sha = async (commitsResponse) => {
            if (!commitsResponse) {
                return '';
            }
            const commits = await commitsResponse.clone().json();
            const last = Array.isArray(commits) && commits.length ? commits[0] : null;
            if (last) {
                return last.sha;
            }
            return '';
        };
        const fetchedSHA = await sha(fetchedResponse), cachedSHA = await sha(cachedResponse);
        if (fetchedSHA !== cachedSHA) {
            this.updateCache(clone);
            this.newVersionIsAvailable();
        }
        else {
            console.log('[SW]: No updates found');
        }
    }
    async newVersionIsAvailable() {
        console.log('[SW]: Please reload the page');
        const message = {
            message: '[SW]: Update me, please',
            code: 1,
        };
        self.clients
            .matchAll({ includeUncontrolled: true, type: 'window' })
            .then((clients) => {
            clients.forEach((client) => {
                client.postMessage(JSON.stringify(message));
            });
        });
    }
    async onFetch(request) {
        const url = new URL(request.url);
        const canBePreCached = ['https://fonts.gstatic.com', 'https://fonts.googleapis.com', location.origin].includes(url.origin);
        if (canBePreCached) {
            this.urls.add(request.url);
            this.lazyCheckUpdates();
            const cache = await caches.open(this.cacheName);
            const resp = await cache.match(request);
            return resp || (await this.get(request));
        }
        else {
            return;
        }
    }
}
const serviceWorker = new SiteServiceWorker('cache-v4', 'https://api.github.com/repos/Artik-Man/artik.me/commits');
self.addEventListener('install', () => {
    console.log('[SW]: Install');
    self.skipWaiting();
    setTimeout(() => {
        serviceWorker.checkUpdates(true).then();
    }, 2000);
});
self.addEventListener('fetch', async (event) => {
    try {
        event.respondWith(serviceWorker.onFetch(event.request));
    }
    catch (e) {
    }
});
