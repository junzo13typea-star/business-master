// Service Worker for ビジネスエキスパートの道 (PWA / オフライン動作対応)
const CACHE_NAME = 'shindanshi-master-v8';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './index.css',
  './app.js',
  './questions.js',
  './manifest.json',
  './icon.svg',
  './data/mba_vocab.js',
  './data/management.js',
  './data/finance.js',
  './data/operations.js',
  './data/economics.js',
  './data/law.js',
  './data/it.js',
  './data/policy.js',
  './data/vocab_management.js',
  './data/vocab_finance.js',
  './data/vocab_operations.js',
  './data/vocab_economics.js',
  './data/vocab_law.js',
  './data/vocab_it.js',
  './data/vocab_policy.js',
  './data/cases_data.js'
];

// Install: すべての主要ファイルを事前キャッシュ
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Activate: 古いキャッシュの削除
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: キャッシュ優先 (Cache-First) でオフラインでも爆速起動
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // キャッシュがあればキャッシュを返しつつ、バックグラウンドで最新を取得して更新
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse);
            });
          }
        }).catch(() => {});
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});

