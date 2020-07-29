import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export interface JsonLd {
  [param: string]: string | Object;
}

@Injectable()
export class JsonLdService {

  private jsonLd: JsonLd | JsonLd[];

  constructor(
    @Inject(DOCUMENT) private readonly document,
  ) {
  }

  public setData(data: JsonLd | JsonLd[]): void {
    this.jsonLd = data;
    this.inject();
  }

  public getObject(type: string, rawData?: JsonLd, context = 'http://schema.org'): JsonLd {
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

  private inject(): void {
    let ldJsonScriptTag = this.document.head.querySelector(`script[type='application/ld+json']`);
    if (ldJsonScriptTag) {
      ldJsonScriptTag.textContent = JSON.stringify(this.jsonLd);
    } else {
      ldJsonScriptTag = this.document.createElement('script');
      ldJsonScriptTag.setAttribute('type', 'application/ld+json');
      ldJsonScriptTag.textContent = JSON.stringify(this.jsonLd);
      this.document.head.appendChild(ldJsonScriptTag);
    }
  }

}
