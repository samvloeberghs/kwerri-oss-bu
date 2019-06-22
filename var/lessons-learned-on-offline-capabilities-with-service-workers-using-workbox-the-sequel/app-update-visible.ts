/** @format */

import { Injectable } from '@angular/core';
import { Workbox } from 'workbox-window';
import { fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceWorkerService {

  private swRegistration: ServiceWorkerRegistration;

  constructor() {
    this.registerServiceWorker();
    this.registerVisibileChangeListener();
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

  private registerVisibileChangeListener() {
    fromEvent(document, 'visibilitychange').subscribe(() => {
      this.checkForUpdate();
    });
  }

}
