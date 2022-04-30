// https://web.dev/offline-cookbook/

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('appsweet-jz3JYZ').then(function (cache) {
      return cache.addAll([
        '/assets/github-white.svg',
        '/assets/icon.png',
        '/assets/logo.svg',
        '/favicon.ico',
        '/index.html',
        '/main.js',
        '/manifest.json',
        '/service-worker.js',
        '/styles.min.css',
        '/work-with-us.js',
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
