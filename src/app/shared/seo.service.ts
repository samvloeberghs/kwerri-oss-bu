import { Injectable, Inject } from '@angular/core';
import { __platform_browser_private__ as _, DOCUMENT } from '@angular/platform-browser';
import { isNode, isBrowser } from 'angular2-universal/browser'; // for AoT we need to manually split universal packages

var sanitizeHtml = require('sanitize-html');

const isProd = process.env.ENV === 'PROD';

@Injectable()
export class SeoService {

  private dom: any;

  private defaults = {
    title: 'Sam Vloeberghs',
    description: 'I\'m a Belgium based freelance software engineer and Internet entrepreneur, building webapplications and trying to make the world wide web a better place for you to spend your days.',
    url: isProd ? 'https://samvloeberghs.be' : 'https://localhost:4444',
    shareImg: 'assets/share/home.jpg',
    type: 'website',
    author: 'Sam Vloeberghs',
    section: 'Webdevelopment'
  };

  private headElement: HTMLElement;
  private metaDescription: HTMLElement;
  private canonical: HTMLElement;

  // facebook and linkedin
  private ogTitle: HTMLElement;
  private ogType: HTMLElement;
  private ogDescription: HTMLElement;
  private ogUrl: HTMLElement;
  private ogUpdated: HTMLElement;
  private ogImage: HTMLElement;
  private ogImageWidth: HTMLElement;
  private ogImageHeight: HTMLElement;

  // twitter
  private twitterCard: HTMLElement;
  private twitterSite: HTMLElement;
  private twitterCreator: HTMLElement;
  private twitterTitle: HTMLElement;
  private twitterDescription: HTMLElement;
  private twitterImage: HTMLElement;
  private twitterImageAlt: HTMLElement;

  private articlePublished: HTMLElement;
  private articleModified: HTMLElement;
  private articleSection: HTMLElement;
  private articleAuthor: HTMLElement;

  constructor(@Inject(DOCUMENT) private document) {

    this.dom = _.getDOM();
    this.headElement = this.document.head;

    // facebook & linkedin
    this.ogTitle = this.getOrCreateElement('og:title', 'property');
    this.ogType = this.getOrCreateElement('og:type', 'property');
    this.ogDescription = this.getOrCreateElement('og:description', 'property');
    this.ogUrl = this.getOrCreateElement('og:url', 'property');
    this.ogUpdated = this.getOrCreateElement('og:updated_time', 'property');
    this.ogImage = this.getOrCreateElement('og:image', 'property');
    this.ogImageWidth = this.getOrCreateElement('og:image:width', 'property');
    this.ogImageHeight = this.getOrCreateElement('og:image:height', 'property');

    // twitter
    this.twitterCard = this.getOrCreateElement('twitter:card', 'name');
    this.twitterSite = this.getOrCreateElement('twitter:site', 'name');
    this.twitterCreator = this.getOrCreateElement('twitter:creator', 'name');
    this.twitterTitle = this.getOrCreateElement('twitter:title', 'name');
    this.twitterDescription = this.getOrCreateElement('twitter:description', 'name');
    this.twitterImage = this.getOrCreateElement('twitter:image', 'name');
    this.twitterImageAlt = this.getOrCreateElement('twitter:image:alt', 'name');

    // everything else
    this.metaDescription = this.getOrCreateElement('description', 'name');
    this.canonical = this.getOrCreateElement('canonical', 'rel', 'link');
    this.articlePublished = this.getOrCreateElement('article:published_time', 'property');
    this.articleModified = this.getOrCreateElement('article:modified_time', 'property');
    this.articleSection = this.getOrCreateElement('article:section', 'property');
    this.articleAuthor = this.getOrCreateElement('article:author', 'property');

  }

  public setMeta(title: string = '', description: string = '', url: any[] = [], image: string = '', type: string = '', author: string = '', published: Date = new Date(), modified: Date = new Date(), section: string = '') {
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

    this.document.title = fullTitle;
    this.setElementAttribute(this.ogTitle, 'content', fullTitle);
    this.setElementAttribute(this.twitterTitle, 'content', fullTitle);
    this.setElementAttribute(this.twitterImageAlt, 'content', fullTitle);
  }

  private setType(type: string) {
    if (!(type && type.length)) {
      type = this.defaults.type;
    }
    this.setElementAttribute(this.ogType, 'content', type);
  }

  private setMetaDescription(description: string) {

    if (!(description && description.length)) {
      description = this.defaults.description;
    }

    description = sanitizeHtml(description, {
      allowedTags: [],
    });

    this.setElementAttribute(this.metaDescription, 'content', description);
    this.setElementAttribute(this.ogDescription, 'content', description);
    this.setElementAttribute(this.twitterDescription, 'content', description);
  }

  private setImage(image: string) {

    if (!(image && image.length)) {
      image = this.defaults.shareImg;
    }
    image = this.defaults.url + '/' + image;

    this.setElementAttribute(this.ogImage, 'content', image);
    this.setElementAttribute(this.twitterImage, 'content', image);
    this.setElementAttribute(this.ogImageHeight, 'content', '630');
    this.setElementAttribute(this.ogImageWidth, 'content', '1200');

  }

  private setTwitterCard(card: string) {
    this.setElementAttribute(this.twitterCard, 'content', card);
  }

  private setTwitterSiteCreator(site: string) {
    this.setElementAttribute(this.twitterSite, 'content', site);
    this.setElementAttribute(this.twitterCreator, 'content', site);
  }

  private setUrl(newUrl: any[]) {

    let toSetUrl = '';
    newUrl.forEach((segment) => {
      toSetUrl += '/' + segment.path;
    });

    if (toSetUrl.length) {
      toSetUrl = this.defaults.url + toSetUrl;

    } else {
      toSetUrl = this.defaults.url
    }

    this.setElementAttribute(this.ogUrl, 'content', toSetUrl);
    this.setElementAttribute(this.canonical, 'href', toSetUrl);
  }

  private setPublished(newDate: Date) {
    this.setElementAttribute(this.articlePublished, 'content', newDate.toISOString());
  }

  private setModified(newDate: Date) {
    this.setElementAttribute(this.articleModified, 'content', newDate.toISOString());
    this.setElementAttribute(this.ogUpdated, 'content', newDate.toISOString());
  }

  private setAuthor(author: string) {
    if (!(author && author.length)) {
      author = this.defaults.author;
    }
    this.setElementAttribute(this.articleAuthor, 'content', author);
  }

  private setSection(newSection: string) {
    if (!(newSection && newSection.length)) {
      newSection = this.defaults.section;
    }
    this.setElementAttribute(this.articleSection, 'content', newSection);
  }

  // tech

  private getOrCreateElement(name: string, attr: string, type: string = 'meta'): HTMLElement {
    let el: HTMLElement = this.getElement(name, attr);
    if (!el) {
      el = this.createElement(name, attr, type);
      this.dom.insertBefore(this.document.head.lastChild, el);
    }
    return el;
  }

  private createElement(name: string, attr: string, type: string = 'meta'): HTMLElement {
    let el: HTMLElement = this.dom.createElement(type);
    this.setElementAttribute(el, attr, name);
    return el;
  }

  private getElement(name: string, attr: string): HTMLElement {
    if (isBrowser && this.document.querySelector) {
      return this.document.querySelector('[' + attr + '="' + name + '"]');
    }
    return undefined;
  }

  private setElementAttribute(el: HTMLElement, name: string, attr: string) {
    return this.dom.setAttribute(el, name, attr);
  }

}