import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

declare const window: any;

@Injectable({
  providedIn: 'root',
})
export class PwaService {

  public newVersionAvailable = new BehaviorSubject(false);
  public newVersionAvailable$ = this.newVersionAvailable.asObservable();

  constructor(@Inject(PLATFORM_ID) platformId: Object) {

    if (isPlatformBrowser(platformId)) {
      if (window['newVersionAvailable']) {
        this.newVersionAvailable.next(true);
      }
      if ('BroadcastChannel' in self) {
        const updatesChannel = new BroadcastChannel('precache-updates');
        fromEvent(updatesChannel, 'message').subscribe((evt) => {
          this.newVersionAvailable.next(true);
        });
      } else {
        fromEvent(navigator.serviceWorker, 'message').subscribe((evt) => {
          this.newVersionAvailable.next(true);
        });
      }
    }

  }

}
