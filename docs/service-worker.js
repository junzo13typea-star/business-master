// Service Worker for ビジネスエキスパートの道 (PWA / オフライン動作対応)
const CACHE_NAME = 'shindanshi-master-v21';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './index.css',
  './app.js',
  './sound.js',
  './character.js',
  './questions.js',
  './manifest.json',
  './icon.svg',
  './data/exam_break_data.js',
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

// Install: すべての主要ファイルを事前キャッシュし、即時アクティベート
self.addEventListener('install', (event) => {
  self.skipWaiting(); // 古いSWの待機をスキップして即座に有効化
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Activate: 古いキャッシュの完全削除
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Network-First（オンライン時は常に最新を取得し、オフライン時のみキャッシュを利用）
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const resClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, resClone));
        }
        return networkResponse;
      })
      .catch(() => caches.match(event.request))
  );
});

