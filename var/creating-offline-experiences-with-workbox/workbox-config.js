// workbox-config.js
module.exports = {
  globDirectory: "dist/",
  globPatterns: [
    "**/*.{css,eot,html,ico,jpg,js,...,webm,xml}"
  ],
  globFollow: true,
  globStrict: true,
  dontCacheBustURLsMatching: new RegExp(".+.[a-f0-9]{20}..+"),
  swSrc: './src/service-worker.js',
  swDest: './dist/service-worker.js'
};

