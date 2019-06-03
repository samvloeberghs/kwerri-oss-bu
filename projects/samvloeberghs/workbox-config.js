module.exports = {
  globDirectory: "dist/samvloeberghs/browser/",
  globIgnores: [
    'posts/data*'
  ],
  globPatterns: [
    "**/*.{js,html,pdf,css,png,jpg,svg,ico,json}"
  ],
  swSrc: './projects/samvloeberghs/src/sw.js',
  swDest: './dist/samvloeberghs/browser/sw.js'
};
