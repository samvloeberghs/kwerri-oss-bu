// service-worker.ts
import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';

registerRoute(
  '/my-api',
  new CacheFirst({
    cacheName: 'my-api-cache',
  }),
);
