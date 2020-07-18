/** @format */

import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, first } from 'rxjs/operators';
import { Workbox } from 'workbox-window';

import { environment } from '../../environments/environment';

declare const window: any;
declare const navigator: any;

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {

  public newVersionAvailable$: Observable<boolean>;
  public applicationUpdateOngoing$: Observable<boolean>;

  private readonly newVersionAvailable = new BehaviorSubject(false);
  private readonly applicationUpdateOngoing = new BehaviorSubject(false);
  private readonly applicationUpdateRequested = new BehaviorSubject(false);
  private readonly serviceWorkerReady = new BehaviorSubject(false);

  private readonly swFile = '/sw.js';
  private readonly swRegisterOptions = {};

  constructor(@Inject(PLATFORM_ID) private readonly platformId: Object) {
    this.newVersionAvailable$ = this.newVersionAvailable.asObservable();
    this.applicationUpdateOngoing$ = this.applicationUpdateOngoing.asObservable();

    // Check that we are in a browsers and service workers are available
    // Only register service worker when in production
    if (false && 'serviceWorker' in navigator && environment.production) {
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
        // window.location.reload();

        // Send a message telling the service worker to claim the clients
        // This is the first install, so the functionality of the app
        // should meet the functionality of the service worker!
        wb.messageSW({ type: 'CLIENTS_CLAIM' });

        // The service worker is ready, so we can bootstrap the app
        this.serviceWorkerReady.next(true);
      }
    });

    // we use this waiting listener to show updates
    // when the user refreshes the page and a new service worker is going to waiting
    // this is specificaly only valid when refreshed!
    wb.addEventListener('waiting', async () => {
      // inform any functionality that is interested in this update
      this.newVersionAvailable.next(true);

      // listen to application update requests
      this.applicationUpdateRequested.pipe(
        filter((applicationUpdateRequested) => applicationUpdateRequested),
        first(),
      ).subscribe(_ => {
        wb.addEventListener('controlling', () => {
          // new service worker became active, lets reload!
          window.location.reload();
        });

        // Send a message telling the service worker to skip waiting.
        // This will trigger the `controlling` event handler above.
        // Note: for this to work, you have to add a message
        // listener in your service worker. See below.
        wb.messageSW({ type: 'SKIP_WAITING' });

        // let anybody interested know we are updating the application
        this.applicationUpdateOngoing.next(true);
      });
    });

    try {
      await wb.register();

      const postsCache = await caches.open('posts');
      postsCache.add('posts/data.json');

      if (navigator.serviceWorker.controller) {
        this.serviceWorkerReady.next(true);
      }
    } catch (e) {
      console.log('error registering service worker', e);
    }
  }
}
