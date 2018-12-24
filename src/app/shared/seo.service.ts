import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

const sanitizeHtml = require('sanitize-html');

import { environment } from '../../environments/environment';

// inject in root
@Injectable({
  providedIn: 'root',
})
export class SeoService {

  constructor(
    private metaService: Meta,
    private titleService: Title,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    this.setFbAppId();
  }

  setMeta(
    title: string = '',
    description: string = '',
    image: string = '',
    url: string = '',
    type: string = '',
    author: string = '',
    section: string = '',
    published?: number,
    modified?: number,
  ) {
    this.setTitle(title);

    if (isPlatformServer(this.platformId)) {
      this.setMetaDescription(description);
      this.setUrl(url);
      this.setImage(image);
      this.setPublished(published);
      this.setModified(modified);
      this.setAuthor(author);
      this.setSection(section);
      this.setTwitterCard('summary_large_image');
      this.setTwitterSiteCreator('@samvloeberghs');
      this.setType(type);
    }
  }

  private setTitle(title: string) {
    let fullTitle = environment.seo.title;
    if (title && title.length) {
      fullTitle = `${title} - ` + environment.seo.title;
    }
    this.titleService.setTitle(fullTitle);
    if (isPlatformServer(this.platformId)) {
      this.metaService.addTags([
        {name: 'twitter:title', content: fullTitle},
        {name: 'twitter:image:alt', content: fullTitle},
        {property: 'og:image:alt', content: fullTitle},
        {property: 'og:title', content: fullTitle},
        {name: 'title', content: fullTitle},
      ]);
    }
  }

  private setType(type: string) {
    if (!(type && type.length)) {
      type = environment.seo.type;
    }
    this.metaService.addTag({property: 'og:type', content: type});
  }

  private setMetaDescription(description: string) {
    if (!(description && description.length)) {
      description = environment.seo.description;
    }

    description = sanitizeHtml(description, {
      allowedTags: [],
    });

    this.metaService.addTags([
      {name: 'twitter:description', content: description},
      {property: 'og:description', content: description},
      {name: 'description', content: description},
    ]);
  }

  private setImage(image: string) {
    if (!(image && image.length)) {
      image = environment.seo.shareImg;
    }
    image = environment.url + '/' + image;
    this.metaService.addTags([
      {name: 'twitter:image', content: image},
      {property: 'og:image', content: image, name: 'image'},
      {property: 'og:image:height', content: '630'},
      {property: 'og:image:width', content: '1200'},
    ]);

  }

  private setTwitterCard(card: string) {
    this.metaService.addTag({name: 'twitter:card', content: card});
  }

  private setUrl(url: string) {
    url = environment.url + (url.length ? url : '');
    this.metaService.addTags([
      {property: 'og:url', content: url},
    ]);
  }

  private setPublished(newDateNumber: number) {
    if (newDateNumber) {
      const newDate = new Date(newDateNumber);
      this.metaService.addTag(
        {name: 'article:published_time', content: newDate.toISOString()},
      );
    }
  }

  private setModified(newDateNumber: number) {
    if (newDateNumber) {
      const newDate = new Date(newDateNumber);
      this.metaService.addTags([
        {name: 'article:modified_time', content: newDate.toISOString()},
        {name: 'og:updated_time', content: newDate.toISOString()},
      ]);
    }
  }

  private setAuthor(author: string) {
    if (!(author && author.length)) {
      author = environment.seo.author;
    }
    this.metaService.addTag(
      {name: 'article:author', content: author},
    );
  }

  private setSection(newSection: string) {
    if (!(newSection && newSection.length)) {
      newSection = environment.seo.section;
    }
    this.metaService.addTag(
      {name: 'article:section', content: newSection},
    );
  }

  private setTwitterSiteCreator(site?: string) {
    if (!site) {
      site = environment.seo.twittersitecreator;
    }
    this.metaService.addTags([
      {name: 'twitter:site', content: site},
      {name: 'twitter:creator', content: site},
    ]);
  }

  private setFbAppId(appId?: string) {
    if (!(appId && appId.length)) {
      appId = environment.facebookAppId;
    }
    this.metaService.addTags([
      {property: 'fb:app_id', content: appId},
    ]);
  }

}
