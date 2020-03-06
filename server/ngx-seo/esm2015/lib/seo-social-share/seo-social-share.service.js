/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@angular/common";
/** @enum {string} */
const NgxSeoMetaTagAttr = {
    name: 'name',
    property: 'property',
};
export { NgxSeoMetaTagAttr };
/**
 * @record
 */
export function NgxSeoMetaTag() { }
if (false) {
    /** @type {?} */
    NgxSeoMetaTag.prototype.attr;
    /** @type {?} */
    NgxSeoMetaTag.prototype.attrValue;
    /** @type {?|undefined} */
    NgxSeoMetaTag.prototype.value;
}
export class SeoSocialShareService {
    /**
     * @param {?} metaService
     * @param {?} titleService
     * @param {?} document
     */
    constructor(metaService, titleService, document) {
        this.metaService = metaService;
        this.titleService = titleService;
        this.document = document;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    setData(data) {
        this.setSection(data.section);
        this.setKeywords(data.keywords);
        this.setTitle(data.title);
        this.setType(data.type);
        this.setDescription(data.description);
        this.setImage(data.image);
        this.setUrl(data.url);
        this.setPublished(data.published);
        this.setModified(data.modified);
        this.setAuthor(data.author);
    }
    /**
     * @param {?} keywords
     * @return {?}
     */
    setKeywords(keywords) {
        if (Boolean(keywords)) {
            this.metaService.updateTag({ name: 'keywords', content: keywords });
        }
        else {
            this.metaService.removeTag(`name='keywords'`);
        }
    }
    /**
     * @param {?=} section
     * @return {?}
     */
    setSection(section) {
        if (Boolean(section)) {
            this.metaService.updateTag({ name: 'article:section', content: section });
        }
        else {
            this.metaService.removeTag(`name='article:section'`);
        }
    }
    /**
     * @param {?=} title
     * @return {?}
     */
    setTitle(title = '') {
        this.titleService.setTitle(title);
        if (title && title.length) {
            this.metaService.updateTag({ name: 'twitter:title', content: title });
            this.metaService.updateTag({ name: 'twitter:image:alt', content: title });
            this.metaService.updateTag({ property: 'og:image:alt', content: title });
            this.metaService.updateTag({ property: 'og:title', content: title });
            this.metaService.updateTag({ name: 'title', content: title });
        }
        else {
            this.metaService.removeTag(`name='twitter:title'`);
            this.metaService.removeTag(`name='twitter:image:alt'`);
            this.metaService.removeTag(`property='og:image:alt'`);
            this.metaService.removeTag(`property='og:title'`);
            this.metaService.removeTag(`name='title'`);
        }
    }
    /**
     * @param {?=} type
     * @return {?}
     */
    setType(type) {
        if (type && type.length) {
            this.metaService.updateTag({ property: 'og:type', content: type });
        }
        else {
            this.metaService.removeTag(`property='og:type'`);
        }
    }
    /**
     * @param {?=} description
     * @return {?}
     */
    setDescription(description) {
        if (description && description.length) {
            this.metaService.updateTag({ name: 'twitter:description', content: description });
            this.metaService.updateTag({ property: 'og:description', content: description });
            this.metaService.updateTag({ name: 'description', content: description });
        }
        else {
            this.metaService.removeTag(`name='twitter:description'`);
            this.metaService.removeTag(`property='og:description'`);
            this.metaService.removeTag(`name='description'`);
        }
    }
    /**
     * @param {?=} image
     * @return {?}
     */
    setImage(image) {
        if (image && image.length) {
            this.metaService.updateTag({ name: 'twitter:image', content: image });
            this.metaService.updateTag({ property: 'og:image', content: image });
            this.metaService.updateTag({ property: 'og:image:height', content: '630' });
        }
        else {
            this.metaService.removeTag(`name='twitter:image'`);
            this.metaService.removeTag(`property='og:image'`);
            this.metaService.removeTag(`property='og:image:height'`);
        }
    }
    /**
     * @param {?=} url
     * @return {?}
     */
    setUrl(url) {
        if (url && url.length) {
            this.metaService.updateTag({ property: 'og:url', content: url });
        }
        else {
            this.metaService.removeTag(`property='og:url'`);
        }
        this.setCanonicalUrl(url);
    }
    /**
     * @param {?=} publishedDateString
     * @return {?}
     */
    setPublished(publishedDateString) {
        if (publishedDateString) {
            /** @type {?} */
            const publishedDate = new Date(publishedDateString);
            this.metaService.updateTag({ name: 'article:published_time', content: publishedDate.toISOString() });
            this.metaService.updateTag({ name: 'published_date', content: publishedDate.toISOString() });
        }
        else {
            this.metaService.removeTag(`name='article:published_time'`);
            this.metaService.removeTag(`name='publication_date'`);
        }
    }
    /**
     * @param {?=} modifiedDateString
     * @return {?}
     */
    setModified(modifiedDateString) {
        if (modifiedDateString) {
            /** @type {?} */
            const modifiedDate = new Date(modifiedDateString);
            this.metaService.updateTag({ name: 'article:modified_time', content: modifiedDate.toISOString() });
            this.metaService.updateTag({ name: 'og:updated_time', content: modifiedDate.toISOString() });
        }
        else {
            this.metaService.removeTag(`name='article:modified_time'`);
            this.metaService.removeTag(`name='og:updated_time'`);
        }
    }
    /**
     * @param {?=} author
     * @return {?}
     */
    setAuthor(author) {
        if (author && author.length) {
            this.metaService.updateTag({ name: 'article:author', content: author });
            this.metaService.updateTag({ name: 'author', content: author });
        }
        else {
            this.metaService.removeTag(`name='article:author'`);
            this.metaService.removeTag(`name='author'`);
        }
    }
    /**
     * @param {?=} site
     * @return {?}
     */
    setTwitterSiteCreator(site) {
        if (Boolean(site)) {
            this.metaService.updateTag({ name: 'twitter:site', content: site });
            this.metaService.updateTag({ name: 'twitter:creator', content: site });
        }
        else {
            this.metaService.removeTag(`name='twitter:site'`);
            this.metaService.removeTag(`name='twitter:creator'`);
        }
    }
    /**
     * @param {?=} card
     * @return {?}
     */
    setTwitterCard(card) {
        if (Boolean(card)) {
            this.metaService.updateTag({ name: 'twitter:card', content: card });
        }
        else {
            this.metaService.removeTag(`name='twitter:card'`);
        }
    }
    /**
     * @param {?=} appId
     * @return {?}
     */
    setFbAppId(appId) {
        if (Boolean(appId)) {
            this.metaService.updateTag({ property: 'fb:app_id', content: appId });
        }
        else {
            this.metaService.removeTag(`property='fb:app_id'`);
        }
    }
    /**
     * @param {?} metaTag
     * @return {?}
     */
    setMetaTag(metaTag) {
        if (Boolean(metaTag.value)) {
            /** @type {?} */
            const metaTagObject = {
                [metaTag.attr]: metaTag.attrValue,
                content: metaTag.value,
            };
            this.metaService.updateTag(metaTagObject);
        }
        else {
            /** @type {?} */
            const selector = `${metaTag.attr}='${metaTag.attrValue}'`;
            this.metaService.removeTag(selector);
        }
    }
    /**
     * @param {?} metaTags
     * @return {?}
     */
    setMetaTags(metaTags) {
        for (const metaTag of metaTags) {
            this.setMetaTag(metaTag);
        }
    }
    /**
     * @param {?=} url
     * @return {?}
     */
    setCanonicalUrl(url) {
        // first remove potential previous url
        /** @type {?} */
        const selector = `link[rel='canonical']`;
        /** @type {?} */
        const canonicalElement = this.document.head.querySelector(selector);
        if (canonicalElement) {
            this.document.head.removeChild(canonicalElement);
        }
        if (url && url.length) {
            /** @type {?} */
            const link = this.document.createElement('link');
            link.setAttribute('rel', 'canonical');
            this.document.head.appendChild(link);
            link.setAttribute('href', url);
        }
    }
}
SeoSocialShareService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
SeoSocialShareService.ctorParameters = () => [
    { type: Meta },
    { type: Title },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ SeoSocialShareService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SeoSocialShareService_Factory() { return new SeoSocialShareService(i0.ɵɵinject(i1.Meta), i0.ɵɵinject(i1.Title), i0.ɵɵinject(i2.DOCUMENT)); }, token: SeoSocialShareService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SeoSocialShareService.prototype.metaService;
    /**
     * @type {?}
     * @private
     */
    SeoSocialShareService.prototype.titleService;
    /**
     * @type {?}
     * @private
     */
    SeoSocialShareService.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VvLXNvY2lhbC1zaGFyZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNlby8iLCJzb3VyY2VzIjpbImxpYi9zZW8tc29jaWFsLXNoYXJlL3Nlby1zb2NpYWwtc2hhcmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7OztJQUt6QyxNQUFPLE1BQU07SUFDYixVQUFXLFVBQVU7Ozs7OztBQUd2QixtQ0FJQzs7O0lBSEMsNkJBQXdCOztJQUN4QixrQ0FBa0I7O0lBQ2xCLDhCQUFlOztBQU1qQixNQUFNLE9BQU8scUJBQXFCOzs7Ozs7SUFFaEMsWUFDbUIsV0FBaUIsRUFDakIsWUFBbUIsRUFDRCxRQUFRO1FBRjFCLGdCQUFXLEdBQVgsV0FBVyxDQUFNO1FBQ2pCLGlCQUFZLEdBQVosWUFBWSxDQUFPO1FBQ0QsYUFBUSxHQUFSLFFBQVEsQ0FBQTtJQUU3QyxDQUFDOzs7OztJQUVNLE9BQU8sQ0FBQyxJQUF3QjtRQUNyQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztR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SUFDbEMsNkNBQW9DOzs7OztJQUNwQyx5Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1ldGEsIFRpdGxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFNlb1NvY2lhbFNoYXJlRGF0YSB9IGZyb20gJy4vaW50ZXJmYWNlcy9zZW8tc29jaWFsLXNoYXJlLWRhdGEnO1xuXG5leHBvcnQgZW51bSBOZ3hTZW9NZXRhVGFnQXR0ciB7XG4gIG5hbWUgPSAnbmFtZScsXG4gIHByb3BlcnR5ID0gJ3Byb3BlcnR5J1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5neFNlb01ldGFUYWcge1xuICBhdHRyOiBOZ3hTZW9NZXRhVGFnQXR0cjtcbiAgYXR0clZhbHVlOiBzdHJpbmc7XG4gIHZhbHVlPzogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU2VvU29jaWFsU2hhcmVTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1ldGFTZXJ2aWNlOiBNZXRhLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGl0bGVTZXJ2aWNlOiBUaXRsZSxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIHJlYWRvbmx5IGRvY3VtZW50LFxuICApIHtcbiAgfVxuXG4gIHB1YmxpYyBzZXREYXRhKGRhdGE6IFNlb1NvY2lhbFNoYXJlRGF0YSk6IHZvaWQge1xuICAgIHRoaXMuc2V0U2VjdGlvbihkYXRhLnNlY3Rpb24pO1xuICAgIHRoaXMuc2V0S2V5d29yZHMoZGF0YS5rZXl3b3Jkcyk7XG4gICAgdGhpcy5zZXRUaXRsZShkYXRhLnRpdGxlKTtcbiAgICB0aGlzLnNldFR5cGUoZGF0YS50eXBlKTtcbiAgICB0aGlzLnNldERlc2NyaXB0aW9uKGRhdGEuZGVzY3JpcHRpb24pO1xuICAgIHRoaXMuc2V0SW1hZ2UoZGF0YS5pbWFnZSk7XG4gICAgdGhpcy5zZXRVcmwoZGF0YS51cmwpO1xuICAgIHRoaXMuc2V0UHVibGlzaGVkKGRhdGEucHVibGlzaGVkKTtcbiAgICB0aGlzLnNldE1vZGlmaWVkKGRhdGEubW9kaWZpZWQpO1xuICAgIHRoaXMuc2V0QXV0aG9yKGRhdGEuYXV0aG9yKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRLZXl3b3JkcyhrZXl3b3Jkczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKEJvb2xlYW4oa2V5d29yZHMpKSB7XG4gICAgICB0aGlzLm1ldGFTZXJ2aWNlLnVwZGF0ZVRhZyh7IG5hbWU6ICdrZXl3b3JkcycsIGNvbnRlbnQ6IGtleXdvcmRzIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1ldGFTZXJ2aWNlLnJlbW92ZVRhZyhgbmFtZT0na2V5d29yZHMnYCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldFNlY3Rpb24oc2VjdGlvbj86IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChCb29sZWFuKHNlY3Rpb24pKSB7XG4gICAgICB0aGlzLm1ldGFTZXJ2aWNlLnVwZGF0ZVRhZyh7IG5hbWU6ICdhcnRpY2xlOnNlY3Rpb24nLCBjb250ZW50OiBzZWN0aW9uIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1ldGFTZXJ2aWNlLnJlbW92ZVRhZyhgbmFtZT0nYXJ0aWNsZTpzZWN0aW9uJ2ApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRUaXRsZSh0aXRsZTogc3RyaW5nID0gJycpIHtcbiAgICB0aGlzLnRpdGxlU2VydmljZS5zZXRUaXRsZSh0aXRsZSk7XG4gICAgaWYgKHRpdGxlICYmIHRpdGxlLmxlbmd0aCkge1xuICAgICAgdGhpcy5tZXRhU2VydmljZS51cGRhdGVUYWcoeyBuYW1lOiAndHdpdHRlcjp0aXRsZScsIGNvbnRlbnQ6IHRpdGxlIH0pO1xuICAgICAgdGhpcy5tZXRhU2VydmljZS51cGRhdGVUYWcoeyBuYW1lOiAndHdpdHRlcjppbWFnZTphbHQnLCBjb250ZW50OiB0aXRsZSB9KTtcbiAgICAgIHRoaXMubWV0YVNlcnZpY2UudXBkYXRlVGFnKHsgcHJvcGVydHk6ICdvZzppbWFnZTphbHQnLCBjb250ZW50OiB0aXRsZSB9KTtcbiAgICAgIHRoaXMubWV0YVNlcnZpY2UudXBkYXRlVGFnKHsgcHJvcGVydHk6ICdvZzp0aXRsZScsIGNvbnRlbnQ6IHRpdGxlIH0pO1xuICAgICAgdGhpcy5tZXRhU2VydmljZS51cGRhdGVUYWcoeyBuYW1lOiAndGl0bGUnLCBjb250ZW50OiB0aXRsZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tZXRhU2VydmljZS5yZW1vdmVUYWcoYG5hbWU9J3R3aXR0ZXI6dGl0bGUnYCk7XG4gICAgICB0aGlzLm1ldGFTZXJ2aWNlLnJlbW92ZVRhZyhgbmFtZT0ndHdpdHRlcjppbWFnZTphbHQnYCk7XG4gICAgICB0aGlzLm1ldGFTZXJ2aWNlLnJlbW92ZVRhZyhgcHJvcGVydHk9J29nOmltYWdlOmFsdCdgKTtcbiAgICAgIHRoaXMubWV0YVNlcnZpY2UucmVtb3ZlVGFnKGBwcm9wZXJ0eT0nb2c6dGl0bGUnYCk7XG4gICAgICB0aGlzLm1ldGFTZXJ2aWNlLnJlbW92ZVRhZyhgbmFtZT0ndGl0bGUnYCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldFR5cGUodHlwZT86IHN0cmluZykge1xuICAgIGlmICh0eXBlICYmIHR5cGUubGVuZ3RoKSB7XG4gICAgICB0aGlzLm1ldGFTZXJ2aWNlLnVwZGF0ZVRhZyh7IHByb3BlcnR5OiAnb2c6dHlwZScsIGNvbnRlbnQ6IHR5cGUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWV0YVNlcnZpY2UucmVtb3ZlVGFnKGBwcm9wZXJ0eT0nb2c6dHlwZSdgKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24/OiBzdHJpbmcpIHtcbiAgICBpZiAoZGVzY3JpcHRpb24gJiYgZGVzY3JpcHRpb24ubGVuZ3RoKSB7XG4gICAgICB0aGlzLm1ldGFTZXJ2aWNlLnVwZGF0ZVRhZyh7IG5hbWU6ICd0d2l0dGVyOmRlc2NyaXB0aW9uJywgY29udGVudDogZGVzY3JpcHRpb24gfSk7XG4gICAgICB0aGlzLm1ldGFTZXJ2aWNlLnVwZGF0ZVRhZyh7IHByb3BlcnR5OiAnb2c6ZGVzY3JpcHRpb24nLCBjb250ZW50OiBkZXNjcmlwdGlvbiB9KTtcbiAgICAgIHRoaXMubWV0YVNlcnZpY2UudXBkYXRlVGFnKHsgbmFtZTogJ2Rlc2NyaXB0aW9uJywgY29udGVudDogZGVzY3JpcHRpb24gfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWV0YVNlcnZpY2UucmVtb3ZlVGFnKGBuYW1lPSd0d2l0dGVyOmRlc2NyaXB0aW9uJ2ApO1xuICAgICAgdGhpcy5tZXRhU2VydmljZS5yZW1vdmVUYWcoYHByb3BlcnR5PSdvZzpkZXNjcmlwdGlvbidgKTtcbiAgICAgIHRoaXMubWV0YVNlcnZpY2UucmVtb3ZlVGFnKGBuYW1lPSdkZXNjcmlwdGlvbidgKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0SW1hZ2UoaW1hZ2U/OiBzdHJpbmcpIHtcbiAgICBpZiAoaW1hZ2UgJiYgaW1hZ2UubGVuZ3RoKSB7XG4gICAgICB0aGlzLm1ldGFTZXJ2aWNlLnVwZGF0ZVRhZyh7IG5hbWU6ICd0d2l0dGVyOmltYWdlJywgY29udGVudDogaW1hZ2UgfSk7XG4gICAgICB0aGlzLm1ldGFTZXJ2aWNlLnVwZGF0ZVRhZyh7IHByb3BlcnR5OiAnb2c6aW1hZ2UnLCBjb250ZW50OiBpbWFnZSB9KTtcbiAgICAgIHRoaXMubWV0YVNlcnZpY2UudXBkYXRlVGFnKHsgcHJvcGVydHk6ICdvZzppbWFnZTpoZWlnaHQnLCBjb250ZW50OiAnNjMwJyB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tZXRhU2VydmljZS5yZW1vdmVUYWcoYG5hbWU9J3R3aXR0ZXI6aW1hZ2UnYCk7XG4gICAgICB0aGlzLm1ldGFTZXJ2aWNlLnJlbW92ZVRhZyhgcHJvcGVydHk9J29nOmltYWdlJ2ApO1xuICAgICAgdGhpcy5tZXRhU2VydmljZS5yZW1vdmVUYWcoYHByb3BlcnR5PSdvZzppbWFnZTpoZWlnaHQnYCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldFVybCh1cmw/OiBzdHJpbmcpIHtcbiAgICBpZiAodXJsICYmIHVybC5sZW5ndGgpIHtcbiAgICAgIHRoaXMubWV0YVNlcnZpY2UudXBkYXRlVGFnKHsgcHJvcGVydHk6ICdvZzp1cmwnLCBjb250ZW50OiB1cmwgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWV0YVNlcnZpY2UucmVtb3ZlVGFnKGBwcm9wZXJ0eT0nb2c6dXJsJ2ApO1xuICAgIH1cbiAgICB0aGlzLnNldENhbm9uaWNhbFVybCh1cmwpO1xuICB9XG5cbiAgcHVibGljIHNldFB1Ymxpc2hlZChwdWJsaXNoZWREYXRlU3RyaW5nPzogc3RyaW5nKSB7XG4gICAgaWYgKHB1Ymxpc2hlZERhdGVTdHJpbmcpIHtcbiAgICAgIGNvbnN0IHB1Ymxpc2hlZERhdGUgPSBuZXcgRGF0ZShwdWJsaXNoZWREYXRlU3RyaW5nKTtcbiAgICAgIHRoaXMubWV0YVNlcnZpY2UudXBkYXRlVGFnKHsgbmFtZTogJ2FydGljbGU6cHVibGlzaGVkX3RpbWUnLCBjb250ZW50OiBwdWJsaXNoZWREYXRlLnRvSVNPU3RyaW5nKCkgfSk7XG4gICAgICB0aGlzLm1ldGFTZXJ2aWNlLnVwZGF0ZVRhZyh7IG5hbWU6ICdwdWJsaXNoZWRfZGF0ZScsIGNvbnRlbnQ6IHB1Ymxpc2hlZERhdGUudG9JU09TdHJpbmcoKSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tZXRhU2VydmljZS5yZW1vdmVUYWcoYG5hbWU9J2FydGljbGU6cHVibGlzaGVkX3RpbWUnYCk7XG4gICAgICB0aGlzLm1ldGFTZXJ2aWNlLnJlbW92ZVRhZyhgbmFtZT0ncHVibGljYXRpb25fZGF0ZSdgKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0TW9kaWZpZWQobW9kaWZpZWREYXRlU3RyaW5nPzogc3RyaW5nKSB7XG4gICAgaWYgKG1vZGlmaWVkRGF0ZVN0cmluZykge1xuICAgICAgY29uc3QgbW9kaWZpZWREYXRlID0gbmV3IERhdGUobW9kaWZpZWREYXRlU3RyaW5nKTtcbiAgICAgIHRoaXMubWV0YVNlcnZpY2UudXBkYXRlVGFnKHsgbmFtZTogJ2FydGljbGU6bW9kaWZpZWRfdGltZScsIGNvbnRlbnQ6IG1vZGlmaWVkRGF0ZS50b0lTT1N0cmluZygpIH0pO1xuICAgICAgdGhpcy5tZXRhU2VydmljZS51cGRhdGVUYWcoeyBuYW1lOiAnb2c6dXBkYXRlZF90aW1lJywgY29udGVudDogbW9kaWZpZWREYXRlLnRvSVNPU3RyaW5nKCkgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWV0YVNlcnZpY2UucmVtb3ZlVGFnKGBuYW1lPSdhcnRpY2xlOm1vZGlmaWVkX3RpbWUnYCk7XG4gICAgICB0aGlzLm1ldGFTZXJ2aWNlLnJlbW92ZVRhZyhgbmFtZT0nb2c6dXBkYXRlZF90aW1lJ2ApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRBdXRob3IoYXV0aG9yPzogc3RyaW5nKSB7XG4gICAgaWYgKGF1dGhvciAmJiBhdXRob3IubGVuZ3RoKSB7XG4gICAgICB0aGlzLm1ldGFTZXJ2aWNlLnVwZGF0ZVRhZyh7IG5hbWU6ICdhcnRpY2xlOmF1dGhvcicsIGNvbnRlbnQ6IGF1dGhvciB9KTtcbiAgICAgIHRoaXMubWV0YVNlcnZpY2UudXBkYXRlVGFnKHsgbmFtZTogJ2F1dGhvcicsIGNvbnRlbnQ6IGF1dGhvciB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tZXRhU2VydmljZS5yZW1vdmVUYWcoYG5hbWU9J2FydGljbGU6YXV0aG9yJ2ApO1xuICAgICAgdGhpcy5tZXRhU2VydmljZS5yZW1vdmVUYWcoYG5hbWU9J2F1dGhvcidgKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0VHdpdHRlclNpdGVDcmVhdG9yKHNpdGU/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoQm9vbGVhbihzaXRlKSkge1xuICAgICAgdGhpcy5tZXRhU2VydmljZS51cGRhdGVUYWcoeyBuYW1lOiAndHdpdHRlcjpzaXRlJywgY29udGVudDogc2l0ZSB9KTtcbiAgICAgIHRoaXMubWV0YVNlcnZpY2UudXBkYXRlVGFnKHsgbmFtZTogJ3R3aXR0ZXI6Y3JlYXRvcicsIGNvbnRlbnQ6IHNpdGUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWV0YVNlcnZpY2UucmVtb3ZlVGFnKGBuYW1lPSd0d2l0dGVyOnNpdGUnYCk7XG4gICAgICB0aGlzLm1ldGFTZXJ2aWNlLnJlbW92ZVRhZyhgbmFtZT0ndHdpdHRlcjpjcmVhdG9yJ2ApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRUd2l0dGVyQ2FyZChjYXJkPzogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKEJvb2xlYW4oY2FyZCkpIHtcbiAgICAgIHRoaXMubWV0YVNlcnZpY2UudXBkYXRlVGFnKHsgbmFtZTogJ3R3aXR0ZXI6Y2FyZCcsIGNvbnRlbnQ6IGNhcmQgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWV0YVNlcnZpY2UucmVtb3ZlVGFnKGBuYW1lPSd0d2l0dGVyOmNhcmQnYCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldEZiQXBwSWQoYXBwSWQ/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoQm9vbGVhbihhcHBJZCkpIHtcbiAgICAgIHRoaXMubWV0YVNlcnZpY2UudXBkYXRlVGFnKHsgcHJvcGVydHk6ICdmYjphcHBfaWQnLCBjb250ZW50OiBhcHBJZCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tZXRhU2VydmljZS5yZW1vdmVUYWcoYHByb3BlcnR5PSdmYjphcHBfaWQnYCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldE1ldGFUYWcobWV0YVRhZzogTmd4U2VvTWV0YVRhZyk6IHZvaWQge1xuICAgIGlmIChCb29sZWFuKG1ldGFUYWcudmFsdWUpKSB7XG4gICAgICBjb25zdCBtZXRhVGFnT2JqZWN0ID0ge1xuICAgICAgICBbbWV0YVRhZy5hdHRyXTogbWV0YVRhZy5hdHRyVmFsdWUsXG4gICAgICAgIGNvbnRlbnQ6IG1ldGFUYWcudmFsdWUsXG4gICAgICB9O1xuICAgICAgdGhpcy5tZXRhU2VydmljZS51cGRhdGVUYWcobWV0YVRhZ09iamVjdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gYCR7bWV0YVRhZy5hdHRyfT0nJHttZXRhVGFnLmF0dHJWYWx1ZX0nYDtcbiAgICAgIHRoaXMubWV0YVNlcnZpY2UucmVtb3ZlVGFnKHNlbGVjdG9yKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0TWV0YVRhZ3MobWV0YVRhZ3M6IE5neFNlb01ldGFUYWdbXSk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgbWV0YVRhZyBvZiBtZXRhVGFncykge1xuICAgICAgdGhpcy5zZXRNZXRhVGFnKG1ldGFUYWcpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRDYW5vbmljYWxVcmwodXJsPzogc3RyaW5nKSB7XG4gICAgLy8gZmlyc3QgcmVtb3ZlIHBvdGVudGlhbCBwcmV2aW91cyB1cmxcbiAgICBjb25zdCBzZWxlY3RvciA9IGBsaW5rW3JlbD0nY2Fub25pY2FsJ11gO1xuICAgIGNvbnN0IGNhbm9uaWNhbEVsZW1lbnQgPSB0aGlzLmRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgaWYgKGNhbm9uaWNhbEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZChjYW5vbmljYWxFbGVtZW50KTtcbiAgICB9XG5cbiAgICBpZiAodXJsICYmIHVybC5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGxpbms6IEhUTUxMaW5rRWxlbWVudCA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdjYW5vbmljYWwnKTtcbiAgICAgIHRoaXMuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgdXJsKTtcbiAgICB9XG4gIH1cblxufVxuIl19