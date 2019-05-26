/** @format */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

declare const window: any;

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  constructor() {
  }

  public isEnvironmentReady(): Promise<any> {
    const swReady$ = new Observable(observer => {
      if (window['serviceWorkerReady']) {
        observer.next(true);
        observer.complete();
      } else {
        window.addEventListener('service-worker-ready', () => {
          observer.next(true);
          observer.complete();
        });
      }
    });

    return swReady$.toPromise();
  }
}
