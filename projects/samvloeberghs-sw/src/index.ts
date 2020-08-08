import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';
import { initialize } from 'workbox-google-analytics';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst } from 'workbox-strategies';

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
  // This will return true for navigation requests, causing the route to match.
  ({event}) => event.request.mode === 'navigate',
  // Customize this handler with whatever options you need.
  new NetworkFirst()
);

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data && event.data.type === 'CLIENTS_CLAIM') {
    self.clients.claim();
  }
});
