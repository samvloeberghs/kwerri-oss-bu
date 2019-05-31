import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

declare const window: any;

@Injectable({
  providedIn: 'root',
})
export class PwaService {

  public newVersionAvailable = new BehaviorSubject(true);
  public newVersionAvailable$ = this.newVersionAvailable.asObservable();

  constructor(@Inject(PLATFORM_ID) platformId: Object) {

    if (isPlatformBrowser(platformId)) {
      if (window['newVersionAvailable']) {
        this.newVersionAvailable.next(true);
      }
      const updatesChannel = new BroadcastChannel('precache-updates');
      fromEvent(updatesChannel, 'message').subscribe(() => {
        this.newVersionAvailable.next(true);
      });
    }

  }

}
