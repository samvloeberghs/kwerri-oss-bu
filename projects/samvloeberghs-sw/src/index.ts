import { cleanupOutdatedCaches, createHandlerBoundToURL, precacheAndRoute } from 'workbox-precaching';
import { initialize } from 'workbox-google-analytics';
import { NavigationRoute, registerRoute } from 'workbox-routing';
import { NetworkFirst } from 'workbox-strategies';

declare const self: any;

// Precache & Route setup
cleanupOutdatedCaches();
// Keep it here or it will not get picked up
// see workbox-config.js
// This array gets injected automagically by the workbox cli
const assetsToCache = self.__WB_MANIFEST;
// To customize the assets afterwards:
// assetsToCache = [...assetsToCache, ??
precacheAndRoute(assetsToCache);

// Google Analytics cache setup
// see https://developers.google.com/web/tools/workbox/modules/workbox-google-analytics
initialize();

// default page handler for offline usage, where the browser does not how to handle deep links
// it's a SPA, so each path that is a navigation should default to index.html
const defaultRouteHandler = createHandlerBoundToURL('/index.html');
const defaultNavigationRoute = new NavigationRoute(defaultRouteHandler, {
  // allowlist: [],
  // denylist: [],
});
registerRoute(defaultNavigationRoute);

registerRoute(
  /posts\/data\.json/,
  new NetworkFirst({
    cacheName: 'posts',
  }),
);
registerRoute(
  /posts\/[\w-]+\/post\.html/,
  new NetworkFirst({
    cacheName: 'posts-html',
  }),
);

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data && event.data.type === 'CLIENTS_CLAIM') {
    self.clients.claim();
  }
});
