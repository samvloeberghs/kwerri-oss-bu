import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { fromEvent } from 'rxjs';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import './service-worker-registration';

if (environment.production) {
  enableProdMode();
}

if (BroadcastChannel) {
  const updatesChannel = new BroadcastChannel('precache-updates');
  fromEvent(updatesChannel, 'message').subscribe(() => {
    window['newVersionAvailable'] = true;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
});
