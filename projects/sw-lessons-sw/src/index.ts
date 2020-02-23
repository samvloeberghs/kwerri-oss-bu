import { Store, get } from 'idb-keyval';
import { precacheAndRoute, cleanupOutdatedCaches, createHandlerBoundToURL, getCacheKeyForURL } from 'workbox-precaching';
import { registerRoute, NavigationRoute } from 'workbox-routing';
import { NetworkFirst, StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';
import { initialize } from 'workbox-google-analytics';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { ExpirationPlugin } from 'workbox-expiration';

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

// default page handler for offline usage, where the browser does not how to handle deep links
// it's a SPA, so each path that is a navigation should default to index.html
let defaultSPAPageHandlerVerison;
defaultSPAPageHandlerVerison = 3;

// 1st, native service worker version
if (defaultSPAPageHandlerVerison === 1) {
  self.addEventListener('fetch', (event) => {
    if (event.request.mode === 'navigate') {
      event.respondWith(
        caches.match('/index.html').then((response) => {
          return response || fetch(event.request);
        }).catch(error => {
          return fetch(event.request);
        }),
      );
    }
    return;
  });
}

// 2nd, workbox version
if (defaultSPAPageHandlerVerison === 2) {
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
}

// 3rd, best workbox version
if (defaultSPAPageHandlerVerison === 3) {
  const defaultRouteHandler = createHandlerBoundToURL('/index.html');
  const defaultNavigationRoute = new NavigationRoute(defaultRouteHandler, {
    // allowlist: [],
    // denylist: [],
  });
  registerRoute(defaultNavigationRoute);
}

// Google Analytics cache setup
// see https://developers.google.com/web/tools/workbox/modules/workbox-google-analytics
initialize({
  parameterOverrides: {
    cd1: 'offline',
  },
  hitFilter: (params) => {
    const queueTimeInSeconds = Math.round(+params.get('qt') / 1000);
    params.set('cm1', `${queueTimeInSeconds}`);
  },
});

// Google Fonts cache setup
// see https://developers.google.com/web/tools/workbox/guides/common-recipes#google_fonts
registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  }),
);

// Cache the underlying font files with a cache-first strategy for 1 year.
registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
        purgeOnQuotaError: true, // Automatically cleanup if quota is exceeded.
      }),
    ],
  }),
);

// OAuth header interceptor
registerRoute(
  /map\.png/,
  async ({ event, url }) => {
    // get the eventual token
    const customStore = new Store('swl-db', 'swl-db-store');
    const oAuthToken = await get<string>('token', customStore);

    // if token available, set it as the Authorization header
    if (!!oAuthToken) {
      const modifiedHeaders = new Headers(event.request.headers);
      modifiedHeaders.set('Authorization', oAuthToken);
      const overwrite = {
        headers: modifiedHeaders,
      };
      const modifiedRequest = new Request(url.toString(), overwrite);
      return fetch(modifiedRequest);
    }

    const defaultNotAuthedBase = '/assets/not_authorized.png';
    return caches
      .match(getCacheKeyForURL(defaultNotAuthedBase))
      .then(response => {
        return response || fetch(defaultNotAuthedBase);
      })
      .catch(err => {
        return fetch(defaultNotAuthedBase);
      });
  },
);

// Flags default handler
const flagsHandler = new CacheFirst({
  cacheName: 'flags-cache',
});
registerRoute(/assets\/flags\/(?![_])(.*)/, args => {
  const defaultFlag = () => caches.match(
    getCacheKeyForURL('/assets/_defaultflag.png'),
  );
  return flagsHandler.handle(args)
    .then(response => {
      if (!response || response.status === 404) {
        return defaultFlag();
      }
      return response;
    }).catch(() => {
      return defaultFlag();
    });
});

// Liefi handler
const lieFiDataHandler = new NetworkFirst({
  networkTimeoutSeconds: 5,
});
registerRoute(/assets\/data\.json/, lieFiDataHandler);

self.addEventListener('message', event => {
  console.log(event);
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data && event.data.type === 'CLIENTS_CLAIM') {
    self.clients.claim();
  }
});

