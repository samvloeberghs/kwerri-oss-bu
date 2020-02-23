module.exports = {
  globDirectory: "dist/sw-lessons/",
  globPatterns: [
    "**/*.{css,eot,html,ico,jpg,js,json,png,svg,ttf,txt,webmanifest,woff,woff2,webm,xml}"
  ],
  globFollow: true,
  globStrict: true,
  globIgnores: [
    '**/assets/flags/*.png',
    '**/assets/liefiflags/*.png',
    '**/map.png',
    '**/assets/data.json',
    // Ignore Angular's ES5 bundles
    // With this, we eagerly load the es2015
    // bundles and we only load/cache the es5 bundles when requested
    // i.e., on browsers that need them
    // Reference: https://github.com/angular/angular/issues/31256#issuecomment-506507021
    `**/*-es5.*.js`,
  ],
  // Look for a 20 character hex string in the file names
  // Allows to avoid using cache busting for Angular files because Angular already takes care of that!
  dontCacheBustURLsMatching: new RegExp(".+.[a-f0-9]{20}..+"),
  swSrc: './projects/sw-lessons/src/sw.js',
  swDest: './dist/sw-lessons/sw.js'
};

