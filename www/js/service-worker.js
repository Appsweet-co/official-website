// https://web.dev/offline-cookbook/

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('appsweet-d8zpjH').then(function (cache) {
      return cache.addAll([
        '/assets/icon.png',
        '/assets/logo.svg',
        '/favicon.ico',
        '/index.html',
        '/manifest.json',
        '/www/js/embed.js',
        '/www/js/service-worker.js',
        '/www/js/work-with-us.js',
        '/www/styles/styles.min.css',
      ]);
    }),
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    }),
  );
});
