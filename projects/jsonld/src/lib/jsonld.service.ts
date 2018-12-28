import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JsonLdService {

  private jsonLd: any = {};

  constructor() {
  }

  setData(name: string, url: string, type: string = 'WebSite', publishedDate?: string, modifiedDate?: string) {
    this.jsonLd = {
      '@context': 'http://schema.org',
      '@type': type,
      name,
      url,
    };
    this.setPublished(publishedDate);
    this.setModified(modifiedDate);
  }

  setRawData(rawData: any) {
    this.jsonLd = rawData;
  }

  private setPublished(publishedDate: string) {
    if (publishedDate) {
      this.jsonLd = Object.assign({}, this.jsonLd, {
        'dateCreated': publishedDate,
        'datePublished': publishedDate,
      });
    }
  }

  private setModified(modifiedDate: string) {
    if (modifiedDate) {
      this.jsonLd = Object.assign({}, this.jsonLd, {
        'dateModified': modifiedDate,
      });
    }
  }

  toJson() {
    return JSON.stringify(this.jsonLd);
  }
}
