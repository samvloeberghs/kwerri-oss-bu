import { Inject, Injectable, Optional, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

export interface JsonLd {
  [param: string]: string | Object;
}

@Injectable()
export class JsonLdService {

  private jsonLd: JsonLd | JsonLd[];

  constructor(
    @Optional() @Inject(PLATFORM_ID) private readonly platformId: Object,
    @Optional() @Inject(DOCUMENT) private readonly doc: any,
  ) {
  }

  setData(data: JsonLd | JsonLd[]) {
    this.jsonLd = data;
    this.injectBrowser();
  }

  getObject(type: string, rawData?: JsonLd, context = 'http://schema.org'): JsonLd {
    let object: JsonLd = {
      '@type': type,
    };
    if (context) {
      object = {
        '@context': context,
        ...object,
      };
    }
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
