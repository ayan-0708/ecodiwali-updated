const CACHE_NAME = 'ecodiwali-next-v1.0.0';
const CORE_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/icons/diya.svg',
  './assets/thumbnails/rocket.svg',
  './assets/thumbnails/anar.svg',
  './assets/thumbnails/chakri.svg',
  './assets/thumbnails/flower-pot.svg',
  './assets/thumbnails/phuljhadi.svg',
  './assets/thumbnails/100-wala-garland.svg',
  './assets/thumbnails/sky-shot.svg',
  './assets/thumbnails/ground-spinner.svg',
  './assets/thumbnails/crackling.svg',
  './assets/thumbnails/grand-finale.svg',
  './assets/audio/rocket.wav',
  './assets/audio/anar.wav',
  './assets/audio/chakri.wav',
  './assets/audio/flower-pot.wav',
  './assets/audio/phuljhadi.wav',
  './assets/audio/100-wala-garland.wav',
  './assets/audio/sky-shot.wav',
  './assets/audio/ground-spinner.wav',
  './assets/audio/crackling.wav',
  './assets/audio/grand-finale.wav'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching core assets');
      return cache.addAll(CORE_ASSETS).catch((err) => {
        console.warn('[ServiceWorker] Some assets could not be cached immediately:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  // Ignore non-GET requests
  if (req.method !== 'GET') return;

  event.respondWith(
    caches.match(req).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(req).then((networkResponse) => {
        // Cache valid responses for offline use
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(req, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Fallback for navigation requests
        if (req.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
