const cacheName = 'precache-v3';
const commitsUrl = 'https://api.github.com/repos/Artik-Man/artik.me/commits';
const urls = new Set();

const updateCache = async (clone) => {
  console.log('Update cache');
  await caches.delete(cacheName);
  const cache = await caches.open(cacheName);
  cache.put(commitsUrl, clone);
  [...urls.values()].forEach(url => {
    getData(url);
  })
}

function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this, args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const getData = async (request) => {
  const response = await fetch(request);
  const cache = await caches.open(cacheName);
  cache.put(request, response.clone());
  return response;
}

const getSha = async (commitsResponse) => {
  if (!commitsResponse) {
    return null;
  }

  const commits = await commitsResponse.json();
  const last = Array.isArray(commits) ? commits.shift() : null;

  if (last) {
    return last.sha;
  }

  return null;
}

const compareCommits = async () => {
  let fetchedResponse;
  try {
    fetchedResponse = await fetch(commitsUrl, {
      cache: 'no-cache'
    });
  } catch (e) {
    console.warn('No internet connection');
    return;
  }
  const clone = fetchedResponse.clone();

  let cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(commitsUrl);

  const fetchedSha = await getSha(fetchedResponse);
  const cachedSha = await getSha(cachedResponse);

  if (fetchedSha !== cachedSha) {
    updateCache(clone);
  }

}

const debouncedCompareCommits = debounce(compareCommits, 10000);

self.addEventListener('fetch', function (event) {
  const request = event.request;
  const canBePreCached = request.url.indexOf(location.origin) === 0;

  if (canBePreCached) {
    urls.add(request.url);
    event.respondWith(
      caches.open(cacheName)
        .then(cache => cache.match(request)
          .then(resp => resp || getData(request).then(r => r))
        )
    );

    debouncedCompareCommits();
  }

});