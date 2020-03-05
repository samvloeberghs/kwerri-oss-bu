// service-worker.js
// ...
Object(WEBPACK_IMPORTED_MODULE_2__["cleanupOutdatedCaches"])();
var assetsToCache = [
  // ...
  {
    "revision": "b9aa7c338693424aae99599bec875b5f",
    "url": "favicon.ico"
  },
  {
    "revision": "7e5dc87fd1e118b75032573ba7fd5799",
    "url": "index.html"
  },
  {
    "revision": "3d88bbc731814852e18e038765128200",
    "url": "main.d42d4c971a2e554d16c9.js"
  },
  // ...
];
Object(WEBPACK_IMPORTED_MODULE_2__["precacheAndRoute"])(assetsToCache);
// ...
