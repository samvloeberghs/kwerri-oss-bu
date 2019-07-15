import { Inject, Injectable, Optional, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Request } from 'express';
import { CookieService } from 'ngx-cookies';

@Injectable()
export class MyCookieService {

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: Object,
    @Optional() @Inject(REQUEST) private readonly request: Request,
    @Optional() private readonly cookieService: CookieService
  ) { }

  getCookie(): string {
    if (isPlatformBrowser(this.platformId)) {
      return this.cookieService.get('token');
    } else {
      return this.request.cookies['token'];
    }
  }
}

