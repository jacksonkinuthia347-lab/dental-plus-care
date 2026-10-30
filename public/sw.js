self.addEventListener('install', (e) => {
  console.log('Health Plus Care SW installed');
  self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  console.log('Health Plus Care SW activated');
});
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
