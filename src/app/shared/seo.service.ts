import { Injectable, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

const sanitizeHtml = require('sanitize-html');

// inject in root
@Injectable({
  providedIn: 'root'
})
export class SeoService {

  private defaults;

  // private canonical: HTMLElement;

  constructor(@Inject('isProd') private isProd: boolean,
              private metaService: Meta,
              private titleService: Title) {

    this.defaults = {
      title: 'Sam Vloeberghs',
      description: 'I\'m a Belgium based freelance software engineer and Internet entrepreneur, building webapplications and trying to make the world wide web a better place for you to spend your days.',
      url: this.isProd ? 'https://samvloeberghs.be' : 'https://localhost:4200',
      shareImg: 'assets/share/home.jpg',
      type: 'website',
      author: 'Sam Vloeberghs',
      section: 'Webdevelopment',
    };

    // TODO: everything else
    // this.canonical = this.getOrCreateElement('canonical', 'rel', 'link');

  }

  setMeta(title: string = '', description: string = '', url: string = '', image: string = '', type: string = '', author: string = '', published: Date = new Date(), modified: Date = new Date(), section: string = '') {
    this.setTitle(title);
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

  private setTitle(title: string) {
    let fullTitle = this.defaults.title;
    if (title && title.length) {
      fullTitle = `${title} - ` + this.defaults.title;
    }
    this.metaService.addTags([
      {name: 'og:title', content: fullTitle},
      {name: 'twitter:image:alt', content: fullTitle},
      {name: 'twitter:title', content: fullTitle},
    ]);
    this.titleService.setTitle(fullTitle);
  }

  private setType(type: string) {
    if (!(type && type.length)) {
      type = this.defaults.type;
    }
    this.metaService.addTag({name: 'og:type', content: type});
  }

  private setMetaDescription(description: string) {

    if (!(description && description.length)) {
      description = this.defaults.description;
    }

    description = sanitizeHtml(description, {
      allowedTags: [],
    });

    this.metaService.addTags([
      {name: 'description', content: description},
      {name: 'og:description', content: description},
      {name: 'twitter:description', content: description},
    ]);
  }

  private setImage(image: string) {

    if (!(image && image.length)) {
      image = this.defaults.shareImg;
    }
    image = this.defaults.url + '/' + image;

    this.metaService.addTags([
      {name: 'twitter:image', content: image},
      {name: 'og:image', content: image},
      {name: 'og:image:height', content: '630'},
      {name: 'og:image:width', content: '1200'},
    ]);

  }

  private setTwitterCard(card: string) {
    this.metaService.addTag({name: 'twitter:card', content: card});
  }

  private setTwitterSiteCreator(site: string) {
    this.metaService.addTags([
      {name: 'twitter:site', content: site},
      {name: 'twitter:creator', content: site},
    ]);
  }

  private setUrl(newUrl: string) {

    let toSetUrl = newUrl;
    if (toSetUrl.length) {
      toSetUrl = `${this.defaults.url}/${toSetUrl}`;

    } else {
      toSetUrl = this.defaults.url;
    }

    // TODO: to check
    // this.setElementAttribute(this.canonical, 'href', toSetUrl);

    this.metaService.addTag(
      {name: 'og:url', content: toSetUrl},
    );
  }

  private setPublished(newDate: Date) {
    this.metaService.addTag(
      {name: 'article:published_time', content: newDate.toISOString()},
    );
  }

  private setModified(newDate: Date) {
    this.metaService.addTags([
      {name: 'article:modified_time', content: newDate.toISOString()},
      {name: 'og:updated_time', content: newDate.toISOString()},
    ]);
  }

  private setAuthor(author: string) {
    if (!(author && author.length)) {
      author = this.defaults.author;
    }
    this.metaService.addTag(
      {name: 'article:author', content: author},
    );
  }

  private setSection(newSection: string) {
    if (!(newSection && newSection.length)) {
      newSection = this.defaults.section;
    }
    this.metaService.addTag(
      {name: 'article:section', content: newSection},
    );
  }

}
