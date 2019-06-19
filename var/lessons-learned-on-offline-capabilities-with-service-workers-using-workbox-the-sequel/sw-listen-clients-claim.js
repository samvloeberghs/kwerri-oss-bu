// ... sw functionality

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'CLIENTS_CLAIM') {
    self.clients.claim();
  }
});
