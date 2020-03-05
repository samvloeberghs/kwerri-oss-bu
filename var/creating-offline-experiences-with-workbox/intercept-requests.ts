// service-worker.ts
import { registerRoute } from 'workbox-routing';
import { get, Store } from 'idb-keyval';
import { getCacheKeyForURL } from 'workbox-precaching';

registerRoute(
  /map\.png/,
  async ({ event, url }) => {
    // get the eventual token
    const customStore = new Store('swl-db', 'swl-db-store');
    const oAuthToken = await get<string>('token', customStore);

    // if token available, set it as the Authorization header
    if (Boolean(oAuthToken)) {
      const modifiedHeaders = new Headers(event.request.headers);
      modifiedHeaders.set('Authorization', oAuthToken);
      const overwrite = { headers: modifiedHeaders };
      const modifiedRequest = new Request(url.toString(), overwrite);
      return fetch(modifiedRequest);
    }

    const defaultNotAuthedBase = '/assets/not_authorized.png';
    return caches
      .match(getCacheKeyForURL(defaultNotAuthedBase))
      .then(response => (response || fetch(defaultNotAuthedBase)))
      .catch(() => fetch(defaultNotAuthedBase));
  },
);
