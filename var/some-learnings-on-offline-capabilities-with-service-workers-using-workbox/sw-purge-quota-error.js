// Cache the underlying font files with a cache-first strategy for 1 year.
routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new strategies.CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new cacheableResponse.Plugin({
        statuses: [0, 200]
      }),
      new expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
        purgeOnQuotaError: true // Automatically cleanup if quota is exceeded.
      })
    ]
  })
);
