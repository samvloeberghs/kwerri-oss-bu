import { Component, Inject, Injector, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RESPONSE } from '@nguniversal/express-engine/tokens';
import { Response } from 'express';

@Component({
  selector: 'sv-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(Injector) private injector: Injector,
  ) {
  }

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      const response = this.injector.get(RESPONSE) as Response;
      response.status(404);
    }
  }
}
