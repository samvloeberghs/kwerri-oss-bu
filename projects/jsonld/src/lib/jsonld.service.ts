import { Injectable } from '@angular/core';

@Injectable()
export class JsonLdService {

  private jsonLd: any = {};

  constructor() {
  }

  setData(type, rawData: any) {
    this.jsonLd = this.getObject(type, rawData);
  }

  getObject(type, rawData?: any) {
    let object = {
      '@context': 'http://schema.org',
      '@type': type,
    };
    if (rawData) {
      object = Object.assign({}, object, rawData);
    }
    return object;
  }

  toJson() {
    return JSON.stringify(this.jsonLd);
  }
}
