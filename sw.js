"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    get(request, noCache = false) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(request, {
                    cache: noCache ? "no-cache" : "default"
                });
                if (!noCache) {
                    const cache = yield caches.open(this.cacheName);
                    cache.put(request, response.clone());
                }
                return response;
            }
            catch (e) {
                console.warn("[SW]: No internet connection");
                return;
            }
        });
    }
    updateCache(clone, clean = true) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("[SW]: Update cache");
            if (clean) {
                const cachesKeys = yield caches.keys();
                cachesKeys.forEach(key => {
                    caches.delete(key).then();
                });
            }
            else {
                const cache = yield caches.open(this.cacheName);
                cache.put(this.commitsUrl, clone);
                [...this.urls.values()].forEach((url) => {
                    this.get(url);
                });
            }
        });
    }
    checkUpdates(justFetch = false) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("[SW]: Check updates...");
            const fetchedResponse = yield this.get(this.commitsUrl, true);
            if (!fetchedResponse) {
                return;
            }
            const clone = fetchedResponse.clone();
            const cache = yield caches.open(this.cacheName);
            const cachedResponse = yield cache.match(this.commitsUrl);
            if (!cachedResponse) {
                justFetch = true;
            }
            if (justFetch) {
                this.updateCache(clone, false);
                return;
            }
            const sha = (commitsResponse) => __awaiter(this, void 0, void 0, function* () {
                if (!commitsResponse) {
                    return "";
                }
                const commits = yield commitsResponse.clone().json();
                const last = Array.isArray(commits) && commits.length ? commits[0] : null;
                if (last) {
                    return last.sha;
                }
                return "";
            });
            const fetchedSHA = yield sha(fetchedResponse), cachedSHA = yield sha(cachedResponse);
            if (fetchedSHA !== cachedSHA) {
                this.updateCache(clone);
                this.newVersionIsAvailable();
            }
            else {
                console.log("[SW]: No updates found");
            }
        });
    }
    newVersionIsAvailable() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("[SW]: Please reload the page");
            const message = {
                message: "[SW]: Update me, please",
                code: 1
            };
            self.clients
                .matchAll({ includeUncontrolled: true, type: "window" })
                .then((clients) => {
                clients.forEach((client) => {
                    client.postMessage(JSON.stringify(message));
                });
            });
        });
    }
    onFetch(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const canBePreCached = request.url.indexOf(location.origin) === 0;
            if (canBePreCached) {
                this.urls.add(request.url);
                this.lazyCheckUpdates();
                const cache = yield caches.open(this.cacheName);
                const resp = yield cache.match(request);
                return resp || (yield this.get(request));
            }
            else {
                return yield this.get(request, true);
            }
        });
    }
}
const serviceWorker = new SiteServiceWorker("cache-v4", "./commits.json");
self.addEventListener("install", () => {
    console.log("[SW]: Install");
    self.skipWaiting();
    setTimeout(() => {
        serviceWorker.checkUpdates(true);
    }, 2000);
});
self.addEventListener("fetch", (event) => {
    event.respondWith(serviceWorker.onFetch(event.request));
});
