self.addEventListener('fetch', function (event) {
  const request = event.request;
  const canBePreCached = request.url.indexOf('https://artik.me') === 0;
  if (canBePreCached) {
    event.respondWith(
      caches.match(request).then(function (resp) {
        return resp || fetch(request).then(function (response) {
          return caches.open('precache-v3').then(function (cache) {
            cache.put(request, response.clone());
            return response;
          });
        });
      })
    );
  }
});