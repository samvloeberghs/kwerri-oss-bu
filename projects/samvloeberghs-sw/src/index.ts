import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';
import { initialize } from 'workbox-google-analytics';

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

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data && event.data.type === 'CLIENTS_CLAIM') {
    self.clients.claim();
  }
});
