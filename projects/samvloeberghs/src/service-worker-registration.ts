/** @format */

import { environment } from './environments/environment';

// Check that service workers are available
// Only register service worker when in production
if ('serviceWorker' in navigator && environment.production) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js', {scope: '/'})
      .then(swReg => {
        console.log('service worker registered', swReg);
      })
      .catch(err => {
        console.log('service worker could not be registered', err);
      });
  });
} else {
  console.log('1');
}
