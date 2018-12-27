import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

const sanitizeHtml = require('sanitize-html');

import { environment } from '../../environments/environment';

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
    published?: string,
    modified?: string,
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
      this.metaService.updateTag({name: 'twitter:title', content: fullTitle});
      this.metaService.updateTag({name: 'twitter:image:alt', content: fullTitle});
      this.metaService.updateTag({property: 'og:image:alt', content: fullTitle});
      this.metaService.updateTag({property: 'og:title', content: fullTitle});
      this.metaService.updateTag({name: 'title', content: fullTitle});
    }
  }

  private setType(type: string) {
    if (!(type && type.length)) {
      type = environment.seo.type;
    }
    this.metaService.updateTag({property: 'og:type', content: type});
  }

  private setMetaDescription(description: string) {
    if (!(description && description.length)) {
      description = environment.seo.description;
    }

    description = sanitizeHtml(description, {
      allowedTags: [],
    });

    this.metaService.updateTag({name: 'twitter:description', content: description});
    this.metaService.updateTag({property: 'og:description', content: description});
    this.metaService.updateTag({name: 'description', content: description});
  }

  private setImage(image: string) {
    if (!(image && image.length)) {
      image = environment.seo.shareImg;
    }
    image = environment.url + '/' + image;
    this.metaService.updateTag({name: 'twitter:image', content: image});
    this.metaService.updateTag({property: 'og:image', content: image, name: 'image'});
    this.metaService.updateTag({property: 'og:image', content: image, name: 'image'});
    this.metaService.updateTag({property: 'og:image:height', content: '630'});

  }

  private setTwitterCard(card: string) {
    this.metaService.updateTag({name: 'twitter:card', content: card});
  }

  private setUrl(url: string) {
    url = environment.url + (url.length ? url : '');
    this.metaService.updateTag({property: 'og:url', content: url});
  }

  private setPublished(publishedDateString: string) {
    if (publishedDateString) {
      const publishedDate = new Date(publishedDateString);
      this.metaService.updateTag({name: 'article:published_time', content: publishedDate.toISOString()});
    }
  }

  private setModified(modifiedDateString: string) {
    if (modifiedDateString) {
      const modifiedDate = new Date(modifiedDateString);
      this.metaService.updateTag({name: 'article:modified_time', content: modifiedDate.toISOString()});
      this.metaService.updateTag({name: 'og:updated_time', content: modifiedDate.toISOString()});
    }
  }

  private setAuthor(author: string) {
    if (!(author && author.length)) {
      author = environment.seo.author;
    }
    this.metaService.updateTag({name: 'article:author', content: author});
  }

  private setSection(newSection: string) {
    if (!(newSection && newSection.length)) {
      newSection = environment.seo.section;
    }
    this.metaService.updateTag({name: 'article:section', content: newSection});
  }

  private setTwitterSiteCreator(site?: string) {
    if (!site) {
      site = environment.seo.twittersitecreator;
    }
    this.metaService.updateTag({name: 'twitter:site', content: site});
    this.metaService.updateTag({name: 'twitter:creator', content: site});

  }

  private setFbAppId(appId?: string) {
    if (!(appId && appId.length)) {
      appId = environment.facebookAppId;
    }
    this.metaService.updateTag({property: 'fb:app_id', content: appId});
  }

}
