/** @format */

import { Injectable } from '@angular/core';
import { Workbox } from 'workbox-window';

@Injectable({
  providedIn: 'root',
})
export class ServiceWorkerService {

  // check every 4h if a new version is available
  private readonly swUpdateInterval = 4 * 60 * 60 * 1000;

  // ...

  private async registerServiceWorker() {
    const wb = new Workbox('/sw.js', {});

    try {
      this.swRegistration = await wb.register();

      setInterval(async () => {
        this.checkForUpdate();
      }, this.swUpdateInterval);
    } catch (e) {
      console.log('error registering service worker', e);
    }
  }

}
