import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class MyService {

  constructor(@Inject(PLATFORM_ID) private readonly platformId: Object) { }

  doStuff() {
    if (isPlatformBrowser(this.platformId)) {
      // Do things that work in the browser
    } else {
      // Do things that work on the server
    }
  }
}
