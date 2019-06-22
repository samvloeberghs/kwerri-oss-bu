import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, first } from 'rxjs/operators';
import { Workbox } from 'workbox-window';

declare const window: any;

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {

  public newVersionAvailable$: Observable<boolean>;

  private readonly newVersionAvailable = new BehaviorSubject(false);
  private readonly applicationUpdateRequested = new BehaviorSubject(false);
  // check every 4h if a new version is available
  private readonly swUpdateInterval = 4 * 60 * 60 * 1000;

  private swRegistration: ServiceWorkerRegistration;

  constructor() {
    this.newVersionAvailable$ = this.newVersionAvailable.asObservable();
    this.registerServiceWorker();
  }

  public update() {
    this.applicationUpdateRequested.next(true);
  }

  public async checkForUpdate() {
    // ...
  }

  private async registerServiceWorker() {
    const wb = new Workbox('/sw.js', {});

    // ...

    // we use this waiting listener to handle the update we do
    // based on an interval, user intent or visibility change
    // in this case another service worker became waiting
    wb.addEventListener('externalwaiting', event => {
      // inform any functionality that is interested in this update
      this.newVersionAvailable.next(true);

      // listen to application update requests
      this.applicationUpdateRequested.pipe(
        filter((applicationUpdateRequested) => applicationUpdateRequested),
        first(),
      ).subscribe(_ => {
        // Send a message telling the service worker to skip waiting and become active.
        event.sw.postMessage({ type: 'SKIP_WAITING' });
      });
    });

    // the other service worker became actived!
    wb.addEventListener('externalactivated', () => {
      // If your service worker is configured to precache assets, those
      // assets should all be available now.
      // This activation was on request of the user, so let's finally reload the page
      window.location.reload();
    });

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
