// Check that service workers are available
if ('serviceWorker' in navigator) {
  // Use the window load event
  // => keep the pageload performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}
