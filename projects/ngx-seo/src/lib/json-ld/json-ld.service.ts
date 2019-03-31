import { Inject, Injectable, Optional, PLATFORM_ID } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class JsonLdService {

  private jsonLd: any = {};

  constructor(
    @Optional() @Inject(PLATFORM_ID) private readonly platformId: Object,
    @Optional() @Inject(DOCUMENT) private readonly doc: any,
  ) {
  }

  setData(type, rawData: any) {
    this.jsonLd = this.getObject(type, rawData);
    this.injectBrowser();
  }

  getObject(type, rawData?: any) {
    let object = {
      '@context': 'http://schema.org',
      '@type': type,
    };
    if (rawData) {
      object = {
        ...object,
        ...rawData,
      };
    }
    return object;
  }

  toJson() {
    return JSON.stringify(this.jsonLd);
  }

  private injectBrowser() {
    if (this.platformId && isPlatformBrowser(this.platformId)) {
      let ldJsonScriptTag = this.doc.head.querySelector(`script[type='application/ld+json']`);
      if (ldJsonScriptTag) {
        ldJsonScriptTag.textContent = this.toJson();
      } else {
        ldJsonScriptTag = this.doc.createElement('script');
        ldJsonScriptTag.setAttribute('type', 'application/ld+json');
        ldJsonScriptTag.textContent = this.toJson();
        this.doc.head.appendChild(ldJsonScriptTag);
      }
    }
  }

}
