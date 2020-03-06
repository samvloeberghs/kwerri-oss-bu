// service-worker.js
self.addEventListener('fetch', (event) => {
  // check if this is a request we want to handle cache first
  if (event.url === '/my-api') {
    event.respondWith(
      // check if response for request is cached
      caches.open('my-api-cache').match(event.request).then((response) => {
        // return response or fetch from network
        return response || fetch(event.request);
      }).catch(() => {
        // on error faalback to fetch from network
        return fetch(event.request);
      }),
    );
  }
});
