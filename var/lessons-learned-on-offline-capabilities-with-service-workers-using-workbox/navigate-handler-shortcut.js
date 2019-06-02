workbox.routing.registerNavigationRoute(
  // Assuming '/single-page-app.html' has been precached,
  // look up its corresponding cache key.
  workbox.precaching.getCacheKeyForURL('/single-page-app.html'), {
    whitelist: [
      new RegExp('/blog/')
    ],
    blacklist: [
      new RegExp('/blog/restricted/'),
    ]
  }
);
