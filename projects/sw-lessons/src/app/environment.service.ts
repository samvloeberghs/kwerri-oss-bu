/** @format */

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Workbox } from 'workbox-window';

import { environment } from '../environments/environment';
import { filter, first } from 'rxjs/operators';

declare const window: any;
declare const navigator: any;

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {

  public newVersionAvailable = new BehaviorSubject(false);

  private applicationUpdateRequested = new BehaviorSubject(false);
  private serviceWorkerReady = new BehaviorSubject(false);

  private swFile = '/sw.js';
  private swRegisterOptions = {};

  constructor() {
    // Check that service workers are available
    // Only register service worker when in production
    if ('serviceWorker' in navigator && environment.production) {
      this.registerServiceWorker();
    } else {
      this.serviceWorkerReady.next(true);
    }
  }

  public isEnvironmentReady(): Promise<any> {
    const swReady$ = new Observable(observer => {
      this.serviceWorkerReady.pipe(
        filter((serviceWorkerReady) => serviceWorkerReady),
        first(),
      ).subscribe(_ => {
        observer.next(true);
        observer.complete();
      });
    });

    return swReady$.toPromise();
  }

  public update(): void {
    this.applicationUpdateRequested.next(true);
  }

  private async registerServiceWorker(): Promise<any> {
    const wb = new Workbox(this.swFile, this.swRegisterOptions);

    wb.addEventListener('activated', async event => {
      if (!event.isUpdate) {
        // If your service worker is configured to precache assets, those
        // assets should all be available now.
        window.location.reload();
        return;
      }
    });

    wb.addEventListener('controlling', async () => {
      this.serviceWorkerReady.next(true);
    });

    // we use this waiting listener to show updates
    // when the user refreshes the page and a new service worker is going to waiting
    // this is specificaly only valid when refreshed!
    wb.addEventListener('waiting', async () => {

      // inform any functionality that is interested in this update
      this.newVersionAvailable.next(true);

      this.applicationUpdateRequested.pipe(
        filter((applicationUpdateRequested) => applicationUpdateRequested),
        first(),
      ).subscribe(_ => {
        wb.addEventListener('controlling', () => {
          window.location.reload();
        });

        // Send a message telling the service worker to skip waiting.
        // This will trigger the `controlling` event handler above.
        // Note: for this to work, you have to add a message
        // listener in your service worker. See below.
        wb.messageSW({ type: 'SKIP_WAITING' });
      });
    });

    try {
      await wb.register();

      if (navigator.serviceWorker.controller) {
        this.serviceWorkerReady.next(true);
      }
    } catch (e) {
      console.log('error registering service worker', e);
    }

  }
}
