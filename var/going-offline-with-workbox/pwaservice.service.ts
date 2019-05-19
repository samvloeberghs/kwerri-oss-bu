import { Injectable } from '@angular/core';
import { fromEvent, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PWAService {
  private readonly canUpdate = new BehaviorSubject(false);
  public readonly canUpdate$ = this.canUpdate.asObservable();

  constructor() {

    const updatesChannel = new BroadcastChannel('precache-updates');
    fromEvent(updatesChannel, 'message').subscribe(event => {
      this.canUpdate.next(true);
    });

  }
}
