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

  // ...

  private registerVisibileChangeListener() {
    fromEvent(document, 'visibilitychange').subscribe(() => {
      this.checkForUpdate();
    });
  }

}
