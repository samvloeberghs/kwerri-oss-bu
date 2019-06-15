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

  // we use this waiting listener to show updates
  // when the user refreshes the page and a new service worker is going to waiting
  // this is specificaly only valid when refreshed!
  wb.addEventListener('waiting', async event => {
    if (event.wasWaitingBeforeRegister) {
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
    }
  });

  // we use this waiting listener to handle the update we do
  // based on an interval, in this case another service worker became waiting
  wb.addEventListener('externalwaiting', event => {
    // inform any functionality that is interested in this update
    window['newVersionAvailable'] = true;
    window.dispatchEvent(new CustomEvent('new-version-available'));

    window.addEventListener('application-update-requested', () => {
      // Send a message telling the service worker to skip waiting.
      event.sw.postMessage({ type: 'SKIP_WAITING' });
    });
  });
  // the other service worker became actived!
  wb.addEventListener('externalactivated', () => {
    // this was on request of the user, so let's finally relaod the page
    window.location.reload();
  });

  try {
    const registration = await wb.register();

    // check every 4h if a new version is available
    // const interval = 4 * 60 * 60 * 1000;
    const interval = 1 * 60 * 1000; // 1m for testing
    setInterval(async () => {
      try {
        console.log('updating sw');
        await registration.update();
      } catch (err) {
        console.log('sw.js could not be updated', err);
      }
    }, interval);

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
