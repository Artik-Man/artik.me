const cacheName = 'cache-v1';
const precacheResources = [
  '/index.html',
  '/styles/styles.css',
  '/app.js',
  '/sw.js',
  // images webp
  '/styles/images/me.webp',
  '/styles/images/projects/kaspersky.webp',
  '/styles/images/projects/kmp.webp',
  '/styles/images/projects/hashboard.webp',
  '/styles/images/projects/hashboard-cabinet.webp',
  '/styles/images/projects/hashboard-player.webp',
  '/styles/images/projects/m315.webp',
  '/styles/images/projects/pr.webp',
  // images jpg
  '/styles/images/me.jpg',
  '/styles/images/projects/kaspersky.jpg',
  '/styles/images/projects/kmp.jpg',
  '/styles/images/projects/hashboard.jpg',
  '/styles/images/projects/hashboard-cabinet.jpg',
  '/styles/images/projects/hashboard-player.jpg',
  '/styles/images/projects/m315.jpg',
  '/styles/images/projects/pr.jpg',
  // fonts
  '/styles/fonts/bebas/font/bebasneuethin.woff2',
  '/styles/fonts/bebas/font/bebasneuelight.woff2',
  '/styles/fonts/lato/fonts/Lato-Light.woff2',
  '/styles/fonts/lato/fonts/Lato-Regular.woff2',
  '/styles/fonts/lato/fonts/Lato-Thin.woff2',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(precacheResources);
      })
  );
});


self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request)
    .then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});