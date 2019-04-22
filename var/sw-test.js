// PRECACHEANDROUTE

importScripts('4.2.0/workbox-sw.js');

if (workbox) {
  const {precaching} = workbox;
  precaching.precacheAndRoute([]);
}

// PRECACHEANDROUTE RESULT

importScripts('4.2.0/workbox-sw.js');

if (workbox) {
  const {precaching} = workbox;
  precaching.precacheAndRoute([
    //...
    {
      "url": "favicon.ico",
      "revision": "a6d3a24c2e0fb843e3c2c1b1377158c1"
    },
    {
      "url": "index.html",
      "revision": "00fe94b6716560ce58301a713ddca77d"
    },
    {
      "url": "main.9a97e40bf896a20cce1a.js",
      "revision": "b0d25a2c6a71a54d66d70fd0799d9548"
    },
    {
      "url": "manifest.json",
      "revision": "1067dfacf20c22313c8a06fa15d79bb0"
    },
    //...
  ]);
}


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

// FORCING TIMEOUTS

importScripts('4.2.0/workbox-sw.js');

if (workbox) {
  const {routing, strategies, expiration} = workbox;
  routing.registerRoute(
    'https://my.api/news',
    new strategies.NetworkFirst({
      networkTimeoutSeconds: 3,
      cacheName: 'news',
      plugins: [
        new expiration.Plugin({
          maxEntries: 50,
          maxAgeSeconds: 60 * 60, // 1h
        }),
      ],
    })
  );
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

