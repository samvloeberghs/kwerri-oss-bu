// OAuth header interceptor
workbox.routing.registerRoute(
  ({ url }) => {
    return /map\.png/.test(url);
  },
  async ({ event, url }) => {

    // get the eventual token
    const customStore = new Store('swl-db', 'swl-db-store');
    const oAuthToken = await get<string>('token', customStore);

    // if token available, set it as the Authorization header
    if (!!oAuthToken) {
      const modifiedHeaders = new Headers(event.request.headers);
      modifiedHeaders.set('Authorization', oAuthToken);
      const overwrite = {
        headers: modifiedHeaders
      };
      const modifiedRequest = new Request(url.toString(), overwrite);
      return fetch(modifiedRequest);
    }

    const defaultNotAuthedBase = '/assets/not_authorized.png';
    return caches
      .match(workbox.precaching.getCacheKeyForURL(defaultNotAuthedBase))
      .then(response => {
        return response || fetch(defaultNotAuthedBase);
      })
      .catch(err => {
        return fetch(defaultNotAuthedBase);
      });

  }
);
