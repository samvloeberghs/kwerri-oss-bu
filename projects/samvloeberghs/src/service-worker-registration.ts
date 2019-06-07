/** @format */

import { environment } from './environments/environment';

// Check that service workers are available
// Only register service worker when in production
if ('serviceWorker' in navigator && environment.production) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js', {scope: '/'})
      .then(async registration => {
        console.log('service worker registered', registration);

        // check every 4h if a new version is available
        const interval = 4 * 60 * 60 * 1000;

        setInterval(async () => {
          try {
            await registration.update();
          } catch (err) {
            console.log('sw.js could not be updated', err);
          }
        }, interval);

        const postsCache = await caches.open('posts');
        postsCache.add('posts/data.json');

      })
      .catch(err => {
        console.log('service worker could not be registered', err);
      });
  });
}
