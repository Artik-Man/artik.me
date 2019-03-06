var CACHE = 'precache-v3';

const icons = [128, 192, 256, 384, 512].map(item => './styles/images/icons/icon-' + item + 'x' + item + '.png');
const jpg = [
  'styles/images/me.jpg',
  'styles/images/projects/kaspersky.jpg',
  'styles/images/projects/artik.jpg',
  'styles/images/projects/kmp.jpg',
  'styles/images/projects/hashboard.jpg',
  'styles/images/projects/hashboard-cabinet.jpg',
  'styles/images/projects/hashboard-player.jpg',
  'styles/images/projects/m315.jpg',
  'styles/images/projects/pr.jpg'
];
const webp = jpg.map(item => item.replace(/jpg$/, 'webp'));

var precacheFiles = [
  'index.html',
  'styles/fonts/bebas/font.css',
  'styles/fonts/lato/font.css',
  'styles/styles.css',
  'app.js',
  'styles/fonts/bebas/font/bebasneuelight.woff2'
]
  .concat(icons)
  .concat(jpg)
  .concat(webp);

function precache() {
  return caches.open(CACHE)
    .then(cache => {
      return cache.addAll(precacheFiles);
    })
    .catch(e => console.warn(e));
}

function fromCache(request) {
  return caches.open(CACHE)
    .then(cache => {
      return cache.match(request)
        .then(matching => {
          return matching || fromServer(request);
        })
        .catch(e => console.warn(e));
    })
    .catch(e => console.warn(e));
}

function update(request) {
  return caches.open(CACHE)
    .then(cache => {
      return fetch(request)
        .then(response => {
          return cache.put(request, response);
        })
        .catch(e => console.warn(e));
    })
    .catch(e => console.warn(e));
}

function fromServer(request) {
  return fetch(request)
    .then(response => response)
    .catch(e => console.warn(e));
}

// self.addEventListener('install', e => {
//   e.waitUntil(precache()
//     .then(() => {
//       return self.skipWaiting();
//     })
//     .catch(e => console.warn(e))
//   );
// });

// self.addEventListener('activate', e => {
//   return self.clients.claim();
// });

// self.addEventListener('fetch', event => {
//   console.log(event);

//   // e.respondWith(fromCache(e.request).catch(fromServer(e.request)));
//   // e.waitUntil(update(e.request));

//   event.respondWith(async () => {
//     const request = event.request;
//     const cachedResponse = await caches.open(CACHE).then(cache => cache.match(request));
//     // console.log(cachedResponse);
//     // if (cachedResponse) {
//     //   return cachedResponse;
//     // }

//     // const response = await fetch(request);
//     // caches.open(CACHE).then(cache => cache.put(request, response));
//     // console.log(response);
//     // return response;

//   })
// });

self.addEventListener('fetch', function (event) {
  const request = event.request;
  // const canBePreCached = precacheFiles.find(file => {
  //   return request.url.indexOf(file) !== -1;
  // });
  const canBePreCached = request.url.indexOf('https://artik.me') === 0;
  if (canBePreCached) {
    event.respondWith(
      caches.match(request).then(function (resp) {
        return resp || fetch(request).then(function (response) {
          return caches.open(CACHE).then(function (cache) {
            cache.put(request, response.clone());
            return response;
          });
        });
      })
    );
  }
});