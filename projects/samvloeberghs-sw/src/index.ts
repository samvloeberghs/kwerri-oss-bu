import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';
import { initialize } from 'workbox-google-analytics';
import { registerRoute } from 'workbox-routing';

declare const self: any;

// Precache & Route setup
cleanupOutdatedCaches();

// Keep it here or it will not get picked up
// see workbox-config.js
// This array gets injected automagically by the workbox cli
const assetsToCache = self.__WB_MANIFEST;
// To customize the assets afterwards:
// assetsToCache = [...assetsToCache, ??]
precacheAndRoute(assetsToCache);

// Google Analytics cache setup
// see https://developers.google.com/web/tools/workbox/modules/workbox-google-analytics
initialize();

// Catch navigation requests
registerRoute(
  ({ event }) => event.request.mode === 'navigate',
  async ({ request }: { request: Request }) => {
    return caches
      .match(request)
      .then(response => {
        return response || fetch(request);
      })
      .catch(err => {
        console.error(err);
        return fetch(request);
      });
  },
);

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data && event.data.type === 'CLIENTS_CLAIM') {
    self.clients.claim();
  }
});
