interface Commit {
  url: string;
  sha: string;

  [field: string]: any;
}

function throttle(func: () => void, ms: number) {
  let isThrottled = false,
    savedArgs: {} | null,
    savedThis: null;

  function wrapper() {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis =
        // @ts-ignore
        this;
      return;
    }
    // @ts-ignore
    func.apply(this, arguments);
    isThrottled = true;
    setTimeout(function () {
      isThrottled = false;
      if (savedArgs) {
        // @ts-ignore
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

class SiteServiceWorker {
  public cacheName: string;
  public commitsUrl: string;
  private urls: Set<string>;
  private readonly lazyCheckUpdates: () => void;

  constructor(cacheName: string, commitsUrl: string) {
    this.cacheName = cacheName;
    this.commitsUrl = commitsUrl;
    this.urls = new Set();
    this.lazyCheckUpdates = throttle(this.checkUpdates, 60 * 60 * 1000);
  }

  async get(request: Request | string, noCache = false): Promise<Response | undefined> {
    try {
      const response = await fetch(request, {
        cache: noCache ? 'no-cache' : 'default',
      });

      if (!noCache) {
        const cache = await caches.open(this.cacheName);
        await cache.put(request, response.clone());
      }

      return response;
    } catch (e) {
      console.warn('[SW]: No internet connection');
    }
    return;
  }

  async updateCache(clone: Response, clean = true): Promise<void> {
    console.log('[SW]: Update cache');
    if (clean) {
      const cachesKeys = await caches.keys();
      cachesKeys.forEach(key => {
        caches.delete(key).then();
      });
    } else {
      const cache = await caches.open(this.cacheName);
      await cache.put(this.commitsUrl, clone);

      [...this.urls.values()].forEach((url: string) => {
        this.get(url);
      });
    }
  }

  async checkUpdates(justFetch = false): Promise<void> {
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

    const sha = async (commitsResponse: Response): Promise<string> => {
      if (!commitsResponse) {
        return '';
      }

      const commits: Commit[] = await commitsResponse.clone().json();
      const last = Array.isArray(commits) && commits.length ? commits[0] : null;

      if (last) {
        return last.sha;
      }

      return '';
    };

    const fetchedSHA = await sha(fetchedResponse),
      cachedSHA = await sha(cachedResponse as Response);

    if (fetchedSHA !== cachedSHA) {
      this.updateCache(clone);
      this.newVersionIsAvailable();
    } else {
      console.log('[SW]: No updates found');
    }
  }

  async newVersionIsAvailable(): Promise<void> {
    console.log('[SW]: Please reload the page');

    const message = {
      message: '[SW]: Update me, please',
      code: 1,
    };

    // @ts-ignore
    self.clients
      .matchAll({ includeUncontrolled: true, type: 'window' })
      .then((clients: { forEach: (arg0: (client: any) => void) => void }) => {
        clients.forEach((client: { postMessage: (arg0: any) => void }) => {
          client.postMessage(JSON.stringify(message));
        });
      });
  }

  async onFetch(request: Request): Promise<Response | undefined> {
    const url = new URL(request.url);
    const canBePreCached = ['https://fonts.gstatic.com', 'https://fonts.googleapis.com', location.origin].includes(url.origin);

    if (canBePreCached) {
      this.urls.add(request.url);

      this.lazyCheckUpdates();

      const cache = await caches.open(this.cacheName);
      const resp = await cache.match(request);

      return resp || (await this.get(request));
    } else {
      return await this.get(request, true);
    }
  }
}

const serviceWorker = new SiteServiceWorker('cache-v4', 'https://api.github.com/repos/Artik-Man/artik.me/commits');

self.addEventListener('install', () => {
  console.log('[SW]: Install');
  // @ts-ignore
  self.skipWaiting();
  setTimeout(() => {
    serviceWorker.checkUpdates(true).then();
  }, 2000);
});

// @ts-ignore
self.addEventListener('fetch', async (event: FetchEvent) => {
  const response = await serviceWorker.onFetch(event.request);
  if (response) {
    event.respondWith(response);
  }
});
