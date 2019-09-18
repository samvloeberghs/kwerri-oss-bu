module.exports = {
  globIgnores: [
    '**/assets/flags/*.png',
    '**/assets/liefiflags/*.png',
    '**/map.png',
    '**/assets/data.json'
  ],
  globDirectory: "dist/sw-lessons/",
  globPatterns: [
    "**/*.{js,html,css,ico,png}"
  ],
  swSrc: './projects/sw-lessons/src/sw.js',
  swDest: './dist/sw-lessons/sw.js'
};

