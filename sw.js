/* ══════════════════════════════════════════════════
   SHRIRAM KIRANA - Service Worker v22
   Offline-first caching strategy
══════════════════════════════════════════════════ */

const CACHE_NAME = 'sk-offline-v22';
const ASSETS = [
  './',
  './index.html',
  'https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600;700;800&family=Noto+Sans+Devanagari:wght@400;600;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js'
];

/* Install — cache all core assets */
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS).catch(err => {
        // Cache what we can — external fonts may fail in some envs
        console.warn('[SW] Some assets not cached:', err);
      });
    })
  );
  self.skipWaiting();
});

/* Activate — clean old caches */
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

/* Fetch — cache-first, network fallback */
self.addEventListener('fetch', e => {
  // Only handle GET requests
  if (e.request.method !== 'GET') return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;

      return fetch(e.request)
        .then(response => {
          // Cache successful responses (not opaque for cross-origin)
          if (response && response.status === 200 && response.type !== 'opaque') {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
          }
          return response;
        })
        .catch(() => {
          // Return index.html for navigation requests when offline
          if (e.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
          return new Response('Offline - No network', { status: 503 });
        });
    })
  );
});
