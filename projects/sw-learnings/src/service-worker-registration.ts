/** @format */

import { environment } from './environments/environment';

// Check that service workers are available
// Only register service worker when in production
if ('serviceWorker' in navigator && environment.production) {
  // Use the window load event to keep the page load performant

  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then(registration => {
        console.log('service worker registered', registration);

        setInterval(async () => {
          try {
            console.log('updating sw');
            await registration.update();
          } catch (err) {
            console.log('sw.js could not be updated', err);
          }
        }, 10000);

        if (navigator.serviceWorker.controller) {
          window.dispatchEvent(new CustomEvent('service-worker-ready'));
        }

        // A wild service worker has appeared in reg.installing and maybe in waiting!
        const newWorker = registration.installing;
        const waitingWorker = registration.waiting;

        if (newWorker) {
          if (newWorker.state === 'activated' && !waitingWorker) {
            // reload to avoid skipWaiting and clients.claim()
            window.location.reload();
          }
          newWorker.addEventListener('statechange', (e) => {
            // newWorker.state has changed
            if (newWorker.state === 'activated' && !waitingWorker) {
              // reload to avoid skipWaiting and clients.claim()
              window.location.reload();
            }
          });
        }

      })
      .catch(err => {
        console.log('service worker could not be registered', err);
      });
  });

} else {
  window['serviceWorkerReady'] = true;
}
