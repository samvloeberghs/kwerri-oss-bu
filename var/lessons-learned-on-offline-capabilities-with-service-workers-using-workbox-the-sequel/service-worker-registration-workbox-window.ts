import { Workbox } from 'workbox-window';

const wb = new Workbox('/sw.js', {});

wb.addEventListener('activated', async event => {
  // `event.isUpdate` will be true if another version of the service
  // worker was controlling the page when this version was registered.
  if (!event.isUpdate) {
    // If your service worker is configured to precache assets, those
    // assets should all be available now.
    // So send a message telling the service worker to claim the clients
    // This is the first install, so the functionality of the app
    // should meet the functionality of the service worker!
    wb.messageSW({ type: 'CLIENTS_CLAIM' });
  }
});

wb.register();
