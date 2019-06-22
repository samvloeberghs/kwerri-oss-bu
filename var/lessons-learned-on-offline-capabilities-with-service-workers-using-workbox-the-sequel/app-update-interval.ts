/** @format */

import { Injectable } from '@angular/core';
import { Workbox } from 'workbox-window';

@Injectable({
  providedIn: 'root',
})
export class ServiceWorkerService {

  private readonly swUpdateInterval = 4 * 60 * 60 * 1000; // 4h
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

      setInterval(async () => {
        this.checkForUpdate();
      }, this.swUpdateInterval);
    } catch (e) {
      console.log('error registering service worker', e);
    }
  }

}
