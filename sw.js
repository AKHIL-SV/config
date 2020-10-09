var cacheName = 'hello-pwa';
var filesToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/js/budget.js',
  '/js/chart.js',
  '/icon/edit.png',
  '/icon/plus.png',
  '/icon/trash.png',
  '/font/Gilroy-Bold.woff',
  '/font/Gilroy-Regular.woff'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
