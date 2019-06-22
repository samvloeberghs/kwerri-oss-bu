/** @format */

import { Injectable } from '@angular/core';
import { Workbox } from 'workbox-window';

@Injectable({
  providedIn: 'root',
})
export class ServiceWorkerService {

  private swRegistration: ServiceWorkerRegistration;

  constructor() {
    this.registerServiceWorker();
  }

  public async checkForUpdate() {
    try {
      console.log('updating sw');
      return await this.swRegistration.update();
    } catch (err) {
      console.log('sw.js could not be updated', err);
    }
  }

  private async registerServiceWorker() {
    const wb = new Workbox('/sw.js', {});

    try {
      this.swRegistration = await wb.register();
    } catch (e) {
      console.log('error registering service worker', e);
    }
  }

}
