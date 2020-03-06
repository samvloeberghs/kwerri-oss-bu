// service-worker.ts
import { registerRoute } from 'workbox-routing';

registerRoute(
  'logo.png',
  () => {
    /* ... */
  },
);
