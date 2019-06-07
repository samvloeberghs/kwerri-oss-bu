import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { fromEvent } from 'rxjs';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import './service-worker-registration';
import { first } from 'rxjs/operators';

if (environment.production) {
  enableProdMode();
}

// Add message listeners.
if ('BroadcastChannel' in self) {
  const updatesChannel = new BroadcastChannel('precache-updates');
  fromEvent(updatesChannel, 'message').subscribe((evt) => {
    window['newVersionAvailable'] = true;
  });
} else {
  fromEvent(navigator.serviceWorker, 'message').subscribe((evt) => {
    window['newVersionAvailable'] = true;
  });
}

fromEvent(document, 'DOMContentLoaded').pipe(first()).subscribe(() => {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
});
