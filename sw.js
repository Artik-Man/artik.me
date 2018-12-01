const cacheName = 'cache-v1';
const precacheResources = [
  '/',
  'index.html',
  'styles/styles.css',
  'styles/images/me.jpg',
  'styles/images/projects/kaspersky.jpg',
  'styles/images/projects/hashboard.jpg',
  'styles/images/projects/hashboard-cabinet.jpg',
  'styles/images/projects/hashboard-player.jpg',
  'styles/images/projects/m315.jpg',
  'styles/images/projects/pr.jpg',
];

self.addEventListener('install', event => {
  console.log('Service worker install event!');
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(precacheResources);
      })
  );
});

self.addEventListener('activate', event => {
  console.log('Service worker activate event!');
});

self.addEventListener('fetch', event => {
  console.log('Fetch intercepted for:', event.request.url);
  event.respondWith(caches.match(event.request)
    .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request);
      })
    );
});