
// GOOGLE ANALYTICS
importScripts('4.2.0/workbox-sw.js');

if (workbox) {
  const {googleAnalytics} = workbox;
  googleAnalytics.initialize();
}

// GOOGLE ANALYTICS 1

importScripts('4.2.0/workbox-sw.js');

if (workbox) {
  const {googleAnalytics} = workbox;
  googleAnalytics.initialize({
    parameterOverrides: {
      cd1: 'offline',
    },
  });
}

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.1.1/workbox-sw.js');

if (workbox) {

  // Avoid async imports
  // see https://developers.google.com/web/tools/workbox/modules/workbox-sw#avoid_async_imports
  const {googleAnalytics, routing, strategies, expiration} = workbox;

  console.log(`Yay! Workbox is loaded 🎉`);

  // Google Analytics cache setup
  // see https://developers.google.com/web/tools/workbox/modules/workbox-google-analytics
  googleAnalytics.initialize();

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

