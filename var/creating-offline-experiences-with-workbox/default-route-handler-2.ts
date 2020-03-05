// service-worker.ts
import { registerRoute } from 'workbox-routing';
import { getCacheKeyForURL } from 'workbox-precaching';

registerRoute(
  ({ event }) => event.request.mode === 'navigate',
  async () => {
    const defaultBase = '/index.html';
    return caches
      .match(getCacheKeyForURL(defaultBase))
      .then(response => {
        return response || fetch(defaultBase);
      })
      .catch(err => {
        return fetch(defaultBase);
      });
  },
);
