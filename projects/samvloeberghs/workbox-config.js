module.exports = {
  globDirectory: "dist/samvloeberghs/browser/",
  globIgnores: [
    'posts/data*',
    'posts/**/post.html',
  ],
  globPatterns: [
    "**/*.{js,html,pdf,css,png,jpg,svg,ico,json,gif}"
  ],
  maximumFileSizeToCacheInBytes: 1024 * 1024 * 7.5,   // 7.5 MB
  swSrc: './projects/samvloeberghs/src/sw.js',
  swDest: './dist/samvloeberghs/browser/sw.js'
};
