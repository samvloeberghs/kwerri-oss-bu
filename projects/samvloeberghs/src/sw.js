importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {

  // Avoid async imports
  // see https://developers.google.com/web/tools/workbox/modules/workbox-sw#avoid_async_imports
  const {googleAnalytics, routing, strategies, precaching} = workbox;

  console.log(`Yay! Workbox is loaded 🎉`);

  // Precache & Route setup
  // Keep it here or it will not get picked up
  // see workbox-config.js
  // This array gets injected automagically by the workbox cli
  precaching.precacheAndRoute([]);

  // Google Analytics cache setup
  // see https://developers.google.com/web/tools/workbox/modules/workbox-google-analytics
  googleAnalytics.initialize();

  // default page handler for offline usage, where the browser does not how to handle deep links
  // it's a SPA, so each path that is a navigation should default to index.html
  routing.registerNavigationRoute(
    // Assuming '/index.html' has been precached,
    // look up its corresponding cache key.
    workbox.precaching.getCacheKeyForURL('/index.html')
  );

  routing.registerRoute(
    /posts\/data\.json/,
    new strategies.NetworkFirst({
      cacheName: 'posts'
    })
  );
  routing.registerRoute(
    /posts\/[\w-]+\/post\.html/,
    new strategies.NetworkFirst({
      cacheName: 'posts-html'
    })
  );

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data && event.data.type === 'CLIENTS_CLAIM') {
    self.clients.claim();
  }
});
