importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js');

if (workbox) {

  // Avoid async imports
  // see https://developers.google.com/web/tools/workbox/modules/workbox-sw#avoid_async_imports
  const {googleAnalytics, routing, strategies, expiration, precaching} = workbox;

  console.log(`Yay! Workbox is loaded 🎉`);

  // Precache & Route setup
  // This array gets injected automagically by the workbox cli
  // Keep it here or it will not get picked up
  // see workbox-config.js
  workbox.precaching.precacheAndRoute([]);

  // Google Analytics cache setup
  // see https://developers.google.com/web/tools/workbox/modules/workbox-google-analytics
  googleAnalytics.initialize();

  // Google Fonts cache setup
  // see https://developers.google.com/web/tools/workbox/guides/common-recipes#google_fonts
  routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new strategies.StaleWhileRevalidate({
      cacheName: 'google-fonts-stylesheets'
    })
  );

  // Cache the underlying font files with a cache-first strategy for 1 year.
  routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
      cacheName: 'google-fonts-webfonts',
      plugins: [
        new cacheableResponse.Plugin({
          statuses: [0, 200]
        }),
        new expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
          purgeOnQuotaError: true // Automatically cleanup if quota is exceeded.
        })
      ]
    })
  );

  // default page handler for offline usage, where the browser does not how to handle deep links
  // it's a SPA, so each path that is ann allowed path/page should default to index.html
  routing.registerRoute(
    ({ url }) => {
      const allowedPaths = [];
      return !!url.pathname && allowedPaths.includes(url.pathname.substring(1)); // remove first slash
    },
    async () => {
      const defaultBase = '/index.html';
      return caches
        .match(precaching.getCacheKeyForURL(defaultBase))
        .then(response => {
          return response || fetch(defaultBase);
        })
        .catch(err => {
          return fetch(defaultBase);
        });
    }
  );

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

