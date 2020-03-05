// service-worker.ts
import { NetworkFirst } from 'workbox-strategies';
import { registerRoute } from 'workbox-routing';
import { ExpirationPlugin } from 'workbox-expiration';

const lieFiDataHandler = new NetworkFirst({
  cacheName: 'news',
  networkTimeoutSeconds: 5,
  plugins: [
    new ExpirationPlugin({
      maxAgeSeconds: 60 * 60 * 24 * 7,
      maxEntries: 30,
      purgeOnQuotaError: true,
    }),
  ]
});
registerRoute(
  'my.news.api',
  lieFiDataHandler
);
