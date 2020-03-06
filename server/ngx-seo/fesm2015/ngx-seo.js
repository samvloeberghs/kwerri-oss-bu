import { Injectable, Optional, Inject, PLATFORM_ID, NgModule, ɵɵdefineInjectable, ɵɵinject } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { BEFORE_APP_SERIALIZED } from '@angular/platform-server';
import { Meta, Title } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function JsonLd() { }
class JsonLdService {
    /**
     * @param {?} platformId
     * @param {?} doc
     */
    constructor(platformId, doc) {
        this.platformId = platformId;
        this.doc = doc;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    setData(data) {
        this.jsonLd = data;
        this.injectBrowser();
    }
    /**
     * @param {?} type
     * @param {?=} rawData
     * @param {?=} context
     * @return {?}
     */
    getObject(type, rawData, context = 'http://schema.org') {
        /** @type {?} */
        let object = {
            '@type': type,
        };
        if (context) {
            object = Object.assign({ '@context': context }, object);
        }
        if (rawData) {
            object = Object.assign({}, object, rawData);
        }
        return object;
    }
    /**
     * @return {?}
     */
    toJson() {
        return JSON.stringify(this.jsonLd);
    }
    /**
     * @private
     * @return {?}
     */
    injectBrowser() {
        if (this.platformId && isPlatformBrowser(this.platformId)) {
            /** @type {?} */
            let ldJsonScriptTag = this.doc.head.querySelector(`script[type='application/ld+json']`);
            if (ldJsonScriptTag) {
                ldJsonScriptTag.textContent = this.toJson();
            }
            else {
                ldJsonScriptTag = this.doc.createElement('script');
                ldJsonScriptTag.setAttribute('type', 'application/ld+json');
                ldJsonScriptTag.textContent = this.toJson();
                this.doc.head.appendChild(ldJsonScriptTag);
            }
        }
    }
}
JsonLdService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
JsonLdService.ctorParameters = () => [
    { type: Object, decorators: [{ type: Optional }, { type: Inject, args: [PLATFORM_ID,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    JsonLdService.prototype.jsonLd;
    /**
     * @type {?}
     * @private
     */
    JsonLdService.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    JsonLdService.prototype.doc;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BrowserJsonLdModule {
}
BrowserJsonLdModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    JsonLdService,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} doc
 * @param {?} jsonLdService
 * @return {?}
 */
function serializeJsonLdFactory(doc, jsonLdService) {
    /** @type {?} */
    const serializeAndInject = (/**
     * @return {?}
     */
    function () {
        /** @type {?} */
        const script = doc.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.textContent = jsonLdService.toJson();
        doc.head.appendChild(script);
    });
    return serializeAndInject;
}
class ServerJsonLdModule {
}
ServerJsonLdModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    JsonLdService, {
                        provide: BEFORE_APP_SERIALIZED,
                        useFactory: serializeJsonLdFactory,
                        deps: [DOCUMENT, JsonLdService],
                        multi: true,
                    },
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const NgxSeoMetaTagAttr = {
    name: 'name',
    property: 'property',
};
/**
 * @record
 */
function NgxSeoMetaTag() { }
if (false) {
    /** @type {?} */
    NgxSeoMetaTag.prototype.attr;
    /** @type {?} */
    NgxSeoMetaTag.prototype.attrValue;
    /** @type {?|undefined} */
    NgxSeoMetaTag.prototype.value;
}
class SeoSocialShareService {
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
/** @nocollapse */ SeoSocialShareService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SeoSocialShareService_Factory() { return new SeoSocialShareService(ɵɵinject(Meta), ɵɵinject(Title), ɵɵinject(DOCUMENT)); }, token: SeoSocialShareService, providedIn: "root" });
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function SeoSocialShareData() { }
if (false) {
    /** @type {?|undefined} */
    SeoSocialShareData.prototype.title;
    /** @type {?|undefined} */
    SeoSocialShareData.prototype.keywords;
    /** @type {?|undefined} */
    SeoSocialShareData.prototype.description;
    /** @type {?|undefined} */
    SeoSocialShareData.prototype.image;
    /** @type {?|undefined} */
    SeoSocialShareData.prototype.url;
    /** @type {?|undefined} */
    SeoSocialShareData.prototype.type;
    /** @type {?|undefined} */
    SeoSocialShareData.prototype.author;
    /** @type {?|undefined} */
    SeoSocialShareData.prototype.section;
    /** @type {?|undefined} */
    SeoSocialShareData.prototype.published;
    /** @type {?|undefined} */
    SeoSocialShareData.prototype.modified;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BrowserJsonLdModule, JsonLdService, NgxSeoMetaTagAttr, SeoSocialShareService, ServerJsonLdModule, serializeJsonLdFactory as ɵa };
//# sourceMappingURL=ngx-seo.js.map
