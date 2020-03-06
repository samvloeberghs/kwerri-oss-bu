import { Injectable, Optional, Inject, PLATFORM_ID, NgModule, ɵɵdefineInjectable, ɵɵinject } from '@angular/core';
import { __assign, __values } from 'tslib';
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
var JsonLdService = /** @class */ (function () {
    function JsonLdService(platformId, doc) {
        this.platformId = platformId;
        this.doc = doc;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    JsonLdService.prototype.setData = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.jsonLd = data;
        this.injectBrowser();
    };
    /**
     * @param {?} type
     * @param {?=} rawData
     * @param {?=} context
     * @return {?}
     */
    JsonLdService.prototype.getObject = /**
     * @param {?} type
     * @param {?=} rawData
     * @param {?=} context
     * @return {?}
     */
    function (type, rawData, context) {
        if (context === void 0) { context = 'http://schema.org'; }
        /** @type {?} */
        var object = {
            '@type': type,
        };
        if (context) {
            object = __assign({ '@context': context }, object);
        }
        if (rawData) {
            object = __assign({}, object, rawData);
        }
        return object;
    };
    /**
     * @return {?}
     */
    JsonLdService.prototype.toJson = /**
     * @return {?}
     */
    function () {
        return JSON.stringify(this.jsonLd);
    };
    /**
     * @private
     * @return {?}
     */
    JsonLdService.prototype.injectBrowser = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.platformId && isPlatformBrowser(this.platformId)) {
            /** @type {?} */
            var ldJsonScriptTag = this.doc.head.querySelector("script[type='application/ld+json']");
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
    };
    JsonLdService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    JsonLdService.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: Optional }, { type: Inject, args: [PLATFORM_ID,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
    ]; };
    return JsonLdService;
}());
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
var BrowserJsonLdModule = /** @class */ (function () {
    function BrowserJsonLdModule() {
    }
    BrowserJsonLdModule.decorators = [
        { type: NgModule, args: [{
                    providers: [
                        JsonLdService,
                    ],
                },] }
    ];
    return BrowserJsonLdModule;
}());

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
    var serializeAndInject = (/**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var script = doc.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.textContent = jsonLdService.toJson();
        doc.head.appendChild(script);
    });
    return serializeAndInject;
}
var ServerJsonLdModule = /** @class */ (function () {
    function ServerJsonLdModule() {
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
    return ServerJsonLdModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var NgxSeoMetaTagAttr = {
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
var SeoSocialShareService = /** @class */ (function () {
    function SeoSocialShareService(metaService, titleService, document) {
        this.metaService = metaService;
        this.titleService = titleService;
        this.document = document;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    SeoSocialShareService.prototype.setData = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
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
    };
    /**
     * @param {?} keywords
     * @return {?}
     */
    SeoSocialShareService.prototype.setKeywords = /**
     * @param {?} keywords
     * @return {?}
     */
    function (keywords) {
        if (Boolean(keywords)) {
            this.metaService.updateTag({ name: 'keywords', content: keywords });
        }
        else {
            this.metaService.removeTag("name='keywords'");
        }
    };
    /**
     * @param {?=} section
     * @return {?}
     */
    SeoSocialShareService.prototype.setSection = /**
     * @param {?=} section
     * @return {?}
     */
    function (section) {
        if (Boolean(section)) {
            this.metaService.updateTag({ name: 'article:section', content: section });
        }
        else {
            this.metaService.removeTag("name='article:section'");
        }
    };
    /**
     * @param {?=} title
     * @return {?}
     */
    SeoSocialShareService.prototype.setTitle = /**
     * @param {?=} title
     * @return {?}
     */
    function (title) {
        if (title === void 0) { title = ''; }
        this.titleService.setTitle(title);
        if (title && title.length) {
            this.metaService.updateTag({ name: 'twitter:title', content: title });
            this.metaService.updateTag({ name: 'twitter:image:alt', content: title });
            this.metaService.updateTag({ property: 'og:image:alt', content: title });
            this.metaService.updateTag({ property: 'og:title', content: title });
            this.metaService.updateTag({ name: 'title', content: title });
        }
        else {
            this.metaService.removeTag("name='twitter:title'");
            this.metaService.removeTag("name='twitter:image:alt'");
            this.metaService.removeTag("property='og:image:alt'");
            this.metaService.removeTag("property='og:title'");
            this.metaService.removeTag("name='title'");
        }
    };
    /**
     * @param {?=} type
     * @return {?}
     */
    SeoSocialShareService.prototype.setType = /**
     * @param {?=} type
     * @return {?}
     */
    function (type) {
        if (type && type.length) {
            this.metaService.updateTag({ property: 'og:type', content: type });
        }
        else {
            this.metaService.removeTag("property='og:type'");
        }
    };
    /**
     * @param {?=} description
     * @return {?}
     */
    SeoSocialShareService.prototype.setDescription = /**
     * @param {?=} description
     * @return {?}
     */
    function (description) {
        if (description && description.length) {
            this.metaService.updateTag({ name: 'twitter:description', content: description });
            this.metaService.updateTag({ property: 'og:description', content: description });
            this.metaService.updateTag({ name: 'description', content: description });
        }
        else {
            this.metaService.removeTag("name='twitter:description'");
            this.metaService.removeTag("property='og:description'");
            this.metaService.removeTag("name='description'");
        }
    };
    /**
     * @param {?=} image
     * @return {?}
     */
    SeoSocialShareService.prototype.setImage = /**
     * @param {?=} image
     * @return {?}
     */
    function (image) {
        if (image && image.length) {
            this.metaService.updateTag({ name: 'twitter:image', content: image });
            this.metaService.updateTag({ property: 'og:image', content: image });
            this.metaService.updateTag({ property: 'og:image:height', content: '630' });
        }
        else {
            this.metaService.removeTag("name='twitter:image'");
            this.metaService.removeTag("property='og:image'");
            this.metaService.removeTag("property='og:image:height'");
        }
    };
    /**
     * @param {?=} url
     * @return {?}
     */
    SeoSocialShareService.prototype.setUrl = /**
     * @param {?=} url
     * @return {?}
     */
    function (url) {
        if (url && url.length) {
            this.metaService.updateTag({ property: 'og:url', content: url });
        }
        else {
            this.metaService.removeTag("property='og:url'");
        }
        this.setCanonicalUrl(url);
    };
    /**
     * @param {?=} publishedDateString
     * @return {?}
     */
    SeoSocialShareService.prototype.setPublished = /**
     * @param {?=} publishedDateString
     * @return {?}
     */
    function (publishedDateString) {
        if (publishedDateString) {
            /** @type {?} */
            var publishedDate = new Date(publishedDateString);
            this.metaService.updateTag({ name: 'article:published_time', content: publishedDate.toISOString() });
            this.metaService.updateTag({ name: 'published_date', content: publishedDate.toISOString() });
        }
        else {
            this.metaService.removeTag("name='article:published_time'");
            this.metaService.removeTag("name='publication_date'");
        }
    };
    /**
     * @param {?=} modifiedDateString
     * @return {?}
     */
    SeoSocialShareService.prototype.setModified = /**
     * @param {?=} modifiedDateString
     * @return {?}
     */
    function (modifiedDateString) {
        if (modifiedDateString) {
            /** @type {?} */
            var modifiedDate = new Date(modifiedDateString);
            this.metaService.updateTag({ name: 'article:modified_time', content: modifiedDate.toISOString() });
            this.metaService.updateTag({ name: 'og:updated_time', content: modifiedDate.toISOString() });
        }
        else {
            this.metaService.removeTag("name='article:modified_time'");
            this.metaService.removeTag("name='og:updated_time'");
        }
    };
    /**
     * @param {?=} author
     * @return {?}
     */
    SeoSocialShareService.prototype.setAuthor = /**
     * @param {?=} author
     * @return {?}
     */
    function (author) {
        if (author && author.length) {
            this.metaService.updateTag({ name: 'article:author', content: author });
            this.metaService.updateTag({ name: 'author', content: author });
        }
        else {
            this.metaService.removeTag("name='article:author'");
            this.metaService.removeTag("name='author'");
        }
    };
    /**
     * @param {?=} site
     * @return {?}
     */
    SeoSocialShareService.prototype.setTwitterSiteCreator = /**
     * @param {?=} site
     * @return {?}
     */
    function (site) {
        if (Boolean(site)) {
            this.metaService.updateTag({ name: 'twitter:site', content: site });
            this.metaService.updateTag({ name: 'twitter:creator', content: site });
        }
        else {
            this.metaService.removeTag("name='twitter:site'");
            this.metaService.removeTag("name='twitter:creator'");
        }
    };
    /**
     * @param {?=} card
     * @return {?}
     */
    SeoSocialShareService.prototype.setTwitterCard = /**
     * @param {?=} card
     * @return {?}
     */
    function (card) {
        if (Boolean(card)) {
            this.metaService.updateTag({ name: 'twitter:card', content: card });
        }
        else {
            this.metaService.removeTag("name='twitter:card'");
        }
    };
    /**
     * @param {?=} appId
     * @return {?}
     */
    SeoSocialShareService.prototype.setFbAppId = /**
     * @param {?=} appId
     * @return {?}
     */
    function (appId) {
        if (Boolean(appId)) {
            this.metaService.updateTag({ property: 'fb:app_id', content: appId });
        }
        else {
            this.metaService.removeTag("property='fb:app_id'");
        }
    };
    /**
     * @param {?} metaTag
     * @return {?}
     */
    SeoSocialShareService.prototype.setMetaTag = /**
     * @param {?} metaTag
     * @return {?}
     */
    function (metaTag) {
        var _a;
        if (Boolean(metaTag.value)) {
            /** @type {?} */
            var metaTagObject = (_a = {},
                _a[metaTag.attr] = metaTag.attrValue,
                _a.content = metaTag.value,
                _a);
            this.metaService.updateTag(metaTagObject);
        }
        else {
            /** @type {?} */
            var selector = metaTag.attr + "='" + metaTag.attrValue + "'";
            this.metaService.removeTag(selector);
        }
    };
    /**
     * @param {?} metaTags
     * @return {?}
     */
    SeoSocialShareService.prototype.setMetaTags = /**
     * @param {?} metaTags
     * @return {?}
     */
    function (metaTags) {
        var e_1, _a;
        try {
            for (var metaTags_1 = __values(metaTags), metaTags_1_1 = metaTags_1.next(); !metaTags_1_1.done; metaTags_1_1 = metaTags_1.next()) {
                var metaTag = metaTags_1_1.value;
                this.setMetaTag(metaTag);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (metaTags_1_1 && !metaTags_1_1.done && (_a = metaTags_1.return)) _a.call(metaTags_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @param {?=} url
     * @return {?}
     */
    SeoSocialShareService.prototype.setCanonicalUrl = /**
     * @param {?=} url
     * @return {?}
     */
    function (url) {
        // first remove potential previous url
        /** @type {?} */
        var selector = "link[rel='canonical']";
        /** @type {?} */
        var canonicalElement = this.document.head.querySelector(selector);
        if (canonicalElement) {
            this.document.head.removeChild(canonicalElement);
        }
        if (url && url.length) {
            /** @type {?} */
            var link = this.document.createElement('link');
            link.setAttribute('rel', 'canonical');
            this.document.head.appendChild(link);
            link.setAttribute('href', url);
        }
    };
    SeoSocialShareService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    SeoSocialShareService.ctorParameters = function () { return [
        { type: Meta },
        { type: Title },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ SeoSocialShareService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SeoSocialShareService_Factory() { return new SeoSocialShareService(ɵɵinject(Meta), ɵɵinject(Title), ɵɵinject(DOCUMENT)); }, token: SeoSocialShareService, providedIn: "root" });
    return SeoSocialShareService;
}());
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
