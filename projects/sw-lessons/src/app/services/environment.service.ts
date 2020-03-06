/** @format */

import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, fromEvent, merge, Observable } from 'rxjs';
import { filter, first, map, startWith, tap } from 'rxjs/operators';

import { Workbox } from 'workbox-window';
import { environment } from '../../environments/environment';
import { WINDOW } from '../providers/window.provider';
import { NAVIGATOR } from '../providers/navigator.provider';

export interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
}

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {

  public readonly newVersionAvailable$: Observable<boolean>;
  public readonly applicationUpdateOngoing$: Observable<boolean>;
  public readonly applicationOnline$: Observable<boolean> = merge(
    fromEvent(this.window, 'offline'),
    fromEvent(this.window, 'online'),
  ).pipe(
    map(() => this.navigator.onLine),
    startWith(true),
  );
  public readonly applicationInstallable$: Observable<boolean>;
  public runningStandAlone = false;

  private readonly newVersionAvailable = new BehaviorSubject(false);
  private readonly applicationUpdateOngoing = new BehaviorSubject(false);
  private readonly applicationUpdateRequested = new BehaviorSubject(false);
  private readonly serviceWorkerReady = new BehaviorSubject(false);
  private readonly applicationInstallable = new BehaviorSubject(false);

  private readonly sw = {
    file: '/sw.js',
    registerOptions: {},
    updateInterval: 4 * 60 * 60 * 1000, // every 4h
    // updateInterval = 1 * 60 * 1000; // 1m for testing
  };

  private promptEvent: BeforeInstallPromptEvent;
  private swRegistration: ServiceWorkerRegistration;
  // serviceWorker only available in production ( bundled assets )
  private serviceWorkerAvailable = false;
  private visible = true;

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: Object,
    @Inject(WINDOW) private readonly window: Window,
    @Inject(NAVIGATOR) private readonly navigator: Navigator,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {
    this.newVersionAvailable$ = this.newVersionAvailable.asObservable();
    this.applicationUpdateOngoing$ = this.applicationUpdateOngoing.asObservable();
    this.applicationInstallable$ = this.applicationInstallable.asObservable();

    this.checkInstallPrompt();
    this.registerServiceWorker();
    this.checkRunningStandAlone();
    this.registerVisibileChangeListener();
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

  public async checkForUpdate(): Promise<any> {
    if (this.serviceWorkerAvailable) {
      try {
        console.log('updating sw');
        return await this.swRegistration.update();
      } catch (err) {
        console.log('sw.js could not be updated', err);
      }
    } else {
      console.log('sw functionality currently not available');
    }
  }

  public promptInstall(): Promise<void> {
    if (!this.promptEvent) {
      return;
    }
    return this.promptEvent.prompt().then(() => this.applicationInstallable.next(false));
  }

  private async registerServiceWorker(): Promise<any> {
    // only do this in the browser
    if (isPlatformBrowser(this.platformId)) {
      this.serviceWorkerAvailable = 'serviceWorker' in this.navigator && environment.production;
    }

    // Check that service workers are available
    // Only register service worker when in production
    if (!this.serviceWorkerAvailable) {
      this.serviceWorkerReady.next(true);
      return;
    }

    const wb = new Workbox(this.sw.file, this.sw.registerOptions);

    wb.addEventListener('activated', async event => {
      if (!event.isUpdate) {
        // If your service worker is configured to precache assets, those
        // assets should all be available now.

        // Send a message telling the service worker to claim the clients
        // This is the first install, so the functionality of the app
        // should meet the functionality of the service worker!
        wb.messageSW({ type: 'CLIENTS_CLAIM' });

        // The service worker is ready, so we can bootstrap the app
        this.serviceWorkerReady.next(true);
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
        // Send a message telling the service worker to skip waiting and
        // become active. We use event.sw.postMessage, and not wb.messageSw,
        // because we want to message the waiting SW and not the currently
        // active service worker
        event.sw.postMessage({ type: 'SKIP_WAITING' });

        // let anybody interested know we are updating the application
        this.applicationUpdateOngoing.next(true);
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
      }, this.sw.updateInterval);

      if (this.navigator.serviceWorker.controller) {
        this.serviceWorkerReady.next(true);
      }
    } catch (e) {
      console.log('error registering service worker', e);
    }
  }

  private checkRunningStandAlone(): void {
    // only do this in the browser
    if (isPlatformBrowser(this.platformId) && 'matchMedia' in window) {
      if ((this.navigator as any).standalone) {
        console.log('Launched: Installed (iOS)');
        this.runningStandAlone = true;
      } else if (this.window.matchMedia('(display-mode: standalone)').matches) {
        console.log('Launched: Installed');
        this.runningStandAlone = true;
      } else {
        console.log('Launched: Browser Tab');
      }
    }
  }

  private registerVisibileChangeListener(): void {
    // only do this in the browser
    if (isPlatformBrowser(this.platformId)) {
      fromEvent(document, 'visibilitychange').pipe().subscribe(async () => {
        this.visible = document.visibilityState === 'visible';
        // only check for update if the page became visible
        if (this.visible) {
          this.checkForUpdate();
        }
      });
    }
  }

  private checkInstallPrompt(): void {
    fromEvent(window, 'beforeinstallprompt')
      .pipe(
        tap((event: BeforeInstallPromptEvent) => {
          event.preventDefault();
          this.promptEvent = event;
          this.applicationInstallable.next(true);
        }),
      ).subscribe();
  }
}
