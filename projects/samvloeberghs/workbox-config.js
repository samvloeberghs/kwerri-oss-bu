module.exports = {
  globDirectory: "dist/samvloeberghs-static/",
  globPatterns: [
    "**/*.{js,html,pdf,css,png,jpg,svg,ico,json,gif}"
  ],
  maximumFileSizeToCacheInBytes: 1024 * 1024 * 7.5,   // 7.5 MB
  swSrc: './dist/samvloeberghs/sw.js',
  swDest: './dist/samvloeberghs-static/sw.js'
};
