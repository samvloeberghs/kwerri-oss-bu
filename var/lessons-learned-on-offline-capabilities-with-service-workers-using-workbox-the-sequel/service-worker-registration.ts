// Check that service workers are available
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {

    navigator.serviceWorker.register('/sw.js').then(registration => {
        if (navigator.serviceWorker.controller) {
          // let the application know our service worker is ready
          window['serviceWorkerReady'] = true;
          window.dispatchEvent(new CustomEvent('service-worker-ready'));
        }

        // A wild service worker has appeared in reg.installing and maybe in waiting!
        const newWorker = registration.installing;
        const waitingWoker = registration.waiting;

        if (newWorker) {
          if (newWorker.state === 'activated' && !waitingWoker) {
            // - no more window.location.reload();
            newWorker.postMessage({ type: 'CLIENTS_CLAIM' });
          }
          newWorker.addEventListener('statechange', () => {
            // newWorker.state has changed
            if (newWorker.state === 'activated' && !waitingWoker) {
              // - no more window.location.reload();s
              newWorker.postMessage({ type: 'CLIENTS_CLAIM' });
            }
          });
        }
      })
      .catch(err => {
        console.log('service worker could not be registered', err);
      });
  });
}
