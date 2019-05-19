// PRECACHEANDROUTE

// src/sw.js
importScripts('4.3.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([]);


// PRECACHEANDROUTE RESULT

// sw.js
importScripts('4.3.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([
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

// ROUTE REQUESTS #1

// sw.js
importScripts('4.3.0/workbox-sw.js');

const handler = () => { /* .. */ };

workbox.routing.registerRoute(
  '/logo.png',
  handler
);

// ROUTE REQUESTS #2

// sw.js
importScripts('4.3.0/workbox-sw.js');

const handler = workbox.strategies.StaleWhileRevalidate({
  cacheName: 'your-cache-name',

  plugins: [
    // ...
  ]
});

workbox.routing.registerRoute(
  '/logo.png',
  handler
);

// PRECACHEANDROUTE

// sw.js
importScripts('4.3.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([
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


// GOOGLE ANALYTICS

// sw.js
importScripts('4.3.0/workbox-sw.js');

workbox.googleAnalytics.initialize();

// GOOGLE ANALYTICS 1

// sw.js
importScripts('4.3.0/workbox-sw.js');

workbox.googleAnalytics.initialize({
  parameterOverrides: {
    cd1: 'offline',
  },
});

// FORCING TIMEOUTS

//sw.js
importScripts('4.3.0/workbox-sw.js');

workbox.routing.registerRoute(
  /my\.api\/news/,
  new workbox.strategies.NetworkFirst({
    networkTimeoutSeconds: 3,
    cacheName: 'news',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60, // 1h
      }),
    ],
  })
);

// DEFAULT IMAGE

// sw.js
importScripts('4.3.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([
  //...
  {
    "url": "flags/_default.png",
    "revision": "a6d3a24c2e0fb843e3c2c1b1377158c1"
  },
  //...
]);

const flagsHandler = new workbox.strategies.CacheFirst({
  cacheName: 'flags-cache'
});

workbox.routing.registerRoute(/flags\/(?![_])(.*)/, args => {

  const defaultFlag = () => caches.match(
    workbox.precaching.getCacheKeyForURL('/flags/_default.png')
  );

  return flagsHandler.handle(args)
    .then(response => {
      if (!response || response.status === 404) {
        return defaultFlag();
      }
      return response;
    }).catch(reject => {
      return defaultFlag();
    });
});

// ADDING RESOURCES TO THE CACHE

const handleCacheAssets = async (cacheName, resouces) => {
  try {
    const cache = await caches.open(cacheName);
    await cache.addAll(resouces);
  } catch (e) {
    console.log('Could not handle cache', e);
  }
};
const euFlags = [
  'flags/nl.png',
  'flags/be.png',
  'flags/fr.png',
  // ...
];
const flagsCacheName = 'flags-cache';

handleCacheAssets(flagsCacheName, euFlags);

// NEW VERSION AVAILABLE 1

// sw.js
importScripts('4.3.0/workbox-sw.js');

// This will update the app with an event of updated precache files
workbox.precaching.addPlugins([
  new workbox.broadcastUpdate.Plugin({
    channelName: 'precache-updates'
  })
]);

workbox.precaching.precacheAndRoute([
  //...
  {
    "url": "main.9a97e40bf896a20cce1a.js",
    "revision": "b0d25a2c6a71a54d66d70fd0799d9548"
  },
  //...
]);

// NEW VERSION AVAILABLE 2
// see pwaservice.service.ts
