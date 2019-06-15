/** @format */

import { Workbox } from 'workbox-window';
import { environment } from './environments/environment';

const registerServiceWorker = async () => {
  const wb = new Workbox('/sw.js');

  wb.addEventListener('activated', async event => {
    if (!event.isUpdate) {
      // If your service worker is configured to precache assets, those
      // assets should all be available now.
      window.location.reload();
      return;
    }
  });

  wb.addEventListener('controlling', async () => {
    window['serviceWorkerReady'] = true;
    window.dispatchEvent(new CustomEvent('service-worker-ready'));
  });

  // we use this waiting listener to show updates
  // when the user refreshes the page and a new service worker is going to waiting
  // this is specificaly only valid when refreshed!
  wb.addEventListener('waiting', async () => {
    // inform any functionality that is interested in this update
    window['newVersionAvailable'] = true;
    window.dispatchEvent(new CustomEvent('new-version-available'));

    window.addEventListener('application-update-requested', () => {
      wb.addEventListener('controlling', () => {
        window.location.reload();
      });

      // Send a message telling the service worker to skip waiting.
      // This will trigger the `controlling` event handler above.
      // Note: for this to work, you have to add a message
      // listener in your service worker. See below.
      wb.messageSW({ type: 'SKIP_WAITING' });
    });
  });

  try {
    await wb.register();

    if (navigator.serviceWorker.controller) {
      window['serviceWorkerReady'] = true;
      window.dispatchEvent(new CustomEvent('service-worker-ready'));
    }
  } catch (e) {
    console.log('error registering service worker', e);
  }

};

// Check that service workers are available
// Only register service worker when in production
if ('serviceWorker' in navigator && environment.production) {
  registerServiceWorker();
} else {
  window['serviceWorkerReady'] = true;
  window.dispatchEvent(new CustomEvent('service-worker-ready'));
}
