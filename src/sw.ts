const CACHE_NAME = 'cache-v5';
const VERSION_URL = 'https://api.github.com/repos/Artik-Man/artik.me/commits';
const DOMAIN_WHITELIST = [
  location.origin,
  'https://fonts.gstatic.com',
  'https://fonts.googleapis.com'
];

interface Commit {
  sha: string;
  [key: string]: any;
}

function getCommitSha(json: Commit[]): string | undefined {
  return json[0]?.sha;
}

// Функция для получения текущей версии с сервера
async function fetchVersion(): Promise<string | null> {
  try {
    const response = await fetch(VERSION_URL, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`Failed to fetch version: ${response.statusText}`);
    }
    const json = await response.json();
    return getCommitSha(json);
  } catch (error) {
    console.error('[SW]: Error fetching version:', error);
    return null;
  }
}

// Функция для обновления кэша
async function updateCache(request: RequestInfo, response: Response): Promise<void> {
  const cache = await caches.open(CACHE_NAME);
  await cache.put(request, response);
}

// Установка service worker
self.addEventListener('install', event => {
  console.log('[SW]: Install');
  // @ts-ignore
  self.skipWaiting(); // Убедитесь, что TypeScript понимает, что self является ServiceWorkerGlobalScope
  event.waitUntil(
    fetchVersion().then(version => {
      console.log('[SW]: Fetched version during install:', version);
    })
  );
});

// Активация service worker
self.addEventListener('activate', event => {
  console.log('[SW]: Activate');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW]: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // @ts-ignore
  self.clients.claim(); // Убедитесь, что TypeScript понимает, что self является ServiceWorkerGlobalScope
});

// Обработка сообщений от клиента
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'CHECK_VERSION') {
    console.log('[SW]: Received CHECK_VERSION message');
    checkAndUpdateVersion();
  }
});

// Функция для проверки и обновления версии
async function checkAndUpdateVersion(): Promise<void> {
  const cache = await caches.open(CACHE_NAME);
  const currentVersion = await fetchVersion();
  const cachedVersion = await cache.match(VERSION_URL).then(res => res?.json().then(json => getCommitSha(json)));

  if (currentVersion && cachedVersion && currentVersion === cachedVersion) {
    console.log('[SW]: Version matches. No update needed.');
  } else {
    console.log('[SW]: Version mismatch. Updating cache and notifying clients.');
    try {
      const response = await fetch(VERSION_URL);
      if (response.ok) {
        await updateCache(VERSION_URL, response.clone());
      }
      notifyClientsAboutUpdate();
    } catch (error) {
      console.error('[SW]: Error updating version:', error);
    }
  }
}

// Функция для уведомления клиентов об устаревшей версии
function notifyClientsAboutUpdate(): void {
  // @ts-ignore
  self.clients.matchAll({ includeUncontrolled: true, type: 'window' }).then(clients => {
    clients.forEach(client => {
      client.postMessage({ type: 'VERSION_OUTDATED' });
    });
  });
}

// Обработка событий fetch
self.addEventListener('fetch', event => {
  event.respondWith(
    (async () => {
      const requestUrl = new URL(event.request.url);

      // Проверяем, относится ли запрос к разрешённым доменам
      if (DOMAIN_WHITELIST.includes(requestUrl.origin)) {
        const cache = await caches.open(CACHE_NAME);
        const cachedResponse = await cache.match(event.request);

        if (cachedResponse) {
          // Версия совпадает, отдаём из кэша
          console.log('[SW]: Serving from cache:', event.request.url);
          return cachedResponse;
        } else {
          // Запрашивает и кэширует новые ресурсы
          console.log('[SW]: Fetching and updating cache:', event.request.url);
        
          const response = await fetch(event.request);
          if (response.ok) {
            await updateCache(event.request, response.clone());
          }
          return response;
        
        }
      } else {
        // Если запрос не относится к разрешённым доменам, просто выполняем запрос
        return fetch(event.request);
      }
    })()
  );
});