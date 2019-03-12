importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js');

if (workbox) {

  // Avoid async imports
  // see https://developers.google.com/web/tools/workbox/modules/workbox-sw#avoid_async_imports
  const { googleAnalytics, routing, strategies, expiration } = workbox;

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
    strategies.staleWhileRevalidate({
      cacheName: 'google-fonts-stylesheets'
    })
  );

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

