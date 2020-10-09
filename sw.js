var cacheName = 'hello-pwa';
var filesToCache = [
  '/budget-app/',
  '/budget-app/index.html',
  '/budget-app/style.css',
  '/budget-app/budget.js',
  '/budget-app/js/chart.js',
  '/budget-app/icon/edit.png',
  '/budget-app/icon/logo64.png',
  '/budget-app/icon/logo512.png',
  '/budget-app/icon/plus.png',
  '/budget-app/icon/trash.png',
  '/budget-app/font/Gilroy-Bold.woff',
  '/budget-app/font/Gilroy-Regular.woff',
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
