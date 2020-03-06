// service-worker.ts
self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      caches.match('/index.html').then((response) => {
        return response || fetch(event.request);
      }).catch(error => {
        return fetch(event.request);
      }),
    );
  }
  return;
});
