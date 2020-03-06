(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/platform-server'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('ngx-seo', ['exports', '@angular/core', '@angular/common', '@angular/platform-server', '@angular/platform-browser'], factory) :
    (global = global || self, factory(global['ngx-seo'] = {}, global.ng.core, global.ng.common, global.ng['platform-server'], global.ng.platformBrowser));
}(this, (function (exports, core, common, platformServer, platformBrowser) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

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
            if (this.platformId && common.isPlatformBrowser(this.platformId)) {
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        JsonLdService.ctorParameters = function () { return [
            { type: Object, decorators: [{ type: core.Optional }, { type: core.Inject, args: [core.PLATFORM_ID,] }] },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [common.DOCUMENT,] }] }
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
            { type: core.NgModule, args: [{
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
            { type: core.NgModule, args: [{
                        providers: [
                            JsonLdService, {
                                provide: platformServer.BEFORE_APP_SERIALIZED,
                                useFactory: serializeJsonLdFactory,
                                deps: [common.DOCUMENT, JsonLdService],
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
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        SeoSocialShareService.ctorParameters = function () { return [
            { type: platformBrowser.Meta },
            { type: platformBrowser.Title },
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
        ]; };
        /** @nocollapse */ SeoSocialShareService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SeoSocialShareService_Factory() { return new SeoSocialShareService(core.ɵɵinject(platformBrowser.Meta), core.ɵɵinject(platformBrowser.Title), core.ɵɵinject(common.DOCUMENT)); }, token: SeoSocialShareService, providedIn: "root" });
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

    exports.BrowserJsonLdModule = BrowserJsonLdModule;
    exports.JsonLdService = JsonLdService;
    exports.NgxSeoMetaTagAttr = NgxSeoMetaTagAttr;
    exports.SeoSocialShareService = SeoSocialShareService;
    exports.ServerJsonLdModule = ServerJsonLdModule;
    exports.ɵa = serializeJsonLdFactory;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-seo.umd.js.map
