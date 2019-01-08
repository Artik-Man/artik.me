const cacheName = 'cache-v1';

async function supportsWebp() {
  if (!self.createImageBitmap) return false;

  const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
  const blob = await fetch(webpData).then(r => r.blob());
  return createImageBitmap(blob).then(() => true, () => false);
}

async function getPrecacheResources() {
  let precacheResources = [
    'index.html',
    'styles/fonts/bebas/font.css',
    'styles/fonts/lato/font.css',
    'styles/styles.css',
    'app.js',
    'sw.js',

    'styles/fonts/bebas/font/bebasneuethin.woff2',
    'styles/fonts/bebas/font/bebasneuelight.woff2',
    'styles/fonts/lato/font/Lato-Light.woff2',
    'styles/fonts/lato/font/Lato-Regular.woff2',
    'styles/fonts/lato/font/Lato-Thin.woff2',

    'styles/images/icons/icon-16x16.png',
    'styles/images/icons/icon-96x96.png',
    'styles/images/icons/icon-72x72.png',
    'styles/images/icons/icon-128x128.png',
    'styles/images/icons/icon-144x144.png',
    'styles/images/icons/icon-152x152.png',
    'styles/images/icons/icon-192x192.png',
    'styles/images/icons/icon-256x256.png',
    'styles/images/icons/icon-384x384.png',
    'styles/images/icons/icon-512x512.png',
  ];
  let precacheImages = [
    'styles/images/me.jpg',
    'styles/images/projects/kaspersky.jpg',
    'styles/images/projects/kmp.jpg',
    'styles/images/projects/hashboard.jpg',
    'styles/images/projects/hashboard-cabinet.jpg',
    'styles/images/projects/hashboard-player.jpg',
    'styles/images/projects/m315.jpg',
    'styles/images/projects/pr.jpg',
  ];

  if (await supportsWebp()) {
    precacheImages = precacheImages.map(image => image.replace('.jpg', '.webp'))
  }
  precacheResources = precacheResources.concat(precacheImages);
  return precacheResources;
};

async function cacheResources() {
  const precacheResources = await getPrecacheResources();
  caches.open(cacheName)
    .then(cache => {
      return cache.addAll(precacheResources);
    })
}

self.addEventListener('install', event => {
  event.waitUntil(cacheResources());
});

self.addEventListener('fetch', event => {
  // console.log('fetch', event.request.url);
  event.respondWith(caches.match(event.request)
    .then(response => {
      // console.log('fetch -> response', response);
      if (response !== undefined) {
        return response;
      } else {
        return fetch(event.request)
          .then(response => {
            // console.log('fetch -> response -> fetch', response);
            let responseClone = response.clone();
            caches.open(cacheName).then(cache => {
              cache.put(event.request, responseClone);
            });
            return response;
          })
          .catch(e => {
            // console.warn('fetch -> response -> catch', e, caches);
            // return caches.match('/sw-test/gallery/myLittleVader.jpg');
          });
      }
    })
    .catch(e => {
      // console.warn('fetch -> catch', e);
    }))
});
