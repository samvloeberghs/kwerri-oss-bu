(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../dist/ngx-seo/bundles/ngx-seo.umd.js":
/*!*******************************************************************************************!*\
  !*** /Users/samvloeberghs/Projects/Kwerri/kwerri-oss/dist/ngx-seo/bundles/ngx-seo.umd.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
     true ? factory(exports, __webpack_require__(/*! @angular/core */ "@angular/core"), __webpack_require__(/*! @angular/common */ "@angular/common"), __webpack_require__(/*! @angular/platform-server */ "@angular/platform-server"), __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser")) :
    undefined;
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
    if (false) {}

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
    if (false) {}
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
    if (false) {}

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function SeoSocialShareData() { }
    if (false) {}

    exports.BrowserJsonLdModule = BrowserJsonLdModule;
    exports.JsonLdService = JsonLdService;
    exports.NgxSeoMetaTagAttr = NgxSeoMetaTagAttr;
    exports.SeoSocialShareService = SeoSocialShareService;
    exports.ServerJsonLdModule = ServerJsonLdModule;
    exports.ɵa = serializeJsonLdFactory;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-seo.umd.js.map


/***/ }),

/***/ "../../node_modules/@angular/router/router.ngfactory.js":
/*!********************************************************************************************************!*\
  !*** /Users/samvloeberghs/Projects/Kwerri/kwerri-oss/node_modules/@angular/router/router.ngfactory.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var RouterModuleNgFactory = i0.ɵcmf(i1.RouterModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [ɵangular_packages_router_router_lNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(1073742336, i1.RouterModule, i1.RouterModule, [[2, i1.ɵangular_packages_router_router_a], [2, i1.Router]])]); });
exports.RouterModuleNgFactory = RouterModuleNgFactory;
var styles_ɵangular_packages_router_router_l = [];
var RenderType_ɵangular_packages_router_router_l = i0.ɵcrt({ encapsulation: 2, styles: styles_ɵangular_packages_router_router_l, data: {} });
exports.RenderType_ɵangular_packages_router_router_l = RenderType_ɵangular_packages_router_router_l;
function View_ɵangular_packages_router_router_l_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), i0.ɵdid(1, 212992, null, 0, i1.RouterOutlet, [i1.ChildrenOutletContexts, i0.ViewContainerRef, i0.ComponentFactoryResolver, [8, null], i0.ChangeDetectorRef], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ɵangular_packages_router_router_l_0 = View_ɵangular_packages_router_router_l_0;
function View_ɵangular_packages_router_router_l_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ng-component", [], null, null, null, View_ɵangular_packages_router_router_l_0, RenderType_ɵangular_packages_router_router_l)), i0.ɵdid(1, 49152, null, 0, i1.ɵangular_packages_router_router_l, [], null, null)], null, null); }
exports.View_ɵangular_packages_router_router_l_Host_0 = View_ɵangular_packages_router_router_l_Host_0;
var ɵangular_packages_router_router_lNgFactory = i0.ɵccf("ng-component", i1.ɵangular_packages_router_router_l, View_ɵangular_packages_router_router_l_Host_0, {}, {}, []);
exports.ɵangular_packages_router_router_lNgFactory = ɵangular_packages_router_router_lNgFactory;


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var not_found_component_1 = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
var routes = [
    {
        path: '',
        loadChildren: './pages/home/home.module#HomeModule',
    },
    {
        path: 'kwerri',
        loadChildren: './pages/kwerri/kwerri.module#KwerriModule',
    },
    {
        path: 'about',
        loadChildren: './pages/about/about.module#AboutModule',
    },
    {
        path: 'talks-workshops',
        loadChildren: './pages/talks/talks.module#TalksModule',
    },
    {
        path: 'projects',
        loadChildren: './pages/projects/projects.module#ProjectsModule',
    },
    {
        path: 'posts',
        loadChildren: './pages/posts/posts.module#PostsModule',
    },
    {
        path: 'not-found',
        component: not_found_component_1.NotFoundComponent
    },
    {
        path: '**',
        redirectTo: '/not-found'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./app.component.scss.ngstyle */ "./src/app/app.component.scss.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i4 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var i5 = __webpack_require__(/*! ./shared/route-helper.service */ "./src/app/shared/route-helper.service.ts");
var i6 = __webpack_require__(/*! ngx-seo */ "../../dist/ngx-seo/bundles/ngx-seo.umd.js");
var i7 = __webpack_require__(/*! ./shared/environment.service */ "./src/app/shared/environment.service.ts");
var styles_AppComponent = [i0.styles];
var RenderType_AppComponent = i1.ɵcrt({ encapsulation: 2, styles: styles_AppComponent, data: {} });
exports.RenderType_AppComponent = RenderType_AppComponent;
function View_AppComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "a", [["class", "new-version-available-msg"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.update($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["New version available!"])), (_l()(), i1.ɵeld(3, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Reload the page please"]))], null, null); }
function View_AppComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "close"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Close navigation>"]))], null, null); }
function View_AppComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "open"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Open navigation>"]))], null, null); }
function View_AppComponent_0(_l) { return i1.ɵvid(0, [i1.ɵpid(0, i2.DatePipe, [i1.LOCALE_ID]), (_l()(), i1.ɵeld(1, 0, null, null, 89, "aside", [], [[2, "open", null]], null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 3, "a", [["id", "picture"], ["routerLink", "/"], ["title", "To homepage"]], [[2, "new-version-available", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(3, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpid(131072, i2.AsyncPipe, [i1.ChangeDetectorRef]), (_l()(), i1.ɵeld(5, 0, null, null, 0, "img", [["alt", "Sam Vloeberghs"], ["src", "data:image/jpeg;base64,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"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 2, null, View_AppComponent_1)), i1.ɵdid(7, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), i1.ɵpid(131072, i2.AsyncPipe, [i1.ChangeDetectorRef]), (_l()(), i1.ɵeld(9, 0, null, null, 3, "h1", [], null, null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 2, "a", [["routerLink", "/"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 11).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(11, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Sam Vloeberghs"])), (_l()(), i1.ɵeld(13, 0, null, null, 5, "a", [["id", "mobilemenu"], ["routerLink", "/"], ["target", "navigation"], ["title", "Open mobile navigation"]], [[2, "opened", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 14).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.toggleMobileNav($event, true) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i1.ɵdid(14, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { target: [0, "target"], routerLink: [1, "routerLink"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_AppComponent_2)), i1.ɵdid(16, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_AppComponent_3)), i1.ɵdid(18, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(19, 0, null, null, 2, "a", [["id", "scrolltocontent"]], [[8, "href", 4]], null, null, null, null)), i1.ɵpid(131072, i2.AsyncPipe, [i1.ChangeDetectorRef]), (_l()(), i1.ɵted(-1, null, [" Scroll down to content "])), (_l()(), i1.ɵeld(22, 0, null, null, 68, "div", [["id", "mobilenavcontainer"]], null, null, null, null, null)), (_l()(), i1.ɵeld(23, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" I'm a Belgium \uD83C\uDDE7\uD83C\uDDEA based freelance software architect and Internet entrepreneur, currently focusing on frontend technologies. "])), (_l()(), i1.ɵeld(25, 0, null, null, 18, "ul", [["class", "social"]], null, null, null, null, null)), (_l()(), i1.ɵeld(26, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(27, 0, null, null, 1, "a", [["aria-label", "Sam on Facebook"], ["class", "facebook ignoreexternal"], ["href", "https://www.facebook.com/sam.vloeberghs"], ["rel", "noopener"], ["target", "_blank"], ["title", "Sam on Facebook"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Facebook "])), (_l()(), i1.ɵeld(29, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(30, 0, null, null, 1, "a", [["aria-label", "Sam on Twitter"], ["class", "twitter ignoreexternal"], ["href", "https://twitter.com/samvloeberghs"], ["rel", "noopener"], ["target", "_blank"], ["title", "Sam on Twitter"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Twitter "])), (_l()(), i1.ɵeld(32, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(33, 0, null, null, 1, "a", [["aria-label", "Sam on Github"], ["class", "github ignoreexternal"], ["href", "https://github.com/samvloeberghs"], ["rel", "noopener"], ["target", "_blank"], ["title", "Sam on Github"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Github "])), (_l()(), i1.ɵeld(35, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(36, 0, null, null, 1, "a", [["aria-label", "Sam on Skype"], ["class", "skype ignoreexternal"], ["href", "skype:sam.vloeberghs"], ["rel", "noopener"], ["target", "_blank"], ["title", "Sam on Skype"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Skype "])), (_l()(), i1.ɵeld(38, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(39, 0, null, null, 1, "a", [["aria-label", "Sam on LinkedIn"], ["class", "linkedin ignoreexternal"], ["href", "https://be.linkedin.com/in/samvloeberghs"], ["rel", "noopener"], ["target", "_blank"], ["title", "Sam on LinkedIn"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" LinkedIn "])), (_l()(), i1.ɵeld(41, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(42, 0, null, null, 1, "a", [["aria-label", "Sam on Stack Overflow"], ["class", "stack-overflow ignoreexternal"], ["href", "http://stackoverflow.com/users/288606/sam-vloeberghs"], ["rel", "noopener"], ["target", "_blank"], ["title", "Sam on Stack Overflow"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Stack Overflow "])), (_l()(), i1.ɵeld(44, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Navigation"])), (_l()(), i1.ɵeld(46, 0, null, null, 44, "nav", [], null, null, null, null, null)), (_l()(), i1.ɵeld(47, 0, null, null, 43, "ol", [["id", "navigation"]], null, null, null, null, null)), (_l()(), i1.ɵeld(48, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(49, 0, null, null, 6, "a", [["routerLink", "/"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 50).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.navigateMobile() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i1.ɵdid(50, 671744, [[2, 4]], 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵdid(51, 1720320, null, 2, i3.RouterLinkActive, [i3.Router, i1.ElementRef, i1.Renderer2, [2, i3.RouterLink], [2, i3.RouterLinkWithHref]], { routerLinkActiveOptions: [0, "routerLinkActiveOptions"], routerLinkActive: [1, "routerLinkActive"] }, null), i1.ɵqud(603979776, 1, { links: 1 }), i1.ɵqud(603979776, 2, { linksWithHrefs: 1 }), i1.ɵpod(54, { exact: 0 }), (_l()(), i1.ɵted(-1, null, [" Home "])), (_l()(), i1.ɵeld(56, 0, null, null, 6, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(57, 0, null, null, 5, "a", [["routerLink", "/posts"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 58).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.navigateMobile() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i1.ɵdid(58, 671744, [[4, 4]], 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵdid(59, 1720320, null, 2, i3.RouterLinkActive, [i3.Router, i1.ElementRef, i1.Renderer2, [2, i3.RouterLink], [2, i3.RouterLinkWithHref]], { routerLinkActive: [0, "routerLinkActive"] }, null), i1.ɵqud(603979776, 3, { links: 1 }), i1.ɵqud(603979776, 4, { linksWithHrefs: 1 }), (_l()(), i1.ɵted(-1, null, [" Posts "])), (_l()(), i1.ɵeld(63, 0, null, null, 6, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(64, 0, null, null, 5, "a", [["routerLink", "/talks-workshops"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 65).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.navigateMobile() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i1.ɵdid(65, 671744, [[6, 4]], 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵdid(66, 1720320, null, 2, i3.RouterLinkActive, [i3.Router, i1.ElementRef, i1.Renderer2, [2, i3.RouterLink], [2, i3.RouterLinkWithHref]], { routerLinkActive: [0, "routerLinkActive"] }, null), i1.ɵqud(603979776, 5, { links: 1 }), i1.ɵqud(603979776, 6, { linksWithHrefs: 1 }), (_l()(), i1.ɵted(-1, null, [" Talks & workshops "])), (_l()(), i1.ɵeld(70, 0, null, null, 6, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(71, 0, null, null, 5, "a", [["routerLink", "/projects"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 72).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.navigateMobile() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i1.ɵdid(72, 671744, [[8, 4]], 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵdid(73, 1720320, null, 2, i3.RouterLinkActive, [i3.Router, i1.ElementRef, i1.Renderer2, [2, i3.RouterLink], [2, i3.RouterLinkWithHref]], { routerLinkActive: [0, "routerLinkActive"] }, null), i1.ɵqud(603979776, 7, { links: 1 }), i1.ɵqud(603979776, 8, { linksWithHrefs: 1 }), (_l()(), i1.ɵted(-1, null, [" Projects "])), (_l()(), i1.ɵeld(77, 0, null, null, 6, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(78, 0, null, null, 5, "a", [["routerLink", "/about"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 79).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.navigateMobile() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i1.ɵdid(79, 671744, [[10, 4]], 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵdid(80, 1720320, null, 2, i3.RouterLinkActive, [i3.Router, i1.ElementRef, i1.Renderer2, [2, i3.RouterLink], [2, i3.RouterLinkWithHref]], { routerLinkActive: [0, "routerLinkActive"] }, null), i1.ɵqud(603979776, 9, { links: 1 }), i1.ɵqud(603979776, 10, { linksWithHrefs: 1 }), (_l()(), i1.ɵted(-1, null, [" About me "])), (_l()(), i1.ɵeld(84, 0, null, null, 6, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(85, 0, null, null, 5, "a", [["routerLink", "/kwerri"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 86).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.navigateMobile() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i1.ɵdid(86, 671744, [[12, 4]], 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵdid(87, 1720320, null, 2, i3.RouterLinkActive, [i3.Router, i1.ElementRef, i1.Renderer2, [2, i3.RouterLink], [2, i3.RouterLinkWithHref]], { routerLinkActive: [0, "routerLinkActive"] }, null), i1.ɵqud(603979776, 11, { links: 1 }), i1.ɵqud(603979776, 12, { linksWithHrefs: 1 }), (_l()(), i1.ɵted(-1, null, [" Kwerri "])), (_l()(), i1.ɵeld(91, 0, null, null, 9, "section", [["class", "content"], ["id", "content"]], null, null, null, null, null)), (_l()(), i1.ɵeld(92, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), i1.ɵdid(93, 212992, null, 0, i3.RouterOutlet, [i3.ChildrenOutletContexts, i1.ViewContainerRef, i1.ComponentFactoryResolver, [8, null], i1.ChangeDetectorRef], null, null), (_l()(), i1.ɵeld(94, 0, null, null, 6, "footer", [], null, null, null, null, null)), (_l()(), i1.ɵeld(95, 0, null, null, 5, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(96, null, [" \u00A9 1988 - ", " \u2014 Sam Vloeberghs \u2014 This website, how it's coded and the software it uses is all open-source. So "])), i1.ɵppd(97, 2), (_l()(), i1.ɵeld(98, 0, null, null, 1, "a", [["href", "https://github.com/samvloeberghs/kwerri-oss"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["feel free to be inspired and copy the architecture"])), (_l()(), i1.ɵted(-1, null, [". The design & the content however, like for example the written articles, are my own thoughts and inspiration. Please reference the relevant page if you use (parts of) it. "]))], function (_ck, _v) { var _co = _v.component; var currVal_4 = "/"; _ck(_v, 3, 0, currVal_4); var currVal_5 = i1.ɵunv(_v, 7, 0, i1.ɵnov(_v, 8).transform(_co.newVersionAvailable$)); _ck(_v, 7, 0, currVal_5); var currVal_8 = "/"; _ck(_v, 11, 0, currVal_8); var currVal_12 = "navigation"; var currVal_13 = "/"; _ck(_v, 14, 0, currVal_12, currVal_13); var currVal_14 = _co.mobileNavToggled; _ck(_v, 16, 0, currVal_14); var currVal_15 = !_co.mobileNavToggled; _ck(_v, 18, 0, currVal_15); var currVal_19 = "/"; _ck(_v, 50, 0, currVal_19); var currVal_20 = _ck(_v, 54, 0, true); var currVal_21 = "active"; _ck(_v, 51, 0, currVal_20, currVal_21); var currVal_24 = "/posts"; _ck(_v, 58, 0, currVal_24); var currVal_25 = "active"; _ck(_v, 59, 0, currVal_25); var currVal_28 = "/talks-workshops"; _ck(_v, 65, 0, currVal_28); var currVal_29 = "active"; _ck(_v, 66, 0, currVal_29); var currVal_32 = "/projects"; _ck(_v, 72, 0, currVal_32); var currVal_33 = "active"; _ck(_v, 73, 0, currVal_33); var currVal_36 = "/about"; _ck(_v, 79, 0, currVal_36); var currVal_37 = "active"; _ck(_v, 80, 0, currVal_37); var currVal_40 = "/kwerri"; _ck(_v, 86, 0, currVal_40); var currVal_41 = "active"; _ck(_v, 87, 0, currVal_41); _ck(_v, 93, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.mobileNavToggled; _ck(_v, 1, 0, currVal_0); var currVal_1 = i1.ɵunv(_v, 2, 0, i1.ɵnov(_v, 4).transform(_co.newVersionAvailable$)); var currVal_2 = i1.ɵnov(_v, 3).target; var currVal_3 = i1.ɵnov(_v, 3).href; _ck(_v, 2, 0, currVal_1, currVal_2, currVal_3); var currVal_6 = i1.ɵnov(_v, 11).target; var currVal_7 = i1.ɵnov(_v, 11).href; _ck(_v, 10, 0, currVal_6, currVal_7); var currVal_9 = _co.mobileNavToggled; var currVal_10 = i1.ɵnov(_v, 14).target; var currVal_11 = i1.ɵnov(_v, 14).href; _ck(_v, 13, 0, currVal_9, currVal_10, currVal_11); var currVal_16 = i1.ɵinlineInterpolate(1, "", i1.ɵunv(_v, 19, 0, i1.ɵnov(_v, 20).transform(_co.currentUrl$)), "#content"); _ck(_v, 19, 0, currVal_16); var currVal_17 = i1.ɵnov(_v, 50).target; var currVal_18 = i1.ɵnov(_v, 50).href; _ck(_v, 49, 0, currVal_17, currVal_18); var currVal_22 = i1.ɵnov(_v, 58).target; var currVal_23 = i1.ɵnov(_v, 58).href; _ck(_v, 57, 0, currVal_22, currVal_23); var currVal_26 = i1.ɵnov(_v, 65).target; var currVal_27 = i1.ɵnov(_v, 65).href; _ck(_v, 64, 0, currVal_26, currVal_27); var currVal_30 = i1.ɵnov(_v, 72).target; var currVal_31 = i1.ɵnov(_v, 72).href; _ck(_v, 71, 0, currVal_30, currVal_31); var currVal_34 = i1.ɵnov(_v, 79).target; var currVal_35 = i1.ɵnov(_v, 79).href; _ck(_v, 78, 0, currVal_34, currVal_35); var currVal_38 = i1.ɵnov(_v, 86).target; var currVal_39 = i1.ɵnov(_v, 86).href; _ck(_v, 85, 0, currVal_38, currVal_39); var currVal_42 = i1.ɵunv(_v, 96, 0, _ck(_v, 97, 0, i1.ɵnov(_v, 0), _co.today, "yyyy")); _ck(_v, 96, 0, currVal_42); }); }
exports.View_AppComponent_0 = View_AppComponent_0;
function View_AppComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "sv-app", [], null, [["document", "keydown"]], function (_v, en, $event) { var ad = true; if (("document:keydown" === en)) {
        var pd_0 = (i1.ɵnov(_v, 1).onKeydownHandler($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_AppComponent_0, RenderType_AppComponent)), i1.ɵdid(1, 49152, null, 0, i4.AppComponent, [i5.RouteHelper, i6.SeoSocialShareService, i7.EnvironmentService], null, null)], null, null); }
exports.View_AppComponent_Host_0 = View_AppComponent_Host_0;
var AppComponentNgFactory = i1.ɵccf("sv-app", i4.AppComponent, View_AppComponent_Host_0, {}, {}, []);
exports.AppComponentNgFactory = AppComponentNgFactory;


/***/ }),

/***/ "./src/app/app.component.scss.ngstyle.js":
/*!***********************************************!*\
  !*** ./src/app/app.component.scss.ngstyle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["@charset \"UTF-8\";\ndiv.code-toolbar {\n\tposition: relative;\n}\ndiv.code-toolbar > .toolbar {\n\tposition: absolute;\n\ttop: .3em;\n\tright: .2em;\n\t-webkit-transition: opacity 0.3s ease-in-out;\n\ttransition: opacity 0.3s ease-in-out;\n\topacity: 0;\n}\ndiv.code-toolbar:hover > .toolbar {\n\topacity: 1;\n}\n\ndiv.code-toolbar:focus-within > .toolbar {\n\topacity: 1;\n}\ndiv.code-toolbar > .toolbar .toolbar-item {\n\tdisplay: inline-block;\n}\ndiv.code-toolbar > .toolbar a {\n\tcursor: pointer;\n}\ndiv.code-toolbar > .toolbar button {\n\tbackground: none;\n\tborder: 0;\n\tcolor: inherit;\n\tfont: inherit;\n\tline-height: normal;\n\toverflow: visible;\n\tpadding: 0;\n\t-webkit-user-select: none; \n\t-moz-user-select: none;\n\t-ms-user-select: none;\n}\ndiv.code-toolbar > .toolbar a,\ndiv.code-toolbar > .toolbar button,\ndiv.code-toolbar > .toolbar span {\n\tcolor: #bbb;\n\tfont-size: .8em;\n\tpadding: 0 .5em;\n\tbackground: #f5f2f0;\n\tbackground: rgba(224, 224, 224, 0.2);\n\tbox-shadow: 0 2px 0 0 rgba(0,0,0,0.2);\n\tborder-radius: .5em;\n}\ndiv.code-toolbar > .toolbar a:hover,\ndiv.code-toolbar > .toolbar a:focus,\ndiv.code-toolbar > .toolbar button:hover,\ndiv.code-toolbar > .toolbar button:focus,\ndiv.code-toolbar > .toolbar span:hover,\ndiv.code-toolbar > .toolbar span:focus {\n\tcolor: inherit;\n\ttext-decoration: none;\n}\n\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tcolor: black;\n\tbackground: none;\n\ttext-shadow: 0 1px white;\n\tfont-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n\tfont-size: 1em;\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\ttab-size: 4;\n\n\t-webkit-hyphens: none;\n\t-ms-hyphens: none;\n\thyphens: none;\n}\npre[class*=\"language-\"]::-moz-selection, pre[class*=\"language-\"] ::-moz-selection,\ncode[class*=\"language-\"]::-moz-selection, code[class*=\"language-\"] ::-moz-selection {\n\ttext-shadow: none;\n\tbackground: #b3d4fc;\n}\npre[class*=\"language-\"]::selection, pre[class*=\"language-\"] ::selection,\ncode[class*=\"language-\"]::selection, code[class*=\"language-\"] ::selection {\n\ttext-shadow: none;\n\tbackground: #b3d4fc;\n}\n@media print {\n\tcode[class*=\"language-\"],\n\tpre[class*=\"language-\"] {\n\t\ttext-shadow: none;\n\t}\n}\n\npre[class*=\"language-\"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n}\n:not(pre) > code[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tbackground: #f5f2f0;\n}\n\n:not(pre) > code[class*=\"language-\"] {\n\tpadding: .1em;\n\tborder-radius: .3em;\n\twhite-space: normal;\n}\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: slategray;\n}\n.token.punctuation {\n\tcolor: #999;\n}\n.token.namespace {\n\topacity: .7;\n}\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: #905;\n}\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: #690;\n}\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string {\n\tcolor: #9a6e3a;\n\tbackground: hsla(0, 0%, 100%, .5);\n}\n.token.atrule,\n.token.attr-value,\n.token.keyword {\n\tcolor: #07a;\n}\n.token.function,\n.token.class-name {\n\tcolor: #DD4A68;\n}\n.token.regex,\n.token.important,\n.token.variable {\n\tcolor: #e90;\n}\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n.token.entity {\n\tcursor: help;\n}\npre[class*=\"language-\"].line-numbers {\n\tposition: relative;\n\tpadding-left: 3.8em;\n\tcounter-reset: linenumber;\n}\npre[class*=\"language-\"].line-numbers > code {\n\tposition: relative;\n\twhite-space: inherit;\n}\n.line-numbers .line-numbers-rows {\n\tposition: absolute;\n\tpointer-events: none;\n\ttop: 0;\n\tfont-size: 100%;\n\tleft: -3.8em;\n\twidth: 3em; \n\tletter-spacing: -1px;\n\tborder-right: 1px solid #999;\n\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\n}\n.line-numbers-rows > span {\n\t\tpointer-events: none;\n\t\tdisplay: block;\n\t\tcounter-increment: linenumber;\n\t}\n.line-numbers-rows > span:before {\n\t\t\tcontent: counter(linenumber);\n\t\t\tcolor: #999;\n\t\t\tdisplay: block;\n\t\t\tpadding-right: 0.8em;\n\t\t\ttext-align: right;\n\t\t}\npre[data-line] {\n\tposition: relative;\n\tpadding: 1em 0 1em 3em;\n}\n.line-highlight {\n\tposition: absolute;\n\tleft: 0;\n\tright: 0;\n\tpadding: inherit 0;\n\tmargin-top: 1em; \n\n\tbackground: hsla(24, 20%, 50%,.08);\n\tbackground: -webkit-gradient(linear, left top, right top, color-stop(70%, hsla(24, 20%, 50%,.1)), to(hsla(24, 20%, 50%,0)));\n\tbackground: linear-gradient(to right, hsla(24, 20%, 50%,.1) 70%, hsla(24, 20%, 50%,0));\n\n\tpointer-events: none;\n\n\tline-height: inherit;\n\twhite-space: pre;\n}\n.line-highlight:before,\n\t.line-highlight[data-end]:after {\n\t\tcontent: attr(data-start);\n\t\tposition: absolute;\n\t\ttop: .4em;\n\t\tleft: .6em;\n\t\tmin-width: 1em;\n\t\tpadding: 0 .5em;\n\t\tbackground-color: hsla(24, 20%, 50%,.4);\n\t\tcolor: hsl(24, 20%, 95%);\n\t\tfont: bold 65%/1.5 sans-serif;\n\t\ttext-align: center;\n\t\tvertical-align: .3em;\n\t\tborder-radius: 999px;\n\t\ttext-shadow: none;\n\t\tbox-shadow: 0 1px white;\n\t}\n.line-highlight[data-end]:after {\n\t\tcontent: attr(data-end);\n\t\ttop: auto;\n\t\tbottom: .4em;\n\t}\n.line-numbers .line-highlight:before,\n.line-numbers .line-highlight:after {\n\tcontent: none;\n}\n* {\n  margin: 0;\n  padding: 0;\n}\nhtml {\n  scroll-behavior: smooth;\n}\n::-moz-selection {\n  background: black;\n  color: white;\n}\n::selection {\n  background: black;\n  color: white;\n}\n#topborder {\n  border-top: 9px solid #555;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n}\n.hidden {\n  display: none !important;\n}\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n  font-size: 12px;\n  font-weight: 300;\n}\nem {\n  font-weight: 500;\n  font-style: normal;\n}\nstrong {\n  font-weight: 500;\n  font-style: normal;\n}\ntable a,\np a,\nul li a,\nol li a {\n  color: #20527f;\n  border-bottom: 1px dotted #20527f;\n  text-decoration: none;\n}\ntable a:hover,\np a:hover,\nul li a:hover,\nol li a:hover {\n  color: #77a5cf;\n  border-bottom: 1px solid #77a5cf;\n}\na[rel=noopener]:not(.ignoreexternal):after {\n  content: \"\";\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%2320527f' d='M497.6,0,334.4.17A14.4,14.4,0,0,0,320,14.57V47.88a14.4,14.4,0,0,0,14.69,14.4l73.63-2.72,2.06,2.06L131.52,340.49a12,12,0,0,0,0,17l23,23a12,12,0,0,0,17,0L450.38,101.62l2.06,2.06-2.72,73.63A14.4,14.4,0,0,0,464.12,192h33.31a14.4,14.4,0,0,0,14.4-14.4L512,14.4A14.4,14.4,0,0,0,497.6,0ZM432,288H416a16,16,0,0,0-16,16V458a6,6,0,0,1-6,6H54a6,6,0,0,1-6-6V118a6,6,0,0,1,6-6H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V304A16,16,0,0,0,432,288Z'/%3E%3C/svg%3E%0A\");\n  height: 0.6em;\n  width: 0.6em;\n  display: inline-block;\n  margin-left: 4px;\n}\na:focus {\n  outline-color: #77a5cf;\n}\nol code, ul code, p code {\n  background: #f6f6f6;\n  padding: 2px 3px;\n  line-height: 110%;\n}\n.striketrough {\n  text-decoration: line-through;\n}\n@media (min-width: 921px) {\n  .content {\n    display: block;\n    padding-top: 50px;\n    padding-bottom: 50px;\n    margin-left: 450px;\n    margin-right: 50px;\n  }\n}\n.content h1 {\n  font-weight: normal;\n  font-size: 2.5em;\n  margin-bottom: 50px;\n  line-height: 1.9em;\n  color: #333;\n}\n.content h1 span {\n  font-weight: bold;\n  letter-spacing: 2px;\n  font-size: 1.2em;\n  line-height: 1.5em;\n  padding: 5px 10px;\n  background: #f6f6f6;\n  border-radius: 5px;\n}\n.content h1 strong {\n  font-weight: bold;\n  letter-spacing: 2px;\n}\n.content h2 {\n  font-size: 2em;\n  margin-bottom: 20px;\n  color: #333;\n  line-height: 1.75em;\n  border-bottom: 2px solid #ddd;\n  display: inline-block;\n  padding-bottom: 3px;\n}\n.content h3 {\n  font-size: 1.7em;\n  line-height: 2em;\n  margin-bottom: 15px;\n  color: #333;\n}\n.content h4 {\n  font-weight: bold;\n  font-size: 1.6em;\n  line-height: 1.4em;\n  margin-bottom: 15px;\n  color: #444;\n}\n.content p {\n  font-size: 1.5em;\n  line-height: 1.7em;\n  word-spacing: 2px;\n  margin-bottom: 15px;\n  word-break: break-word;\n}\n.content p :last-child {\n  margin-bottom: 0 !important;\n}\n.content p.intro {\n  font-size: 2em;\n  line-height: 1.6em;\n  margin-bottom: 40px;\n  padding-bottom: 40px;\n  border-bottom: 1px solid #f6f6f6;\n}\n.content ul, .content ol {\n  font-size: 1.5em;\n  line-height: 1.4em;\n  margin-left: 30px;\n  margin-bottom: 15px;\n}\n.content ul li, .content ol li {\n  word-spacing: 2px;\n  margin-bottom: 5px;\n}\n.content hr {\n  border: 0;\n  height: 1px;\n  background: #f6f6f6;\n  display: block;\n  margin: 40px 0;\n}\n.content em {\n  color: #000;\n}\n.content table {\n  font-size: 1.5em;\n  border: 0;\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin-bottom: 20px;\n}\n.content table thead {\n  background: #eee;\n}\n.content table th, .content table td {\n  text-align: left;\n  vertical-align: top;\n  padding: 5px 15px 5px 0px;\n  line-height: 1.5;\n}\n.content table td p {\n  font-size: 1em;\n}\n.content .sidepic {\n  margin-bottom: 25px;\n  margin-top: 10px;\n}\n.content .sidepic img {\n  display: block;\n  width: 100%;\n}\n@media (min-width: 920px) {\n  .content .sidepic img {\n    box-shadow: 10px 10px 5px #ddd;\n    border: 1px solid #fff;\n  }\n}\n.content .sidepic p {\n  margin-top: 10px;\n  font-size: 1em;\n}\n@media (min-width: 920px) {\n  .content .sidepic p {\n    margin-top: 20px;\n  }\n}\n.content .sidepic p:before {\n  content: \"\u2013\";\n  display: inline-block;\n  margin-right: 5px;\n  margin-left: 10px;\n}\n@media (min-width: 1281px) {\n  .content .sidepic {\n    max-width: 500px;\n    width: 40%;\n  }\n  .content .sidepic.right {\n    float: right;\n    margin-left: 50px;\n  }\n  .content .sidepic.left {\n    float: left;\n    margin-right: 50px;\n  }\n}\n.content .post-body h4.codetitle {\n  margin: 0;\n  font-size: 1.1em;\n  background: #e6e6e6;\n  padding: 5px 10px;\n  border-bottom: 1px solid #ddd;\n  letter-spacing: 2px;\n}\n@media (max-width: 920px) {\n  .content .post-body h4.codetitle {\n    margin: 0 -20px;\n    padding: 5px 20px;\n  }\n}\n.content .post-body p {\n  margin-bottom: 25px;\n  line-height: 1.8em;\n}\n.content .post-body ul, .content .post-body ol {\n  margin-bottom: 25px;\n}\n.content .post-body ul li, .content .post-body ol li {\n  line-height: 1.8em;\n  margin-bottom: 10px;\n}\n.content .post-body pre {\n  margin-top: 0;\n  margin-bottom: 25px;\n  background: #f6f6f6;\n  font-size: 1.2em;\n}\n@media (max-width: 920px) {\n  .content .post-body pre {\n    margin: 0 -20px 25px -20px;\n  }\n  .content .post-body pre code {\n    overflow: scroll;\n    margin: 0;\n  }\n}\n.content .post-body img {\n  display: block;\n  max-width: 100%;\n  margin: 0 auto;\n}\n.content .post-body img.extraspace {\n  margin: 25px auto;\n}\n.content .post-body img.zoomin {\n  cursor: pointer;\n}\n.content .post-body .copy {\n  font-style: italic;\n  line-height: 1.3;\n}\n.content .post-body .copy small {\n  font-size: 0.8em;\n}\n.content .post-body table tr {\n  border-bottom: 1px solid #eee;\n}\n.content .post-body table tr:nth-child(even) {\n  background: #f6f6f6;\n}\n@media (max-width: 920px) {\n  .content {\n    padding: 104px 0 20px 0;\n    margin: 0 20px;\n  }\n  .content h1 {\n    font-size: 1.8em;\n    margin-bottom: 20px;\n    line-height: 2.1em;\n  }\n  .content h1 span {\n    letter-spacing: 2px;\n    font-size: 1.2em;\n    padding: 5px 10px;\n  }\n  .content h2 {\n    font-size: 1.7em;\n    line-height: 2em;\n  }\n  .content h3 {\n    font-size: 1.6em;\n    line-height: 2em;\n  }\n  .content h4 {\n    font-size: 1.5em;\n    line-height: 1.8em;\n  }\n  .content p, .content ul, .content ol {\n    font-size: 1.5em;\n    line-height: 1.4em;\n  }\n  .content p.intro {\n    font-size: 1.8em;\n    line-height: 1.4em;\n    margin-bottom: 30px;\n    padding-bottom: 30px;\n  }\n  .content hr {\n    margin: 30px 0;\n  }\n}\n.hljs {\n  font-size: 1.3em;\n  padding: 10px;\n  border-radius: 5px;\n  border-top-left-radius: 0;\n  background: #f6f6f6;\n}\n@media (max-width: 920px) {\n  .hljs {\n    font-size: 1.2em;\n  }\n}\n.alert {\n  padding: 15px 15px 15px 85px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n@media (min-width: 420px) {\n  .alert {\n    position: relative;\n    padding: 15px 15px 15px 70px;\n  }\n  .alert > i {\n    position: absolute;\n    top: 23px;\n    left: 25px;\n    font-size: 25px;\n  }\n}\n.alert > p, .alert > ul, .alert > ol {\n  margin-bottom: 0;\n}\n.alert > p + p {\n  margin-top: 5px;\n}\n.alert-link {\n  font-weight: bold;\n}\n.alert-dismissible {\n  padding-right: 35px;\n}\n.alert-dismissible .close {\n  position: relative;\n  top: -2px;\n  right: -21px;\n  color: inherit;\n}\n.alert-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%233c763d' d='M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z'/%3E%3C/svg%3E%0A\");\n  background-repeat: no-repeat;\n  background-size: 35px 35px;\n  background-position:  25px 15px;\n}\n.alert-success hr {\n  border-top-color: #c9e2b3;\n}\n.alert-success em {\n  color: #3c763d;\n}\n.alert-success a {\n  color: #2b542c;\n}\n.alert-info {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 512'%3E%3Cpath fill='%2331708f' d='M224 352.589V224c0-16.475-6.258-31.517-16.521-42.872C225.905 161.14 236 135.346 236 108 236 48.313 187.697 0 128 0 68.313 0 20 48.303 20 108c0 20.882 5.886 40.859 16.874 58.037C15.107 176.264 0 198.401 0 224v39.314c0 23.641 12.884 44.329 32 55.411v33.864C12.884 363.671 0 384.359 0 408v40c0 35.29 28.71 64 64 64h128c35.29 0 64-28.71 64-64v-40c0-23.641-12.884-44.329-32-55.411zM128 48c33.137 0 60 26.863 60 60s-26.863 60-60 60-60-26.863-60-60 26.863-60 60-60zm80 400c0 8.836-7.164 16-16 16H64c-8.836 0-16-7.164-16-16v-40c0-8.836 7.164-16 16-16h16V279.314H64c-8.836 0-16-7.164-16-16V224c0-8.836 7.164-16 16-16h96c8.836 0 16 7.164 16 16v168h16c8.836 0 16 7.164 16 16v40z'/%3E%3C/svg%3E%0A\");\n  background-repeat: no-repeat;\n  background-size: 25px 25px;\n  background-position:  25px 25px;\n}\n.alert-info hr {\n  border-top-color: #a6e1ec;\n}\n.alert-info em {\n  color: #31708f;\n}\n.alert-info a {\n  border-color: #245269;\n  color: #245269;\n}\n.alert-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 512'%3E%3Cpath fill='%238a6d3b' d='M173.854 48c6.874 0 12.343 5.763 11.984 12.628l-11.742 224c-.334 6.375-5.6 11.372-11.984 11.372H93.888c-6.383 0-11.65-4.997-11.984-11.372l-11.742-224C69.802 53.763 75.271 48 82.146 48h91.708M128 336c35.29 0 64 28.71 64 64s-28.71 64-64 64-64-28.71-64-64 28.71-64 64-64M173.854 0H82.146C47.881 0 20.427 28.783 22.228 63.141l11.742 224c.698 13.309 5.689 25.414 13.592 35.001C28.035 342.31 16 369.777 16 400c0 61.757 50.243 112 112 112s112-50.243 112-112c0-30.223-12.035-57.69-31.561-77.858a59.78 59.78 0 0 0 13.592-35.001l11.742-224C235.566 28.922 208.259 0 173.854 0z'/%3E%3C/svg%3E%0A\");\n  background-repeat: no-repeat;\n  background-size: 25px 25px;\n  background-position:  25px 25px;\n}\n.alert-warning hr {\n  border-top-color: #f7e1b5;\n}\n.alert-warning em {\n  color: #8a6d3b;\n}\n.alert-warning a {\n  border-color: #66512c;\n  color: #66512c;\n}\n.alert-danger {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23a94442' d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'/%3E%3C/svg%3E%0A\");\n  background-repeat: no-repeat;\n  background-size: 25px 25px;\n  background-position:  25px 25px;\n}\n.alert-danger hr {\n  border-top-color: #e4b9c0;\n}\n.alert-danger em {\n  color: #a94442;\n}\n.alert-danger a {\n  border-color: #843534;\n  color: #843534;\n}\n.alert-quote {\n  color: #444;\n  background-color: #eee;\n  border-color: #ddd;\n  font-style: italic;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3Cpath fill='%23444444' d='M504 224h-56v-8c0-22.1 17.9-40 40-40h8c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-8c-101.5 0-184 82.5-184 184v192c0 39.7 32.3 72 72 72h128c39.7 0 72-32.3 72-72V296c0-39.7-32.3-72-72-72zm24 184c0 13.2-10.8 24-24 24H376c-13.2 0-24-10.8-24-24V216c0-75 61-136 136-136h8v48h-8c-48.5 0-88 39.5-88 88v56h104c13.2 0 24 10.8 24 24v112zM200 224h-56v-8c0-22.1 17.9-40 40-40h8c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-8C82.5 32 0 114.5 0 216v192c0 39.7 32.3 72 72 72h128c39.7 0 72-32.3 72-72V296c0-39.7-32.3-72-72-72zm24 184c0 13.2-10.8 24-24 24H72c-13.2 0-24-10.8-24-24V216c0-75 61-136 136-136h8v48h-8c-48.5 0-88 39.5-88 88v56h104c13.2 0 24 10.8 24 24v112z'/%3E%3C/svg%3E%0A\");\n  background-repeat: no-repeat;\n  background-size: 25px 25px;\n  background-position:  25px 25px;\n}\n.alert-quote hr {\n  border-top-color: #e4b9c0;\n}\n.alert-quote em {\n  color: #333;\n  font-style: italic;\n}\n.alert-quote a {\n  border-color: #843534;\n  color: #843534;\n}\n.further-reading {\n  list-style: lower-roman;\n}\n@-webkit-keyframes shake {\n  10%, 90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%, 80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%, 50%, 70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%, 60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@keyframes shake {\n  10%, 90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%, 80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%, 50%, 70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%, 60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n\nsv-app {\n  display: block !important;\n  max-width: 1280px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 921px) {\n  sv-app {\n    margin-top: 9px;\n  }\n}\naside {\n  position: relative;\n  display: block;\n  z-index: 1;\n  padding-right: 50px;\n}\n@media (min-width: 921px) {\n  aside {\n    border-right: 1px solid;\n    -webkit-border-image: -webkit-gradient(linear, left top, left bottom, from(#eee), to(rgba(0, 0, 0, 0))) 1 100%;\n    -webkit-border-image: linear-gradient(to bottom, #eee, rgba(0, 0, 0, 0)) 1 100%;\n         -o-border-image: linear-gradient(to bottom, #eee, rgba(0, 0, 0, 0)) 1 100%;\n            border-image: -webkit-gradient(linear, left top, left bottom, from(#eee), to(rgba(0, 0, 0, 0))) 1 100%;\n            border-image: linear-gradient(to bottom, #eee, rgba(0, 0, 0, 0)) 1 100%;\n    border-left: 0;\n    margin-bottom: 50px;\n    overflow: auto;\n    max-height: calc(100% - 50px);\n  }\n}\naside #picture {\n  display: block;\n}\naside #picture img {\n  width: 100px;\n  height: 100px;\n  border-style: solid;\n  border-color: #eee;\n  border-radius: 110px;\n}\naside #picture.new-version-available img {\n  border-color: #f0433e;\n}\naside .new-version-available-msg {\n  color: #fff;\n  padding: 5px 10px;\n  font-size: 1.2em;\n  background: #f0433e;\n  cursor: pointer;\n}\naside h1 {\n  text-transform: uppercase;\n  color: #333;\n  text-align: center;\n  font-size: 1.3em;\n  letter-spacing: 1px;\n  padding-top: 10px;\n}\n@media (min-width: 314px) {\n  aside h1 {\n    padding-top: 18px;\n  }\n}\n@media (min-width: 352px) {\n  aside h1 {\n    font-size: 1.5em;\n    letter-spacing: 2px;\n    padding-top: 17px;\n  }\n}\naside h1 a {\n  color: #333;\n  text-decoration: none;\n}\naside h1 a:hover {\n  color: #111;\n}\naside h2 {\n  text-transform: uppercase;\n  color: #333;\n  font-size: 1.3em;\n  letter-spacing: 2px;\n  margin-bottom: 15px;\n}\naside p {\n  line-height: 25px;\n  font-size: 1.5em;\n  color: #555;\n  margin-bottom: 20px;\n  letter-spacing: 0.5px;\n}\n@media (min-width: 921px) {\n  aside nav {\n    margin-bottom: 50px;\n  }\n}\naside nav ol {\n  margin: 0;\n  padding: 0;\n}\naside nav ol li {\n  padding: 0 0 0 10px;\n  margin: 0 0 15px 15px;\n}\naside nav ol li a {\n  color: #444;\n  text-decoration: none;\n  font-size: 1.5em;\n  border-bottom: 1px dotted #666;\n}\naside nav ol li a:hover {\n  color: #222;\n  border-bottom: 1px solid #444;\n}\naside nav ol li a.active {\n  color: #000;\n  border-bottom: 1px solid #444;\n  font-weight: bold;\n}\n@media (max-width: 920px) {\n  aside nav ol li a {\n    padding: 10px 0;\n    font-size: 1.2em;\n    letter-spacing: 2px;\n  }\n}\naside ul.social {\n  padding-bottom: 20px;\n  border-bottom: 1px solid #eee;\n  margin-bottom: 20px;\n  margin-top: 40px;\n}\naside ul.social li {\n  display: inline-block;\n  margin-right: 22px;\n}\naside ul.social li:last-of-type {\n  margin-right: 0;\n}\naside ul.social li a {\n  display: block;\n  width: 22px;\n  height: 22px;\n  -webkit-transition: all 0.2s ease-in;\n  transition: all 0.2s ease-in;\n  border: none;\n  text-indent: -999999px;\n}\naside ul.social li a:hover {\n  border: none;\n}\naside ul.social li a.facebook {\n  background-image: url(\"data:image/svg+xml,%3Csvg height='100%25' viewBox='0 0 512 512' width='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m483.738281 0h-455.5c-15.597656.0078125-28.24218725 12.660156-28.238281 28.261719v455.5c.0078125 15.597656 12.660156 28.242187 28.261719 28.238281h455.476562c15.605469.003906 28.257813-12.644531 28.261719-28.25 0-.003906 0-.007812 0-.011719v-455.5c-.007812-15.597656-12.660156-28.24218725-28.261719-28.238281zm0 0' fill='%234267b2'/%3E%3Cpath d='m353.5 512v-198h66.75l10-77.5h-76.75v-49.359375c0-22.386719 6.214844-37.640625 38.316406-37.640625h40.683594v-69.128906c-7.078125-.941406-31.363281-3.046875-59.621094-3.046875-59 0-99.378906 36-99.378906 102.140625v57.035156h-66.5v77.5h66.5v198zm0 0' fill='%23fff'/%3E%3C/svg%3E%0A\");\n}\naside ul.social li a.twitter {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%231da1f2' d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'/%3E%3C/svg%3E%0A\");\n}\naside ul.social li a.linkedin {\n  background-image: url(\"data:image/svg+xml,%3Csvg height='100%25' viewBox='0 -11 512 511' width='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23069'%3E%3Cpath d='m6.488281 159.683594h109.753907v330.207031h-109.753907zm0 0'/%3E%3Cpath d='m62.089844.5c-37.542969 0-62.089844 24.652344-62.089844 57.054688 0 31.6875 23.816406 57.042968 60.648438 57.042968h.714843c38.277344 0 62.097657-25.355468 62.097657-57.042968-.714844-32.402344-23.820313-57.054688-61.371094-57.054688zm0 0'/%3E%3Cpath d='m385.644531 151.933594c-58.234375 0-84.328125 32.003906-98.914062 54.507812v-46.757812h-109.757813v330.207031h109.753906v-184.402344c0-9.871093.714844-19.726562 3.613282-26.785156 7.933594-19.714844 25.992187-40.136719 56.3125-40.136719 39.714844 0 55.601562 30.28125 55.601562 74.671875v176.652344h109.746094v-189.335937c0-101.425782-54.148438-148.621094-126.355469-148.621094zm0 0'/%3E%3C/g%3E%3C/svg%3E%0A\");\n}\naside ul.social li a.github {\n  background-image: url(\"data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 256 250' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' preserveAspectRatio='xMidYMid'%3E%3Cg%3E%3Cpath d='M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z' fill='%23161614'%3E%3C/path%3E%3C/g%3E%3C/svg%3E%0A\");\n}\naside ul.social li a.skype {\n  background-image: url(\"data:image/svg+xml,%3Csvg height='100%25' viewBox='0 -1 512.001 512' width='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m493.878906 298.023438c2.640625-14.386719 4.027344-29.109376 4.027344-43.828126 0-32.636718-6.386719-64.296874-19.011719-94.105468-12.179687-28.792969-29.605469-54.648438-51.820312-76.847656-22.183594-22.203126-48.058594-39.625-76.835938-51.804688-29.796875-12.609375-61.460937-19-94.09375-19-15.382812 0-30.789062 1.445312-45.78125 4.324219-.03125.007812-.074219.007812-.113281.015625-20.570312-10.9375-43.703125-16.777344-67.121094-16.777344-38.230468 0-74.175781 14.886719-101.207031 41.929688-27.027344 27.03125-41.921875 62.976562-41.921875 101.207031 0 24.332031 6.261719 48.253906 18.007812 69.390625-2.382812 13.695312-3.640624 27.691406-3.640624 41.667968 0 32.644532 6.390624 64.300782 19.015624 94.113282 12.160157 28.800781 29.59375 54.640625 51.789063 76.84375 22.214844 22.199218 48.054687 39.648437 76.863281 51.796875 29.800782 12.632812 61.472656 19.027343 94.105469 19.027343 14.207031 0 28.445313-1.296874 42.34375-3.761718 21.414063 12.113281 45.65625 18.550781 70.414063 18.550781 38.222656 0 74.148437-14.859375 101.183593-41.910156 27.039063-27.015625 41.917969-62.96875 41.917969-101.199219 0-24.414062-6.292969-48.414062-18.121094-69.632812zm0 0' fill='%2300aff0'/%3E%3Cpath d='m257.105469 402.261719c-85.890625 0-124.316407-42.226563-124.316407-73.875 0-16.230469 11.984376-27.609375 28.5-27.609375 36.757813 0 27.238282 52.777344 95.816407 52.777344 35.109375 0 54.496093-19.0625 54.496093-38.570313 0-11.734375-5.789062-24.738281-28.90625-30.4375l-76.394531-19.070313c-61.527343-15.429687-72.691406-48.691406-72.691406-79.957031 0-64.914062 61.121094-89.289062 118.519531-89.289062 52.875 0 115.203125 29.222656 115.203125 68.167969 0 16.6875-14.449219 26.390624-30.960937 26.390624-31.367188 0-25.597656-43.417968-88.785156-43.417968-31.355469 0-48.722657 14.199218-48.722657 34.515625 0 20.28125 24.765625 26.757812 46.265625 31.65625l56.546875 12.550781c61.941407 13.800781 77.644531 49.964844 77.644531 84.027344.003907 52.75-40.488281 92.140625-122.214843 92.140625zm0 0' fill='%23fff'/%3E%3C/svg%3E%0A\");\n}\naside ul.social li a.stack-overflow {\n  background-image: url(\"data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 256 304' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' preserveAspectRatio='xMidYMid'%3E%3Cg%3E%3Cpolygon fill='%23BCBBBB' points='216.329708 276.187929 216.329708 194.976776 243.28341 194.976776 243.28341 303.14163 0 303.14163 0 194.976776 26.9537015 194.976776 26.9537015 276.187929'%3E%3C/polygon%3E%3Cpath d='M56.7077876,187.275718 L189.025959,214.929516 L194.626728,188.325863 L62.3085568,160.672065 L56.7077876,187.275718 L56.7077876,187.275718 Z M74.2101912,124.267065 L196.727016,181.324901 L207.928555,156.821536 L85.4117295,99.4136524 L74.2101912,124.267065 Z M108.164854,64.0587971 L212.129132,150.520671 L229.281487,129.867835 L125.31721,43.4059609 L108.164854,64.0587971 L108.164854,64.0587971 Z M175.374084,0 L153.671104,16.1022113 L234.18216,124.617114 L255.88514,108.514902 L175.374084,0 Z M53.9074031,248.884179 L189.025959,248.884179 L189.025959,221.930478 L53.9074031,221.930478 L53.9074031,248.884179 Z' fill='%23F48023'%3E%3C/path%3E%3C/g%3E%3C/svg%3E%0A\");\n}\naside h2 {\n  margin-top: 20px;\n}\naside #mobilemenu {\n  display: none;\n}\naside #scrolltocontent {\n  display: none;\n}\n@media (max-width: 378px) {\n  aside .new-version-available-msg {\n    top: 16px !important;\n  }\n}\n@media (max-width: 920px) {\n  aside {\n    display: block;\n    margin-top: 9px;\n    padding-top: 11px;\n    padding-bottom: 11px;\n    position: fixed;\n    width: 100%;\n    background: #fff;\n    box-shadow: 0 2px 5px 0 #cccccc;\n    height: auto;\n    overflow: auto;\n  }\n  aside h1 {\n    margin-right: 65px;\n    margin-left: 83px;\n    text-align: center;\n    font-weight: normal;\n  }\n  aside ul.social {\n    margin-top: 0;\n  }\n  aside h2 {\n    display: none;\n  }\n  aside p {\n    line-height: 1.5em;\n    font-size: 1.9em;\n    padding-top: 20px;\n    border-top: 1px solid #eee;\n    padding-bottom: 20px;\n    border-bottom: 1px solid #eee;\n    letter-spacing: 0;\n  }\n  aside #picture {\n    display: block;\n    float: left;\n    margin-left: 20px;\n  }\n  aside #picture img {\n    width: 40px;\n    height: 40px;\n    border-width: 5px;\n  }\n  aside .new-version-available-msg {\n    position: absolute;\n    top: 26px;\n    left: 80px;\n    right: 10px;\n    font-size: 1em;\n    z-index: 100;\n    width: calc(100% - 170px);\n  }\n  aside .new-version-available-msg span {\n    display: inline-block;\n  }\n  aside .new-version-available-msg span:first-child {\n    margin-right: 5px;\n  }\n  aside #scrolltocontent {\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath fill='%23444444' d='M348.5 232.1l-148 148.4c-4.7 4.7-12.3 4.7-17 0l-148-148.4c-4.7-4.7-4.7-12.3 0-17l19.6-19.6c4.8-4.8 12.5-4.7 17.1.2l93.7 97.1V44c0-6.6 5.4-12 12-12h28c6.6 0 12 5.4 12 12v248.8l93.7-97.1c4.7-4.8 12.4-4.9 17.1-.2l19.6 19.6c4.9 4.7 4.9 12.3.2 17zM372 428H12c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h360c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12z'/%3E%3C/svg%3E%0A\");\n    background-repeat: no-repeat;\n    background-size: 30px 30px;\n    background-position: 0px 3px;\n    position: absolute;\n    display: none;\n    right: 20px;\n    top: 28px;\n    text-decoration: none;\n    border: none;\n    width: 30px;\n    height: 30px;\n    text-indent: -99999px;\n  }\n  aside #scrolltocontent:focus, aside #scrolltocontent:hover {\n    text-decoration: none;\n    border: none;\n  }\n  aside #mobilemenu {\n    position: absolute;\n    display: block;\n    right: 70px;\n    top: 20px;\n    text-decoration: none;\n    border: none;\n  }\n  aside #mobilemenu:focus, aside #mobilemenu:hover {\n    text-decoration: none;\n    border: none;\n  }\n  aside #mobilemenu span {\n    display: block;\n    text-indent: -99999px;\n  }\n  aside #mobilemenu .open {\n    width: 30px;\n    height: 30px;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='%23444444' d='M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z'/%3E%3C/svg%3E%0A\");\n    background-repeat: no-repeat;\n    background-size: 30px 30px;\n    background-position: 0px 3px;\n  }\n  aside #mobilemenu .close {\n    width: 30px;\n    height: 30px;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23444444' d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'/%3E%3C/svg%3E%0A\");\n    background-repeat: no-repeat;\n    background-size: 30px 30px;\n    background-position: 0px 3px;\n  }\n  aside #mobilenavcontainer {\n    padding: 30px 20px 0 20px;\n    display: none;\n  }\n  aside nav ol li {\n    margin: 0 0 25px 15px;\n  }\n  aside nav ol li a {\n    font-size: 1.3em;\n    text-transform: uppercase;\n  }\n  aside ul.social li a {\n    font-size: 25px;\n    color: #999;\n  }\n  aside.open {\n    height: 100%;\n  }\n  aside.open #mobilenavcontainer {\n    display: block;\n  }\n}\n@media (min-width: 921px) {\n  aside {\n    position: fixed;\n    width: 280px;\n    margin-left: 50px;\n    padding-top: 50px;\n  }\n  aside h1 {\n    font-size: 1.5em;\n    letter-spacing: 3px;\n    margin-bottom: 20px;\n    text-align: left;\n  }\n  aside #picture {\n    width: 120px;\n  }\n  aside #picture img {\n    display: block;\n    width: 100px;\n    margin-bottom: 20px;\n    border-width: 10px;\n  }\n  aside .new-version-available-msg {\n    position: absolute;\n    top: 65px;\n    left: 130px;\n  }\n  aside .new-version-available-msg span {\n    display: block;\n  }\n  aside .new-version-available-msg:before {\n    content: \"\";\n    position: absolute;\n    top: 50%;\n    left: -16px;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 8px;\n    border-color: transparent;\n    pointer-events: none;\n    margin-top: -8px;\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n    color: #f0433e;\n    border-right-color: #f0433e;\n  }\n  aside nav ul li {\n    margin: 10px 0 10px 15px;\n  }\n  aside nav ul li a {\n    padding: 4px 0px;\n  }\n}\n@media (max-height: 650px) {\n  aside p {\n    font-size: 1.4em;\n    line-height: 1.4em;\n  }\n  aside ol li {\n    margin: 0 0 20px 15px !important;\n  }\n}\nfooter {\n  display: block;\n  margin-top: 25px;\n  padding-top: 25px;\n  border-top: 1px solid #f6f6f6;\n}\nfooter p {\n  font-style: italic;\n  font-size: 1.1em;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NhbXZsb2ViZXJnaHMvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJub2RlX21vZHVsZXMvcHJpc21qcy9wbHVnaW5zL3Rvb2xiYXIvcHJpc20tdG9vbGJhci5jc3MiLCJub2RlX21vZHVsZXMvcHJpc21qcy90aGVtZXMvcHJpc20uY3NzIiwibm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy9saW5lLW51bWJlcnMvcHJpc20tbGluZS1udW1iZXJzLmNzcyIsIm5vZGVfbW9kdWxlcy9wcmlzbWpzL3BsdWdpbnMvbGluZS1oaWdobGlnaHQvcHJpc20tbGluZS1oaWdobGlnaHQuY3NzIiwiL1VzZXJzL3NhbXZsb2ViZXJnaHMvUHJvamVjdHMvS3dlcnJpL2t3ZXJyaS1vc3MvcHJvamVjdHMvc2FtdmxvZWJlcmdocy9zcmMvc2Nzcy9fYXBwLnNjc3MiLCIvVXNlcnMvc2FtdmxvZWJlcmdocy9Qcm9qZWN0cy9Ld2Vycmkva3dlcnJpLW9zcy9wcm9qZWN0cy9zYW12bG9lYmVyZ2hzL3NyYy9zY3NzL19taXhpbnMuc2NzcyIsIi9Vc2Vycy9zYW12bG9lYmVyZ2hzL1Byb2plY3RzL0t3ZXJyaS9rd2Vycmktb3NzL3Byb2plY3RzL3NhbXZsb2ViZXJnaHMvc3JjL3Njc3MvX2hsLnNjc3MiLCIvVXNlcnMvc2FtdmxvZWJlcmdocy9Qcm9qZWN0cy9Ld2Vycmkva3dlcnJpLW9zcy9wcm9qZWN0cy9zYW12bG9lYmVyZ2hzL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtDQUNDLGtCQUFrQjtBQUNuQjtBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxXQUFXO0NBQ1gsNENBQW9DO0NBQXBDLG9DQUFvQztDQUNwQyxVQUFVO0FBQ1g7QUFFQTtDQUNDLFVBQVU7QUFDWDtBQUVBOzREQUM0RDtBQUM1RDtDQUNDLFVBQVU7QUFDWDtBQUVBO0NBQ0MscUJBQXFCO0FBQ3RCO0FBRUE7Q0FDQyxlQUFlO0FBQ2hCO0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsU0FBUztDQUNULGNBQWM7Q0FDZCxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixVQUFVO0NBQ1YseUJBQXlCLEVBQUUsZUFBZTtDQUMxQyxzQkFBc0I7Q0FDdEIscUJBQXFCO0FBQ3RCO0FBRUE7OztDQUdDLFdBQVc7Q0FDWCxlQUFlO0NBQ2YsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixvQ0FBb0M7Q0FDcEMscUNBQXFDO0NBQ3JDLG1CQUFtQjtBQUNwQjtBQUVBOzs7Ozs7Q0FNQyxjQUFjO0NBQ2QscUJBQXFCO0FBQ3RCO0FDL0RBOzs7O0VBSUU7QUFFRjs7Q0FFQyxZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLHdCQUF3QjtDQUN4QixzRUFBc0U7Q0FDdEUsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsb0JBQW9CO0NBQ3BCLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsZ0JBQWdCOztDQUVoQixnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLFdBQVc7O0NBRVgscUJBQXFCO0NBRXJCLGlCQUFpQjtDQUNqQixhQUFhO0FBQ2Q7QUFFQTs7Q0FFQyxpQkFBaUI7Q0FDakIsbUJBQW1CO0FBQ3BCO0FBRUE7O0NBRUMsaUJBQWlCO0NBQ2pCLG1CQUFtQjtBQUNwQjtBQUVBO0NBQ0M7O0VBRUMsaUJBQWlCO0NBQ2xCO0FBQ0Q7QUFFQSxnQkFBZ0I7QUFDaEI7Q0FDQyxZQUFZO0NBQ1osY0FBYztDQUNkLGNBQWM7QUFDZjtBQUVBOztDQUVDLG1CQUFtQjtBQUNwQjtBQUVBLGdCQUFnQjtBQUNoQjtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsbUJBQW1CO0FBQ3BCO0FBRUE7Ozs7Q0FJQyxnQkFBZ0I7QUFDakI7QUFFQTtDQUNDLFdBQVc7QUFDWjtBQUVBO0NBQ0MsV0FBVztBQUNaO0FBRUE7Ozs7Ozs7Q0FPQyxXQUFXO0FBQ1o7QUFFQTs7Ozs7O0NBTUMsV0FBVztBQUNaO0FBRUE7Ozs7O0NBS0MsY0FBYztDQUNkLGlDQUFpQztBQUNsQztBQUVBOzs7Q0FHQyxXQUFXO0FBQ1o7QUFFQTs7Q0FFQyxjQUFjO0FBQ2Y7QUFFQTs7O0NBR0MsV0FBVztBQUNaO0FBRUE7O0NBRUMsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7QUFFQTtDQUNDLFlBQVk7QUFDYjtBQzFJQTtDQUNDLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIseUJBQXlCO0FBQzFCO0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsb0JBQW9CO0FBQ3JCO0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsb0JBQW9CO0NBQ3BCLE1BQU07Q0FDTixlQUFlO0NBQ2YsWUFBWTtDQUNaLFVBQVUsRUFBRSw0Q0FBNEM7Q0FDeEQsb0JBQW9CO0NBQ3BCLDRCQUE0Qjs7Q0FFNUIseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIsaUJBQWlCOztBQUVsQjtBQUVDO0VBQ0Msb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCw2QkFBNkI7Q0FDOUI7QUFFQztHQUNDLDRCQUE0QjtHQUM1QixXQUFXO0dBQ1gsY0FBYztHQUNkLG9CQUFvQjtHQUNwQixpQkFBaUI7RUFDbEI7QUN4Q0Y7Q0FDQyxrQkFBa0I7Q0FDbEIsc0JBQXNCO0FBQ3ZCO0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsT0FBTztDQUNQLFFBQVE7Q0FDUixrQkFBa0I7Q0FDbEIsZUFBZSxFQUFFLGlDQUFpQzs7Q0FFbEQsa0NBQWtDO0NBQ2xDLDJIQUFzRjtDQUF0RixzRkFBc0Y7O0NBRXRGLG9CQUFvQjs7Q0FFcEIsb0JBQW9CO0NBQ3BCLGdCQUFnQjtBQUNqQjtBQUVDOztFQUVDLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixjQUFjO0VBQ2QsZUFBZTtFQUNmLHVDQUF1QztFQUN2Qyx3QkFBd0I7RUFDeEIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQix1QkFBdUI7Q0FDeEI7QUFFQTtFQUNDLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsWUFBWTtDQUNiO0FBRUQ7O0NBRUMsYUFBYTtBQUNkO0FDOUNBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUxJRjtBS0RBO0VBQ0UsdUJBQUE7QUxJRjtBS0RBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FMSUY7QUtOQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBTElGO0FLREE7RUFDRSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FMSUY7QUtEQTtFQUNFLHdCQUFBO0FMSUY7QUtEQTtFQUNFLGtKQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FMSUY7QUtEQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUxJRjtBS0RBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBTElGO0FLREE7Ozs7RUFJRSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQkFBQTtBTElGO0FLRkU7Ozs7RUFDRSxjQUFBO0VBQ0EsZ0NBQUE7QUxPSjtBS0hBO0VBQ0UsV0FBQTtFQUNBLDJvQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFFRSxnQkFBQTtBTEtKO0FLREE7RUFDRSxzQkFBQTtBTElGO0FLQUU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUxHSjtBS0NBO0VBQ0UsNkJBQUE7QUxFRjtBS0dFO0VBRkY7SUFHSSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxvQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7RUxDRjtBQUNGO0FLQ0U7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUxDSjtBS0NJO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUxDTjtBS0VJO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBTEFOO0FLSUU7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUxGSjtBS0tFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBTEhKO0FLTUU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUxKSjtBS09FO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBTExKO0FLT0k7RUFDRSwyQkFBQTtBTExOO0FLU0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7QUxQSjtBS1VFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUxSSjtBS1VJO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBTFJOO0FLWUU7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUxWSjtBS2FFO0VBQ0UsV0FBQTtBTFhKO0FLY0U7RUFDRSxnQkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBRUUsbUJBQUE7QUxiTjtBS2dCSTtFQUNFLGdCQUFBO0FMZE47QUtpQkk7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBTGZOO0FLa0JJO0VBQ0UsY0FBQTtBTGhCTjtBS3FCRTtFQUVJLG1CQUFBO0VBQ0EsZ0JBQUE7QUxwQk47QUt1Qkk7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBTHJCTjtBS3NCTTtFQUhGO0lBSUksOEJBQUE7SUFDQSxzQkFBQTtFTG5CTjtBQUNGO0FLc0JJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FMcEJOO0FLcUJNO0VBSEY7SUFJSSxnQkFBQTtFTGxCTjtBQUNGO0FLb0JNO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBTGxCUjtBS3NCSTtFQTlCRjtJQStCSSxnQkFBQTtJQUNBLFVBQUE7RUxuQko7RUtvQkk7SUFDRSxZQUFBO0lBQ0EsaUJBQUE7RUxsQk47RUtvQkk7SUFDRSxXQUFBO0lBQ0Esa0JBQUE7RUxsQk47QUFDRjtBSzBCTTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FMeEJSO0FLMEJRO0VBUkY7SUFTSSxlQUFBO0lBQ0EsaUJBQUE7RUx2QlI7QUFDRjtBSzJCSTtFQUVJLG1CQUFBO0VBRUYsa0JBQUE7QUwzQk47QUs4Qkk7RUFFSSxtQkFBQTtBTDdCUjtBS2dDTTtFQUNFLGtCQUFBO0VBRUUsbUJBQUE7QUwvQlY7QUtxQ0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FMbkNOO0FLb0NNO0VBTEY7SUFNSSwwQkFBQTtFTGpDTjtFS2tDTTtJQUNFLGdCQUFBO0lBQ0EsU0FBQTtFTGhDUjtBQUNGO0FLb0NJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FMbENOO0FLb0NNO0VBQ0UsaUJBQUE7QUxsQ1I7QUtxQ007RUFDRSxlQUFBO0FMbkNSO0FLd0NJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBTHRDTjtBS3dDTTtFQUNFLGdCQUFBO0FMdENSO0FLMkNNO0VBQ0UsNkJBQUE7QUx6Q1I7QUsyQ1E7RUFDRSxtQkFBQTtBTHpDVjtBS2dERTtFQXRRRjtJQXdRSSx1QkFBQTtJQUNBLGNBQUE7RUw5Q0Y7RUsrQ0U7SUFDRSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7RUw3Q0o7RUsrQ0k7SUFDRSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7RUw3Q047RUtpREU7SUFDRSxnQkFBQTtJQUNBLGdCQUFBO0VML0NKO0VLa0RFO0lBQ0UsZ0JBQUE7SUFDQSxnQkFBQTtFTGhESjtFS21ERTtJQUNFLGdCQUFBO0lBQ0Esa0JBQUE7RUxqREo7RUtvREU7SUFDRSxnQkFBQTtJQUNBLGtCQUFBO0VMbERKO0VLcURFO0lBQ0UsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7RUxuREo7RUtzREU7SUFDRSxjQUFBO0VMcERKO0FBQ0Y7QUt5REE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUx0REY7QUt5REU7RUFSRjtJQVNJLGdCQUFBO0VMdERGO0FBQ0Y7QUt5REE7RUFDRSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBTHRERjtBS3dERTtFQU5GO0lBT0ksa0JBQUE7SUFDQSw0QkFBQTtFTHJERjtFS3VERTtJQUNFLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7SUFDQSxlQUFBO0VMckRKO0FBQ0Y7QUt5REU7RUFHRSxnQkFBQTtBTHpESjtBSzRERTtFQUNFLGVBQUE7QUwxREo7QUs2REU7RUFDRSxpQkFBQTtBTDNESjtBSzhERTtFQUNFLG1CQUFBO0FMNURKO0FLOERJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUw1RE47QUtnRUU7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQ3pjRixvYkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSwrQkFBQTtBTjRZRjtBSytESTtFQUNFLHlCQUFBO0FMN0ROO0FLZ0VJO0VBQ0UsY0FBQTtBTDlETjtBS2lFSTtFQUNFLGNBQUE7QUwvRE47QUttRUU7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQzlkRix1ekJBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsK0JBQUE7QU44WkY7QUtrRUk7RUFDRSx5QkFBQTtBTGhFTjtBS21FSTtFQUNFLGNBQUE7QUxqRU47QUtvRUk7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUxsRU47QUtzRUU7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQ3BmRixpdEJBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsK0JBQUE7QU5pYkY7QUtxRUk7RUFDRSx5QkFBQTtBTG5FTjtBS3NFSTtFQUNFLGNBQUE7QUxwRU47QUt1RUk7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUxyRU47QUt5RUU7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQzFnQkYsZ2lCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQUFBO0FOb2NGO0FLd0VJO0VBQ0UseUJBQUE7QUx0RU47QUt5RUk7RUFDRSxjQUFBO0FMdkVOO0FLMEVJO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FMeEVOO0FLNEVFO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQ2ppQkYseXlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQUFBO0FOd2RGO0FLMkVJO0VBQ0UseUJBQUE7QUx6RU47QUs0RUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUwxRU47QUs2RUk7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUwzRU47QUtpRkE7RUFDRSx1QkFBQTtBTDlFRjtBS2lGQTtFQUNFO0lBQ0UsMENBQUE7WUFBQSxrQ0FBQTtFTDlFRjtFS2lGQTtJQUNFLHlDQUFBO1lBQUEsaUNBQUE7RUwvRUY7RUtrRkE7SUFDRSwwQ0FBQTtZQUFBLGtDQUFBO0VMaEZGO0VLbUZBO0lBQ0UseUNBQUE7WUFBQSxpQ0FBQTtFTGpGRjtBQUNGO0FLa0VBO0VBQ0U7SUFDRSwwQ0FBQTtZQUFBLGtDQUFBO0VMOUVGO0VLaUZBO0lBQ0UseUNBQUE7WUFBQSxpQ0FBQTtFTC9FRjtFS2tGQTtJQUNFLDBDQUFBO1lBQUEsa0NBQUE7RUxoRkY7RUttRkE7SUFDRSx5Q0FBQTtZQUFBLGlDQUFBO0VMakZGO0FBQ0Y7QU8xZkEsOEVBQUE7QUNJQTtFQUNFLHlCQUFBO0VBTUEsaUJBQUE7RUFFRSxrQkFBQTtFQUNBLGlCQUFBO0FSbWZKO0FRMWZFO0VBSEY7SUFJSSxlQUFBO0VSNmZGO0FBQ0Y7QVFuZkE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBRUUsbUJBQUE7QVJxZko7QVFuZkU7RUFQRjtJQVFJLHVCQUFBO0lBQ0EsOEdBQUE7SUFBQSwrRUFBQTtTQUFBLDBFQUFBO1lBQUEsc0dBQUE7WUFBQSx1RUFBQTtJQUtBLGNBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7SUFDQSw2QkFBQTtFUmtmRjtBQUNGO0FRaGZFO0VBQ0UsY0FBQTtBUmtmSjtBUWhmSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBRUUsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FSaWZSO0FRNWVNO0VBRUkscUJBQUE7QVI2ZVY7QVF2ZUU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBUnllSjtBUXRlRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FSd2VKO0FRdGVJO0VBUkY7SUFTSSxpQkFBQTtFUnllSjtBQUNGO0FRdmVJO0VBWkY7SUFhSSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7RVIwZUo7QUFDRjtBUXhlSTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtBUjBlTjtBUXhlTTtFQUNFLFdBQUE7QVIwZVI7QVFwZUU7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QVJzZUo7QVFsZUU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QVJvZUo7QVEvZEk7RUFGRjtJQUdJLG1CQUFBO0VSa2VKO0FBQ0Y7QVFoZUk7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBUmtlTjtBUWhlTTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QVJrZVI7QVFoZVE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FSa2VWO0FRaGVVO0VBQ0UsV0FBQTtFQUNBLDZCQUFBO0FSa2VaO0FRL2RVO0VBQ0UsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QVJpZVo7QVE5ZFU7RUFqQkY7SUFrQkksZUFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RVJpZVY7QUFDRjtBUXhkRTtFQUNFLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FSMGRKO0FReGRJO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBUjBkTjtBUXhkTTtFQUNFLGVBQUE7QVIwZFI7QVF2ZE07RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFJQSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FSd2RSO0FRdGRRO0VBQ0UsWUFBQTtBUndkVjtBUXJkUTtFQUNFLDJ3QkFBQTtBUnVkVjtBUXBkUTtFQUNFLG03QkFBQTtBUnNkVjtBUW5kUTtFQUNFLGc1QkFBQTtBUnFkVjtBUWxkUTtFQUNFLG8wSEFBQTtBUm9kVjtBUWpkUTtFQUNFLGdwRUFBQTtBUm1kVjtBUWhkUTtFQUNFLDRsQ0FBQTtBUmtkVjtBUXpjRTtFQUVJLGdCQUFBO0FSMGNOO0FRdGNFO0VBQ0UsYUFBQTtBUndjSjtBUXJjRTtFQUNFLGFBQUE7QVJ1Y0o7QVFwY0U7RUFDRTtJQUNFLG9CQUFBO0VSc2NKO0FBQ0Y7QVFuY0U7RUE1TkY7SUE2TkksY0FBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUdBLCtCQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7RVJzY0Y7RVFwY0U7SUFDRSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFUnNjSjtFUW5jRTtJQUVJLGFBQUE7RVJvY047RVFoY0U7SUFDRSxhQUFBO0VSa2NKO0VRL2JFO0lBQ0Usa0JBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsMEJBQUE7SUFDQSxvQkFBQTtJQUNBLDZCQUFBO0lBQ0EsaUJBQUE7RVJpY0o7RVE5YkU7SUFDRSxjQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0VSZ2NKO0VROWJJO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFFRSxpQkFBQTtFUitiUjtFUTFiRTtJQUVFLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtJQUNBLFlBQUE7SUFDQSx5QkFBQTtFUjJiSjtFUXpiSTtJQUNFLHFCQUFBO0VSMmJOO0VRemJNO0lBRUksaUJBQUE7RVIwYlY7RVFuYkU7SUYzVEYsa2ZBQUE7SUFDQSw0QkFBQTtJQUNBLDBCQUFBO0lBQ0EsNEJBQUE7SUU2VEksa0JBQUE7SUFDQSxhQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxxQkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLHFCQUFBO0VScWJKO0VRbmJJO0lBRUUscUJBQUE7SUFDQSxZQUFBO0VSb2JOO0VRL2FFO0lBQ0Usa0JBQUE7SUFDQSxjQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxxQkFBQTtJQUNBLFlBQUE7RVJpYko7RVEvYUk7SUFFRSxxQkFBQTtJQUNBLFlBQUE7RVJnYk47RVE3YUk7SUFDRSxjQUFBO0lBQ0EscUJBQUE7RVIrYU47RVE1YUk7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJRnZXTixtZkFBQTtJQUNBLDRCQUFBO0lBQ0EsMEJBQUE7SUFDQSw0QkFBQTtFTnN4QkE7RVE3YUk7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJRjlXTixnaUJBQUE7SUFDQSw0QkFBQTtJQUNBLDBCQUFBO0lBQ0EsNEJBQUE7RU44eEJBO0VRNWFFO0lBQ0UseUJBQUE7SUFDQSxhQUFBO0VSOGFKO0VRM2FFO0lBQ0UscUJBQUE7RVI2YUo7RVEzYUk7SUFDRSxnQkFBQTtJQUNBLHlCQUFBO0VSNmFOO0VRdmFJO0lBQ0UsZUFBQTtJQUNBLFdBQUE7RVJ5YU47RVFyYUU7SUFDRSxZQUFBO0VSdWFKO0VRcmFJO0lBQ0UsY0FBQTtFUnVhTjtBQUNGO0FRbGFFO0VBbllGO0lBcVlJLGVBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFUm9hRjtFUWxhRTtJQUNFLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0VSb2FKO0VRamFFO0lBQ0UsWUFBQTtFUm1hSjtFUWphSTtJQUNFLGNBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFFRSxrQkFBQTtFUmthUjtFUTdaRTtJQUNFLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7RVIrWko7RVE3Wkk7SUFDRSxjQUFBO0VSK1pOO0VRNVpJO0lBQ0UsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFdBQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSx5QkFBQTtJQUNBLG9CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQ0FBQTtZQUFBLHdCQUFBO0lBQ0EsY0FBQTtJQUNBLDJCQUFBO0VSOFpOO0VRMVpFO0lBQ0Usd0JBQUE7RVI0Wko7RVExWkk7SUFDRSxnQkFBQTtFUjRaTjtBQUNGO0FRdlpFO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLGtCQUFBO0VSeVpKO0VRdlpFO0lBQ0UsZ0NBQUE7RVJ5Wko7QUFDRjtBUXBaQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QVJ1WkY7QVFyWkU7RUFFSSxrQkFBQTtFQUNBLGdCQUFBO0VBRUYsU0FBQTtBUnFaSiIsImZpbGUiOiJwcm9qZWN0cy9zYW12bG9lYmVyZ2hzL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuQGltcG9ydCBcIn5wcmlzbWpzL3BsdWdpbnMvdG9vbGJhci9wcmlzbS10b29sYmFyLmNzc1wiO1xuQGltcG9ydCBcIn5wcmlzbWpzL3RoZW1lcy9wcmlzbS5jc3NcIjtcbkBpbXBvcnQgXCJ+cHJpc21qcy9wbHVnaW5zL2xpbmUtbnVtYmVycy9wcmlzbS1saW5lLW51bWJlcnMuY3NzXCI7XG5AaW1wb3J0IFwifnByaXNtanMvcGx1Z2lucy9saW5lLWhpZ2hsaWdodC9wcmlzbS1saW5lLWhpZ2hsaWdodC5jc3NcIjtcbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmh0bWwge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuOjpzZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jdG9wYm9yZGVyIHtcbiAgYm9yZGVyLXRvcDogOXB4IHNvbGlkICM1NTU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTtcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIEFwcGxlIENvbG9yIEVtb2ppLCBTZWdvZSBVSSBFbW9qaSwgU2Vnb2UgVUkgU3ltYm9sO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbmVtIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbnRhYmxlIGEsXG5wIGEsXG51bCBsaSBhLFxub2wgbGkgYSB7XG4gIGNvbG9yOiAjMjA1MjdmO1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICMyMDUyN2Y7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbnRhYmxlIGE6aG92ZXIsXG5wIGE6aG92ZXIsXG51bCBsaSBhOmhvdmVyLFxub2wgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjNzdhNWNmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzc3YTVjZjtcbn1cblxuYVtyZWw9bm9vcGVuZXJdOm5vdCguaWdub3JlZXh0ZXJuYWwpOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyUzRSUzQ3BhdGggZmlsbD0nJTIzMjA1MjdmJyBkPSdNNDk3LjYsMCwzMzQuNC4xN0ExNC40LDE0LjQsMCwwLDAsMzIwLDE0LjU3VjQ3Ljg4YTE0LjQsMTQuNCwwLDAsMCwxNC42OSwxNC40bDczLjYzLTIuNzIsMi4wNiwyLjA2TDEzMS41MiwzNDAuNDlhMTIsMTIsMCwwLDAsMCwxN2wyMywyM2ExMiwxMiwwLDAsMCwxNywwTDQ1MC4zOCwxMDEuNjJsMi4wNiwyLjA2LTIuNzIsNzMuNjNBMTQuNCwxNC40LDAsMCwwLDQ2NC4xMiwxOTJoMzMuMzFhMTQuNCwxNC40LDAsMCwwLDE0LjQtMTQuNEw1MTIsMTQuNEExNC40LDE0LjQsMCwwLDAsNDk3LjYsMFpNNDMyLDI4OEg0MTZhMTYsMTYsMCwwLDAtMTYsMTZWNDU4YTYsNiwwLDAsMS02LDZINTRhNiw2LDAsMCwxLTYtNlYxMThhNiw2LDAsMCwxLDYtNkgyMDhhMTYsMTYsMCwwLDAsMTYtMTZWODBhMTYsMTYsMCwwLDAtMTYtMTZINDhBNDgsNDgsMCwwLDAsMCwxMTJWNDY0YTQ4LDQ4LDAsMCwwLDQ4LDQ4SDQwMGE0OCw0OCwwLDAsMCw0OC00OFYzMDRBMTYsMTYsMCwwLDAsNDMyLDI4OFonLyUzRSUzQy9zdmclM0UlMEFcIik7XG4gIGhlaWdodDogMC42ZW07XG4gIHdpZHRoOiAwLjZlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG5hOmZvY3VzIHtcbiAgb3V0bGluZS1jb2xvcjogIzc3YTVjZjtcbn1cblxub2wgY29kZSwgdWwgY29kZSwgcCBjb2RlIHtcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcbiAgcGFkZGluZzogMnB4IDNweDtcbiAgbGluZS1oZWlnaHQ6IDExMCU7XG59XG5cbi5zdHJpa2V0cm91Z2gge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSB7XG4gIC5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogNDUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICB9XG59XG4uY29udGVudCBoMSB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjllbTtcbiAgY29sb3I6ICMzMzM7XG59XG4uY29udGVudCBoMSBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmNmY2ZjY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5jb250ZW50IGgxIHN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuLmNvbnRlbnQgaDIge1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgY29sb3I6ICMzMzM7XG4gIGxpbmUtaGVpZ2h0OiAxLjc1ZW07XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG59XG4uY29udGVudCBoMyB7XG4gIGZvbnQtc2l6ZTogMS43ZW07XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGNvbG9yOiAjMzMzO1xufVxuLmNvbnRlbnQgaDQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjZlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBjb2xvcjogIzQ0NDtcbn1cbi5jb250ZW50IHAge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBsaW5lLWhlaWdodDogMS43ZW07XG4gIHdvcmQtc3BhY2luZzogMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuLmNvbnRlbnQgcCA6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbi5jb250ZW50IHAuaW50cm8ge1xuICBmb250LXNpemU6IDJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNmVtO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNmY2ZjY7XG59XG4uY29udGVudCB1bCwgLmNvbnRlbnQgb2wge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBsaW5lLWhlaWdodDogMS40ZW07XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmNvbnRlbnQgdWwgbGksIC5jb250ZW50IG9sIGxpIHtcbiAgd29yZC1zcGFjaW5nOiAycHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5jb250ZW50IGhyIHtcbiAgYm9yZGVyOiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogNDBweCAwO1xufVxuLmNvbnRlbnQgZW0ge1xuICBjb2xvcjogIzAwMDtcbn1cbi5jb250ZW50IHRhYmxlIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5jb250ZW50IHRhYmxlIHRoZWFkIHtcbiAgYmFja2dyb3VuZDogI2VlZTtcbn1cbi5jb250ZW50IHRhYmxlIHRoLCAuY29udGVudCB0YWJsZSB0ZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHBhZGRpbmc6IDVweCAxNXB4IDVweCAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG4uY29udGVudCB0YWJsZSB0ZCBwIHtcbiAgZm9udC1zaXplOiAxZW07XG59XG4uY29udGVudCAuc2lkZXBpYyB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uY29udGVudCAuc2lkZXBpYyBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTIwcHgpIHtcbiAgLmNvbnRlbnQgLnNpZGVwaWMgaW1nIHtcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4ICNkZGQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgfVxufVxuLmNvbnRlbnQgLnNpZGVwaWMgcCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDkyMHB4KSB7XG4gIC5jb250ZW50IC5zaWRlcGljIHAge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbn1cbi5jb250ZW50IC5zaWRlcGljIHA6YmVmb3JlIHtcbiAgY29udGVudDogXCLigJNcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MXB4KSB7XG4gIC5jb250ZW50IC5zaWRlcGljIHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbiAgLmNvbnRlbnQgLnNpZGVwaWMucmlnaHQge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgfVxuICAuY29udGVudCAuc2lkZXBpYy5sZWZ0IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIH1cbn1cbi5jb250ZW50IC5wb3N0LWJvZHkgaDQuY29kZXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuMWVtO1xuICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTIwcHgpIHtcbiAgLmNvbnRlbnQgLnBvc3QtYm9keSBoNC5jb2RldGl0bGUge1xuICAgIG1hcmdpbjogMCAtMjBweDtcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcbiAgfVxufVxuLmNvbnRlbnQgLnBvc3QtYm9keSBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xufVxuLmNvbnRlbnQgLnBvc3QtYm9keSB1bCwgLmNvbnRlbnQgLnBvc3QtYm9keSBvbCB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4uY29udGVudCAucG9zdC1ib2R5IHVsIGxpLCAuY29udGVudCAucG9zdC1ib2R5IG9sIGxpIHtcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmNvbnRlbnQgLnBvc3QtYm9keSBwcmUge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkyMHB4KSB7XG4gIC5jb250ZW50IC5wb3N0LWJvZHkgcHJlIHtcbiAgICBtYXJnaW46IDAgLTIwcHggMjVweCAtMjBweDtcbiAgfVxuICAuY29udGVudCAucG9zdC1ib2R5IHByZSBjb2RlIHtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuLmNvbnRlbnQgLnBvc3QtYm9keSBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jb250ZW50IC5wb3N0LWJvZHkgaW1nLmV4dHJhc3BhY2Uge1xuICBtYXJnaW46IDI1cHggYXV0bztcbn1cbi5jb250ZW50IC5wb3N0LWJvZHkgaW1nLnpvb21pbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250ZW50IC5wb3N0LWJvZHkgLmNvcHkge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG59XG4uY29udGVudCAucG9zdC1ib2R5IC5jb3B5IHNtYWxsIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cbi5jb250ZW50IC5wb3N0LWJvZHkgdGFibGUgdHIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbn1cbi5jb250ZW50IC5wb3N0LWJvZHkgdGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCkge1xuICAuY29udGVudCB7XG4gICAgcGFkZGluZzogMTA0cHggMCAyMHB4IDA7XG4gICAgbWFyZ2luOiAwIDIwcHg7XG4gIH1cbiAgLmNvbnRlbnQgaDEge1xuICAgIGZvbnQtc2l6ZTogMS44ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMi4xZW07XG4gIH1cbiAgLmNvbnRlbnQgaDEgc3BhbiB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICB9XG4gIC5jb250ZW50IGgyIHtcbiAgICBmb250LXNpemU6IDEuN2VtO1xuICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4gIH1cbiAgLmNvbnRlbnQgaDMge1xuICAgIGZvbnQtc2l6ZTogMS42ZW07XG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgfVxuICAuY29udGVudCBoNCB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBsaW5lLWhlaWdodDogMS44ZW07XG4gIH1cbiAgLmNvbnRlbnQgcCwgLmNvbnRlbnQgdWwsIC5jb250ZW50IG9sIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgfVxuICAuY29udGVudCBwLmludHJvIHtcbiAgICBmb250LXNpemU6IDEuOGVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICB9XG4gIC5jb250ZW50IGhyIHtcbiAgICBtYXJnaW46IDMwcHggMDtcbiAgfVxufVxuXG4uaGxqcyB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCkge1xuICAuaGxqcyB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxufVxuXG4uYWxlcnQge1xuICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCA4NXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDQyMHB4KSB7XG4gIC5hbGVydCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDcwcHg7XG4gIH1cbiAgLmFsZXJ0ID4gaSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjNweDtcbiAgICBsZWZ0OiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgfVxufVxuLmFsZXJ0ID4gcCwgLmFsZXJ0ID4gdWwsIC5hbGVydCA+IG9sIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5hbGVydCA+IHAgKyBwIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLmFsZXJ0LWxpbmsge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5hbGVydC1kaXNtaXNzaWJsZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG59XG4uYWxlcnQtZGlzbWlzc2libGUgLmNsb3NlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0ycHg7XG4gIHJpZ2h0OiAtMjFweDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4uYWxlcnQtc3VjY2VzcyB7XG4gIGNvbG9yOiAjM2M3NjNkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZmMGQ4O1xuICBib3JkZXItY29sb3I6ICNkNmU5YzY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMiclM0UlM0NwYXRoIGZpbGw9JyUyMzNjNzYzZCcgZD0nTTQzNS44NDggODMuNDY2TDE3Mi44MDQgMzQ2LjUxbC05Ni42NTItOTYuNjUyYy00LjY4Ni00LjY4Ni0xMi4yODQtNC42ODYtMTYuOTcxIDBsLTI4LjI4NCAyOC4yODRjLTQuNjg2IDQuNjg2LTQuNjg2IDEyLjI4NCAwIDE2Ljk3MWwxMzMuNDIxIDEzMy40MjFjNC42ODYgNC42ODYgMTIuMjg0IDQuNjg2IDE2Ljk3MSAwbDI5OS44MTMtMjk5LjgxM2M0LjY4Ni00LjY4NiA0LjY4Ni0xMi4yODQgMC0xNi45NzFsLTI4LjI4NC0yOC4yODRjLTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NyAweicvJTNFJTNDL3N2ZyUzRSUwQVwiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAzNXB4IDM1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246ICAyNXB4IDE1cHg7XG59XG4uYWxlcnQtc3VjY2VzcyBociB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNjOWUyYjM7XG59XG4uYWxlcnQtc3VjY2VzcyBlbSB7XG4gIGNvbG9yOiAjM2M3NjNkO1xufVxuLmFsZXJ0LXN1Y2Nlc3MgYSB7XG4gIGNvbG9yOiAjMmI1NDJjO1xufVxuLmFsZXJ0LWluZm8ge1xuICBjb2xvcjogIzMxNzA4ZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZWRmNztcbiAgYm9yZGVyLWNvbG9yOiAjYmNlOGYxO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI1NiA1MTInJTNFJTNDcGF0aCBmaWxsPSclMjMzMTcwOGYnIGQ9J00yMjQgMzUyLjU4OVYyMjRjMC0xNi40NzUtNi4yNTgtMzEuNTE3LTE2LjUyMS00Mi44NzJDMjI1LjkwNSAxNjEuMTQgMjM2IDEzNS4zNDYgMjM2IDEwOCAyMzYgNDguMzEzIDE4Ny42OTcgMCAxMjggMCA2OC4zMTMgMCAyMCA0OC4zMDMgMjAgMTA4YzAgMjAuODgyIDUuODg2IDQwLjg1OSAxNi44NzQgNTguMDM3QzE1LjEwNyAxNzYuMjY0IDAgMTk4LjQwMSAwIDIyNHYzOS4zMTRjMCAyMy42NDEgMTIuODg0IDQ0LjMyOSAzMiA1NS40MTF2MzMuODY0QzEyLjg4NCAzNjMuNjcxIDAgMzg0LjM1OSAwIDQwOHY0MGMwIDM1LjI5IDI4LjcxIDY0IDY0IDY0aDEyOGMzNS4yOSAwIDY0LTI4LjcxIDY0LTY0di00MGMwLTIzLjY0MS0xMi44ODQtNDQuMzI5LTMyLTU1LjQxMXpNMTI4IDQ4YzMzLjEzNyAwIDYwIDI2Ljg2MyA2MCA2MHMtMjYuODYzIDYwLTYwIDYwLTYwLTI2Ljg2My02MC02MCAyNi44NjMtNjAgNjAtNjB6bTgwIDQwMGMwIDguODM2LTcuMTY0IDE2LTE2IDE2SDY0Yy04LjgzNiAwLTE2LTcuMTY0LTE2LTE2di00MGMwLTguODM2IDcuMTY0LTE2IDE2LTE2aDE2VjI3OS4zMTRINjRjLTguODM2IDAtMTYtNy4xNjQtMTYtMTZWMjI0YzAtOC44MzYgNy4xNjQtMTYgMTYtMTZoOTZjOC44MzYgMCAxNiA3LjE2NCAxNiAxNnYxNjhoMTZjOC44MzYgMCAxNiA3LjE2NCAxNiAxNnY0MHonLyUzRSUzQy9zdmclM0UlMEFcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMjVweCAyNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAgMjVweCAyNXB4O1xufVxuLmFsZXJ0LWluZm8gaHIge1xuICBib3JkZXItdG9wLWNvbG9yOiAjYTZlMWVjO1xufVxuLmFsZXJ0LWluZm8gZW0ge1xuICBjb2xvcjogIzMxNzA4Zjtcbn1cbi5hbGVydC1pbmZvIGEge1xuICBib3JkZXItY29sb3I6ICMyNDUyNjk7XG4gIGNvbG9yOiAjMjQ1MjY5O1xufVxuLmFsZXJ0LXdhcm5pbmcge1xuICBjb2xvcjogIzhhNmQzYjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZjhlMztcbiAgYm9yZGVyLWNvbG9yOiAjZmFlYmNjO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI1NiA1MTInJTNFJTNDcGF0aCBmaWxsPSclMjM4YTZkM2InIGQ9J00xNzMuODU0IDQ4YzYuODc0IDAgMTIuMzQzIDUuNzYzIDExLjk4NCAxMi42MjhsLTExLjc0MiAyMjRjLS4zMzQgNi4zNzUtNS42IDExLjM3Mi0xMS45ODQgMTEuMzcySDkzLjg4OGMtNi4zODMgMC0xMS42NS00Ljk5Ny0xMS45ODQtMTEuMzcybC0xMS43NDItMjI0QzY5LjgwMiA1My43NjMgNzUuMjcxIDQ4IDgyLjE0NiA0OGg5MS43MDhNMTI4IDMzNmMzNS4yOSAwIDY0IDI4LjcxIDY0IDY0cy0yOC43MSA2NC02NCA2NC02NC0yOC43MS02NC02NCAyOC43MS02NCA2NC02NE0xNzMuODU0IDBIODIuMTQ2QzQ3Ljg4MSAwIDIwLjQyNyAyOC43ODMgMjIuMjI4IDYzLjE0MWwxMS43NDIgMjI0Yy42OTggMTMuMzA5IDUuNjg5IDI1LjQxNCAxMy41OTIgMzUuMDAxQzI4LjAzNSAzNDIuMzEgMTYgMzY5Ljc3NyAxNiA0MDBjMCA2MS43NTcgNTAuMjQzIDExMiAxMTIgMTEyczExMi01MC4yNDMgMTEyLTExMmMwLTMwLjIyMy0xMi4wMzUtNTcuNjktMzEuNTYxLTc3Ljg1OGE1OS43OCA1OS43OCAwIDAgMCAxMy41OTItMzUuMDAxbDExLjc0Mi0yMjRDMjM1LjU2NiAyOC45MjIgMjA4LjI1OSAwIDE3My44NTQgMHonLyUzRSUzQy9zdmclM0UlMEFcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMjVweCAyNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAgMjVweCAyNXB4O1xufVxuLmFsZXJ0LXdhcm5pbmcgaHIge1xuICBib3JkZXItdG9wLWNvbG9yOiAjZjdlMWI1O1xufVxuLmFsZXJ0LXdhcm5pbmcgZW0ge1xuICBjb2xvcjogIzhhNmQzYjtcbn1cbi5hbGVydC13YXJuaW5nIGEge1xuICBib3JkZXItY29sb3I6ICM2NjUxMmM7XG4gIGNvbG9yOiAjNjY1MTJjO1xufVxuLmFsZXJ0LWRhbmdlciB7XG4gIGNvbG9yOiAjYTk0NDQyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJkZWRlO1xuICBib3JkZXItY29sb3I6ICNlYmNjZDE7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMzIwIDUxMiclM0UlM0NwYXRoIGZpbGw9JyUyM2E5NDQ0MicgZD0nTTIwNy42IDI1NmwxMDcuNzItMTA3LjcyYzYuMjMtNi4yMyA2LjIzLTE2LjM0IDAtMjIuNThsLTI1LjAzLTI1LjAzYy02LjIzLTYuMjMtMTYuMzQtNi4yMy0yMi41OCAwTDE2MCAyMDguNCA1Mi4yOCAxMDAuNjhjLTYuMjMtNi4yMy0xNi4zNC02LjIzLTIyLjU4IDBMNC42OCAxMjUuN2MtNi4yMyA2LjIzLTYuMjMgMTYuMzQgMCAyMi41OEwxMTIuNCAyNTYgNC42OCAzNjMuNzJjLTYuMjMgNi4yMy02LjIzIDE2LjM0IDAgMjIuNThsMjUuMDMgMjUuMDNjNi4yMyA2LjIzIDE2LjM0IDYuMjMgMjIuNTggMEwxNjAgMzAzLjZsMTA3LjcyIDEwNy43MmM2LjIzIDYuMjMgMTYuMzQgNi4yMyAyMi41OCAwbDI1LjAzLTI1LjAzYzYuMjMtNi4yMyA2LjIzLTE2LjM0IDAtMjIuNThMMjA3LjYgMjU2eicvJTNFJTNDL3N2ZyUzRSUwQVwiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAyNXB4IDI1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246ICAyNXB4IDI1cHg7XG59XG4uYWxlcnQtZGFuZ2VyIGhyIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2U0YjljMDtcbn1cbi5hbGVydC1kYW5nZXIgZW0ge1xuICBjb2xvcjogI2E5NDQ0Mjtcbn1cbi5hbGVydC1kYW5nZXIgYSB7XG4gIGJvcmRlci1jb2xvcjogIzg0MzUzNDtcbiAgY29sb3I6ICM4NDM1MzQ7XG59XG4uYWxlcnQtcXVvdGUge1xuICBjb2xvcjogIzQ0NDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyLWNvbG9yOiAjZGRkO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTc2IDUxMiclM0UlM0NwYXRoIGZpbGw9JyUyMzQ0NDQ0NCcgZD0nTTUwNCAyMjRoLTU2di04YzAtMjIuMSAxNy45LTQwIDQwLTQwaDhjMjYuNSAwIDQ4LTIxLjUgNDgtNDhWODBjMC0yNi41LTIxLjUtNDgtNDgtNDhoLThjLTEwMS41IDAtMTg0IDgyLjUtMTg0IDE4NHYxOTJjMCAzOS43IDMyLjMgNzIgNzIgNzJoMTI4YzM5LjcgMCA3Mi0zMi4zIDcyLTcyVjI5NmMwLTM5LjctMzIuMy03Mi03Mi03MnptMjQgMTg0YzAgMTMuMi0xMC44IDI0LTI0IDI0SDM3NmMtMTMuMiAwLTI0LTEwLjgtMjQtMjRWMjE2YzAtNzUgNjEtMTM2IDEzNi0xMzZoOHY0OGgtOGMtNDguNSAwLTg4IDM5LjUtODggODh2NTZoMTA0YzEzLjIgMCAyNCAxMC44IDI0IDI0djExMnpNMjAwIDIyNGgtNTZ2LThjMC0yMi4xIDE3LjktNDAgNDAtNDBoOGMyNi41IDAgNDgtMjEuNSA0OC00OFY4MGMwLTI2LjUtMjEuNS00OC00OC00OGgtOEM4Mi41IDMyIDAgMTE0LjUgMCAyMTZ2MTkyYzAgMzkuNyAzMi4zIDcyIDcyIDcyaDEyOGMzOS43IDAgNzItMzIuMyA3Mi03MlYyOTZjMC0zOS43LTMyLjMtNzItNzItNzJ6bTI0IDE4NGMwIDEzLjItMTAuOCAyNC0yNCAyNEg3MmMtMTMuMiAwLTI0LTEwLjgtMjQtMjRWMjE2YzAtNzUgNjEtMTM2IDEzNi0xMzZoOHY0OGgtOGMtNDguNSAwLTg4IDM5LjUtODggODh2NTZoMTA0YzEzLjIgMCAyNCAxMC44IDI0IDI0djExMnonLyUzRSUzQy9zdmclM0UlMEFcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMjVweCAyNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAgMjVweCAyNXB4O1xufVxuLmFsZXJ0LXF1b3RlIGhyIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2U0YjljMDtcbn1cbi5hbGVydC1xdW90ZSBlbSB7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uYWxlcnQtcXVvdGUgYSB7XG4gIGJvcmRlci1jb2xvcjogIzg0MzUzNDtcbiAgY29sb3I6ICM4NDM1MzQ7XG59XG5cbi5mdXJ0aGVyLXJlYWRpbmcge1xuICBsaXN0LXN0eWxlOiBsb3dlci1yb21hbjtcbn1cblxuQGtleWZyYW1lcyBzaGFrZSB7XG4gIDEwJSwgOTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xcHgsIDAsIDApO1xuICB9XG4gIDIwJSwgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7XG4gIH1cbiAgMzAlLCA1MCUsIDcwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNHB4LCAwLCAwKTtcbiAgfVxuICA0MCUsIDYwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg0cHgsIDAsIDApO1xuICB9XG59XG4vKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5zdi1hcHAge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDEyODBweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkge1xuICBzdi1hcHAge1xuICAgIG1hcmdpbi10b3A6IDlweDtcbiAgfVxufVxuXG5hc2lkZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTIxcHgpIHtcbiAgYXNpZGUge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xuICAgIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2VlZSwgcmdiYSgwLCAwLCAwLCAwKSkgMSAxMDAlO1xuICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gNTBweCk7XG4gIH1cbn1cbmFzaWRlICNwaWN0dXJlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5hc2lkZSAjcGljdHVyZSBpbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogMTEwcHg7XG59XG5hc2lkZSAjcGljdHVyZS5uZXctdmVyc2lvbi1hdmFpbGFibGUgaW1nIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjA0MzNlO1xufVxuYXNpZGUgLm5ldy12ZXJzaW9uLWF2YWlsYWJsZS1tc2cge1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGJhY2tncm91bmQ6ICNmMDQzM2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmFzaWRlIGgxIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMzMzM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzE0cHgpIHtcbiAgYXNpZGUgaDEge1xuICAgIHBhZGRpbmctdG9wOiAxOHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzUycHgpIHtcbiAgYXNpZGUgaDEge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBwYWRkaW5nLXRvcDogMTdweDtcbiAgfVxufVxuYXNpZGUgaDEgYSB7XG4gIGNvbG9yOiAjMzMzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5hc2lkZSBoMSBhOmhvdmVyIHtcbiAgY29sb3I6ICMxMTE7XG59XG5hc2lkZSBoMiB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXNpemU6IDEuM2VtO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuYXNpZGUgcCB7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDEuNWVtO1xuICBjb2xvcjogIzU1NTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSB7XG4gIGFzaWRlIG5hdiB7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgfVxufVxuYXNpZGUgbmF2IG9sIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuYXNpZGUgbmF2IG9sIGxpIHtcbiAgcGFkZGluZzogMCAwIDAgMTBweDtcbiAgbWFyZ2luOiAwIDAgMTVweCAxNXB4O1xufVxuYXNpZGUgbmF2IG9sIGxpIGEge1xuICBjb2xvcjogIzQ0NDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICM2NjY7XG59XG5hc2lkZSBuYXYgb2wgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjMjIyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ0NDtcbn1cbmFzaWRlIG5hdiBvbCBsaSBhLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ0NDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTIwcHgpIHtcbiAgYXNpZGUgbmF2IG9sIGxpIGEge1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIH1cbn1cbmFzaWRlIHVsLnNvY2lhbCB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbmFzaWRlIHVsLnNvY2lhbCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAyMnB4O1xufVxuYXNpZGUgdWwuc29jaWFsIGxpOmxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbmFzaWRlIHVsLnNvY2lhbCBsaSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtaW5kZW50OiAtOTk5OTk5cHg7XG59XG5hc2lkZSB1bC5zb2NpYWwgbGkgYTpob3ZlciB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbmFzaWRlIHVsLnNvY2lhbCBsaSBhLmZhY2Vib29rIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyBoZWlnaHQ9JzEwMCUyNScgdmlld0JveD0nMCAwIDUxMiA1MTInIHdpZHRoPScxMDAlMjUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J200ODMuNzM4MjgxIDBoLTQ1NS41Yy0xNS41OTc2NTYuMDA3ODEyNS0yOC4yNDIxODcyNSAxMi42NjAxNTYtMjguMjM4MjgxIDI4LjI2MTcxOXY0NTUuNWMuMDA3ODEyNSAxNS41OTc2NTYgMTIuNjYwMTU2IDI4LjI0MjE4NyAyOC4yNjE3MTkgMjguMjM4MjgxaDQ1NS40NzY1NjJjMTUuNjA1NDY5LjAwMzkwNiAyOC4yNTc4MTMtMTIuNjQ0NTMxIDI4LjI2MTcxOS0yOC4yNSAwLS4wMDM5MDYgMC0uMDA3ODEyIDAtLjAxMTcxOXYtNDU1LjVjLS4wMDc4MTItMTUuNTk3NjU2LTEyLjY2MDE1Ni0yOC4yNDIxODcyNS0yOC4yNjE3MTktMjguMjM4Mjgxem0wIDAnIGZpbGw9JyUyMzQyNjdiMicvJTNFJTNDcGF0aCBkPSdtMzUzLjUgNTEydi0xOThoNjYuNzVsMTAtNzcuNWgtNzYuNzV2LTQ5LjM1OTM3NWMwLTIyLjM4NjcxOSA2LjIxNDg0NC0zNy42NDA2MjUgMzguMzE2NDA2LTM3LjY0MDYyNWg0MC42ODM1OTR2LTY5LjEyODkwNmMtNy4wNzgxMjUtLjk0MTQwNi0zMS4zNjMyODEtMy4wNDY4NzUtNTkuNjIxMDk0LTMuMDQ2ODc1LTU5IDAtOTkuMzc4OTA2IDM2LTk5LjM3ODkwNiAxMDIuMTQwNjI1djU3LjAzNTE1NmgtNjYuNXY3Ny41aDY2LjV2MTk4em0wIDAnIGZpbGw9JyUyM2ZmZicvJTNFJTNDL3N2ZyUzRSUwQVwiKTtcbn1cbmFzaWRlIHVsLnNvY2lhbCBsaSBhLnR3aXR0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInJTNFJTNDcGF0aCBmaWxsPSclMjMxZGExZjInIGQ9J000NTkuMzcgMTUxLjcxNmMuMzI1IDQuNTQ4LjMyNSA5LjA5Ny4zMjUgMTMuNjQ1IDAgMTM4LjcyLTEwNS41ODMgMjk4LjU1OC0yOTguNTU4IDI5OC41NTgtNTkuNDUyIDAtMTE0LjY4LTE3LjIxOS0xNjEuMTM3LTQ3LjEwNiA4LjQ0Ny45NzQgMTYuNTY4IDEuMjk5IDI1LjM0IDEuMjk5IDQ5LjA1NSAwIDk0LjIxMy0xNi41NjggMTMwLjI3NC00NC44MzItNDYuMTMyLS45NzUtODQuNzkyLTMxLjE4OC05OC4xMTItNzIuNzcyIDYuNDk4Ljk3NCAxMi45OTUgMS42MjQgMTkuODE4IDEuNjI0IDkuNDIxIDAgMTguODQzLTEuMyAyNy42MTQtMy41NzMtNDguMDgxLTkuNzQ3LTg0LjE0My01MS45OC04NC4xNDMtMTAyLjk4NXYtMS4yOTljMTMuOTY5IDcuNzk3IDMwLjIxNCAxMi42NyA0Ny40MzEgMTMuMzE5LTI4LjI2NC0xOC44NDMtNDYuNzgxLTUxLjAwNS00Ni43ODEtODcuMzkxIDAtMTkuNDkyIDUuMTk3LTM3LjM2IDE0LjI5NC01Mi45NTQgNTEuNjU1IDYzLjY3NSAxMjkuMyAxMDUuMjU4IDIxNi4zNjUgMTA5LjgwNy0xLjYyNC03Ljc5Ny0yLjU5OS0xNS45MTgtMi41OTktMjQuMDQgMC01Ny44MjggNDYuNzgyLTEwNC45MzQgMTA0LjkzNC0xMDQuOTM0IDMwLjIxMyAwIDU3LjUwMiAxMi42NyA3Ni42NyAzMy4xMzcgMjMuNzE1LTQuNTQ4IDQ2LjQ1Ni0xMy4zMiA2Ni41OTktMjUuMzQtNy43OTggMjQuMzY2LTI0LjM2NiA0NC44MzMtNDYuMTMyIDU3LjgyNyAyMS4xMTctMi4yNzMgNDEuNTg0LTguMTIyIDYwLjQyNi0xNi4yNDMtMTQuMjkyIDIwLjc5MS0zMi4xNjEgMzkuMzA4LTUyLjYyOCA1NC4yNTN6Jy8lM0UlM0Mvc3ZnJTNFJTBBXCIpO1xufVxuYXNpZGUgdWwuc29jaWFsIGxpIGEubGlua2VkaW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIGhlaWdodD0nMTAwJTI1JyB2aWV3Qm94PScwIC0xMSA1MTIgNTExJyB3aWR0aD0nMTAwJTI1JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDZyBmaWxsPSclMjMwNjknJTNFJTNDcGF0aCBkPSdtNi40ODgyODEgMTU5LjY4MzU5NGgxMDkuNzUzOTA3djMzMC4yMDcwMzFoLTEwOS43NTM5MDd6bTAgMCcvJTNFJTNDcGF0aCBkPSdtNjIuMDg5ODQ0LjVjLTM3LjU0Mjk2OSAwLTYyLjA4OTg0NCAyNC42NTIzNDQtNjIuMDg5ODQ0IDU3LjA1NDY4OCAwIDMxLjY4NzUgMjMuODE2NDA2IDU3LjA0Mjk2OCA2MC42NDg0MzggNTcuMDQyOTY4aC43MTQ4NDNjMzguMjc3MzQ0IDAgNjIuMDk3NjU3LTI1LjM1NTQ2OCA2Mi4wOTc2NTctNTcuMDQyOTY4LS43MTQ4NDQtMzIuNDAyMzQ0LTIzLjgyMDMxMy01Ny4wNTQ2ODgtNjEuMzcxMDk0LTU3LjA1NDY4OHptMCAwJy8lM0UlM0NwYXRoIGQ9J20zODUuNjQ0NTMxIDE1MS45MzM1OTRjLTU4LjIzNDM3NSAwLTg0LjMyODEyNSAzMi4wMDM5MDYtOTguOTE0MDYyIDU0LjUwNzgxMnYtNDYuNzU3ODEyaC0xMDkuNzU3ODEzdjMzMC4yMDcwMzFoMTA5Ljc1MzkwNnYtMTg0LjQwMjM0NGMwLTkuODcxMDkzLjcxNDg0NC0xOS43MjY1NjIgMy42MTMyODItMjYuNzg1MTU2IDcuOTMzNTk0LTE5LjcxNDg0NCAyNS45OTIxODctNDAuMTM2NzE5IDU2LjMxMjUtNDAuMTM2NzE5IDM5LjcxNDg0NCAwIDU1LjYwMTU2MiAzMC4yODEyNSA1NS42MDE1NjIgNzQuNjcxODc1djE3Ni42NTIzNDRoMTA5Ljc0NjA5NHYtMTg5LjMzNTkzN2MwLTEwMS40MjU3ODItNTQuMTQ4NDM4LTE0OC42MjEwOTQtMTI2LjM1NTQ2OS0xNDguNjIxMDk0em0wIDAnLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRSUwQVwiKTtcbn1cbmFzaWRlIHVsLnNvY2lhbCBsaSBhLmdpdGh1YiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnIHZpZXdCb3g9JzAgMCAyNTYgMjUwJyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHByZXNlcnZlQXNwZWN0UmF0aW89J3hNaWRZTWlkJyUzRSUzQ2clM0UlM0NwYXRoIGQ9J00xMjguMDAxMDYsMCBDNTcuMzE3MjkyNiwwIDAsNTcuMzA2Njk0MiAwLDEyOC4wMDEwNiBDMCwxODQuNTU1MjgxIDM2LjY3NjE5OTcsMjMyLjUzNTU0MiA4Ny41MzQ5MzcsMjQ5LjQ2MDg5OSBDOTMuOTMyMDIyMywyNTAuNjQ1Nzc5IDk2LjI4MDU4OCwyNDYuNjg0MTY1IDk2LjI4MDU4OCwyNDMuMzAzMzMzIEM5Ni4yODA1ODgsMjQwLjI1MTA0NSA5Ni4xNjE4ODc4LDIzMC4xNjc4OTkgOTYuMTA2Nzc3LDIxOS40NzIxNzYgQzYwLjQ5Njc1ODUsMjI3LjIxNTIzNSA1Mi45ODI2MjA3LDIwNC4zNjk3MTIgNTIuOTgyNjIwNywyMDQuMzY5NzEyIEM0Ny4xNTk5NTg0LDE4OS41NzQ1OTggMzguNzcwNDA4LDE4NS42NDA1MzggMzguNzcwNDA4LDE4NS42NDA1MzggQzI3LjE1Njg3ODUsMTc3LjY5NjExMyAzOS42NDU4MjA2LDE3Ny44NTkzMjUgMzkuNjQ1ODIwNiwxNzcuODU5MzI1IEM1Mi40OTkzNDE5LDE3OC43NjIyOTMgNTkuMjY3MzY1LDE5MS4wNDk4NyA1OS4yNjczNjUsMTkxLjA0OTg3IEM3MC42ODM3Njc1LDIxMC42MTg0MjMgODkuMjExNTc1MywyMDQuOTYxMDkzIDk2LjUxNTg2ODUsMjAxLjY5MDQ4MiBDOTcuNjY0NzE1NSwxOTMuNDE3NTEyIDEwMC45ODE5NTksMTg3Ljc3MDc4IDEwNC42NDI1ODMsMTg0LjU3NDM1NyBDNzYuMjExNzk5LDE4MS4zMzc2NiA0Ni4zMjQ4MTksMTcwLjM2MjE0NCA0Ni4zMjQ4MTksMTIxLjMxNTcwMiBDNDYuMzI0ODE5LDEwNy4zNDA4ODkgNTEuMzI1MDU4OCw5NS45MjIzNjgyIDU5LjUxMzI0MzcsODYuOTU4MzkzNyBDNTguMTg0MjI2OCw4My43MzQ0MTUyIDUzLjgwMjkyMjksNzAuNzE1NTYyIDYwLjc1MzIzNTQsNTMuMDg0MzYzNiBDNjAuNzUzMjM1NCw1My4wODQzNjM2IDcxLjUwMTk1MDEsNDkuNjQ0MTgxMyA5NS45NjI2NDEyLDY2LjIwNDk1OTUgQzEwNi4xNzI5NjcsNjMuMzY4ODc2IDExNy4xMjMwNDcsNjEuOTQ2NTk0OSAxMjguMDAxMDYsNjEuODk3ODQzMiBDMTM4Ljg3OTA3Myw2MS45NDY1OTQ5IDE0OS44Mzc2MzIsNjMuMzY4ODc2IDE2MC4wNjcwMzMsNjYuMjA0OTU5NSBDMTg0LjQ5ODA1LDQ5LjY0NDE4MTMgMTk1LjIzMTkyNiw1My4wODQzNjM2IDE5NS4yMzE5MjYsNTMuMDg0MzYzNiBDMjAyLjE5OTE5Nyw3MC43MTU1NjIgMTk3LjgxNTc3Myw4My43MzQ0MTUyIDE5Ni40ODY3NTYsODYuOTU4MzkzNyBDMjA0LjY5NDAxOCw5NS45MjIzNjgyIDIwOS42NjAzNDMsMTA3LjM0MDg4OSAyMDkuNjYwMzQzLDEyMS4zMTU3MDIgQzIwOS42NjAzNDMsMTcwLjQ3ODcyNSAxNzkuNzE2MTMzLDE4MS4zMDM3NDcgMTUxLjIxMzI4MSwxODQuNDcyNjE0IEMxNTUuODA0NDMsMTg4LjQ0NDgyOCAxNTkuODk1MzQyLDE5Ni4yMzQ1MTggMTU5Ljg5NTM0MiwyMDguMTc2NTkzIEMxNTkuODk1MzQyLDIyNS4zMDMzMTcgMTU5Ljc0Njk2OCwyMzkuMDg3MzYxIDE1OS43NDY5NjgsMjQzLjMwMzMzMyBDMTU5Ljc0Njk2OCwyNDYuNzA5NjAxIDE2Mi4wNTEwMiwyNTAuNzAwODkgMTY4LjUzOTI1LDI0OS40NDM5NDEgQzIxOS4zNzA0MzIsMjMyLjQ5OTUwNyAyNTYsMTg0LjUzNjIwNCAyNTYsMTI4LjAwMTA2IEMyNTYsNTcuMzA2Njk0MiAxOTguNjkxMTg3LDAgMTI4LjAwMTA2LDAgWiBNNDcuOTQwNTU5MywxODIuMzQwMjEyIEM0Ny42NTg2NDY1LDE4Mi45NzYxMDUgNDYuNjU4MTc0NSwxODMuMTY2ODczIDQ1Ljc0NjcyNzcsMTgyLjczMDIyNyBDNDQuODE4MzIzNSwxODIuMzEyNjU2IDQ0LjI5Njg5MTQsMTgxLjQ0NTcyMiA0NC41OTc4ODA4LDE4MC44MDc3MSBDNDQuODczNDM0NCwxODAuMTUyNzM5IDQ1Ljg3NjAyNiwxNzkuOTcwNDUgNDYuODAyMzEwMywxODAuNDA5MjE2IEM0Ny43MzI4MzQyLDE4MC44MjY3ODYgNDguMjYyNzQ1MSwxODEuNzAyMTk5IDQ3Ljk0MDU1OTMsMTgyLjM0MDIxMiBaIE01NC4yMzY3ODkyLDE4Ny45NTgyNTQgQzUzLjYyNjMzMTgsMTg4LjUyNDE5OSA1Mi40MzI5NzIzLDE4OC4yNjEzNjMgNTEuNjIzMjY4MiwxODcuMzY2ODc0IEM1MC43ODYwMDg4LDE4Ni40NzQ1MDQgNTAuNjI5MTU1MywxODUuMjgxMTQ0IDUxLjI0ODA5MTIsMTg0LjcwNjcyIEM1MS44Nzc2MjU0LDE4NC4xNDA3NzUgNTMuMDM0OTUxMiwxODQuNDA1NzMxIDUzLjg3NDMzMDIsMTg1LjI5ODEwMSBDNTQuNzExNTg5MiwxODYuMjAxMDY5IDU0Ljg3NDgwMTksMTg3LjM4NTk1IDU0LjIzNjc4OTIsMTg3Ljk1ODI1NCBaIE01OC41NTYyNDEzLDE5NS4xNDYzNDcgQzU3Ljc3MTk3MzIsMTk1LjY5MTA5NiA1Ni40ODk1ODg2LDE5NS4xODAyNjEgNTUuNjk2ODQxNywxOTQuMDQyMDEzIEM1NC45MTI1NzMzLDE5Mi45MDM3NjQgNTQuOTEyNTczMywxOTEuNTM4NzEzIDU1LjcxMzc5OSwxOTAuOTkxODQ1IEM1Ni41MDg2NjUxLDE5MC40NDQ5NzcgNTcuNzcxOTczMiwxOTAuOTM2NzM1IDU4LjU3NTMxODEsMTkyLjA2NjUwNSBDNTkuMzU3NDY2OSwxOTMuMjIzODMgNTkuMzU3NDY2OSwxOTQuNTg4ODggNTguNTU2MjQxMywxOTUuMTQ2MzQ3IFogTTY1Ljg2MTM1OTIsMjAzLjQ3MTE3NCBDNjUuMTU5NzU3MSwyMDQuMjQ0ODQ2IDYzLjY2NTQwODMsMjA0LjAzNzEyIDYyLjU3MTY3MTcsMjAyLjk4MTUzOCBDNjEuNDUyNDk5OSwyMDEuOTQ5MjcgNjEuMTQwOTEyMiwyMDAuNDg0NTk2IDYxLjg0NDYzNDEsMTk5LjcxMDkyNiBDNjIuNTU0NzE0NiwxOTguOTM1MTM3IDY0LjA1NzU0MjIsMTk5LjE1MzQ2IDY1LjE1OTc1NzEsMjAwLjIwMDU2NCBDNjYuMjcwNDUwNiwyMDEuMjMwNzEyIDY2LjYwOTU5MzYsMjAyLjcwNTk4NCA2NS44NjEzNTkyLDIwMy40NzExNzQgWiBNNzUuMzAyNTE1MSwyMDYuMjgxNTQyIEM3NC45OTMwNDc0LDIwNy4yODQxMzQgNzMuNTUzODA5LDIwNy43Mzk4NTcgNzIuMTAzOTcyNCwyMDcuMzEzODA5IEM3MC42NTYyNTU2LDIwNi44NzUwNDMgNjkuNzA4Nzc0OCwyMDUuNzAwNzYxIDcwLjAwMTI4NTcsMjA0LjY4NzU3MSBDNzAuMzAyMjc1LDIwMy42Nzg2MjEgNzEuNzQ3ODcyMSwyMDMuMjAzODIgNzMuMjA4MzA2OSwyMDMuNjU5NTQzIEM3NC42NTM5MDQxLDIwNC4wOTYxOSA3NS42MDM1MDQ4LDIwNS4yNjE5OTQgNzUuMzAyNTE1MSwyMDYuMjgxNTQyIFogTTg2LjA0Njk0NywyMDcuNDczNjI3IEM4Ni4wODI5ODA2LDIwOC41MjkyMDkgODQuODUzNTg3MSwyMDkuNDA0NjIyIDgzLjMzMTY4MjksMjA5LjQyMzcgQzgxLjgwMTMsMjA5LjQ1NzYxNCA4MC41NjM0MjgsMjA4LjYwMzM5OCA4MC41NDY0NzA4LDIwNy41NjQ3NzIgQzgwLjU0NjQ3MDgsMjA2LjQ5ODU5MSA4MS43NDgzMDg4LDIwNS42MzE2NTcgODMuMjc4NjkxNywyMDUuNjA2MjIxIEM4NC44MDA1OTYyLDIwNS41NzY1NDYgODYuMDQ2OTQ3LDIwNi40MjQ0MDMgODYuMDQ2OTQ3LDIwNy40NzM2MjcgWiBNOTYuNjAyMTQ3MSwyMDcuMDY5MDIzIEM5Ni43ODQ0MzY2LDIwOC4wOTkxNzEgOTUuNzI2NzM0MSwyMDkuMTU2ODcyIDk0LjIxNTQyOCwyMDkuNDM4Nzg1IEM5Mi43Mjk1NTc3LDIwOS43MTAwOTkgOTEuMzUzOTA4NiwyMDkuMDc0MjA2IDkxLjE2NTI2MDMsMjA4LjA1MjUzOCBDOTAuOTgwODUxNSwyMDYuOTk2OTU1IDkyLjA1NzYzMDYsMjA1LjkzOTI1MyA5My41NDEzODEzLDIwNS42NjU4MiBDOTUuMDU0ODA3LDIwNS40MDI5ODQgOTYuNDA5MjU5NiwyMDYuMDIxOTE5IDk2LjYwMjE0NzEsMjA3LjA2OTAyMyBaJyBmaWxsPSclMjMxNjE2MTQnJTNFJTNDL3BhdGglM0UlM0MvZyUzRSUzQy9zdmclM0UlMEFcIik7XG59XG5hc2lkZSB1bC5zb2NpYWwgbGkgYS5za3lwZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgaGVpZ2h0PScxMDAlMjUnIHZpZXdCb3g9JzAgLTEgNTEyLjAwMSA1MTInIHdpZHRoPScxMDAlMjUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J200OTMuODc4OTA2IDI5OC4wMjM0MzhjMi42NDA2MjUtMTQuMzg2NzE5IDQuMDI3MzQ0LTI5LjEwOTM3NiA0LjAyNzM0NC00My44MjgxMjYgMC0zMi42MzY3MTgtNi4zODY3MTktNjQuMjk2ODc0LTE5LjAxMTcxOS05NC4xMDU0NjgtMTIuMTc5Njg3LTI4Ljc5Mjk2OS0yOS42MDU0NjktNTQuNjQ4NDM4LTUxLjgyMDMxMi03Ni44NDc2NTYtMjIuMTgzNTk0LTIyLjIwMzEyNi00OC4wNTg1OTQtMzkuNjI1LTc2LjgzNTkzOC01MS44MDQ2ODgtMjkuNzk2ODc1LTEyLjYwOTM3NS02MS40NjA5MzctMTktOTQuMDkzNzUtMTktMTUuMzgyODEyIDAtMzAuNzg5MDYyIDEuNDQ1MzEyLTQ1Ljc4MTI1IDQuMzI0MjE5LS4wMzEyNS4wMDc4MTItLjA3NDIxOS4wMDc4MTItLjExMzI4MS4wMTU2MjUtMjAuNTcwMzEyLTEwLjkzNzUtNDMuNzAzMTI1LTE2Ljc3NzM0NC02Ny4xMjEwOTQtMTYuNzc3MzQ0LTM4LjIzMDQ2OCAwLTc0LjE3NTc4MSAxNC44ODY3MTktMTAxLjIwNzAzMSA0MS45Mjk2ODgtMjcuMDI3MzQ0IDI3LjAzMTI1LTQxLjkyMTg3NSA2Mi45NzY1NjItNDEuOTIxODc1IDEwMS4yMDcwMzEgMCAyNC4zMzIwMzEgNi4yNjE3MTkgNDguMjUzOTA2IDE4LjAwNzgxMiA2OS4zOTA2MjUtMi4zODI4MTIgMTMuNjk1MzEyLTMuNjQwNjI0IDI3LjY5MTQwNi0zLjY0MDYyNCA0MS42Njc5NjggMCAzMi42NDQ1MzIgNi4zOTA2MjQgNjQuMzAwNzgyIDE5LjAxNTYyNCA5NC4xMTMyODIgMTIuMTYwMTU3IDI4LjgwMDc4MSAyOS41OTM3NSA1NC42NDA2MjUgNTEuNzg5MDYzIDc2Ljg0Mzc1IDIyLjIxNDg0NCAyMi4xOTkyMTggNDguMDU0Njg3IDM5LjY0ODQzNyA3Ni44NjMyODEgNTEuNzk2ODc1IDI5LjgwMDc4MiAxMi42MzI4MTIgNjEuNDcyNjU2IDE5LjAyNzM0MyA5NC4xMDU0NjkgMTkuMDI3MzQzIDE0LjIwNzAzMSAwIDI4LjQ0NTMxMy0xLjI5Njg3NCA0Mi4zNDM3NS0zLjc2MTcxOCAyMS40MTQwNjMgMTIuMTEzMjgxIDQ1LjY1NjI1IDE4LjU1MDc4MSA3MC40MTQwNjMgMTguNTUwNzgxIDM4LjIyMjY1NiAwIDc0LjE0ODQzNy0xNC44NTkzNzUgMTAxLjE4MzU5My00MS45MTAxNTYgMjcuMDM5MDYzLTI3LjAxNTYyNSA0MS45MTc5NjktNjIuOTY4NzUgNDEuOTE3OTY5LTEwMS4xOTkyMTkgMC0yNC40MTQwNjItNi4yOTI5NjktNDguNDE0MDYyLTE4LjEyMTA5NC02OS42MzI4MTJ6bTAgMCcgZmlsbD0nJTIzMDBhZmYwJy8lM0UlM0NwYXRoIGQ9J20yNTcuMTA1NDY5IDQwMi4yNjE3MTljLTg1Ljg5MDYyNSAwLTEyNC4zMTY0MDctNDIuMjI2NTYzLTEyNC4zMTY0MDctNzMuODc1IDAtMTYuMjMwNDY5IDExLjk4NDM3Ni0yNy42MDkzNzUgMjguNS0yNy42MDkzNzUgMzYuNzU3ODEzIDAgMjcuMjM4MjgyIDUyLjc3NzM0NCA5NS44MTY0MDcgNTIuNzc3MzQ0IDM1LjEwOTM3NSAwIDU0LjQ5NjA5My0xOS4wNjI1IDU0LjQ5NjA5My0zOC41NzAzMTMgMC0xMS43MzQzNzUtNS43ODkwNjItMjQuNzM4MjgxLTI4LjkwNjI1LTMwLjQzNzVsLTc2LjM5NDUzMS0xOS4wNzAzMTNjLTYxLjUyNzM0My0xNS40Mjk2ODctNzIuNjkxNDA2LTQ4LjY5MTQwNi03Mi42OTE0MDYtNzkuOTU3MDMxIDAtNjQuOTE0MDYyIDYxLjEyMTA5NC04OS4yODkwNjIgMTE4LjUxOTUzMS04OS4yODkwNjIgNTIuODc1IDAgMTE1LjIwMzEyNSAyOS4yMjI2NTYgMTE1LjIwMzEyNSA2OC4xNjc5NjkgMCAxNi42ODc1LTE0LjQ0OTIxOSAyNi4zOTA2MjQtMzAuOTYwOTM3IDI2LjM5MDYyNC0zMS4zNjcxODggMC0yNS41OTc2NTYtNDMuNDE3OTY4LTg4Ljc4NTE1Ni00My40MTc5NjgtMzEuMzU1NDY5IDAtNDguNzIyNjU3IDE0LjE5OTIxOC00OC43MjI2NTcgMzQuNTE1NjI1IDAgMjAuMjgxMjUgMjQuNzY1NjI1IDI2Ljc1NzgxMiA0Ni4yNjU2MjUgMzEuNjU2MjVsNTYuNTQ2ODc1IDEyLjU1MDc4MWM2MS45NDE0MDcgMTMuODAwNzgxIDc3LjY0NDUzMSA0OS45NjQ4NDQgNzcuNjQ0NTMxIDg0LjAyNzM0NC4wMDM5MDcgNTIuNzUtNDAuNDg4MjgxIDkyLjE0MDYyNS0xMjIuMjE0ODQzIDkyLjE0MDYyNXptMCAwJyBmaWxsPSclMjNmZmYnLyUzRSUzQy9zdmclM0UlMEFcIik7XG59XG5hc2lkZSB1bC5zb2NpYWwgbGkgYS5zdGFjay1vdmVyZmxvdyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnIHZpZXdCb3g9JzAgMCAyNTYgMzA0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHByZXNlcnZlQXNwZWN0UmF0aW89J3hNaWRZTWlkJyUzRSUzQ2clM0UlM0Nwb2x5Z29uIGZpbGw9JyUyM0JDQkJCQicgcG9pbnRzPScyMTYuMzI5NzA4IDI3Ni4xODc5MjkgMjE2LjMyOTcwOCAxOTQuOTc2Nzc2IDI0My4yODM0MSAxOTQuOTc2Nzc2IDI0My4yODM0MSAzMDMuMTQxNjMgMCAzMDMuMTQxNjMgMCAxOTQuOTc2Nzc2IDI2Ljk1MzcwMTUgMTk0Ljk3Njc3NiAyNi45NTM3MDE1IDI3Ni4xODc5MjknJTNFJTNDL3BvbHlnb24lM0UlM0NwYXRoIGQ9J001Ni43MDc3ODc2LDE4Ny4yNzU3MTggTDE4OS4wMjU5NTksMjE0LjkyOTUxNiBMMTk0LjYyNjcyOCwxODguMzI1ODYzIEw2Mi4zMDg1NTY4LDE2MC42NzIwNjUgTDU2LjcwNzc4NzYsMTg3LjI3NTcxOCBMNTYuNzA3Nzg3NiwxODcuMjc1NzE4IFogTTc0LjIxMDE5MTIsMTI0LjI2NzA2NSBMMTk2LjcyNzAxNiwxODEuMzI0OTAxIEwyMDcuOTI4NTU1LDE1Ni44MjE1MzYgTDg1LjQxMTcyOTUsOTkuNDEzNjUyNCBMNzQuMjEwMTkxMiwxMjQuMjY3MDY1IFogTTEwOC4xNjQ4NTQsNjQuMDU4Nzk3MSBMMjEyLjEyOTEzMiwxNTAuNTIwNjcxIEwyMjkuMjgxNDg3LDEyOS44Njc4MzUgTDEyNS4zMTcyMSw0My40MDU5NjA5IEwxMDguMTY0ODU0LDY0LjA1ODc5NzEgTDEwOC4xNjQ4NTQsNjQuMDU4Nzk3MSBaIE0xNzUuMzc0MDg0LDAgTDE1My42NzExMDQsMTYuMTAyMjExMyBMMjM0LjE4MjE2LDEyNC42MTcxMTQgTDI1NS44ODUxNCwxMDguNTE0OTAyIEwxNzUuMzc0MDg0LDAgWiBNNTMuOTA3NDAzMSwyNDguODg0MTc5IEwxODkuMDI1OTU5LDI0OC44ODQxNzkgTDE4OS4wMjU5NTksMjIxLjkzMDQ3OCBMNTMuOTA3NDAzMSwyMjEuOTMwNDc4IEw1My45MDc0MDMxLDI0OC44ODQxNzkgWicgZmlsbD0nJTIzRjQ4MDIzJyUzRSUzQy9wYXRoJTNFJTNDL2clM0UlM0Mvc3ZnJTNFJTBBXCIpO1xufVxuYXNpZGUgaDIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuYXNpZGUgI21vYmlsZW1lbnUge1xuICBkaXNwbGF5OiBub25lO1xufVxuYXNpZGUgI3Njcm9sbHRvY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzc4cHgpIHtcbiAgYXNpZGUgLm5ldy12ZXJzaW9uLWF2YWlsYWJsZS1tc2cge1xuICAgIHRvcDogMTZweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTIwcHgpIHtcbiAgYXNpZGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDlweDtcbiAgICBwYWRkaW5nLXRvcDogMTFweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTFweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDVweCAwICNjY2NjY2M7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDJweCA1cHggMCAjY2NjY2NjO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwICNjY2NjY2M7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG4gIGFzaWRlIGgxIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDY1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDgzcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cbiAgYXNpZGUgdWwuc29jaWFsIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG4gIGFzaWRlIGgyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIGFzaWRlIHAge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICBmb250LXNpemU6IDEuOWVtO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICB9XG4gIGFzaWRlICNwaWN0dXJlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxuICBhc2lkZSAjcGljdHVyZSBpbWcge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItd2lkdGg6IDVweDtcbiAgfVxuICBhc2lkZSAubmV3LXZlcnNpb24tYXZhaWxhYmxlLW1zZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjZweDtcbiAgICBsZWZ0OiA4MHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTcwcHgpO1xuICB9XG4gIGFzaWRlIC5uZXctdmVyc2lvbi1hdmFpbGFibGUtbXNnIHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICBhc2lkZSAubmV3LXZlcnNpb24tYXZhaWxhYmxlLW1zZyBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuICBhc2lkZSAjc2Nyb2xsdG9jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDM4NCA1MTInJTNFJTNDcGF0aCBmaWxsPSclMjM0NDQ0NDQnIGQ9J00zNDguNSAyMzIuMWwtMTQ4IDE0OC40Yy00LjcgNC43LTEyLjMgNC43LTE3IDBsLTE0OC0xNDguNGMtNC43LTQuNy00LjctMTIuMyAwLTE3bDE5LjYtMTkuNmM0LjgtNC44IDEyLjUtNC43IDE3LjEuMmw5My43IDk3LjFWNDRjMC02LjYgNS40LTEyIDEyLTEyaDI4YzYuNiAwIDEyIDUuNCAxMiAxMnYyNDguOGw5My43LTk3LjFjNC43LTQuOCAxMi40LTQuOSAxNy4xLS4ybDE5LjYgMTkuNmM0LjkgNC43IDQuOSAxMi4zLjIgMTd6TTM3MiA0MjhIMTJjLTYuNiAwLTEyIDUuNC0xMiAxMnYyOGMwIDYuNiA1LjQgMTIgMTIgMTJoMzYwYzYuNiAwIDEyLTUuNCAxMi0xMnYtMjhjMC02LjYtNS40LTEyLTEyLTEyeicvJTNFJTNDL3N2ZyUzRSUwQVwiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMzBweCAzMHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAzcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgdG9wOiAyOHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHRleHQtaW5kZW50OiAtOTk5OTlweDtcbiAgfVxuICBhc2lkZSAjc2Nyb2xsdG9jb250ZW50OmZvY3VzLCBhc2lkZSAjc2Nyb2xsdG9jb250ZW50OmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gIGFzaWRlICNtb2JpbGVtZW51IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcmlnaHQ6IDcwcHg7XG4gICAgdG9wOiAyMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgYXNpZGUgI21vYmlsZW1lbnU6Zm9jdXMsIGFzaWRlICNtb2JpbGVtZW51OmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gIGFzaWRlICNtb2JpbGVtZW51IHNwYW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtaW5kZW50OiAtOTk5OTlweDtcbiAgfVxuICBhc2lkZSAjbW9iaWxlbWVudSAub3BlbiB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDQ4IDUxMiclM0UlM0NwYXRoIGZpbGw9JyUyMzQ0NDQ0NCcgZD0nTTQzNiAxMjRIMTJjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJWODBjMC02LjYyNyA1LjM3My0xMiAxMi0xMmg0MjRjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYzMmMwIDYuNjI3LTUuMzczIDEyLTEyIDEyem0wIDE2MEgxMmMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtMzJjMC02LjYyNyA1LjM3My0xMiAxMi0xMmg0MjRjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYzMmMwIDYuNjI3LTUuMzczIDEyLTEyIDEyem0wIDE2MEgxMmMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtMzJjMC02LjYyNyA1LjM3My0xMiAxMi0xMmg0MjRjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYzMmMwIDYuNjI3LTUuMzczIDEyLTEyIDEyeicvJTNFJTNDL3N2ZyUzRSUwQVwiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMzBweCAzMHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAzcHg7XG4gIH1cbiAgYXNpZGUgI21vYmlsZW1lbnUgLmNsb3NlIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAzMjAgNTEyJyUzRSUzQ3BhdGggZmlsbD0nJTIzNDQ0NDQ0JyBkPSdNMjA3LjYgMjU2bDEwNy43Mi0xMDcuNzJjNi4yMy02LjIzIDYuMjMtMTYuMzQgMC0yMi41OGwtMjUuMDMtMjUuMDNjLTYuMjMtNi4yMy0xNi4zNC02LjIzLTIyLjU4IDBMMTYwIDIwOC40IDUyLjI4IDEwMC42OGMtNi4yMy02LjIzLTE2LjM0LTYuMjMtMjIuNTggMEw0LjY4IDEyNS43Yy02LjIzIDYuMjMtNi4yMyAxNi4zNCAwIDIyLjU4TDExMi40IDI1NiA0LjY4IDM2My43MmMtNi4yMyA2LjIzLTYuMjMgMTYuMzQgMCAyMi41OGwyNS4wMyAyNS4wM2M2LjIzIDYuMjMgMTYuMzQgNi4yMyAyMi41OCAwTDE2MCAzMDMuNmwxMDcuNzIgMTA3LjcyYzYuMjMgNi4yMyAxNi4zNCA2LjIzIDIyLjU4IDBsMjUuMDMtMjUuMDNjNi4yMy02LjIzIDYuMjMtMTYuMzQgMC0yMi41OEwyMDcuNiAyNTZ6Jy8lM0UlM0Mvc3ZnJTNFJTBBXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAzMHB4IDMwcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IDNweDtcbiAgfVxuICBhc2lkZSAjbW9iaWxlbmF2Y29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMCAyMHB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgYXNpZGUgbmF2IG9sIGxpIHtcbiAgICBtYXJnaW46IDAgMCAyNXB4IDE1cHg7XG4gIH1cbiAgYXNpZGUgbmF2IG9sIGxpIGEge1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICBhc2lkZSB1bC5zb2NpYWwgbGkgYSB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGNvbG9yOiAjOTk5O1xuICB9XG4gIGFzaWRlLm9wZW4ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBhc2lkZS5vcGVuICNtb2JpbGVuYXZjb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTIxcHgpIHtcbiAgYXNpZGUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMjgwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gIH1cbiAgYXNpZGUgaDEge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgYXNpZGUgI3BpY3R1cmUge1xuICAgIHdpZHRoOiAxMjBweDtcbiAgfVxuICBhc2lkZSAjcGljdHVyZSBpbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGJvcmRlci13aWR0aDogMTBweDtcbiAgfVxuICBhc2lkZSAubmV3LXZlcnNpb24tYXZhaWxhYmxlLW1zZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNjVweDtcbiAgICBsZWZ0OiAxMzBweDtcbiAgfVxuICBhc2lkZSAubmV3LXZlcnNpb24tYXZhaWxhYmxlLW1zZyBzcGFuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBhc2lkZSAubmV3LXZlcnNpb24tYXZhaWxhYmxlLW1zZzpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IC0xNnB4O1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogOHB4O1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogLThweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gICAgY29sb3I6ICNmMDQzM2U7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZjA0MzNlO1xuICB9XG4gIGFzaWRlIG5hdiB1bCBsaSB7XG4gICAgbWFyZ2luOiAxMHB4IDAgMTBweCAxNXB4O1xuICB9XG4gIGFzaWRlIG5hdiB1bCBsaSBhIHtcbiAgICBwYWRkaW5nOiA0cHggMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC1oZWlnaHQ6IDY1MHB4KSB7XG4gIGFzaWRlIHAge1xuICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICB9XG4gIGFzaWRlIG9sIGxpIHtcbiAgICBtYXJnaW46IDAgMCAyMHB4IDE1cHggIWltcG9ydGFudDtcbiAgfVxufVxuXG5mb290ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjZmNmY2O1xufVxuZm9vdGVyIHAge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIG1hcmdpbjogMDtcbn0iLCJkaXYuY29kZS10b29sYmFyIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogLjNlbTtcblx0cmlnaHQ6IC4yZW07XG5cdHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dDtcblx0b3BhY2l0eTogMDtcbn1cblxuZGl2LmNvZGUtdG9vbGJhcjpob3ZlciA+IC50b29sYmFyIHtcblx0b3BhY2l0eTogMTtcbn1cblxuLyogU2VwYXJhdGUgbGluZSBiL2MgcnVsZXMgYXJlIHRocm93biBvdXQgaWYgc2VsZWN0b3IgaXMgaW52YWxpZC5cbiAgIElFMTEgYW5kIG9sZCBFZGdlIHZlcnNpb25zIGRvbid0IHN1cHBvcnQgOmZvY3VzLXdpdGhpbi4gKi9cbmRpdi5jb2RlLXRvb2xiYXI6Zm9jdXMtd2l0aGluID4gLnRvb2xiYXIge1xuXHRvcGFjaXR5OiAxO1xufVxuXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgLnRvb2xiYXItaXRlbSB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyIGEge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciBidXR0b24ge1xuXHRiYWNrZ3JvdW5kOiBub25lO1xuXHRib3JkZXI6IDA7XG5cdGNvbG9yOiBpbmhlcml0O1xuXHRmb250OiBpbmhlcml0O1xuXHRsaW5lLWhlaWdodDogbm9ybWFsO1xuXHRvdmVyZmxvdzogdmlzaWJsZTtcblx0cGFkZGluZzogMDtcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogZm9yIGJ1dHRvbiAqL1xuXHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xuXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciBhLFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyIGJ1dHRvbixcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciBzcGFuIHtcblx0Y29sb3I6ICNiYmI7XG5cdGZvbnQtc2l6ZTogLjhlbTtcblx0cGFkZGluZzogMCAuNWVtO1xuXHRiYWNrZ3JvdW5kOiAjZjVmMmYwO1xuXHRiYWNrZ3JvdW5kOiByZ2JhKDIyNCwgMjI0LCAyMjQsIDAuMik7XG5cdGJveC1zaGFkb3c6IDAgMnB4IDAgMCByZ2JhKDAsMCwwLDAuMik7XG5cdGJvcmRlci1yYWRpdXM6IC41ZW07XG59XG5cbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciBhOmhvdmVyLFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyIGE6Zm9jdXMsXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgYnV0dG9uOmhvdmVyLFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyIGJ1dHRvbjpmb2N1cyxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciBzcGFuOmhvdmVyLFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyIHNwYW46Zm9jdXMge1xuXHRjb2xvcjogaW5oZXJpdDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIiwiLyoqXG4gKiBwcmlzbS5qcyBkZWZhdWx0IHRoZW1lIGZvciBKYXZhU2NyaXB0LCBDU1MgYW5kIEhUTUxcbiAqIEJhc2VkIG9uIGRhYmJsZXQgKGh0dHA6Ly9kYWJibGV0LmNvbSlcbiAqIEBhdXRob3IgTGVhIFZlcm91XG4gKi9cblxuY29kZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0sXG5wcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIHtcblx0Y29sb3I6IGJsYWNrO1xuXHRiYWNrZ3JvdW5kOiBub25lO1xuXHR0ZXh0LXNoYWRvdzogMCAxcHggd2hpdGU7XG5cdGZvbnQtZmFtaWx5OiBDb25zb2xhcywgTW9uYWNvLCAnQW5kYWxlIE1vbm8nLCAnVWJ1bnR1IE1vbm8nLCBtb25vc3BhY2U7XG5cdGZvbnQtc2l6ZTogMWVtO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHR3aGl0ZS1zcGFjZTogcHJlO1xuXHR3b3JkLXNwYWNpbmc6IG5vcm1hbDtcblx0d29yZC1icmVhazogbm9ybWFsO1xuXHR3b3JkLXdyYXA6IG5vcm1hbDtcblx0bGluZS1oZWlnaHQ6IDEuNTtcblxuXHQtbW96LXRhYi1zaXplOiA0O1xuXHQtby10YWItc2l6ZTogNDtcblx0dGFiLXNpemU6IDQ7XG5cblx0LXdlYmtpdC1oeXBoZW5zOiBub25lO1xuXHQtbW96LWh5cGhlbnM6IG5vbmU7XG5cdC1tcy1oeXBoZW5zOiBub25lO1xuXHRoeXBoZW5zOiBub25lO1xufVxuXG5wcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdOjotbW96LXNlbGVjdGlvbiwgcHJlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSA6Oi1tb3otc2VsZWN0aW9uLFxuY29kZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl06Oi1tb3otc2VsZWN0aW9uLCBjb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSA6Oi1tb3otc2VsZWN0aW9uIHtcblx0dGV4dC1zaGFkb3c6IG5vbmU7XG5cdGJhY2tncm91bmQ6ICNiM2Q0ZmM7XG59XG5cbnByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl06OnNlbGVjdGlvbiwgcHJlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSA6OnNlbGVjdGlvbixcbmNvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdOjpzZWxlY3Rpb24sIGNvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIDo6c2VsZWN0aW9uIHtcblx0dGV4dC1zaGFkb3c6IG5vbmU7XG5cdGJhY2tncm91bmQ6ICNiM2Q0ZmM7XG59XG5cbkBtZWRpYSBwcmludCB7XG5cdGNvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdLFxuXHRwcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIHtcblx0XHR0ZXh0LXNoYWRvdzogbm9uZTtcblx0fVxufVxuXG4vKiBDb2RlIGJsb2NrcyAqL1xucHJlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSB7XG5cdHBhZGRpbmc6IDFlbTtcblx0bWFyZ2luOiAuNWVtIDA7XG5cdG92ZXJmbG93OiBhdXRvO1xufVxuXG46bm90KHByZSkgPiBjb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSxcbnByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0ge1xuXHRiYWNrZ3JvdW5kOiAjZjVmMmYwO1xufVxuXG4vKiBJbmxpbmUgY29kZSAqL1xuOm5vdChwcmUpID4gY29kZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0ge1xuXHRwYWRkaW5nOiAuMWVtO1xuXHRib3JkZXItcmFkaXVzOiAuM2VtO1xuXHR3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4udG9rZW4uY29tbWVudCxcbi50b2tlbi5wcm9sb2csXG4udG9rZW4uZG9jdHlwZSxcbi50b2tlbi5jZGF0YSB7XG5cdGNvbG9yOiBzbGF0ZWdyYXk7XG59XG5cbi50b2tlbi5wdW5jdHVhdGlvbiB7XG5cdGNvbG9yOiAjOTk5O1xufVxuXG4udG9rZW4ubmFtZXNwYWNlIHtcblx0b3BhY2l0eTogLjc7XG59XG5cbi50b2tlbi5wcm9wZXJ0eSxcbi50b2tlbi50YWcsXG4udG9rZW4uYm9vbGVhbixcbi50b2tlbi5udW1iZXIsXG4udG9rZW4uY29uc3RhbnQsXG4udG9rZW4uc3ltYm9sLFxuLnRva2VuLmRlbGV0ZWQge1xuXHRjb2xvcjogIzkwNTtcbn1cblxuLnRva2VuLnNlbGVjdG9yLFxuLnRva2VuLmF0dHItbmFtZSxcbi50b2tlbi5zdHJpbmcsXG4udG9rZW4uY2hhcixcbi50b2tlbi5idWlsdGluLFxuLnRva2VuLmluc2VydGVkIHtcblx0Y29sb3I6ICM2OTA7XG59XG5cbi50b2tlbi5vcGVyYXRvcixcbi50b2tlbi5lbnRpdHksXG4udG9rZW4udXJsLFxuLmxhbmd1YWdlLWNzcyAudG9rZW4uc3RyaW5nLFxuLnN0eWxlIC50b2tlbi5zdHJpbmcge1xuXHRjb2xvcjogIzlhNmUzYTtcblx0YmFja2dyb3VuZDogaHNsYSgwLCAwJSwgMTAwJSwgLjUpO1xufVxuXG4udG9rZW4uYXRydWxlLFxuLnRva2VuLmF0dHItdmFsdWUsXG4udG9rZW4ua2V5d29yZCB7XG5cdGNvbG9yOiAjMDdhO1xufVxuXG4udG9rZW4uZnVuY3Rpb24sXG4udG9rZW4uY2xhc3MtbmFtZSB7XG5cdGNvbG9yOiAjREQ0QTY4O1xufVxuXG4udG9rZW4ucmVnZXgsXG4udG9rZW4uaW1wb3J0YW50LFxuLnRva2VuLnZhcmlhYmxlIHtcblx0Y29sb3I6ICNlOTA7XG59XG5cbi50b2tlbi5pbXBvcnRhbnQsXG4udG9rZW4uYm9sZCB7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRva2VuLml0YWxpYyB7XG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLnRva2VuLmVudGl0eSB7XG5cdGN1cnNvcjogaGVscDtcbn1cbiIsInByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0ubGluZS1udW1iZXJzIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRwYWRkaW5nLWxlZnQ6IDMuOGVtO1xuXHRjb3VudGVyLXJlc2V0OiBsaW5lbnVtYmVyO1xufVxuXG5wcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdLmxpbmUtbnVtYmVycyA+IGNvZGUge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHdoaXRlLXNwYWNlOiBpbmhlcml0O1xufVxuXG4ubGluZS1udW1iZXJzIC5saW5lLW51bWJlcnMtcm93cyB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG5cdHRvcDogMDtcblx0Zm9udC1zaXplOiAxMDAlO1xuXHRsZWZ0OiAtMy44ZW07XG5cdHdpZHRoOiAzZW07IC8qIHdvcmtzIGZvciBsaW5lLW51bWJlcnMgYmVsb3cgMTAwMCBsaW5lcyAqL1xuXHRsZXR0ZXItc3BhY2luZzogLTFweDtcblx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzk5OTtcblxuXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuXHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xuXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdHVzZXItc2VsZWN0OiBub25lO1xuXG59XG5cblx0LmxpbmUtbnVtYmVycy1yb3dzID4gc3BhbiB7XG5cdFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0Y291bnRlci1pbmNyZW1lbnQ6IGxpbmVudW1iZXI7XG5cdH1cblxuXHRcdC5saW5lLW51bWJlcnMtcm93cyA+IHNwYW46YmVmb3JlIHtcblx0XHRcdGNvbnRlbnQ6IGNvdW50ZXIobGluZW51bWJlcik7XG5cdFx0XHRjb2xvcjogIzk5OTtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0cGFkZGluZy1yaWdodDogMC44ZW07XG5cdFx0XHR0ZXh0LWFsaWduOiByaWdodDtcblx0XHR9XG4iLCJwcmVbZGF0YS1saW5lXSB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0cGFkZGluZzogMWVtIDAgMWVtIDNlbTtcbn1cblxuLmxpbmUtaGlnaGxpZ2h0IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcblx0cGFkZGluZzogaW5oZXJpdCAwO1xuXHRtYXJnaW4tdG9wOiAxZW07IC8qIFNhbWUgYXMgLnByaXNt4oCZcyBwYWRkaW5nLXRvcCAqL1xuXG5cdGJhY2tncm91bmQ6IGhzbGEoMjQsIDIwJSwgNTAlLC4wOCk7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgaHNsYSgyNCwgMjAlLCA1MCUsLjEpIDcwJSwgaHNsYSgyNCwgMjAlLCA1MCUsMCkpO1xuXG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG5cdGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuXHR3aGl0ZS1zcGFjZTogcHJlO1xufVxuXG5cdC5saW5lLWhpZ2hsaWdodDpiZWZvcmUsXG5cdC5saW5lLWhpZ2hsaWdodFtkYXRhLWVuZF06YWZ0ZXIge1xuXHRcdGNvbnRlbnQ6IGF0dHIoZGF0YS1zdGFydCk7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHRvcDogLjRlbTtcblx0XHRsZWZ0OiAuNmVtO1xuXHRcdG1pbi13aWR0aDogMWVtO1xuXHRcdHBhZGRpbmc6IDAgLjVlbTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDI0LCAyMCUsIDUwJSwuNCk7XG5cdFx0Y29sb3I6IGhzbCgyNCwgMjAlLCA5NSUpO1xuXHRcdGZvbnQ6IGJvbGQgNjUlLzEuNSBzYW5zLXNlcmlmO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHR2ZXJ0aWNhbC1hbGlnbjogLjNlbTtcblx0XHRib3JkZXItcmFkaXVzOiA5OTlweDtcblx0XHR0ZXh0LXNoYWRvdzogbm9uZTtcblx0XHRib3gtc2hhZG93OiAwIDFweCB3aGl0ZTtcblx0fVxuXG5cdC5saW5lLWhpZ2hsaWdodFtkYXRhLWVuZF06YWZ0ZXIge1xuXHRcdGNvbnRlbnQ6IGF0dHIoZGF0YS1lbmQpO1xuXHRcdHRvcDogYXV0bztcblx0XHRib3R0b206IC40ZW07XG5cdH1cblxuLmxpbmUtbnVtYmVycyAubGluZS1oaWdobGlnaHQ6YmVmb3JlLFxuLmxpbmUtbnVtYmVycyAubGluZS1oaWdobGlnaHQ6YWZ0ZXIge1xuXHRjb250ZW50OiBub25lO1xufVxuIiwiQGltcG9ydCAnbWl4aW5zJztcblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuaHRtbCB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG46OnNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbiN0b3Bib3JkZXIge1xuICBib3JkZXItdG9wOiA5cHggc29saWQgIzU1NTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxO1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgQXBwbGUgQ29sb3IgRW1vamksIFNlZ29lIFVJIEVtb2ppLCBTZWdvZSBVSSBTeW1ib2w7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuZW0ge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxudGFibGUgYSxcbnAgYSxcbnVsIGxpIGEsXG5vbCBsaSBhIHtcbiAgY29sb3I6ICMyMDUyN2Y7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgIzIwNTI3ZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAjNzdhNWNmO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzdhNWNmO1xuICB9XG59XG5cbmFbcmVsPVwibm9vcGVuZXJcIl06bm90KC5pZ25vcmVleHRlcm5hbCk6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyUzRSUzQ3BhdGggZmlsbD0nJTIzMjA1MjdmJyBkPSdNNDk3LjYsMCwzMzQuNC4xN0ExNC40LDE0LjQsMCwwLDAsMzIwLDE0LjU3VjQ3Ljg4YTE0LjQsMTQuNCwwLDAsMCwxNC42OSwxNC40bDczLjYzLTIuNzIsMi4wNiwyLjA2TDEzMS41MiwzNDAuNDlhMTIsMTIsMCwwLDAsMCwxN2wyMywyM2ExMiwxMiwwLDAsMCwxNywwTDQ1MC4zOCwxMDEuNjJsMi4wNiwyLjA2LTIuNzIsNzMuNjNBMTQuNCwxNC40LDAsMCwwLDQ2NC4xMiwxOTJoMzMuMzFhMTQuNCwxNC40LDAsMCwwLDE0LjQtMTQuNEw1MTIsMTQuNEExNC40LDE0LjQsMCwwLDAsNDk3LjYsMFpNNDMyLDI4OEg0MTZhMTYsMTYsMCwwLDAtMTYsMTZWNDU4YTYsNiwwLDAsMS02LDZINTRhNiw2LDAsMCwxLTYtNlYxMThhNiw2LDAsMCwxLDYtNkgyMDhhMTYsMTYsMCwwLDAsMTYtMTZWODBhMTYsMTYsMCwwLDAtMTYtMTZINDhBNDgsNDgsMCwwLDAsMCwxMTJWNDY0YTQ4LDQ4LDAsMCwwLDQ4LDQ4SDQwMGE0OCw0OCwwLDAsMCw0OC00OFYzMDRBMTYsMTYsMCwwLDAsNDMyLDI4OFonLyUzRSUzQy9zdmclM0UlMEFcIik7XG4gIGhlaWdodDogMC42ZW07XG4gIHdpZHRoOiAwLjZlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IHtcbiAgICBsZWZ0OiA0cHg7XG4gIH1cbn1cblxuYTpmb2N1cyB7XG4gIG91dGxpbmUtY29sb3I6ICM3N2E1Y2Y7XG59XG5cbm9sLCB1bCwgcCB7XG4gIGNvZGUge1xuICAgIGJhY2tncm91bmQ6ICNmNmY2ZjY7XG4gICAgcGFkZGluZzogMnB4IDNweDtcbiAgICBsaW5lLWhlaWdodDogMTEwJTtcbiAgfVxufVxuXG4uc3RyaWtldHJvdWdoIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi5jb250ZW50IHtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogOTIxcHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogNDUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjllbTtcbiAgICBjb2xvcjogIzMzMztcblxuICAgIHNwYW4ge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG5cbiAgICBzdHJvbmcge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIH1cbiAgfVxuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc1ZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZGQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIH1cblxuICBoMyB7XG4gICAgZm9udC1zaXplOiAxLjdlbTtcbiAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgY29sb3I6ICMzMzM7XG4gIH1cblxuICBoNCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjZlbTtcbiAgICBsaW5lLWhlaWdodDogMS40ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBjb2xvcjogIzQ0NDtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuN2VtO1xuICAgIHdvcmQtc3BhY2luZzogMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcblxuICAgIDpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICBwLmludHJvIHtcbiAgICBmb250LXNpemU6IDIuMGVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjZlbTtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjZmNmY2O1xuICB9XG5cbiAgdWwsIG9sIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXG4gICAgbGkge1xuICAgICAgd29yZC1zcGFjaW5nOiAycHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuICB9XG5cbiAgaHIge1xuICAgIGJvcmRlcjogMDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogNDBweCAwO1xuICB9XG5cbiAgZW0ge1xuICAgIGNvbG9yOiAjMDAwO1xuICB9XG5cbiAgdGFibGUge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgbWFyZ2luOiB7XG4gICAgICBib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgdGhlYWQge1xuICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICB9XG5cbiAgICB0aCwgdGQge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICBwYWRkaW5nOiA1cHggMTVweCA1cHggMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICB9XG5cbiAgICB0ZCBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cbiAgfVxuXG5cbiAgLnNpZGVwaWMge1xuICAgIG1hcmdpbjoge1xuICAgICAgYm90dG9tOiAyNXB4O1xuICAgICAgdG9wOiAxMHB4O1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMHB4KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggI2RkZDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MjBweCkge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgfVxuXG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICfigJMnO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTI4MXB4KSB7XG4gICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICYucmlnaHQge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgICAgfVxuICAgICAgJi5sZWZ0IHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIC5wb3N0LWJvZHkge1xuXG4gICAgaDQge1xuICAgICAgJi5jb2RldGl0bGUge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICAgIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTIwcHgpIHtcbiAgICAgICAgICBtYXJnaW46IDAgLTIwcHg7XG4gICAgICAgICAgcGFkZGluZzogNXB4IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbjoge1xuICAgICAgICBib3R0b206IDI1cHg7XG4gICAgICB9XG4gICAgICBsaW5lLWhlaWdodDogMS44ZW07XG4gICAgfVxuXG4gICAgdWwsIG9sIHtcbiAgICAgIG1hcmdpbjoge1xuICAgICAgICBib3R0b206IDI1cHg7XG4gICAgICB9XG5cbiAgICAgIGxpIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xuICAgICAgICBtYXJnaW46IHtcbiAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cblxuICAgIHByZSB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgIGJhY2tncm91bmQ6ICNmNmY2ZjY7XG4gICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDkyMHB4KSB7XG4gICAgICAgIG1hcmdpbjogMCAtMjBweCAyNXB4IC0yMHB4O1xuICAgICAgICBjb2RlIHtcbiAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGltZyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgICAmLmV4dHJhc3BhY2Uge1xuICAgICAgICBtYXJnaW46IDI1cHggYXV0bztcbiAgICAgIH1cblxuICAgICAgJi56b29taW4ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICAuY29weSB7XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICBsaW5lLWhlaWdodDogMS4zO1xuXG4gICAgICBzbWFsbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGFibGUge1xuICAgICAgdHIge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcblxuICAgICAgICAmOm50aC1jaGlsZChldmVuKSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDkyMHB4KSB7XG5cbiAgICBwYWRkaW5nOiAxMDRweCAwIDIwcHggMDtcbiAgICBtYXJnaW46IDAgMjBweDtcbiAgICBoMSB7XG4gICAgICBmb250LXNpemU6IDEuOGVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjFlbTtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMS43ZW07XG4gICAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgIH1cblxuICAgIGgzIHtcbiAgICAgIGZvbnQtc2l6ZTogMS42ZW07XG4gICAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgIH1cblxuICAgIGg0IHtcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICBsaW5lLWhlaWdodDogMS44ZW07XG4gICAgfVxuXG4gICAgcCwgdWwsIG9sIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICBsaW5lLWhlaWdodDogMS40ZW07XG4gICAgfVxuXG4gICAgcC5pbnRybyB7XG4gICAgICBmb250LXNpemU6IDEuOGVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgIH1cblxuICAgIGhyIHtcbiAgICAgIG1hcmdpbjogMzBweCAwO1xuICAgIH1cbiAgfVxuXG59XG5cbi5obGpzIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xuICAvLyBib3gtc2hhZG93OiAwIDFweCAxMHB4IDAgcmdiYSgyMjEsIDIyMSwgMjIxLCAwLjUpO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCkge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gIH1cbn1cblxuLmFsZXJ0IHtcbiAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggODVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNDIwcHgpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggNzBweDtcblxuICAgICYgPiBpIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMjNweDtcbiAgICAgIGxlZnQ6IDI1cHg7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgfVxuXG4gIH1cblxuICAmID4gcCxcbiAgJiA+IHVsLFxuICAmID4gb2wge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cblxuICAmID4gcCArIHAge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuXG4gICYtbGluayB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAmLWRpc21pc3NpYmxlIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xuXG4gICAgLmNsb3NlIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogLTJweDtcbiAgICAgIHJpZ2h0OiAtMjFweDtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIH1cbiAgfVxuXG4gICYtc3VjY2VzcyB7XG4gICAgY29sb3I6ICMzYzc2M2Q7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZjBkODtcbiAgICBib3JkZXItY29sb3I6ICNkNmU5YzY7XG5cbiAgICAkc3ZnLWRhdGE6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyUzRSUzQ3BhdGggZmlsbD0nJTIzM2M3NjNkJyBkPSdNNDM1Ljg0OCA4My40NjZMMTcyLjgwNCAzNDYuNTFsLTk2LjY1Mi05Ni42NTJjLTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NzEgMGwtMjguMjg0IDI4LjI4NGMtNC42ODYgNC42ODYtNC42ODYgMTIuMjg0IDAgMTYuOTcxbDEzMy40MjEgMTMzLjQyMWM0LjY4NiA0LjY4NiAxMi4yODQgNC42ODYgMTYuOTcxIDBsMjk5LjgxMy0yOTkuODEzYzQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3MWwtMjguMjg0LTI4LjI4NGMtNC42ODYtNC42ODYtMTIuMjg0LTQuNjg2LTE2Ljk3IDB6Jy8lM0UlM0Mvc3ZnJTNFJTBBXCI7XG4gICAgQGluY2x1ZGUgc3ZnLWJnLWljb24oJHN2Zy1kYXRhLCAnMzVweCAzNXB4JywgJyAyNXB4IDE1cHgnKTtcblxuICAgIGhyIHtcbiAgICAgIGJvcmRlci10b3AtY29sb3I6ICNjOWUyYjM7XG4gICAgfVxuXG4gICAgZW0ge1xuICAgICAgY29sb3I6ICMzYzc2M2Q7XG4gICAgfVxuXG4gICAgYSB7XG4gICAgICBjb2xvcjogIzJiNTQyYztcbiAgICB9XG4gIH1cblxuICAmLWluZm8ge1xuICAgIGNvbG9yOiAjMzE3MDhmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOWVkZjc7XG4gICAgYm9yZGVyLWNvbG9yOiAjYmNlOGYxO1xuXG4gICAgJHN2Zy1kYXRhOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjU2IDUxMiclM0UlM0NwYXRoIGZpbGw9JyUyMzMxNzA4ZicgZD0nTTIyNCAzNTIuNTg5VjIyNGMwLTE2LjQ3NS02LjI1OC0zMS41MTctMTYuNTIxLTQyLjg3MkMyMjUuOTA1IDE2MS4xNCAyMzYgMTM1LjM0NiAyMzYgMTA4IDIzNiA0OC4zMTMgMTg3LjY5NyAwIDEyOCAwIDY4LjMxMyAwIDIwIDQ4LjMwMyAyMCAxMDhjMCAyMC44ODIgNS44ODYgNDAuODU5IDE2Ljg3NCA1OC4wMzdDMTUuMTA3IDE3Ni4yNjQgMCAxOTguNDAxIDAgMjI0djM5LjMxNGMwIDIzLjY0MSAxMi44ODQgNDQuMzI5IDMyIDU1LjQxMXYzMy44NjRDMTIuODg0IDM2My42NzEgMCAzODQuMzU5IDAgNDA4djQwYzAgMzUuMjkgMjguNzEgNjQgNjQgNjRoMTI4YzM1LjI5IDAgNjQtMjguNzEgNjQtNjR2LTQwYzAtMjMuNjQxLTEyLjg4NC00NC4zMjktMzItNTUuNDExek0xMjggNDhjMzMuMTM3IDAgNjAgMjYuODYzIDYwIDYwcy0yNi44NjMgNjAtNjAgNjAtNjAtMjYuODYzLTYwLTYwIDI2Ljg2My02MCA2MC02MHptODAgNDAwYzAgOC44MzYtNy4xNjQgMTYtMTYgMTZINjRjLTguODM2IDAtMTYtNy4xNjQtMTYtMTZ2LTQwYzAtOC44MzYgNy4xNjQtMTYgMTYtMTZoMTZWMjc5LjMxNEg2NGMtOC44MzYgMC0xNi03LjE2NC0xNi0xNlYyMjRjMC04LjgzNiA3LjE2NC0xNiAxNi0xNmg5NmM4LjgzNiAwIDE2IDcuMTY0IDE2IDE2djE2OGgxNmM4LjgzNiAwIDE2IDcuMTY0IDE2IDE2djQweicvJTNFJTNDL3N2ZyUzRSUwQVwiO1xuICAgIEBpbmNsdWRlIHN2Zy1iZy1pY29uKCRzdmctZGF0YSwgJzI1cHggMjVweCcsICcgMjVweCAyNXB4Jyk7XG5cbiAgICBociB7XG4gICAgICBib3JkZXItdG9wLWNvbG9yOiAjYTZlMWVjO1xuICAgIH1cblxuICAgIGVtIHtcbiAgICAgIGNvbG9yOiAjMzE3MDhmO1xuICAgIH1cblxuICAgIGEge1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMjQ1MjY5O1xuICAgICAgY29sb3I6ICMyNDUyNjk7XG4gICAgfVxuICB9XG5cbiAgJi13YXJuaW5nIHtcbiAgICBjb2xvcjogIzhhNmQzYjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOGUzO1xuICAgIGJvcmRlci1jb2xvcjogI2ZhZWJjYztcblxuICAgICRzdmctZGF0YTogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI1NiA1MTInJTNFJTNDcGF0aCBmaWxsPSclMjM4YTZkM2InIGQ9J00xNzMuODU0IDQ4YzYuODc0IDAgMTIuMzQzIDUuNzYzIDExLjk4NCAxMi42MjhsLTExLjc0MiAyMjRjLS4zMzQgNi4zNzUtNS42IDExLjM3Mi0xMS45ODQgMTEuMzcySDkzLjg4OGMtNi4zODMgMC0xMS42NS00Ljk5Ny0xMS45ODQtMTEuMzcybC0xMS43NDItMjI0QzY5LjgwMiA1My43NjMgNzUuMjcxIDQ4IDgyLjE0NiA0OGg5MS43MDhNMTI4IDMzNmMzNS4yOSAwIDY0IDI4LjcxIDY0IDY0cy0yOC43MSA2NC02NCA2NC02NC0yOC43MS02NC02NCAyOC43MS02NCA2NC02NE0xNzMuODU0IDBIODIuMTQ2QzQ3Ljg4MSAwIDIwLjQyNyAyOC43ODMgMjIuMjI4IDYzLjE0MWwxMS43NDIgMjI0Yy42OTggMTMuMzA5IDUuNjg5IDI1LjQxNCAxMy41OTIgMzUuMDAxQzI4LjAzNSAzNDIuMzEgMTYgMzY5Ljc3NyAxNiA0MDBjMCA2MS43NTcgNTAuMjQzIDExMiAxMTIgMTEyczExMi01MC4yNDMgMTEyLTExMmMwLTMwLjIyMy0xMi4wMzUtNTcuNjktMzEuNTYxLTc3Ljg1OGE1OS43OCA1OS43OCAwIDAgMCAxMy41OTItMzUuMDAxbDExLjc0Mi0yMjRDMjM1LjU2NiAyOC45MjIgMjA4LjI1OSAwIDE3My44NTQgMHonLyUzRSUzQy9zdmclM0UlMEFcIjtcbiAgICBAaW5jbHVkZSBzdmctYmctaWNvbigkc3ZnLWRhdGEsICcyNXB4IDI1cHgnLCAnIDI1cHggMjVweCcpO1xuXG4gICAgaHIge1xuICAgICAgYm9yZGVyLXRvcC1jb2xvcjogI2Y3ZTFiNTtcbiAgICB9XG5cbiAgICBlbSB7XG4gICAgICBjb2xvcjogIzhhNmQzYjtcbiAgICB9XG5cbiAgICBhIHtcbiAgICAgIGJvcmRlci1jb2xvcjogIzY2NTEyYztcbiAgICAgIGNvbG9yOiAjNjY1MTJjO1xuICAgIH1cbiAgfVxuXG4gICYtZGFuZ2VyIHtcbiAgICBjb2xvcjogI2E5NDQ0MjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJkZWRlO1xuICAgIGJvcmRlci1jb2xvcjogI2ViY2NkMTtcblxuICAgICRzdmctZGF0YTogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDMyMCA1MTInJTNFJTNDcGF0aCBmaWxsPSclMjNhOTQ0NDInIGQ9J00yMDcuNiAyNTZsMTA3LjcyLTEwNy43MmM2LjIzLTYuMjMgNi4yMy0xNi4zNCAwLTIyLjU4bC0yNS4wMy0yNS4wM2MtNi4yMy02LjIzLTE2LjM0LTYuMjMtMjIuNTggMEwxNjAgMjA4LjQgNTIuMjggMTAwLjY4Yy02LjIzLTYuMjMtMTYuMzQtNi4yMy0yMi41OCAwTDQuNjggMTI1LjdjLTYuMjMgNi4yMy02LjIzIDE2LjM0IDAgMjIuNThMMTEyLjQgMjU2IDQuNjggMzYzLjcyYy02LjIzIDYuMjMtNi4yMyAxNi4zNCAwIDIyLjU4bDI1LjAzIDI1LjAzYzYuMjMgNi4yMyAxNi4zNCA2LjIzIDIyLjU4IDBMMTYwIDMwMy42bDEwNy43MiAxMDcuNzJjNi4yMyA2LjIzIDE2LjM0IDYuMjMgMjIuNTggMGwyNS4wMy0yNS4wM2M2LjIzLTYuMjMgNi4yMy0xNi4zNCAwLTIyLjU4TDIwNy42IDI1NnonLyUzRSUzQy9zdmclM0UlMEFcIjtcbiAgICBAaW5jbHVkZSBzdmctYmctaWNvbigkc3ZnLWRhdGEsICcyNXB4IDI1cHgnLCAnIDI1cHggMjVweCcpO1xuXG4gICAgaHIge1xuICAgICAgYm9yZGVyLXRvcC1jb2xvcjogI2U0YjljMDtcbiAgICB9XG5cbiAgICBlbSB7XG4gICAgICBjb2xvcjogI2E5NDQ0MjtcbiAgICB9XG5cbiAgICBhIHtcbiAgICAgIGJvcmRlci1jb2xvcjogIzg0MzUzNDtcbiAgICAgIGNvbG9yOiAjODQzNTM0O1xuICAgIH1cbiAgfVxuXG4gICYtcXVvdGUge1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgYm9yZGVyLWNvbG9yOiAjZGRkO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcblxuICAgICRzdmctZGF0YTogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDU3NiA1MTInJTNFJTNDcGF0aCBmaWxsPSclMjM0NDQ0NDQnIGQ9J001MDQgMjI0aC01NnYtOGMwLTIyLjEgMTcuOS00MCA0MC00MGg4YzI2LjUgMCA0OC0yMS41IDQ4LTQ4VjgwYzAtMjYuNS0yMS41LTQ4LTQ4LTQ4aC04Yy0xMDEuNSAwLTE4NCA4Mi41LTE4NCAxODR2MTkyYzAgMzkuNyAzMi4zIDcyIDcyIDcyaDEyOGMzOS43IDAgNzItMzIuMyA3Mi03MlYyOTZjMC0zOS43LTMyLjMtNzItNzItNzJ6bTI0IDE4NGMwIDEzLjItMTAuOCAyNC0yNCAyNEgzNzZjLTEzLjIgMC0yNC0xMC44LTI0LTI0VjIxNmMwLTc1IDYxLTEzNiAxMzYtMTM2aDh2NDhoLThjLTQ4LjUgMC04OCAzOS41LTg4IDg4djU2aDEwNGMxMy4yIDAgMjQgMTAuOCAyNCAyNHYxMTJ6TTIwMCAyMjRoLTU2di04YzAtMjIuMSAxNy45LTQwIDQwLTQwaDhjMjYuNSAwIDQ4LTIxLjUgNDgtNDhWODBjMC0yNi41LTIxLjUtNDgtNDgtNDhoLThDODIuNSAzMiAwIDExNC41IDAgMjE2djE5MmMwIDM5LjcgMzIuMyA3MiA3MiA3MmgxMjhjMzkuNyAwIDcyLTMyLjMgNzItNzJWMjk2YzAtMzkuNy0zMi4zLTcyLTcyLTcyem0yNCAxODRjMCAxMy4yLTEwLjggMjQtMjQgMjRINzJjLTEzLjIgMC0yNC0xMC44LTI0LTI0VjIxNmMwLTc1IDYxLTEzNiAxMzYtMTM2aDh2NDhoLThjLTQ4LjUgMC04OCAzOS41LTg4IDg4djU2aDEwNGMxMy4yIDAgMjQgMTAuOCAyNCAyNHYxMTJ6Jy8lM0UlM0Mvc3ZnJTNFJTBBXCI7XG4gICAgQGluY2x1ZGUgc3ZnLWJnLWljb24oJHN2Zy1kYXRhLCAnMjVweCAyNXB4JywgJyAyNXB4IDI1cHgnKTtcblxuICAgIGhyIHtcbiAgICAgIGJvcmRlci10b3AtY29sb3I6ICNlNGI5YzA7XG4gICAgfVxuXG4gICAgZW0ge1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgfVxuXG4gICAgYSB7XG4gICAgICBib3JkZXItY29sb3I6ICM4NDM1MzQ7XG4gICAgICBjb2xvcjogIzg0MzUzNDtcbiAgICB9XG4gIH1cblxufVxuXG4uZnVydGhlci1yZWFkaW5nIHtcbiAgbGlzdC1zdHlsZTogbG93ZXItcm9tYW47XG59XG5cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAxMCUsIDkwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKTtcbiAgfVxuXG4gIDIwJSwgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7XG4gIH1cblxuICAzMCUsIDUwJSwgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC00cHgsIDAsIDApO1xuICB9XG5cbiAgNDAlLCA2MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNHB4LCAwLCAwKTtcbiAgfVxufVxuIiwiQG1peGluIHN2Zy1iZy1pY29uKCRkYXRhLCAkc2l6ZSwgJHBvc2l0aW9uOiAnMHB4IDBweCcpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCRkYXRhKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAjeyRzaXplfTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogI3skcG9zaXRpb259O1xufVxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGltcG9ydCBcIn5wcmlzbWpzL3BsdWdpbnMvdG9vbGJhci9wcmlzbS10b29sYmFyLmNzc1wiO1xuQGltcG9ydCBcIn5wcmlzbWpzL3RoZW1lcy9wcmlzbS5jc3NcIjtcbkBpbXBvcnQgXCJ+cHJpc21qcy9wbHVnaW5zL2xpbmUtbnVtYmVycy9wcmlzbS1saW5lLW51bWJlcnMuY3NzXCI7XG5AaW1wb3J0IFwifnByaXNtanMvcGx1Z2lucy9saW5lLWhpZ2hsaWdodC9wcmlzbS1saW5lLWhpZ2hsaWdodC5jc3NcIjtcbiIsIkBpbXBvcnQgJ2FwcCc7XG5AaW1wb3J0ICdobCc7XG5cbi8vIGNhbid0IHVzZSBob3N0IGhlcmUgYmVjYXVzZSBvZiB2aWV3RW5jYXBzdWxhdGlvbiBub25lXG5zdi1hcHAge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkge1xuICAgIG1hcmdpbi10b3A6IDlweDtcbiAgfVxuXG4gIG1heC13aWR0aDogMTI4MHB4O1xuICBtYXJnaW46IHtcbiAgICByaWdodDogYXV0bztcbiAgICBsZWZ0OiBhdXRvO1xuICB9XG5cbn1cblxuYXNpZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB6LWluZGV4OiAxO1xuICBwYWRkaW5nOiB7XG4gICAgcmlnaHQ6IDUwcHg7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XG4gICAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIHRvIGJvdHRvbSxcbiAgICAgICAgI2VlZSxcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwKVxuICAgICkgMSAxMDAlO1xuICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gNTBweCk7XG4gIH1cblxuICAjcGljdHVyZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgIGJvcmRlcjoge1xuICAgICAgICBzdHlsZTogc29saWQ7XG4gICAgICAgIGNvbG9yOiAjZWVlO1xuICAgICAgICByYWRpdXM6IDExMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgICYubmV3LXZlcnNpb24tYXZhaWxhYmxlIHtcbiAgICAgIGltZyB7XG4gICAgICAgIGJvcmRlcjoge1xuICAgICAgICAgIGNvbG9yOiAjZjA0MzNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm5ldy12ZXJzaW9uLWF2YWlsYWJsZS1tc2cge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgYmFja2dyb3VuZDogI2YwNDMzZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICBoMSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogIzMzMztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDMxNHB4KSB7XG4gICAgICBwYWRkaW5nLXRvcDogMThweDtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMzUycHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgcGFkZGluZy10b3A6IDE3cHg7XG4gICAgfVxuXG4gICAgYSB7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjMTExO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgaDIge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cblxuXG4gIHAge1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgY29sb3I6ICM1NTU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIH1cblxuICBuYXYge1xuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIH1cblxuICAgIG9sIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgIGxpIHtcbiAgICAgICAgcGFkZGluZzogMCAwIDAgMTBweDtcbiAgICAgICAgbWFyZ2luOiAwIDAgMTVweCAxNXB4O1xuXG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiAjNDQ0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgIzY2NjtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICMyMjI7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ0NDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDQ0O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDkyMHB4KSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICB1bC5zb2NpYWwge1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcblxuICAgIGxpIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbi1yaWdodDogMjJweDtcblxuICAgICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDIycHg7XG4gICAgICAgIGhlaWdodDogMjJweDtcblxuICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbjtcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHRleHQtaW5kZW50OiAtOTk5OTk5cHg7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5mYWNlYm9vayB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyBoZWlnaHQ9JzEwMCUyNScgdmlld0JveD0nMCAwIDUxMiA1MTInIHdpZHRoPScxMDAlMjUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J200ODMuNzM4MjgxIDBoLTQ1NS41Yy0xNS41OTc2NTYuMDA3ODEyNS0yOC4yNDIxODcyNSAxMi42NjAxNTYtMjguMjM4MjgxIDI4LjI2MTcxOXY0NTUuNWMuMDA3ODEyNSAxNS41OTc2NTYgMTIuNjYwMTU2IDI4LjI0MjE4NyAyOC4yNjE3MTkgMjguMjM4MjgxaDQ1NS40NzY1NjJjMTUuNjA1NDY5LjAwMzkwNiAyOC4yNTc4MTMtMTIuNjQ0NTMxIDI4LjI2MTcxOS0yOC4yNSAwLS4wMDM5MDYgMC0uMDA3ODEyIDAtLjAxMTcxOXYtNDU1LjVjLS4wMDc4MTItMTUuNTk3NjU2LTEyLjY2MDE1Ni0yOC4yNDIxODcyNS0yOC4yNjE3MTktMjguMjM4Mjgxem0wIDAnIGZpbGw9JyUyMzQyNjdiMicvJTNFJTNDcGF0aCBkPSdtMzUzLjUgNTEydi0xOThoNjYuNzVsMTAtNzcuNWgtNzYuNzV2LTQ5LjM1OTM3NWMwLTIyLjM4NjcxOSA2LjIxNDg0NC0zNy42NDA2MjUgMzguMzE2NDA2LTM3LjY0MDYyNWg0MC42ODM1OTR2LTY5LjEyODkwNmMtNy4wNzgxMjUtLjk0MTQwNi0zMS4zNjMyODEtMy4wNDY4NzUtNTkuNjIxMDk0LTMuMDQ2ODc1LTU5IDAtOTkuMzc4OTA2IDM2LTk5LjM3ODkwNiAxMDIuMTQwNjI1djU3LjAzNTE1NmgtNjYuNXY3Ny41aDY2LjV2MTk4em0wIDAnIGZpbGw9JyUyM2ZmZicvJTNFJTNDL3N2ZyUzRSUwQVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYudHdpdHRlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyUzRSUzQ3BhdGggZmlsbD0nJTIzMWRhMWYyJyBkPSdNNDU5LjM3IDE1MS43MTZjLjMyNSA0LjU0OC4zMjUgOS4wOTcuMzI1IDEzLjY0NSAwIDEzOC43Mi0xMDUuNTgzIDI5OC41NTgtMjk4LjU1OCAyOTguNTU4LTU5LjQ1MiAwLTExNC42OC0xNy4yMTktMTYxLjEzNy00Ny4xMDYgOC40NDcuOTc0IDE2LjU2OCAxLjI5OSAyNS4zNCAxLjI5OSA0OS4wNTUgMCA5NC4yMTMtMTYuNTY4IDEzMC4yNzQtNDQuODMyLTQ2LjEzMi0uOTc1LTg0Ljc5Mi0zMS4xODgtOTguMTEyLTcyLjc3MiA2LjQ5OC45NzQgMTIuOTk1IDEuNjI0IDE5LjgxOCAxLjYyNCA5LjQyMSAwIDE4Ljg0My0xLjMgMjcuNjE0LTMuNTczLTQ4LjA4MS05Ljc0Ny04NC4xNDMtNTEuOTgtODQuMTQzLTEwMi45ODV2LTEuMjk5YzEzLjk2OSA3Ljc5NyAzMC4yMTQgMTIuNjcgNDcuNDMxIDEzLjMxOS0yOC4yNjQtMTguODQzLTQ2Ljc4MS01MS4wMDUtNDYuNzgxLTg3LjM5MSAwLTE5LjQ5MiA1LjE5Ny0zNy4zNiAxNC4yOTQtNTIuOTU0IDUxLjY1NSA2My42NzUgMTI5LjMgMTA1LjI1OCAyMTYuMzY1IDEwOS44MDctMS42MjQtNy43OTctMi41OTktMTUuOTE4LTIuNTk5LTI0LjA0IDAtNTcuODI4IDQ2Ljc4Mi0xMDQuOTM0IDEwNC45MzQtMTA0LjkzNCAzMC4yMTMgMCA1Ny41MDIgMTIuNjcgNzYuNjcgMzMuMTM3IDIzLjcxNS00LjU0OCA0Ni40NTYtMTMuMzIgNjYuNTk5LTI1LjM0LTcuNzk4IDI0LjM2Ni0yNC4zNjYgNDQuODMzLTQ2LjEzMiA1Ny44MjcgMjEuMTE3LTIuMjczIDQxLjU4NC04LjEyMiA2MC40MjYtMTYuMjQzLTE0LjI5MiAyMC43OTEtMzIuMTYxIDM5LjMwOC01Mi42MjggNTQuMjUzeicvJTNFJTNDL3N2ZyUzRSUwQVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYubGlua2VkaW4ge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgaGVpZ2h0PScxMDAlMjUnIHZpZXdCb3g9JzAgLTExIDUxMiA1MTEnIHdpZHRoPScxMDAlMjUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzA2OSclM0UlM0NwYXRoIGQ9J202LjQ4ODI4MSAxNTkuNjgzNTk0aDEwOS43NTM5MDd2MzMwLjIwNzAzMWgtMTA5Ljc1MzkwN3ptMCAwJy8lM0UlM0NwYXRoIGQ9J202Mi4wODk4NDQuNWMtMzcuNTQyOTY5IDAtNjIuMDg5ODQ0IDI0LjY1MjM0NC02Mi4wODk4NDQgNTcuMDU0Njg4IDAgMzEuNjg3NSAyMy44MTY0MDYgNTcuMDQyOTY4IDYwLjY0ODQzOCA1Ny4wNDI5NjhoLjcxNDg0M2MzOC4yNzczNDQgMCA2Mi4wOTc2NTctMjUuMzU1NDY4IDYyLjA5NzY1Ny01Ny4wNDI5NjgtLjcxNDg0NC0zMi40MDIzNDQtMjMuODIwMzEzLTU3LjA1NDY4OC02MS4zNzEwOTQtNTcuMDU0Njg4em0wIDAnLyUzRSUzQ3BhdGggZD0nbTM4NS42NDQ1MzEgMTUxLjkzMzU5NGMtNTguMjM0Mzc1IDAtODQuMzI4MTI1IDMyLjAwMzkwNi05OC45MTQwNjIgNTQuNTA3ODEydi00Ni43NTc4MTJoLTEwOS43NTc4MTN2MzMwLjIwNzAzMWgxMDkuNzUzOTA2di0xODQuNDAyMzQ0YzAtOS44NzEwOTMuNzE0ODQ0LTE5LjcyNjU2MiAzLjYxMzI4Mi0yNi43ODUxNTYgNy45MzM1OTQtMTkuNzE0ODQ0IDI1Ljk5MjE4Ny00MC4xMzY3MTkgNTYuMzEyNS00MC4xMzY3MTkgMzkuNzE0ODQ0IDAgNTUuNjAxNTYyIDMwLjI4MTI1IDU1LjYwMTU2MiA3NC42NzE4NzV2MTc2LjY1MjM0NGgxMDkuNzQ2MDk0di0xODkuMzM1OTM3YzAtMTAxLjQyNTc4Mi01NC4xNDg0MzgtMTQ4LjYyMTA5NC0xMjYuMzU1NDY5LTE0OC42MjEwOTR6bTAgMCcvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFJTBBXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5naXRodWIge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnIHZpZXdCb3g9JzAgMCAyNTYgMjUwJyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHByZXNlcnZlQXNwZWN0UmF0aW89J3hNaWRZTWlkJyUzRSUzQ2clM0UlM0NwYXRoIGQ9J00xMjguMDAxMDYsMCBDNTcuMzE3MjkyNiwwIDAsNTcuMzA2Njk0MiAwLDEyOC4wMDEwNiBDMCwxODQuNTU1MjgxIDM2LjY3NjE5OTcsMjMyLjUzNTU0MiA4Ny41MzQ5MzcsMjQ5LjQ2MDg5OSBDOTMuOTMyMDIyMywyNTAuNjQ1Nzc5IDk2LjI4MDU4OCwyNDYuNjg0MTY1IDk2LjI4MDU4OCwyNDMuMzAzMzMzIEM5Ni4yODA1ODgsMjQwLjI1MTA0NSA5Ni4xNjE4ODc4LDIzMC4xNjc4OTkgOTYuMTA2Nzc3LDIxOS40NzIxNzYgQzYwLjQ5Njc1ODUsMjI3LjIxNTIzNSA1Mi45ODI2MjA3LDIwNC4zNjk3MTIgNTIuOTgyNjIwNywyMDQuMzY5NzEyIEM0Ny4xNTk5NTg0LDE4OS41NzQ1OTggMzguNzcwNDA4LDE4NS42NDA1MzggMzguNzcwNDA4LDE4NS42NDA1MzggQzI3LjE1Njg3ODUsMTc3LjY5NjExMyAzOS42NDU4MjA2LDE3Ny44NTkzMjUgMzkuNjQ1ODIwNiwxNzcuODU5MzI1IEM1Mi40OTkzNDE5LDE3OC43NjIyOTMgNTkuMjY3MzY1LDE5MS4wNDk4NyA1OS4yNjczNjUsMTkxLjA0OTg3IEM3MC42ODM3Njc1LDIxMC42MTg0MjMgODkuMjExNTc1MywyMDQuOTYxMDkzIDk2LjUxNTg2ODUsMjAxLjY5MDQ4MiBDOTcuNjY0NzE1NSwxOTMuNDE3NTEyIDEwMC45ODE5NTksMTg3Ljc3MDc4IDEwNC42NDI1ODMsMTg0LjU3NDM1NyBDNzYuMjExNzk5LDE4MS4zMzc2NiA0Ni4zMjQ4MTksMTcwLjM2MjE0NCA0Ni4zMjQ4MTksMTIxLjMxNTcwMiBDNDYuMzI0ODE5LDEwNy4zNDA4ODkgNTEuMzI1MDU4OCw5NS45MjIzNjgyIDU5LjUxMzI0MzcsODYuOTU4MzkzNyBDNTguMTg0MjI2OCw4My43MzQ0MTUyIDUzLjgwMjkyMjksNzAuNzE1NTYyIDYwLjc1MzIzNTQsNTMuMDg0MzYzNiBDNjAuNzUzMjM1NCw1My4wODQzNjM2IDcxLjUwMTk1MDEsNDkuNjQ0MTgxMyA5NS45NjI2NDEyLDY2LjIwNDk1OTUgQzEwNi4xNzI5NjcsNjMuMzY4ODc2IDExNy4xMjMwNDcsNjEuOTQ2NTk0OSAxMjguMDAxMDYsNjEuODk3ODQzMiBDMTM4Ljg3OTA3Myw2MS45NDY1OTQ5IDE0OS44Mzc2MzIsNjMuMzY4ODc2IDE2MC4wNjcwMzMsNjYuMjA0OTU5NSBDMTg0LjQ5ODA1LDQ5LjY0NDE4MTMgMTk1LjIzMTkyNiw1My4wODQzNjM2IDE5NS4yMzE5MjYsNTMuMDg0MzYzNiBDMjAyLjE5OTE5Nyw3MC43MTU1NjIgMTk3LjgxNTc3Myw4My43MzQ0MTUyIDE5Ni40ODY3NTYsODYuOTU4MzkzNyBDMjA0LjY5NDAxOCw5NS45MjIzNjgyIDIwOS42NjAzNDMsMTA3LjM0MDg4OSAyMDkuNjYwMzQzLDEyMS4zMTU3MDIgQzIwOS42NjAzNDMsMTcwLjQ3ODcyNSAxNzkuNzE2MTMzLDE4MS4zMDM3NDcgMTUxLjIxMzI4MSwxODQuNDcyNjE0IEMxNTUuODA0NDMsMTg4LjQ0NDgyOCAxNTkuODk1MzQyLDE5Ni4yMzQ1MTggMTU5Ljg5NTM0MiwyMDguMTc2NTkzIEMxNTkuODk1MzQyLDIyNS4zMDMzMTcgMTU5Ljc0Njk2OCwyMzkuMDg3MzYxIDE1OS43NDY5NjgsMjQzLjMwMzMzMyBDMTU5Ljc0Njk2OCwyNDYuNzA5NjAxIDE2Mi4wNTEwMiwyNTAuNzAwODkgMTY4LjUzOTI1LDI0OS40NDM5NDEgQzIxOS4zNzA0MzIsMjMyLjQ5OTUwNyAyNTYsMTg0LjUzNjIwNCAyNTYsMTI4LjAwMTA2IEMyNTYsNTcuMzA2Njk0MiAxOTguNjkxMTg3LDAgMTI4LjAwMTA2LDAgWiBNNDcuOTQwNTU5MywxODIuMzQwMjEyIEM0Ny42NTg2NDY1LDE4Mi45NzYxMDUgNDYuNjU4MTc0NSwxODMuMTY2ODczIDQ1Ljc0NjcyNzcsMTgyLjczMDIyNyBDNDQuODE4MzIzNSwxODIuMzEyNjU2IDQ0LjI5Njg5MTQsMTgxLjQ0NTcyMiA0NC41OTc4ODA4LDE4MC44MDc3MSBDNDQuODczNDM0NCwxODAuMTUyNzM5IDQ1Ljg3NjAyNiwxNzkuOTcwNDUgNDYuODAyMzEwMywxODAuNDA5MjE2IEM0Ny43MzI4MzQyLDE4MC44MjY3ODYgNDguMjYyNzQ1MSwxODEuNzAyMTk5IDQ3Ljk0MDU1OTMsMTgyLjM0MDIxMiBaIE01NC4yMzY3ODkyLDE4Ny45NTgyNTQgQzUzLjYyNjMzMTgsMTg4LjUyNDE5OSA1Mi40MzI5NzIzLDE4OC4yNjEzNjMgNTEuNjIzMjY4MiwxODcuMzY2ODc0IEM1MC43ODYwMDg4LDE4Ni40NzQ1MDQgNTAuNjI5MTU1MywxODUuMjgxMTQ0IDUxLjI0ODA5MTIsMTg0LjcwNjcyIEM1MS44Nzc2MjU0LDE4NC4xNDA3NzUgNTMuMDM0OTUxMiwxODQuNDA1NzMxIDUzLjg3NDMzMDIsMTg1LjI5ODEwMSBDNTQuNzExNTg5MiwxODYuMjAxMDY5IDU0Ljg3NDgwMTksMTg3LjM4NTk1IDU0LjIzNjc4OTIsMTg3Ljk1ODI1NCBaIE01OC41NTYyNDEzLDE5NS4xNDYzNDcgQzU3Ljc3MTk3MzIsMTk1LjY5MTA5NiA1Ni40ODk1ODg2LDE5NS4xODAyNjEgNTUuNjk2ODQxNywxOTQuMDQyMDEzIEM1NC45MTI1NzMzLDE5Mi45MDM3NjQgNTQuOTEyNTczMywxOTEuNTM4NzEzIDU1LjcxMzc5OSwxOTAuOTkxODQ1IEM1Ni41MDg2NjUxLDE5MC40NDQ5NzcgNTcuNzcxOTczMiwxOTAuOTM2NzM1IDU4LjU3NTMxODEsMTkyLjA2NjUwNSBDNTkuMzU3NDY2OSwxOTMuMjIzODMgNTkuMzU3NDY2OSwxOTQuNTg4ODggNTguNTU2MjQxMywxOTUuMTQ2MzQ3IFogTTY1Ljg2MTM1OTIsMjAzLjQ3MTE3NCBDNjUuMTU5NzU3MSwyMDQuMjQ0ODQ2IDYzLjY2NTQwODMsMjA0LjAzNzEyIDYyLjU3MTY3MTcsMjAyLjk4MTUzOCBDNjEuNDUyNDk5OSwyMDEuOTQ5MjcgNjEuMTQwOTEyMiwyMDAuNDg0NTk2IDYxLjg0NDYzNDEsMTk5LjcxMDkyNiBDNjIuNTU0NzE0NiwxOTguOTM1MTM3IDY0LjA1NzU0MjIsMTk5LjE1MzQ2IDY1LjE1OTc1NzEsMjAwLjIwMDU2NCBDNjYuMjcwNDUwNiwyMDEuMjMwNzEyIDY2LjYwOTU5MzYsMjAyLjcwNTk4NCA2NS44NjEzNTkyLDIwMy40NzExNzQgWiBNNzUuMzAyNTE1MSwyMDYuMjgxNTQyIEM3NC45OTMwNDc0LDIwNy4yODQxMzQgNzMuNTUzODA5LDIwNy43Mzk4NTcgNzIuMTAzOTcyNCwyMDcuMzEzODA5IEM3MC42NTYyNTU2LDIwNi44NzUwNDMgNjkuNzA4Nzc0OCwyMDUuNzAwNzYxIDcwLjAwMTI4NTcsMjA0LjY4NzU3MSBDNzAuMzAyMjc1LDIwMy42Nzg2MjEgNzEuNzQ3ODcyMSwyMDMuMjAzODIgNzMuMjA4MzA2OSwyMDMuNjU5NTQzIEM3NC42NTM5MDQxLDIwNC4wOTYxOSA3NS42MDM1MDQ4LDIwNS4yNjE5OTQgNzUuMzAyNTE1MSwyMDYuMjgxNTQyIFogTTg2LjA0Njk0NywyMDcuNDczNjI3IEM4Ni4wODI5ODA2LDIwOC41MjkyMDkgODQuODUzNTg3MSwyMDkuNDA0NjIyIDgzLjMzMTY4MjksMjA5LjQyMzcgQzgxLjgwMTMsMjA5LjQ1NzYxNCA4MC41NjM0MjgsMjA4LjYwMzM5OCA4MC41NDY0NzA4LDIwNy41NjQ3NzIgQzgwLjU0NjQ3MDgsMjA2LjQ5ODU5MSA4MS43NDgzMDg4LDIwNS42MzE2NTcgODMuMjc4NjkxNywyMDUuNjA2MjIxIEM4NC44MDA1OTYyLDIwNS41NzY1NDYgODYuMDQ2OTQ3LDIwNi40MjQ0MDMgODYuMDQ2OTQ3LDIwNy40NzM2MjcgWiBNOTYuNjAyMTQ3MSwyMDcuMDY5MDIzIEM5Ni43ODQ0MzY2LDIwOC4wOTkxNzEgOTUuNzI2NzM0MSwyMDkuMTU2ODcyIDk0LjIxNTQyOCwyMDkuNDM4Nzg1IEM5Mi43Mjk1NTc3LDIwOS43MTAwOTkgOTEuMzUzOTA4NiwyMDkuMDc0MjA2IDkxLjE2NTI2MDMsMjA4LjA1MjUzOCBDOTAuOTgwODUxNSwyMDYuOTk2OTU1IDkyLjA1NzYzMDYsMjA1LjkzOTI1MyA5My41NDEzODEzLDIwNS42NjU4MiBDOTUuMDU0ODA3LDIwNS40MDI5ODQgOTYuNDA5MjU5NiwyMDYuMDIxOTE5IDk2LjYwMjE0NzEsMjA3LjA2OTAyMyBaJyBmaWxsPSclMjMxNjE2MTQnJTNFJTNDL3BhdGglM0UlM0MvZyUzRSUzQy9zdmclM0UlMEFcIik7XG4gICAgICAgIH1cblxuICAgICAgICAmLnNreXBlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIGhlaWdodD0nMTAwJTI1JyB2aWV3Qm94PScwIC0xIDUxMi4wMDEgNTEyJyB3aWR0aD0nMTAwJTI1JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdtNDkzLjg3ODkwNiAyOTguMDIzNDM4YzIuNjQwNjI1LTE0LjM4NjcxOSA0LjAyNzM0NC0yOS4xMDkzNzYgNC4wMjczNDQtNDMuODI4MTI2IDAtMzIuNjM2NzE4LTYuMzg2NzE5LTY0LjI5Njg3NC0xOS4wMTE3MTktOTQuMTA1NDY4LTEyLjE3OTY4Ny0yOC43OTI5NjktMjkuNjA1NDY5LTU0LjY0ODQzOC01MS44MjAzMTItNzYuODQ3NjU2LTIyLjE4MzU5NC0yMi4yMDMxMjYtNDguMDU4NTk0LTM5LjYyNS03Ni44MzU5MzgtNTEuODA0Njg4LTI5Ljc5Njg3NS0xMi42MDkzNzUtNjEuNDYwOTM3LTE5LTk0LjA5Mzc1LTE5LTE1LjM4MjgxMiAwLTMwLjc4OTA2MiAxLjQ0NTMxMi00NS43ODEyNSA0LjMyNDIxOS0uMDMxMjUuMDA3ODEyLS4wNzQyMTkuMDA3ODEyLS4xMTMyODEuMDE1NjI1LTIwLjU3MDMxMi0xMC45Mzc1LTQzLjcwMzEyNS0xNi43NzczNDQtNjcuMTIxMDk0LTE2Ljc3NzM0NC0zOC4yMzA0NjggMC03NC4xNzU3ODEgMTQuODg2NzE5LTEwMS4yMDcwMzEgNDEuOTI5Njg4LTI3LjAyNzM0NCAyNy4wMzEyNS00MS45MjE4NzUgNjIuOTc2NTYyLTQxLjkyMTg3NSAxMDEuMjA3MDMxIDAgMjQuMzMyMDMxIDYuMjYxNzE5IDQ4LjI1MzkwNiAxOC4wMDc4MTIgNjkuMzkwNjI1LTIuMzgyODEyIDEzLjY5NTMxMi0zLjY0MDYyNCAyNy42OTE0MDYtMy42NDA2MjQgNDEuNjY3OTY4IDAgMzIuNjQ0NTMyIDYuMzkwNjI0IDY0LjMwMDc4MiAxOS4wMTU2MjQgOTQuMTEzMjgyIDEyLjE2MDE1NyAyOC44MDA3ODEgMjkuNTkzNzUgNTQuNjQwNjI1IDUxLjc4OTA2MyA3Ni44NDM3NSAyMi4yMTQ4NDQgMjIuMTk5MjE4IDQ4LjA1NDY4NyAzOS42NDg0MzcgNzYuODYzMjgxIDUxLjc5Njg3NSAyOS44MDA3ODIgMTIuNjMyODEyIDYxLjQ3MjY1NiAxOS4wMjczNDMgOTQuMTA1NDY5IDE5LjAyNzM0MyAxNC4yMDcwMzEgMCAyOC40NDUzMTMtMS4yOTY4NzQgNDIuMzQzNzUtMy43NjE3MTggMjEuNDE0MDYzIDEyLjExMzI4MSA0NS42NTYyNSAxOC41NTA3ODEgNzAuNDE0MDYzIDE4LjU1MDc4MSAzOC4yMjI2NTYgMCA3NC4xNDg0MzctMTQuODU5Mzc1IDEwMS4xODM1OTMtNDEuOTEwMTU2IDI3LjAzOTA2My0yNy4wMTU2MjUgNDEuOTE3OTY5LTYyLjk2ODc1IDQxLjkxNzk2OS0xMDEuMTk5MjE5IDAtMjQuNDE0MDYyLTYuMjkyOTY5LTQ4LjQxNDA2Mi0xOC4xMjEwOTQtNjkuNjMyODEyem0wIDAnIGZpbGw9JyUyMzAwYWZmMCcvJTNFJTNDcGF0aCBkPSdtMjU3LjEwNTQ2OSA0MDIuMjYxNzE5Yy04NS44OTA2MjUgMC0xMjQuMzE2NDA3LTQyLjIyNjU2My0xMjQuMzE2NDA3LTczLjg3NSAwLTE2LjIzMDQ2OSAxMS45ODQzNzYtMjcuNjA5Mzc1IDI4LjUtMjcuNjA5Mzc1IDM2Ljc1NzgxMyAwIDI3LjIzODI4MiA1Mi43NzczNDQgOTUuODE2NDA3IDUyLjc3NzM0NCAzNS4xMDkzNzUgMCA1NC40OTYwOTMtMTkuMDYyNSA1NC40OTYwOTMtMzguNTcwMzEzIDAtMTEuNzM0Mzc1LTUuNzg5MDYyLTI0LjczODI4MS0yOC45MDYyNS0zMC40Mzc1bC03Ni4zOTQ1MzEtMTkuMDcwMzEzYy02MS41MjczNDMtMTUuNDI5Njg3LTcyLjY5MTQwNi00OC42OTE0MDYtNzIuNjkxNDA2LTc5Ljk1NzAzMSAwLTY0LjkxNDA2MiA2MS4xMjEwOTQtODkuMjg5MDYyIDExOC41MTk1MzEtODkuMjg5MDYyIDUyLjg3NSAwIDExNS4yMDMxMjUgMjkuMjIyNjU2IDExNS4yMDMxMjUgNjguMTY3OTY5IDAgMTYuNjg3NS0xNC40NDkyMTkgMjYuMzkwNjI0LTMwLjk2MDkzNyAyNi4zOTA2MjQtMzEuMzY3MTg4IDAtMjUuNTk3NjU2LTQzLjQxNzk2OC04OC43ODUxNTYtNDMuNDE3OTY4LTMxLjM1NTQ2OSAwLTQ4LjcyMjY1NyAxNC4xOTkyMTgtNDguNzIyNjU3IDM0LjUxNTYyNSAwIDIwLjI4MTI1IDI0Ljc2NTYyNSAyNi43NTc4MTIgNDYuMjY1NjI1IDMxLjY1NjI1bDU2LjU0Njg3NSAxMi41NTA3ODFjNjEuOTQxNDA3IDEzLjgwMDc4MSA3Ny42NDQ1MzEgNDkuOTY0ODQ0IDc3LjY0NDUzMSA4NC4wMjczNDQuMDAzOTA3IDUyLjc1LTQwLjQ4ODI4MSA5Mi4xNDA2MjUtMTIyLjIxNDg0MyA5Mi4xNDA2MjV6bTAgMCcgZmlsbD0nJTIzZmZmJy8lM0UlM0Mvc3ZnJTNFJTBBXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5zdGFjay1vdmVyZmxvdyB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScgdmlld0JveD0nMCAwIDI1NiAzMDQnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgcHJlc2VydmVBc3BlY3RSYXRpbz0neE1pZFlNaWQnJTNFJTNDZyUzRSUzQ3BvbHlnb24gZmlsbD0nJTIzQkNCQkJCJyBwb2ludHM9JzIxNi4zMjk3MDggMjc2LjE4NzkyOSAyMTYuMzI5NzA4IDE5NC45NzY3NzYgMjQzLjI4MzQxIDE5NC45NzY3NzYgMjQzLjI4MzQxIDMwMy4xNDE2MyAwIDMwMy4xNDE2MyAwIDE5NC45NzY3NzYgMjYuOTUzNzAxNSAxOTQuOTc2Nzc2IDI2Ljk1MzcwMTUgMjc2LjE4NzkyOSclM0UlM0MvcG9seWdvbiUzRSUzQ3BhdGggZD0nTTU2LjcwNzc4NzYsMTg3LjI3NTcxOCBMMTg5LjAyNTk1OSwyMTQuOTI5NTE2IEwxOTQuNjI2NzI4LDE4OC4zMjU4NjMgTDYyLjMwODU1NjgsMTYwLjY3MjA2NSBMNTYuNzA3Nzg3NiwxODcuMjc1NzE4IEw1Ni43MDc3ODc2LDE4Ny4yNzU3MTggWiBNNzQuMjEwMTkxMiwxMjQuMjY3MDY1IEwxOTYuNzI3MDE2LDE4MS4zMjQ5MDEgTDIwNy45Mjg1NTUsMTU2LjgyMTUzNiBMODUuNDExNzI5NSw5OS40MTM2NTI0IEw3NC4yMTAxOTEyLDEyNC4yNjcwNjUgWiBNMTA4LjE2NDg1NCw2NC4wNTg3OTcxIEwyMTIuMTI5MTMyLDE1MC41MjA2NzEgTDIyOS4yODE0ODcsMTI5Ljg2NzgzNSBMMTI1LjMxNzIxLDQzLjQwNTk2MDkgTDEwOC4xNjQ4NTQsNjQuMDU4Nzk3MSBMMTA4LjE2NDg1NCw2NC4wNTg3OTcxIFogTTE3NS4zNzQwODQsMCBMMTUzLjY3MTEwNCwxNi4xMDIyMTEzIEwyMzQuMTgyMTYsMTI0LjYxNzExNCBMMjU1Ljg4NTE0LDEwOC41MTQ5MDIgTDE3NS4zNzQwODQsMCBaIE01My45MDc0MDMxLDI0OC44ODQxNzkgTDE4OS4wMjU5NTksMjQ4Ljg4NDE3OSBMMTg5LjAyNTk1OSwyMjEuOTMwNDc4IEw1My45MDc0MDMxLDIyMS45MzA0NzggTDUzLjkwNzQwMzEsMjQ4Ljg4NDE3OSBaJyBmaWxsPSclMjNGNDgwMjMnJTNFJTNDL3BhdGglM0UlM0MvZyUzRSUzQy9zdmclM0UlMEFcIik7XG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgfVxuXG4gIH1cblxuICBoMiB7XG4gICAgbWFyZ2luOiB7XG4gICAgICB0b3A6IDIwcHg7XG4gICAgfVxuICB9XG5cbiAgI21vYmlsZW1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjc2Nyb2xsdG9jb250ZW50IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDM3OHB4KSB7XG4gICAgLm5ldy12ZXJzaW9uLWF2YWlsYWJsZS1tc2cge1xuICAgICAgdG9wOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDkyMHB4KSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogOXB4O1xuICAgIHBhZGRpbmctdG9wOiAxMXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMXB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgyMDQsIDIwNCwgMjA0LCAxKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMjA0LCAyMDQsIDIwNCwgMSk7XG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgyMDQsIDIwNCwgMjA0LCAxKTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgICBoMSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDY1cHg7XG4gICAgICBtYXJnaW4tbGVmdDogODNweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuXG4gICAgdWwuc29jaWFsIHtcbiAgICAgIG1hcmdpbjoge1xuICAgICAgICB0b3A6IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICAgIGZvbnQtc2l6ZTogMS45ZW07XG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIH1cblxuICAgICNwaWN0dXJlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYm9yZGVyOiB7XG4gICAgICAgICAgd2lkdGg6IDVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5uZXctdmVyc2lvbi1hdmFpbGFibGUtbXNnIHtcblxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAyNnB4O1xuICAgICAgbGVmdDogODBweDtcbiAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICB6LWluZGV4OiAxMDA7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTcwcHgpO1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbjoge1xuICAgICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cblxuICAgICNzY3JvbGx0b2NvbnRlbnQge1xuXG4gICAgICAkc3ZnLWRhdGE6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAzODQgNTEyJyUzRSUzQ3BhdGggZmlsbD0nJTIzNDQ0NDQ0JyBkPSdNMzQ4LjUgMjMyLjFsLTE0OCAxNDguNGMtNC43IDQuNy0xMi4zIDQuNy0xNyAwbC0xNDgtMTQ4LjRjLTQuNy00LjctNC43LTEyLjMgMC0xN2wxOS42LTE5LjZjNC44LTQuOCAxMi41LTQuNyAxNy4xLjJsOTMuNyA5Ny4xVjQ0YzAtNi42IDUuNC0xMiAxMi0xMmgyOGM2LjYgMCAxMiA1LjQgMTIgMTJ2MjQ4LjhsOTMuNy05Ny4xYzQuNy00LjggMTIuNC00LjkgMTcuMS0uMmwxOS42IDE5LjZjNC45IDQuNyA0LjkgMTIuMy4yIDE3ek0zNzIgNDI4SDEyYy02LjYgMC0xMiA1LjQtMTIgMTJ2MjhjMCA2LjYgNS40IDEyIDEyIDEyaDM2MGM2LjYgMCAxMi01LjQgMTItMTJ2LTI4YzAtNi42LTUuNC0xMi0xMi0xMnonLyUzRSUzQy9zdmclM0UlMEFcIjtcbiAgICAgIEBpbmNsdWRlIHN2Zy1iZy1pY29uKCRzdmctZGF0YSwgJzMwcHggMzBweCcsICcwcHggM3B4Jyk7XG5cbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICByaWdodDogMjBweDtcbiAgICAgIHRvcDogMjhweDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgdGV4dC1pbmRlbnQ6IC05OTk5OXB4O1xuXG4gICAgICAmOmZvY3VzLFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgI21vYmlsZW1lbnUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICByaWdodDogNzBweDtcbiAgICAgIHRvcDogMjBweDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcblxuICAgICAgJjpmb2N1cyxcbiAgICAgICY6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWluZGVudDogLTk5OTk5cHg7XG4gICAgICB9XG5cbiAgICAgIC5vcGVuIHtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgJHN2Zy1kYXRhOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDQ4IDUxMiclM0UlM0NwYXRoIGZpbGw9JyUyMzQ0NDQ0NCcgZD0nTTQzNiAxMjRIMTJjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJWODBjMC02LjYyNyA1LjM3My0xMiAxMi0xMmg0MjRjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYzMmMwIDYuNjI3LTUuMzczIDEyLTEyIDEyem0wIDE2MEgxMmMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtMzJjMC02LjYyNyA1LjM3My0xMiAxMi0xMmg0MjRjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYzMmMwIDYuNjI3LTUuMzczIDEyLTEyIDEyem0wIDE2MEgxMmMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtMzJjMC02LjYyNyA1LjM3My0xMiAxMi0xMmg0MjRjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYzMmMwIDYuNjI3LTUuMzczIDEyLTEyIDEyeicvJTNFJTNDL3N2ZyUzRSUwQVwiO1xuICAgICAgICBAaW5jbHVkZSBzdmctYmctaWNvbigkc3ZnLWRhdGEsICczMHB4IDMwcHgnLCAnMHB4IDNweCcpO1xuICAgICAgfVxuXG4gICAgICAuY2xvc2Uge1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAkc3ZnLWRhdGE6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAzMjAgNTEyJyUzRSUzQ3BhdGggZmlsbD0nJTIzNDQ0NDQ0JyBkPSdNMjA3LjYgMjU2bDEwNy43Mi0xMDcuNzJjNi4yMy02LjIzIDYuMjMtMTYuMzQgMC0yMi41OGwtMjUuMDMtMjUuMDNjLTYuMjMtNi4yMy0xNi4zNC02LjIzLTIyLjU4IDBMMTYwIDIwOC40IDUyLjI4IDEwMC42OGMtNi4yMy02LjIzLTE2LjM0LTYuMjMtMjIuNTggMEw0LjY4IDEyNS43Yy02LjIzIDYuMjMtNi4yMyAxNi4zNCAwIDIyLjU4TDExMi40IDI1NiA0LjY4IDM2My43MmMtNi4yMyA2LjIzLTYuMjMgMTYuMzQgMCAyMi41OGwyNS4wMyAyNS4wM2M2LjIzIDYuMjMgMTYuMzQgNi4yMyAyMi41OCAwTDE2MCAzMDMuNmwxMDcuNzIgMTA3LjcyYzYuMjMgNi4yMyAxNi4zNCA2LjIzIDIyLjU4IDBsMjUuMDMtMjUuMDNjNi4yMy02LjIzIDYuMjMtMTYuMzQgMC0yMi41OEwyMDcuNiAyNTZ6Jy8lM0UlM0Mvc3ZnJTNFJTBBXCI7XG4gICAgICAgIEBpbmNsdWRlIHN2Zy1iZy1pY29uKCRzdmctZGF0YSwgJzMwcHggMzBweCcsICcwcHggM3B4Jyk7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICAjbW9iaWxlbmF2Y29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmc6IDMwcHggMjBweCAwIDIwcHg7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIG5hdiBvbCBsaSB7XG4gICAgICBtYXJnaW46IDAgMCAyNXB4IDE1cHg7XG5cbiAgICAgIGEge1xuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHVsLnNvY2lhbCBsaSB7XG5cbiAgICAgIGEge1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgfVxuICAgIH1cblxuICAgICYub3BlbiB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICNtb2JpbGVuYXZjb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkge1xuXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAyODBweDtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcblxuICAgIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuXG4gICAgI3BpY3R1cmUge1xuICAgICAgd2lkdGg6IDEyMHB4O1xuXG4gICAgICBpbWcge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBib3JkZXI6IHtcbiAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5uZXctdmVyc2lvbi1hdmFpbGFibGUtbXNnIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNjVweDtcbiAgICAgIGxlZnQ6IDEzMHB4O1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IC0xNnB4O1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICBib3JkZXItd2lkdGg6IDhweDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIG1hcmdpbi10b3A6IC04cHg7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgICAgICAgY29sb3I6ICNmMDQzM2U7XG4gICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogI2YwNDMzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBuYXYgdWwgbGkge1xuICAgICAgbWFyZ2luOiAxMHB4IDAgMTBweCAxNXB4O1xuXG4gICAgICBhIHtcbiAgICAgICAgcGFkZGluZzogNHB4IDBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIEBtZWRpYSAobWF4LWhlaWdodDogNjUwcHgpIHtcbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgICBsaW5lLWhlaWdodDogMS40ZW07XG4gICAgfVxuICAgIG9sIGxpIHtcbiAgICAgIG1hcmdpbjogMCAwIDIwcHggMTVweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG59XG5cbmZvb3RlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBwYWRkaW5nLXRvcDogMjVweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmNmY2ZjY7XG5cbiAgcCB7XG4gICAgZm9udDoge1xuICAgICAgc3R5bGU6IGl0YWxpYztcbiAgICAgIHNpemU6IDEuMWVtO1xuICAgIH1cbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuIl19 */"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ngx_seo_1 = __webpack_require__(/*! ngx-seo */ "../../dist/ngx-seo/bundles/ngx-seo.umd.js");
var route_helper_service_1 = __webpack_require__(/*! ./shared/route-helper.service */ "./src/app/shared/route-helper.service.ts");
var environment_1 = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var environment_service_1 = __webpack_require__(/*! ./shared/environment.service */ "./src/app/shared/environment.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(routehelper, seoSocialShareService, environmentService) {
        this.routehelper = routehelper;
        this.seoSocialShareService = seoSocialShareService;
        this.environmentService = environmentService;
        this.today = new Date();
        this.currentUrl$ = this.routehelper.currentUrl$;
        this.newVersionAvailable$ = this.environmentService.newVersionAvailable$;
        this.mobileNavToggled = false;
        this.seoSocialShareService.setFbAppId(environment_1.environment.facebookAppId);
        this.seoSocialShareService.setTwitterSiteCreator(environment_1.environment.twitterSiteCreator);
        this.seoSocialShareService.setTwitterCard('summary_large_image');
    }
    AppComponent.prototype.toggleMobileNav = function (event, block) {
        if (block === void 0) { block = false; }
        this.mobileNavToggled = !this.mobileNavToggled;
        if (block) {
            event.preventDefault();
        }
    };
    AppComponent.prototype.navigateMobile = function () {
        this.toggleMobileNav();
    };
    AppComponent.prototype.update = function ($event) {
        $event.preventDefault();
        this.environmentService.update();
    };
    AppComponent.prototype.onKeydownHandler = function (event) {
        this.routehelper.keyboardNavigate(event.key);
    };
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var ng_lazyload_image_1 = __webpack_require__(/*! ng-lazyload-image */ "ng-lazyload-image");
var environment_service_1 = __webpack_require__(/*! ./shared/environment.service */ "./src/app/shared/environment.service.ts");
function initApp(environmentService) {
    return function () { return environmentService.isEnvironmentReady().catch(function (e) { return console.log('Could not initialize application', e); }); };
}
exports.initApp = initApp;
function isBot(navigator, platformId) {
    return common_1.isPlatformServer(platformId) ? true : ng_lazyload_image_1.intersectionObserverPreset.isBot(navigator, platformId);
}
exports.isBot = isBot;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.server.module.ngfactory.js":
/*!************************************************!*\
  !*** ./src/app/app.server.module.ngfactory.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./app.server.module */ "./src/app/app.server.module.ts");
var i2 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var i3 = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "../../node_modules/@angular/router/router.ngfactory.js");
var i4 = __webpack_require__(/*! ./pages/not-found/not-found.component.ngfactory */ "./src/app/pages/not-found/not-found.component.ngfactory.js");
var i5 = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
var i6 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i7 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i8 = __webpack_require__(/*! @angular/platform-server */ "@angular/platform-server");
var i9 = __webpack_require__(/*! @angular/animations/browser */ "@angular/animations/browser");
var i10 = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
var i11 = __webpack_require__(/*! ngx-seo */ "../../dist/ngx-seo/bundles/ngx-seo.umd.js");
var i12 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i13 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var i14 = __webpack_require__(/*! ./shared/highlight.service */ "./src/app/shared/highlight.service.ts");
var i15 = __webpack_require__(/*! angulartics2 */ "angulartics2");
var i16 = __webpack_require__(/*! @angular/animations */ "@angular/animations");
var i17 = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
var i18 = __webpack_require__(/*! ./shared/environment.service */ "./src/app/shared/environment.service.ts");
var i19 = __webpack_require__(/*! @nguniversal/module-map-ngfactory-loader */ "@nguniversal/module-map-ngfactory-loader");
var i20 = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
var i21 = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var i22 = __webpack_require__(/*! ng-lazyload-image */ "ng-lazyload-image");
var i23 = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
var AppServerModuleNgFactory = i0.ɵcmf(i1.AppServerModule, [i2.AppComponent], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.ɵangular_packages_router_router_lNgFactory, i4.NotFoundComponentNgFactory, i5.AppComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵangular_packages_core_core_p, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i6.NgLocalization, i6.NgLocaleLocalization, [i0.LOCALE_ID, [2, i6.ɵangular_packages_common_common_a]]), i0.ɵmpd(5120, i0.ɵangular_packages_core_core_ba, i0.ɵangular_packages_core_core_r, [i0.NgZone]), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵangular_packages_core_core_n, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵangular_packages_core_core_o, []), i0.ɵmpd(4608, i7.DomSanitizer, i7.ɵDomSanitizerImpl, [i6.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i7.DomSanitizer]), i0.ɵmpd(4608, i7.HAMMER_GESTURE_CONFIG, i7.HammerGestureConfig, []), i0.ɵmpd(5120, i7.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3, p3_0) { return [new i7.ɵDomEventsPlugin(p0_0, p0_1, p0_2), new i7.ɵKeyEventsPlugin(p1_0), new i7.ɵHammerGesturesPlugin(p2_0, p2_1, p2_2, p2_3), new i8.ɵangular_packages_platform_server_platform_server_d(p3_0)]; }, [i6.DOCUMENT, i0.NgZone, i0.PLATFORM_ID, i6.DOCUMENT, i6.DOCUMENT, i7.HAMMER_GESTURE_CONFIG, i0.ɵConsole, [2, i7.HAMMER_LOADER], i6.DOCUMENT]), i0.ɵmpd(4608, i7.EventManager, i7.EventManager, [i7.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i7.ɵDomSharedStylesHost, i7.ɵDomSharedStylesHost, [i6.DOCUMENT]), i0.ɵmpd(4608, i7.ɵDomRendererFactory2, i7.ɵDomRendererFactory2, [i7.EventManager, i7.ɵDomSharedStylesHost, i0.APP_ID]), i0.ɵmpd(4608, i8.ɵangular_packages_platform_server_platform_server_c, i8.ɵangular_packages_platform_server_platform_server_c, [i6.DOCUMENT, [2, i7.ɵTRANSITION_ID]]), i0.ɵmpd(6144, i7.ɵSharedStylesHost, null, [i8.ɵangular_packages_platform_server_platform_server_c]), i0.ɵmpd(4608, i8.ɵServerRendererFactory2, i8.ɵServerRendererFactory2, [i7.EventManager, i0.NgZone, i6.DOCUMENT, i7.ɵSharedStylesHost]), i0.ɵmpd(4608, i9.AnimationDriver, i9.ɵNoopAnimationDriver, []), i0.ɵmpd(5120, i9.ɵAnimationStyleNormalizer, i10.ɵangular_packages_platform_browser_animations_animations_b, []), i0.ɵmpd(4608, i9.ɵAnimationEngine, i10.ɵInjectableAnimationEngine, [i6.DOCUMENT, i9.AnimationDriver, i9.ɵAnimationStyleNormalizer]), i0.ɵmpd(5120, i0.RendererFactory2, i8.ɵangular_packages_platform_server_platform_server_a, [i8.ɵServerRendererFactory2, i9.ɵAnimationEngine, i0.NgZone]), i0.ɵmpd(4352, i0.Testability, null, []), i0.ɵmpd(4608, i7.TransferState, i7.TransferState, []), i0.ɵmpd(4608, i11.JsonLdService, i11.JsonLdService, [[2, i0.PLATFORM_ID], [2, i6.DOCUMENT]]), i0.ɵmpd(5120, i12.ActivatedRoute, i12.ɵangular_packages_router_router_g, [i12.Router]), i0.ɵmpd(4608, i12.NoPreloading, i12.NoPreloading, []), i0.ɵmpd(6144, i12.PreloadingStrategy, null, [i12.NoPreloading]), i0.ɵmpd(135680, i12.RouterPreloader, i12.RouterPreloader, [i12.Router, i0.NgModuleFactoryLoader, i0.Compiler, i0.Injector, i12.PreloadingStrategy]), i0.ɵmpd(4608, i12.PreloadAllModules, i12.PreloadAllModules, []), i0.ɵmpd(4608, i6.ViewportScroller, i6.ɵNullViewportScroller, []), i0.ɵmpd(5120, i12.ɵangular_packages_router_router_o, i12.ɵangular_packages_router_router_c, [i12.Router, i6.ViewportScroller, i12.ROUTER_CONFIGURATION]), i0.ɵmpd(5120, i12.ROUTER_INITIALIZER, i12.ɵangular_packages_router_router_j, [i12.ɵangular_packages_router_router_h]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) { return [p0_0]; }, [i12.ROUTER_INITIALIZER]), i0.ɵmpd(4608, i13.HttpXsrfTokenExtractor, i13.ɵangular_packages_common_http_http_g, [i6.DOCUMENT, i0.PLATFORM_ID, i13.ɵangular_packages_common_http_http_e]), i0.ɵmpd(4608, i13.ɵangular_packages_common_http_http_h, i13.ɵangular_packages_common_http_http_h, [i13.HttpXsrfTokenExtractor, i13.ɵangular_packages_common_http_http_f]), i0.ɵmpd(5120, i13.HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [i13.ɵangular_packages_common_http_http_h]), i0.ɵmpd(4608, i13.XhrFactory, i8.ɵangular_packages_platform_server_platform_server_e, []), i0.ɵmpd(4608, i13.HttpXhrBackend, i13.HttpXhrBackend, [i13.XhrFactory]), i0.ɵmpd(6144, i13.HttpBackend, null, [i13.HttpXhrBackend]), i0.ɵmpd(5120, i13.HttpHandler, i8.ɵangular_packages_platform_server_platform_server_f, [i13.HttpBackend, i0.Injector]), i0.ɵmpd(4608, i13.HttpClient, i13.HttpClient, [i13.HttpHandler]), i0.ɵmpd(4608, i13.ɵangular_packages_common_http_http_d, i13.ɵangular_packages_common_http_http_d, []), i0.ɵmpd(4608, i14.HighlightService, i14.HighlightService, [i0.PLATFORM_ID]), i0.ɵmpd(4608, i15.RouterlessTracking, i15.AngularRouterTracking, [i12.Router, i6.Location]), i0.ɵmpd(4608, i15.Angulartics2, i15.Angulartics2, [i15.RouterlessTracking, i15.ANGULARTICS2_TOKEN]), i0.ɵmpd(4608, i16.AnimationBuilder, i10.ɵBrowserAnimationBuilder, [i0.RendererFactory2, i6.DOCUMENT]), i0.ɵmpd(5120, i8.BEFORE_APP_SERIALIZED, function (p0_0, p0_1, p0_2, p1_0, p1_1) { return [i8.ɵangular_packages_platform_server_platform_server_b(p0_0, p0_1, p0_2), i11.ɵa(p1_0, p1_1)]; }, [i6.DOCUMENT, i0.APP_ID, i7.TransferState, i6.DOCUMENT, i11.JsonLdService]), i0.ɵmpd(1073742336, i6.CommonModule, i6.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i7.ɵangular_packages_platform_browser_platform_browser_a, []), i0.ɵmpd(1024, i0.NgProbeToken, function () { return [i12.ɵangular_packages_router_router_b()]; }, []), i0.ɵmpd(512, i12.ɵangular_packages_router_router_h, i12.ɵangular_packages_router_router_h, [i0.Injector]), i0.ɵmpd(256, i0.APP_ID, "sv", []), i0.ɵmpd(2048, i7.ɵTRANSITION_ID, null, [i0.APP_ID]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p1_0, p2_0, p2_1, p2_2, p3_0) { return [i7.ɵangular_packages_platform_browser_platform_browser_j(p0_0), i12.ɵangular_packages_router_router_i(p1_0), i7.ɵangular_packages_platform_browser_platform_browser_h(p2_0, p2_1, p2_2), i17.initApp(p3_0)]; }, [[2, i0.NgProbeToken], i12.ɵangular_packages_router_router_h, i7.ɵTRANSITION_ID, i6.DOCUMENT, i0.Injector, i18.EnvironmentService]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(1073742336, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(1073742336, i7.BrowserModule, i7.BrowserModule, [[3, i7.BrowserModule]]), i0.ɵmpd(1073742336, i7.BrowserTransferStateModule, i7.BrowserTransferStateModule, []), i0.ɵmpd(1073742336, i11.BrowserJsonLdModule, i11.BrowserJsonLdModule, []), i0.ɵmpd(1024, i12.ɵangular_packages_router_router_a, i12.ɵangular_packages_router_router_e, [[3, i12.Router]]), i0.ɵmpd(512, i12.UrlSerializer, i12.DefaultUrlSerializer, []), i0.ɵmpd(512, i12.ChildrenOutletContexts, i12.ChildrenOutletContexts, []), i0.ɵmpd(256, i12.ROUTER_CONFIGURATION, { initialNavigation: "enabled", scrollPositionRestoration: "enabled", anchorScrolling: "enabled" }, []), i0.ɵmpd(1024, i6.LocationStrategy, i12.ɵangular_packages_router_router_d, [i6.PlatformLocation, [2, i6.APP_BASE_HREF], i12.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i6.Location, i6.Location, [i6.LocationStrategy, i6.PlatformLocation]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i19.ModuleMapNgFactoryLoader, [i0.Compiler, i19.MODULE_MAP]), i0.ɵmpd(1024, i12.ROUTES, function () { return [[{ path: "", loadChildren: "./pages/home/home.module#HomeModule" }, { path: "kwerri", loadChildren: "./pages/kwerri/kwerri.module#KwerriModule" }, { path: "about", loadChildren: "./pages/about/about.module#AboutModule" }, { path: "talks-workshops", loadChildren: "./pages/talks/talks.module#TalksModule" }, { path: "projects", loadChildren: "./pages/projects/projects.module#ProjectsModule" }, { path: "posts", loadChildren: "./pages/posts/posts.module#PostsModule" }, { path: "not-found", component: i20.NotFoundComponent }, { path: "**", redirectTo: "/not-found" }]]; }, []), i0.ɵmpd(1024, i12.Router, i12.ɵangular_packages_router_router_f, [i0.ApplicationRef, i12.UrlSerializer, i12.ChildrenOutletContexts, i6.Location, i0.Injector, i0.NgModuleFactoryLoader, i0.Compiler, i12.ROUTES, i12.ROUTER_CONFIGURATION, [2, i12.UrlHandlingStrategy], [2, i12.RouteReuseStrategy]]), i0.ɵmpd(1073742336, i12.RouterModule, i12.RouterModule, [[2, i12.ɵangular_packages_router_router_a], [2, i12.Router]]), i0.ɵmpd(1073742336, i21.AppRoutingModule, i21.AppRoutingModule, []), i0.ɵmpd(1073742336, i15.Angulartics2OnModule, i15.Angulartics2OnModule, []), i0.ɵmpd(1073742336, i15.Angulartics2Module, i15.Angulartics2Module, []), i0.ɵmpd(1073742336, i13.HttpClientXsrfModule, i13.HttpClientXsrfModule, []), i0.ɵmpd(1073742336, i13.HttpClientModule, i13.HttpClientModule, []), i0.ɵmpd(1073742336, i22.LazyLoadImageModule, i22.LazyLoadImageModule, []), i0.ɵmpd(1073742336, i23.SharedModule, i23.SharedModule, []), i0.ɵmpd(1073742336, i17.AppModule, i17.AppModule, []), i0.ɵmpd(1073742336, i10.NoopAnimationsModule, i10.NoopAnimationsModule, []), i0.ɵmpd(1073742336, i8.ServerModule, i8.ServerModule, []), i0.ɵmpd(1073742336, i19.ModuleMapLoaderModule, i19.ModuleMapLoaderModule, []), i0.ɵmpd(1073742336, i8.ServerTransferStateModule, i8.ServerTransferStateModule, []), i0.ɵmpd(1073742336, i11.ServerJsonLdModule, i11.ServerJsonLdModule, []), i0.ɵmpd(1073742336, i1.AppServerModule, i1.AppServerModule, []), i0.ɵmpd(256, i0.ɵAPP_ROOT, true, []), i0.ɵmpd(256, i13.ɵangular_packages_common_http_http_e, "XSRF-TOKEN", []), i0.ɵmpd(256, i13.ɵangular_packages_common_http_http_f, "X-XSRF-TOKEN", []), i0.ɵmpd(256, i15.ANGULARTICS2_TOKEN, { settings: {} }, []), i0.ɵmpd(256, "options", { isBot: i17.isBot }, []), i0.ɵmpd(256, i10.ANIMATION_MODULE_TYPE, "NoopAnimations", [])]); });
exports.AppServerModuleNgFactory = AppServerModuleNgFactory;


/***/ }),

/***/ "./src/app/app.server.module.ts":
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppServerModule = /** @class */ (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());
exports.AppServerModule = AppServerModule;


/***/ }),

/***/ "./src/app/pages/about/about-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/about/about-routing.module.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var ɵ0 = {
    seo: {
        title: "About Sam - " + environment_1.environment.seo.title,
        description: "I'm a 30 year old software engineer living in Belgium. At the time of writing I'm working as a senior software engineer at the Flemish government. I'm consulting a project where we are building a PWA that allows government officials to track down deficiencies in the public roads and infrastructure of the Flemish region.",
        shareImg: '/assets/share/home.png',
    },
};
exports.ɵ0 = ɵ0;
var AboutRoutingModule = /** @class */ (function () {
    function AboutRoutingModule() {
    }
    return AboutRoutingModule;
}());
exports.AboutRoutingModule = AboutRoutingModule;


/***/ }),

/***/ "./src/app/pages/about/about.component.ngfactory.js":
/*!**********************************************************!*\
  !*** ./src/app/pages/about/about.component.ngfactory.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./about.component.scss.shim.ngstyle */ "./src/app/pages/about/about.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ng-lazyload-image */ "ng-lazyload-image");
var i3 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i4 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i5 = __webpack_require__(/*! ./about.component */ "./src/app/pages/about/about.component.ts");
var styles_AboutComponent = [i0.styles];
var RenderType_AboutComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_AboutComponent, data: {} });
exports.RenderType_AboutComponent = RenderType_AboutComponent;
function View_AboutComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, "h1", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 4, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" 5. Who am I? "])), (_l()(), i1.ɵeld(3, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Just another developer"])), (_l()(), i1.ɵted(-1, null, ["! "])), (_l()(), i1.ɵeld(6, 0, null, null, 7, "p", [["class", "intro"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" I'm a 31 year old software engineer living in Belgium. At the time of writing I'm working as a "])), (_l()(), i1.ɵeld(8, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["senior software engineer"])), (_l()(), i1.ɵted(-1, null, [" at the Flemish government. I'm consulting a project where we are "])), (_l()(), i1.ɵeld(11, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["building a PWA"])), (_l()(), i1.ɵted(-1, null, [" that allows government officials to track down deficiencies in the public roads and infrastructure of the Flemish region.\n"])), (_l()(), i1.ɵeld(14, 0, null, null, 5, "div", [["class", "sidepic right"]], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 2, "a", [["class", "ignoreexternal"], ["href", "https://photos.google.com/share/AF1QipOpnydz8dY6QJdHvklZjL6oKZ7fsOP997hS31_MHk3oxhoc5DQLmovXp__mn4Ksfg?key=VDhDYl9kVXI0LUgzZUdyYVhfM2lPM2JkRlFNZUxn"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 1, "img", [["alt", "NG-BE 2018 group photo"]], null, null, null, null, null)), i1.ɵdid(17, 1720320, null, 0, i2.LazyLoadImageDirective, [i1.ElementRef, i1.NgZone, i1.PLATFORM_ID, [2, "options"]], { lazyImage: [0, "lazyImage"] }, null), (_l()(), i1.ɵeld(18, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["NG-BE core team and speakers, NG-BE 2018."])), (_l()(), i1.ɵeld(20, 0, null, null, 1, "h2", [["id", "education"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Education"])), (_l()(), i1.ɵeld(22, 0, null, null, 7, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" I'm educated as an Engineer in Computer Science at the "])), (_l()(), i1.ɵeld(24, 0, null, null, 1, "a", [["href", "https://www.ugent.be/en"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["University of Ghent"])), (_l()(), i1.ɵted(-1, null, [" but learned my true passion, "])), (_l()(), i1.ɵeld(27, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["frontend web technologies"])), (_l()(), i1.ɵted(-1, null, [", totally in my spare time. I'm playing around with websites since the age of 16 and still love it!\n"])), (_l()(), i1.ɵeld(30, 0, null, null, 10, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Besides that I tried to "])), (_l()(), i1.ɵeld(32, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["understand the business side & the connection with IT "])), (_l()(), i1.ɵted(-1, null, ["a little bit more by attending an "])), (_l()(), i1.ɵeld(35, 0, null, null, 1, "a", [["href", "http://www.antwerpmanagementschool.be/en/program/executive-master-enterprise-it-architecture/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Executive master in Enterprise IT Architecture"])), (_l()(), i1.ɵted(-1, null, [" at "])), (_l()(), i1.ɵeld(38, 0, null, null, 1, "a", [["href", "http://www.antwerpmanagementschool.be/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Antwerp Management School"])), (_l()(), i1.ɵted(-1, null, [". I didn't finish all modules because of changing interest.\n"])), (_l()(), i1.ɵeld(41, 0, null, null, 1, "h2", [["id", "personal"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Personal"])), (_l()(), i1.ɵeld(43, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" As we are building our new home, me, my girlfriend Zo\u00EB and son Millo are currently living with my family in-law in Zoersel, Antwerp. We have got some great company with the coolest dog ever, Beaux-arts (pronounced as \"boshaar\" in Dutch) & the pretty donkeys Kongo, Sissi & Bonapart.\n"])), (_l()(), i1.ɵeld(45, 0, null, null, 5, "div", [["class", "sidepic left"]], null, null, null, null, null)), (_l()(), i1.ɵeld(46, 0, null, null, 2, "a", [["class", "ignoreexternal"], ["href", "https://www.instagram.com/p/BrZ5li6F80y/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(47, 0, null, null, 1, "img", [["alt", "Donkeys Kongo, Sissi & Bonapart"]], null, null, null, null, null)), i1.ɵdid(48, 1720320, null, 0, i2.LazyLoadImageDirective, [i1.ElementRef, i1.NgZone, i1.PLATFORM_ID, [2, "options"]], { lazyImage: [0, "lazyImage"] }, null), (_l()(), i1.ɵeld(49, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Kongo, Sissi & Bonapart, winter of 2018."])), (_l()(), i1.ɵeld(51, 0, null, null, 1, "h2", [["id", "misc"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Miscellaneous"])), (_l()(), i1.ɵeld(53, 0, null, null, 13, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" I'm busy with "])), (_l()(), i1.ɵeld(55, 0, null, null, 2, "a", [["routerLink", "/projects"], ["title", "Check out the cool project I'm involved in!"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 56).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(56, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i4.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["some very cool projects"])), (_l()(), i1.ɵted(-1, null, [" on the side. When I find the time I try do some "])), (_l()(), i1.ɵeld(59, 0, null, null, 2, "a", [["routerLink", "/posts"], ["title", "Writing about the technologies I use!"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 60).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(60, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i4.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["writing about the technologies I use"])), (_l()(), i1.ɵted(-1, null, [" and share those writings in "])), (_l()(), i1.ɵeld(63, 0, null, null, 2, "a", [["routerLink", "/talks-workshops"], ["title", "I love to do talks all over Europe!"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 64).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(64, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i4.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["talks"])), (_l()(), i1.ɵted(-1, null, [" to the public at conferences & meetups all over Europe.\n"])), (_l()(), i1.ɵeld(67, 0, null, null, 1, "h2", [["id", "contact"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Contact"])), (_l()(), i1.ɵeld(69, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Feel free to reach out, to discus exciting new projects, your start-up, technology challenges or just the perks of life :)\n"])), (_l()(), i1.ɵeld(71, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Have a nice day and thanks for visiting my personal space on the evergroing Internet.\n"]))], function (_ck, _v) { var currVal_0 = "assets/images/about/ngbe2018.jpg"; _ck(_v, 17, 0, currVal_0); var currVal_1 = "assets/images/about/donkeys.jpg"; _ck(_v, 48, 0, currVal_1); var currVal_4 = "/projects"; _ck(_v, 56, 0, currVal_4); var currVal_7 = "/posts"; _ck(_v, 60, 0, currVal_7); var currVal_10 = "/talks-workshops"; _ck(_v, 64, 0, currVal_10); }, function (_ck, _v) { var currVal_2 = i1.ɵnov(_v, 56).target; var currVal_3 = i1.ɵnov(_v, 56).href; _ck(_v, 55, 0, currVal_2, currVal_3); var currVal_5 = i1.ɵnov(_v, 60).target; var currVal_6 = i1.ɵnov(_v, 60).href; _ck(_v, 59, 0, currVal_5, currVal_6); var currVal_8 = i1.ɵnov(_v, 64).target; var currVal_9 = i1.ɵnov(_v, 64).href; _ck(_v, 63, 0, currVal_8, currVal_9); }); }
exports.View_AboutComponent_0 = View_AboutComponent_0;
function View_AboutComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "sv-about", [], null, null, null, View_AboutComponent_0, RenderType_AboutComponent)), i1.ɵdid(1, 49152, null, 0, i5.AboutComponent, [], null, null)], null, null); }
exports.View_AboutComponent_Host_0 = View_AboutComponent_Host_0;
var AboutComponentNgFactory = i1.ɵccf("sv-about", i5.AboutComponent, View_AboutComponent_Host_0, {}, {}, []);
exports.AboutComponentNgFactory = AboutComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/about/about.component.scss.shim.ngstyle.js":
/*!******************************************************************!*\
  !*** ./src/app/pages/about/about.component.scss.shim.ngstyle.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["[_nghost-%COMP%] {\n  display: block;\n}\n\n#wide[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW12bG9lYmVyZ2hzL1Byb2plY3RzL0t3ZXJyaS9rd2Vycmktb3NzL3Byb2plY3RzL3NhbXZsb2ViZXJnaHMvc3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3NhbXZsb2ViZXJnaHMvc3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJwcm9qZWN0cy9zYW12bG9lYmVyZ2hzL3NyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jd2lkZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuI3dpZGUge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;


/***/ }),

/***/ "./src/app/pages/about/about.module.ngfactory.js":
/*!*******************************************************!*\
  !*** ./src/app/pages/about/about.module.ngfactory.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./about.module */ "./src/app/pages/about/about.module.ts");
var i2 = __webpack_require__(/*! ../../../../../../node_modules/@angular/router/router.ngfactory */ "../../node_modules/@angular/router/router.ngfactory.js");
var i3 = __webpack_require__(/*! ./about.component.ngfactory */ "./src/app/pages/about/about.component.ngfactory.js");
var i4 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i5 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var i6 = __webpack_require__(/*! ../../shared/highlight.service */ "./src/app/shared/highlight.service.ts");
var i7 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i8 = __webpack_require__(/*! ./about-routing.module */ "./src/app/pages/about/about-routing.module.ts");
var i9 = __webpack_require__(/*! ng-lazyload-image */ "ng-lazyload-image");
var i10 = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var i11 = __webpack_require__(/*! ./about.component */ "./src/app/pages/about/about.component.ts");
var AboutModuleNgFactory = i0.ɵcmf(i1.AboutModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.ɵangular_packages_router_router_lNgFactory, i3.AboutComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i4.NgLocalization, i4.NgLocaleLocalization, [i0.LOCALE_ID, [2, i4.ɵangular_packages_common_common_a]]), i0.ɵmpd(4608, i5.HttpXsrfTokenExtractor, i5.ɵangular_packages_common_http_http_g, [i4.DOCUMENT, i0.PLATFORM_ID, i5.ɵangular_packages_common_http_http_e]), i0.ɵmpd(4608, i5.ɵangular_packages_common_http_http_h, i5.ɵangular_packages_common_http_http_h, [i5.HttpXsrfTokenExtractor, i5.ɵangular_packages_common_http_http_f]), i0.ɵmpd(5120, i5.HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [i5.ɵangular_packages_common_http_http_h]), i0.ɵmpd(4608, i5.ɵangular_packages_common_http_http_d, i5.ɵangular_packages_common_http_http_d, []), i0.ɵmpd(6144, i5.XhrFactory, null, [i5.ɵangular_packages_common_http_http_d]), i0.ɵmpd(4608, i5.HttpXhrBackend, i5.HttpXhrBackend, [i5.XhrFactory]), i0.ɵmpd(6144, i5.HttpBackend, null, [i5.HttpXhrBackend]), i0.ɵmpd(4608, i5.HttpHandler, i5.ɵHttpInterceptingHandler, [i5.HttpBackend, i0.Injector]), i0.ɵmpd(4608, i5.HttpClient, i5.HttpClient, [i5.HttpHandler]), i0.ɵmpd(4608, i6.HighlightService, i6.HighlightService, [i0.PLATFORM_ID]), i0.ɵmpd(1073742336, i4.CommonModule, i4.CommonModule, []), i0.ɵmpd(1073742336, i7.RouterModule, i7.RouterModule, [[2, i7.ɵangular_packages_router_router_a], [2, i7.Router]]), i0.ɵmpd(1073742336, i8.AboutRoutingModule, i8.AboutRoutingModule, []), i0.ɵmpd(1073742336, i5.HttpClientXsrfModule, i5.HttpClientXsrfModule, []), i0.ɵmpd(1073742336, i5.HttpClientModule, i5.HttpClientModule, []), i0.ɵmpd(1073742336, i9.LazyLoadImageModule, i9.LazyLoadImageModule, []), i0.ɵmpd(1073742336, i10.SharedModule, i10.SharedModule, []), i0.ɵmpd(1073742336, i1.AboutModule, i1.AboutModule, []), i0.ɵmpd(1024, i7.ROUTES, function () { return [[{ path: "", component: i11.AboutComponent, data: i8.ɵ0 }]]; }, []), i0.ɵmpd(256, i5.ɵangular_packages_common_http_http_e, "XSRF-TOKEN", []), i0.ɵmpd(256, i5.ɵangular_packages_common_http_http_f, "X-XSRF-TOKEN", [])]); });
exports.AboutModuleNgFactory = AboutModuleNgFactory;


/***/ }),

/***/ "./src/app/pages/about/about.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    return AboutModule;
}());
exports.AboutModule = AboutModule;


/***/ }),

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var ɵ0 = {
    seo: {
        title: environment_1.environment.seo.title,
        description: "Hi there! \uD83D\uDC4B Thank you for visiting my website! I'm a Belgium \uD83C\uDDE7\uD83C\uDDEA based freelance software architect and Internet entrepreneur, currently focusing on frontend technologies.",
        shareImg: '/assets/share/home.png',
    },
};
exports.ɵ0 = ɵ0;
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
exports.HomeRoutingModule = HomeRoutingModule;


/***/ }),

/***/ "./src/app/pages/home/home.component.ngfactory.js":
/*!********************************************************!*\
  !*** ./src/app/pages/home/home.component.ngfactory.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./home.component.scss.shim.ngstyle */ "./src/app/pages/home/home.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");
var i5 = __webpack_require__(/*! ../../shared/data.service */ "./src/app/shared/data.service.ts");
var styles_HomeComponent = [i0.styles];
var RenderType_HomeComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_HomeComponent, data: {} });
exports.RenderType_HomeComponent = RenderType_HomeComponent;
function View_HomeComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 7, "a", [["class", "lastpost"]], [[8, "title", 0], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(1, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(2, 2), (_l()(), i1.ɵeld(3, 0, null, null, 1, "span", [["class", "last"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Latest post: "])), (_l()(), i1.ɵeld(5, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 1, "span", [["class", "post"]], null, null, null, null, null)), (_l()(), i1.ɵted(7, null, ["", ""]))], function (_ck, _v) { var currVal_3 = _ck(_v, 2, 0, "/posts", _v.context.ngIf.slug); _ck(_v, 1, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = _v.context.ngIf.title; var currVal_1 = i1.ɵnov(_v, 1).target; var currVal_2 = i1.ɵnov(_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); var currVal_4 = _v.context.ngIf.img; var currVal_5 = _v.context.ngIf.title; _ck(_v, 5, 0, currVal_4, currVal_5); var currVal_6 = _v.context.ngIf.title; _ck(_v, 7, 0, currVal_6); }); }
function View_HomeComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, "h1", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 4, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" 1. Welcome on my "])), (_l()(), i1.ɵeld(3, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["personal website"])), (_l()(), i1.ɵted(-1, null, ["! "])), (_l()(), i1.ɵeld(6, 0, null, null, 7, "p", [["class", "intro"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Hi there! \uD83D\uDC4B "])), (_l()(), i1.ɵeld(8, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Thank you for visiting my website!"])), (_l()(), i1.ɵted(-1, null, [" Whatever you are looking for, I hope you will find it. If you want to reach out, you can contact me anywhere you'd like. You can find my social media channels right above the main navigation. If you want to say hi via email, write me at "])), (_l()(), i1.ɵeld(11, 0, null, null, 1, "a", [["href", "mailto:[fillinmy.name]@gmail.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["[fillinmy.name]@gmail.com"])), (_l()(), i1.ɵted(-1, null, [".\n"])), (_l()(), i1.ɵand(16777216, null, null, 2, null, View_HomeComponent_1)), i1.ɵdid(15, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), i1.ɵpid(131072, i3.AsyncPipe, [i1.ChangeDetectorRef]), (_l()(), i1.ɵeld(17, 0, null, null, 12, "p", [], null, null, null, null, null)), (_l()(), i1.ɵeld(18, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Dear recruiters & HR professionals"])), (_l()(), i1.ɵted(-1, null, [", please "])), (_l()(), i1.ɵeld(21, 0, null, null, 1, "a", [["href", "https://be.linkedin.com/in/samvloeberghs"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["find my profile on LinkedIn"])), (_l()(), i1.ɵted(-1, null, [" and "])), (_l()(), i1.ɵeld(24, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["always try to contact me via email please."])), (_l()(), i1.ɵted(-1, null, [" You can find my resum\u00E9 at my LinkedIn or "])), (_l()(), i1.ɵeld(27, 0, null, null, 1, "a", [["href", "assets/docs/cv_samvloeberghs_aug2019.pdf"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["you can download it here"])), (_l()(), i1.ɵted(-1, null, [".\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵunv(_v, 15, 0, i1.ɵnov(_v, 16).transform(_co.lastPost$)); _ck(_v, 15, 0, currVal_0); }, null); }
exports.View_HomeComponent_0 = View_HomeComponent_0;
function View_HomeComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "sv-home", [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent)), i1.ɵdid(1, 49152, null, 0, i4.HomeComponent, [i5.DataService], null, null)], null, null); }
exports.View_HomeComponent_Host_0 = View_HomeComponent_Host_0;
var HomeComponentNgFactory = i1.ɵccf("sv-home", i4.HomeComponent, View_HomeComponent_Host_0, {}, {}, []);
exports.HomeComponentNgFactory = HomeComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/home/home.component.scss.shim.ngstyle.js":
/*!****************************************************************!*\
  !*** ./src/app/pages/home/home.component.scss.shim.ngstyle.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["[_nghost-%COMP%] {\n  display: block;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n\nol[_ngcontent-%COMP%] {\n  list-style: none;\n  counter-reset: my-awesome-counter 1;\n  margin-bottom: 20px;\n  padding-bottom: 40px;\n  border-bottom: 1px solid #f6f6f6;\n}\n\nol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  counter-increment: my-awesome-counter;\n  box-sizing: border-box;\n  position: relative;\n  margin-bottom: 10px;\n}\n\nol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\nol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: counter(my-awesome-counter) \"\";\n  color: #888;\n  font-weight: bold;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  font-size: 2.5em;\n}\n\nol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: #f6f6f6;\n  display: block;\n  padding: 10px 40px 10px 10px;\n  border: 1px solid #eee;\n  border-radius: 3px;\n  width: 100%;\n  box-sizing: border-box;\n  text-decoration: none;\n  color: #222;\n  font-size: 1.3em;\n}\n\nol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #e6e6e6;\n  border: 1px solid #ddd;\n}\n\nol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.2em;\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n\n.lastpost[_ngcontent-%COMP%] {\n  color: #222;\n  font-weight: 400;\n  text-decoration: none;\n  background: #f6f6f6;\n  padding: 10px 20px;\n  margin-bottom: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n@media (max-width: 480px) {\n  .lastpost[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n  }\n}\n\n.lastpost[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 30px;\n  height: 30px;\n  min-width: 30px;\n  margin-right: 10px;\n}\n\n.lastpost[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  line-height: 30px;\n  font-size: 20px;\n}\n\n.lastpost[_ngcontent-%COMP%]   .last[_ngcontent-%COMP%] {\n  font-weight: bold;\n  min-width: 120px;\n  padding-right: 20px;\n}\n\n@media (max-width: 480px) {\n  .lastpost[_ngcontent-%COMP%]   .last[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.lastpost[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%] {\n  max-width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW12bG9lYmVyZ2hzL1Byb2plY3RzL0t3ZXJyaS9rd2Vycmktb3NzL3Byb2plY3RzL3NhbXZsb2ViZXJnaHMvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9zYW12bG9lYmVyZ2hzL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7QUNDRjs7QURDRTtFQUNFLHFDQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0k7RUFFSSxnQkFBQTtBQ0FSOztBRElJO0VBQ0UsdUNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNGTjs7QURLSTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQU9BLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDVE47O0FERU07RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0FDQVI7O0FET007RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDTFI7O0FEWUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFRSxtQkFBQTtFQUVGLG9CQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0FDWEY7O0FEY0U7RUFaRjtJQWNNLG1CQUFBO0VDWko7QUFDRjs7QURlRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFFRSxrQkFBQTtBQ2ROOztBRGtCRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ2hCSjs7QURtQkU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBRUUsbUJBQUE7QUNsQk47O0FEcUJJO0VBUEY7SUFRSSxhQUFBO0VDbEJKO0FBQ0Y7O0FEcUJFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ25CSiIsImZpbGUiOiJwcm9qZWN0cy9zYW12bG9lYmVyZ2hzL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5vbCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGNvdW50ZXItcmVzZXQ6IG15LWF3ZXNvbWUtY291bnRlciAxO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNmY2ZjY7XG5cbiAgbGkge1xuICAgIGNvdW50ZXItaW5jcmVtZW50OiBteS1hd2Vzb21lLWNvdW50ZXI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW46IHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBjb3VudGVyKG15LWF3ZXNvbWUtY291bnRlcikgXCJcIjtcbiAgICAgIGNvbG9yOiAjODg4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMTBweDtcbiAgICAgIHRvcDogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgfVxuXG4gICAgYSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwYWRkaW5nOiAxMHB4IDQwcHggMTBweCAxMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICB9XG5cbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiAjMjIyO1xuICAgICAgZm9udC1zaXplOiAxLjNlbTtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxufVxuXG4ubGFzdHBvc3Qge1xuICBjb2xvcjogIzIyMjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG1hcmdpbjoge1xuICAgIGJvdHRvbTogNDBweDtcbiAgfVxuICBkaXNwbGF5OiBmbGV4O1xuXG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgbWFyZ2luOiB7XG4gICAgICBib3R0b206IDMwcHg7XG4gICAgfVxuICB9XG5cbiAgaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbWluLXdpZHRoOiAzMHB4O1xuICAgIG1hcmdpbjoge1xuICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgc3BhbiB7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgLmxhc3Qge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1pbi13aWR0aDogMTIwcHg7XG4gICAgcGFkZGluZzoge1xuICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5wb3N0IHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbm9sIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgY291bnRlci1yZXNldDogbXktYXdlc29tZS1jb3VudGVyIDE7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y2ZjZmNjtcbn1cbm9sIGxpIHtcbiAgY291bnRlci1pbmNyZW1lbnQ6IG15LWF3ZXNvbWUtY291bnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxub2wgbGk6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5vbCBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogY291bnRlcihteS1hd2Vzb21lLWNvdW50ZXIpIFwiXCI7XG4gIGNvbG9yOiAjODg4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDIuNWVtO1xufVxub2wgbGkgYSB7XG4gIGJhY2tncm91bmQ6ICNmNmY2ZjY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDQwcHggMTBweCAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMjIyO1xuICBmb250LXNpemU6IDEuM2VtO1xufVxub2wgbGkgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG59XG5vbCBsaSBhIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5sYXN0cG9zdCB7XG4gIGNvbG9yOiAjMjIyO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmNmY2ZjY7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAubGFzdHBvc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbn1cbi5sYXN0cG9zdCBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubGFzdHBvc3Qgc3BhbiB7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4ubGFzdHBvc3QgLmxhc3Qge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAubGFzdHBvc3QgLmxhc3Qge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5sYXN0cG9zdCAucG9zdCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59Il19 */"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
var data_service_1 = __webpack_require__(/*! ../../shared/data.service */ "./src/app/shared/data.service.ts");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataService) {
        this.dataService = dataService;
        this.lastPost$ = this.dataService
            .getData('/posts/data.json')
            .pipe(operators_1.map(function (response) { return response[0]; }));
    }
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/pages/home/home.module.ngfactory.js":
/*!*****************************************************!*\
  !*** ./src/app/pages/home/home.module.ngfactory.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./home.module */ "./src/app/pages/home/home.module.ts");
var i2 = __webpack_require__(/*! ../../../../../../node_modules/@angular/router/router.ngfactory */ "../../node_modules/@angular/router/router.ngfactory.js");
var i3 = __webpack_require__(/*! ./home.component.ngfactory */ "./src/app/pages/home/home.component.ngfactory.js");
var i4 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i5 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var i6 = __webpack_require__(/*! ../../shared/highlight.service */ "./src/app/shared/highlight.service.ts");
var i7 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i8 = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
var i9 = __webpack_require__(/*! ng-lazyload-image */ "ng-lazyload-image");
var i10 = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var i11 = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");
var HomeModuleNgFactory = i0.ɵcmf(i1.HomeModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.ɵangular_packages_router_router_lNgFactory, i3.HomeComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i4.NgLocalization, i4.NgLocaleLocalization, [i0.LOCALE_ID, [2, i4.ɵangular_packages_common_common_a]]), i0.ɵmpd(4608, i5.HttpXsrfTokenExtractor, i5.ɵangular_packages_common_http_http_g, [i4.DOCUMENT, i0.PLATFORM_ID, i5.ɵangular_packages_common_http_http_e]), i0.ɵmpd(4608, i5.ɵangular_packages_common_http_http_h, i5.ɵangular_packages_common_http_http_h, [i5.HttpXsrfTokenExtractor, i5.ɵangular_packages_common_http_http_f]), i0.ɵmpd(5120, i5.HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [i5.ɵangular_packages_common_http_http_h]), i0.ɵmpd(4608, i5.ɵangular_packages_common_http_http_d, i5.ɵangular_packages_common_http_http_d, []), i0.ɵmpd(6144, i5.XhrFactory, null, [i5.ɵangular_packages_common_http_http_d]), i0.ɵmpd(4608, i5.HttpXhrBackend, i5.HttpXhrBackend, [i5.XhrFactory]), i0.ɵmpd(6144, i5.HttpBackend, null, [i5.HttpXhrBackend]), i0.ɵmpd(4608, i5.HttpHandler, i5.ɵHttpInterceptingHandler, [i5.HttpBackend, i0.Injector]), i0.ɵmpd(4608, i5.HttpClient, i5.HttpClient, [i5.HttpHandler]), i0.ɵmpd(4608, i6.HighlightService, i6.HighlightService, [i0.PLATFORM_ID]), i0.ɵmpd(1073742336, i4.CommonModule, i4.CommonModule, []), i0.ɵmpd(1073742336, i7.RouterModule, i7.RouterModule, [[2, i7.ɵangular_packages_router_router_a], [2, i7.Router]]), i0.ɵmpd(1073742336, i8.HomeRoutingModule, i8.HomeRoutingModule, []), i0.ɵmpd(1073742336, i5.HttpClientXsrfModule, i5.HttpClientXsrfModule, []), i0.ɵmpd(1073742336, i5.HttpClientModule, i5.HttpClientModule, []), i0.ɵmpd(1073742336, i9.LazyLoadImageModule, i9.LazyLoadImageModule, []), i0.ɵmpd(1073742336, i10.SharedModule, i10.SharedModule, []), i0.ɵmpd(1073742336, i1.HomeModule, i1.HomeModule, []), i0.ɵmpd(1024, i7.ROUTES, function () { return [[{ path: "", component: i11.HomeComponent, data: i8.ɵ0 }]]; }, []), i0.ɵmpd(256, i5.ɵangular_packages_common_http_http_e, "XSRF-TOKEN", []), i0.ɵmpd(256, i5.ɵangular_packages_common_http_http_f, "X-XSRF-TOKEN", [])]); });
exports.HomeModuleNgFactory = HomeModuleNgFactory;


/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
exports.HomeModule = HomeModule;


/***/ }),

/***/ "./src/app/pages/kwerri/kwerri-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/kwerri/kwerri-routing.module.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var ɵ0 = {
    seo: {
        title: "Kwerri - " + environment_1.environment.seo.title,
        description: 'Kwerri provides specialised consultancy in web engineering. For me personally, Kwerri acts as my own incubator, allowing me to freelance on different projects + start my own.',
        shareImg: '/assets/share/kwerri.png',
    },
};
exports.ɵ0 = ɵ0;
var KwerriRoutingModule = /** @class */ (function () {
    function KwerriRoutingModule() {
    }
    return KwerriRoutingModule;
}());
exports.KwerriRoutingModule = KwerriRoutingModule;


/***/ }),

/***/ "./src/app/pages/kwerri/kwerri.component.ngfactory.js":
/*!************************************************************!*\
  !*** ./src/app/pages/kwerri/kwerri.component.ngfactory.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./kwerri.component.scss.shim.ngstyle */ "./src/app/pages/kwerri/kwerri.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ng-lazyload-image */ "ng-lazyload-image");
var i5 = __webpack_require__(/*! ./kwerri.component */ "./src/app/pages/kwerri/kwerri.component.ts");
var styles_KwerriComponent = [i0.styles];
var RenderType_KwerriComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_KwerriComponent, data: {} });
exports.RenderType_KwerriComponent = RenderType_KwerriComponent;
function View_KwerriComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 191, "section", [["class", "clearfix"], ["id", "algemene-voorwaarden"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Algemene voorwaarden van KWERRI BV "])), (_l()(), i1.ɵeld(3, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["[Kwerri BV, KBO-0829 035 541, Mechelbaan 72, 2221 Heist-op-den-Berg]"])), (_l()(), i1.ɵeld(5, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Deze voorwaarden zijn van toepassing op alle leveringen door KWERRI BV, tenzij uitdrukkelijk anders vermeld wordt in een schriftelijke overeenkomst."])), (_l()(), i1.ɵeld(7, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Door de ondertekening van een overeenkomst met KWERRI BV, of een bestelbon van KWERRI BV, of door bevestiging van een offerte of bestelling per e-mailbericht, verklaart de opdrachtgever op de hoogte te zijn van deze leveringsvoorwaarden en deze te aanvaarden."])), (_l()(), i1.ɵeld(9, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Deze voorwaarden werden vastgelegd op 1 oktober 2010."])), (_l()(), i1.ɵeld(11, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["1. LEVERINGSVOORWAARDEN KWERRI BV"])), (_l()(), i1.ɵeld(13, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["a) DEFINITIES"])), (_l()(), i1.ɵeld(15, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Website: een samenhangend geheel van digitale internetpagina\u2019s, met inbegrip van eventuele bijbehorende digitale afbeeldingen, scripts en databases."])), (_l()(), i1.ɵeld(17, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Onderhoud van een website: het door KWERRI BV inpassen van nieuwe door de opdrachtgever aangeleverde informatie (teksten, afbeeldingen of data in welke vorm dan ook) in de bestaande website van de opdrachtgever, ofwel het maken van nieuwe of veranderen van bestaande teksten, afbeeldingen of data in welke vorm dan ook, in de bestaande website van de opdrachtgever."])), (_l()(), i1.ɵeld(19, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Opdrachtgever: de natuurlijke of rechtspersoon met wie KWERRI BV een overeenkomst sluit tot het leveren van diensten."])), (_l()(), i1.ɵeld(21, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Webapplicatie of CMS: een samenhangend geheel van digitale internetpagina\u2019s, met inbegrip van eventuele bijhorende afbeeldingen, scripts en databases, waarbij het mogelijk is, na het eventueel inloggen door een gebruiker, inhoud aan te passen op een andere of bijhorende website."])), (_l()(), i1.ɵeld(23, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Webhosting: het systeem of de ruimte waarop de website of webapplicatie of CMS wordt geplaatst en gehost. Dit omvat alle diensten zoals het doorverwijzen van een eventuele domeinnaam en het inloggen via FTP."])), (_l()(), i1.ɵeld(25, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["b) TOEPASSELIJKHEID"])), (_l()(), i1.ɵeld(27, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Door de ondertekening van een overeenkomst met KWERRI BV, of een bestelbon van KWERRI BV, of door bevestiging van een offerte of bestelling per e-mailbericht, verklaart de opdrachtgever op de hoogte te zijn van deze leveringsvoorwaarden en deze te aanvaarden."])), (_l()(), i1.ɵeld(29, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Afwijkingen van de algemene leveringsvoorwaarden is slechts mogelijk wanneer deze ten laatste op het moment van de totstandkoming van de overeenkomst schriftelijk zijn overeengekomen tussen KWERRI BV en de opdrachtgever."])), (_l()(), i1.ɵeld(31, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["c) AANBIEDING EN AANVAARDING"])), (_l()(), i1.ɵeld(33, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Alle offertes en prijsopgaven door KWERRI BV zijn geheel vrijblijvend."])), (_l()(), i1.ɵeld(35, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Offertes en prijsopgave door KWERRI BV blijven 30 dagen geldig, tenzij anders bepaald door KWERRI BV."])), (_l()(), i1.ɵeld(37, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Wijzigingen in de oorspronkelijke overeenkomst tussen de opdrachtgever en KWERRI BV zijn slechts geldig vanaf het moment dat deze wijzigingen in een aanvullende of gewijzigde overeenkomst zijn vastgelegd en door zowel opdrachtgever als KWERRI BV zijn ondertekend."])), (_l()(), i1.ɵeld(39, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Een samengestelde prijsopgave verplicht KWERRI BV niet tot het verrichten van een gedeelte van de opdracht tegen een overeenkomstig deel van de opgegeven prijs."])), (_l()(), i1.ɵeld(41, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Aanbiedingen of offertes zijn slechts geldig met betrekking tot de opdracht waarop ze betrekking hebben en verbinden KWERRI BV niet voor andere en toekomstige opdrachten."])), (_l()(), i1.ɵeld(43, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["De opdrachtgever en KWERRI BV erkennen wederzijds de bewijswaarde in rechte van e-mailberichten."])), (_l()(), i1.ɵeld(45, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["d) UITVOERING VAN DE OVEREENKOMST"])), (_l()(), i1.ɵeld(47, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["KWERRI BV zal de overeenkomst naar best inzicht en vermogen en overeenkomstig de eisen van goed vakmanschap uitvoeren."])), (_l()(), i1.ɵeld(49, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Indien en voor zover een goede uitvoering van de overeenkomst dit vereist, heeft KWERRI BV het recht bepaalde werkzaamheden te laten verrichten door derden."])), (_l()(), i1.ɵeld(51, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["De opdrachtgever draagt er zorg voor dat alle gegevens, waarvan KWERRI BV aangeeft dat deze noodzakelijk zijn of waarvan de opdrachtgever redelijkerwijs behoort te begrijpen dat deze noodzakelijk zijn voor het uitvoeren van de overeenkomst, tijdig en zonder vertraging worden verstrekt aan KWERRI BV."])), (_l()(), i1.ɵeld(53, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Indien de gegevens niet tijdig aan KWERRI BV worden verstrekt, heeft KWERRI BV het recht de uitvoering van de overeenkomst op te schorten en/of de uit de vertraging voortvloeiende extra kosten volgens de gebruikelijke tarieven aan de opdrachtgever in rekening te brengen."])), (_l()(), i1.ɵeld(55, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["KWERRI BV is niet aansprakelijk voor schade, van welke aard ook, als gevolg van het gebruik van door de opdrachtgever verstrekte onjuiste en/of onvolledige gegevens."])), (_l()(), i1.ɵeld(57, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Indien wordt overeengekomen dat de overeenkomst in fasen zal worden uitgevoerd kan KWERRI BV de uitvoering van die onderdelen die tot een volgende fase behoren opschorten tot dat de opdrachtgever de resultaten van de daaraan voorafgaande fase schriftelijk heeft goedgekeurd."])), (_l()(), i1.ɵeld(59, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["De opdrachtgever vrijwaart KWERRI BV voor eventuele aanspraken van derden, die in verband met de uitvoering van de overeenkomst schade zouden lijden die aan de opdrachtgever toerekenbaar is."])), (_l()(), i1.ɵeld(61, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["e) DUUR VAN DE OVEREENKOMST EN BEEINDIGING"])), (_l()(), i1.ɵeld(63, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Tenzij anders overeengekomen tussen de partijen wordt elke opdracht, uitgevoerd door KWERRI BV voor de opdrachtgever, beschouwd als een eenmalige verbintenis."])), (_l()(), i1.ɵeld(65, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Leveringstermijnen en perioden waarbinnen de overeenkomst zal worden uitgevoerd, worden bepaald in de overeenkomst zelf."])), (_l()(), i1.ɵeld(67, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Voor zover dat de overeenkomst tussen de opdrachtgever en KWERRI BV geheel of ten dele een onderhoudshoudscontract inhoudt, worden de modaliteiten hiervan apart vermeld in de overeenkomst zelf."])), (_l()(), i1.ɵeld(69, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["KWERRI BV kan een overeenkomst met de opdrachtgever direct be\u00EBindigen wanneer de opdrachtgever zich niet, onbehoorlijk of onvolledig houdt aan de met KWERRI BV gesloten overeenkomsten inclusief de bijhorende leveringsvoorwaarden."])), (_l()(), i1.ɵeld(71, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["KWERRI BV heeft het recht de overeenkomsten zonder ingebrekestelling of gerechtelijke tussenkomst met onmiddellijke ingang te be\u00EBindigen indien de opdrachtgever in staat van faillissement is verklaard, of beroep doet op de Wet betreffende de continu\u00EFteit van ondernemingen of anderszins het vrije beheer over zijn vermogen heeft verloren. De opdrachtgever heeft alsdan geen recht op enige schadevergoeding."])), (_l()(), i1.ɵeld(73, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["f) LEVERING EN LEVERTIJD"])), (_l()(), i1.ɵeld(75, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["KWERRI BV gaat na ontvangst van de benodigde gegevens, teksten en/of beeldmateriaal zo spoedig mogelijk van start met het aanmaken van de overeengekomen producten en/of diensten en deelt de opdrachtgever de verwachte levertijd mee."])), (_l()(), i1.ɵeld(77, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["De levertijd wordt steeds bij benadering gegeven en is onder meer afhankelijk van het tijdig ter beschikking hebben door KWERRI BV van de nodige gegevens, teksten en/of beeldmateriaal die betrekking hebben op de specifieke opdracht."])), (_l()(), i1.ɵeld(79, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Mocht KWERRI BV onverhoopt niet in staat zijn binnen de overeengekomen levertijd aan zijn verplichtingen te voldoen, kan KWERRI BV alleen schriftelijk in gebreke worden gesteld, waarbij KWERRI BV een termijn van minimaal 21 werkdagen gegund wordt om haar verplichtingen na te komen."])), (_l()(), i1.ɵeld(81, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["g) OVERMACHT"])), (_l()(), i1.ɵeld(83, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["KWERRI BV aanvaardt geen enkele aansprakelijkheid wanneer KWERRI BV als gevolg van overmacht niet aan zijn verplichtingen kan voldoen."])), (_l()(), i1.ɵeld(85, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["In het geval dat de overmacht slechts tijdelijk van aard is, zal KWERRI BV alsnog aan alle verplichtingen trachten te voldoen vanaf het moment dat dit redelijkerwijs weer mogelijk is. Wanneer na onderling overleg tussen de opdrachtgever en KWERRI BV dient vastgesteld te worden wordt dat dit niet meer mogelijk is, zal de overeenkomst in onderling overleg herzien of ontbonden worden. Eventuele reeds geleverde prestaties door KWERRI BV tot aan het moment van overmacht zullen alsnog gefactureerd worden."])), (_l()(), i1.ɵeld(87, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["h) PRIJZEN"])), (_l()(), i1.ɵeld(89, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Alle in de offerte of overeenkomst vermelde prijzen zijn exclusief BTW, tenzij nadrukkelijk anders bepaald."])), (_l()(), i1.ɵeld(91, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Wijzigingen in de tarieven worden door KWERRI BV minimaal 1 maand van tevoren bekendgemaakt aan de opdrachtgever. Laatstgenoemde is gerechtigd de overeenkomst te be\u00EBindigen vanaf het moment dat de aangepaste tarieven van kracht worden."])), (_l()(), i1.ɵeld(93, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["i) BETALING"])), (_l()(), i1.ɵeld(95, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["De vervaltermijn van de door KWERRI BV opgestelde facturen is 30 dagen tenzij schriftelijk anders bepaald tussen de partijen."])), (_l()(), i1.ɵeld(97, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["In het geval dat de overeenkomst geheel of ten dele een onderhoudsovereenkomst uitmaakt, wordt door KWERRI BV aan de opdrachtgever telkenmale aan het begin van de overeengekomen onderhoudsperiode een factuur gestuurd."])), (_l()(), i1.ɵeld(99, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["De opdrachtgever dient binnen 30 dagen na het verzenden van de factuur door KWERRI BV het verschuldigde bedrag te voldoen. De periode van onderhoud en de betalingstermijn hiervan kan in een schriftelijke overeenkomst gewijzigd worden."])), (_l()(), i1.ɵeld(101, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["KWERRI BV behoudt zich het recht voor om eventuele lopende werkzaamheden of geleverde diensten tijdelijk op te schorten, totdat verschuldigde bedragen door de opdrachtgever zijn betaald."])), (_l()(), i1.ɵeld(103, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Vanaf het moment dat de opdrachtgever de betalingstermijn van de respectievelijke facturen overschrijdt, is hij zonder uitdrukkelijke ingebrekestelling in gebreke."])), (_l()(), i1.ɵeld(105, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Vanaf dan gelden de bepalingen van de Wet van 2 augustus 2002 betreffende de bestrijding van de betalingsachterstand bij handelstransacties."])), (_l()(), i1.ɵeld(107, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Opmerkingen met betrekking tot de door KWERRI BV uitgeschreven facturen dienen binnen de 8 dagen na verzending van de factuur door de opdrachtgever aan KWERRI BV worden overgemaakt, met een aangetekend schrijven."])), (_l()(), i1.ɵeld(109, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["De opdrachtgever krijgt het gebruiksrecht op de geleverde goederen en/of diensten slechts vanaf het moment dat hij aan al zijn verplichtingen jegens KWERRI BV heeft voldaan."])), (_l()(), i1.ɵeld(111, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["j) COPYRIGHT"])), (_l()(), i1.ɵeld(113, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Al het door KWERRI BV vervaardigde materiaal en de door KWERRI BV ontworpen websitetoepassingen mogen zonder de uitdrukkelijke toelating van KWERRI BV niet worden bewerkt of verwerkt in andere toepassingen dan deze waarvoor ze oorspronkelijk gemaakt zijn, tenzij anders uitdrukkelijk schriftelijk overeengekomen tussen de partijen."])), (_l()(), i1.ɵeld(115, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["KWERRI BV behoudt het eigendomsrecht van de door KWERRI BV verstrekte idee\u00EBn, concepten of ontwerpen, tenzij uitdrukkelijk schriftelijk anders overeengekomen tussen de partijen. In het laatste geval kan KWERRI BV hiervoor een vergoeding bedingen."])), (_l()(), i1.ɵeld(117, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Bij vastgestelde schending van het copyright is KWERRI BV gerechtigd hiervoor een vergoeding aan de opdrachtgever te rekenen."])), (_l()(), i1.ɵeld(119, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Deze vergoeding zal minimaal 50% van de door KWERRI BV aan de opdrachtgever gefactureerde bedragen voor het desbetreffende project bedragen."])), (_l()(), i1.ɵeld(121, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["KWERRI BV is niet aansprakelijk voor de gevolgen en mogelijke schade bij de opdrachtgever of bij derden als gevolg van het gebruik van de door KERRI BV geleverde producten, toepassingen en programma\u2019s bij vastgestelde miskenning van het vermelde copyright."])), (_l()(), i1.ɵeld(123, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["k) AANSPRAKELIJKHEID"])), (_l()(), i1.ɵeld(125, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["De opdrachtgever geniet enkel een garantie uit hoofde van verborgen gebreken onder de volgende voorwaarden:"])), (_l()(), i1.ɵeld(127, 0, null, null, 4, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(128, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["tijdige en volledige betaling van de prijs"])), (_l()(), i1.ɵeld(130, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["verwittiging per aangetekend schrijven binnen de 24 uur nadat het gebrek werd ontdekt of redelijkerwijze diende gekend te zijn "])), (_l()(), i1.ɵeld(132, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["De garantie beperkt zich naar keuze van KWERRI BV tot de gratis oplossing van het gebrek of de terugbetaling van de prijs daarvan en geldt enkel binnen de eerste 3 maanden na levering."])), (_l()(), i1.ɵeld(134, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["In geen geval is KWERRI BV aansprakelijk voor gevolgschade, van welke aard ook. KWERRI BV is niet verantwoordelijk voor gebreken die het gevolg zijn van een onoordeelkundig gebruik door de opdrachtgever of door derden."])), (_l()(), i1.ɵeld(136, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["De opdrachtgever geniet een garantie uit hoofde van zichtbare gebreken op voorwaarde dat deze binnen de 8 dagen na levering aan KWERRI BV worden gemeld."])), (_l()(), i1.ɵeld(138, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["In geen geval is KWERRI BV aansprakelijk voor onrechtstreekse schade zoals onder meer commerci\u00EBle of financi\u00EBle verliezen, verlies van data, verlies van reputatie, winst of omzetderving, verlies van klanten en verliezen als gevolg van gerechtelijke stappen door derden ondernomen tegen de opdrachtgever."])), (_l()(), i1.ɵeld(140, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["KWERRI BV kan op geen enkele wijze aansprakelijk worden gesteld voor eventuele uitval van de Internet connectie door technische of andere storingen zowel binnen als buiten het netwerk. De opdrachtgever is als enige aansprakelijk voor het behoorlijk gebruik van het product, de dienst, of de software daarbij rekening houdend met de specificaties, de documentatie en de instructies van KWERRI BV."])), (_l()(), i1.ɵeld(142, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["KWERRI BV zal ten opzichte van de opdrachtgever enkel aansprakelijk zijn voor de werkelijk geleden en bewezen schade voortvloeiend uit de in met KWERRI BV gesloten overeenkomsten opgenomen verplichtingen, aldus met uitsluiting van enige andere impliciete of niet-geschreven verplichtingen. De aansprakelijkheid van KWERRI BV volgens of in verband met een met KWERRI BV gesloten overeenkomst zal, per claim of reeks van claims, voortvloeiend uit hetzelfde feit of dezelfde oorzaak, in ieder geval niet groter zijn dan het totaal van de aan de klant gefactureerde en door hem effectief betaalde bedragen voor de koopprijs of terugkerende kosten van de dienstverlening over een periode van drie maanden die aan het voorval voorafgaan en die betrekking hebben op het specifieke project waarmee de claim in verband staat."])), (_l()(), i1.ɵeld(144, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["De opdrachtgever dient er rekening mee te houden dat informatie die via internet verzonden wordt, door derden kan gecapteerd worden. KWERRI BV kan niet aansprakelijk gesteld worden voor schade in welke vorm dan ook veroorzaakt door het verzenden van vertrouwelijke of geheime informatie."])), (_l()(), i1.ɵeld(146, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["KWERRI BV is niet verantwoordelijk of aansprakelijk voor de inhoud van het door de opdrachtgever aangeleverde materiaal dat op de website van de opdrachtgever is aangebracht."])), (_l()(), i1.ɵeld(148, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["De inhoud van de gegevensverspreiding en -publicatie blijft in alle gevallen de eigen verantwoordelijkheid van de opdrachtgever. KWERRI BV wordt niet geacht deze te beperken of erop toe te zien, noch kan KWERRI BV aansprakelijk worden gesteld voor de inhoud van de eigen publicatie. Alle nodige auteursrechten, vergoedingen, onkosten of boetes zijn ten laste van de opdrachtgever."])), (_l()(), i1.ɵeld(150, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["2. ALGEMENE VOORWAARDEN KWERRI BV"])), (_l()(), i1.ɵeld(152, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["De opdrachtgever dient KWERRI BV terstond schriftelijk op de hoogte te stellen van wijzigingen in identiteitsgegevens van de opdrachtgever. Wanneer de opdrachtgever dit nalaat, is laatstgenoemde volledig aansprakelijk voor eventuele hierdoor veroorzaakte, door KWERRI BV geleden schade."])), (_l()(), i1.ɵeld(154, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["a) OVERDRACHT RECHTEN EN PLICHTEN"])), (_l()(), i1.ɵeld(156, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["KWERRI BV noch de opdrachtgever zijn gerechtigd hun rechten of plichten voortvloeiend uit gesloten overeenkomsten over te dragen aan een derde partij zonder voorafgaande schriftelijke toestemming van de wederpartij."])), (_l()(), i1.ɵeld(158, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["b) PROTEST"])), (_l()(), i1.ɵeld(160, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["De opdrachtgever heeft gedurende 8 dagen na levering de gelegenheid duidelijk omschreven gebreken aan de geleverde producten te melden aan KWERRI BV, waarna KWERRI BV deze gebreken zal trachten te verhelpen. Wanneer aan KWERRI BV binnen de genoemde termijn geen gebreken gemeld worden, vervalt elke mogelijkheid tot protest. Door de opdrachtgever verstrekte onjuiste informatie die leidt tot gebreken in het geleverde wordt nadrukkelijk niet verstaan onder gebreken."])), (_l()(), i1.ɵeld(162, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Protest schort de verplichtingen van de opdrachtgever niet op."])), (_l()(), i1.ɵeld(164, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["3) WIJZIGINGEN VOORWAARDEN"])), (_l()(), i1.ɵeld(166, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["KWERRI BV behoudt zich het recht voor deze algemene leveringsvoorwaarden te wijzigen of aan te vullen."])), (_l()(), i1.ɵeld(168, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Wijzigen gelden ook ten aanzien van reeds gesloten overeenkomsten met inachtneming van een termijn van 30 dagen na schriftelijke bekendmaking van de wijzigingen."])), (_l()(), i1.ɵeld(170, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Indien de opdrachtgever niet akkoord gaat met de gewijzigde algemene leveringsvoorwaarden, is hij gerechtigd de overeenkomst te ontbinden met ingang van de wijzigingsdatum van de algemene leveringsvoorwaarden of binnen 7 dagen na de ontvangstdatum van de wijziging van de algemene leveringsvoorwaarden indien deze ontvangstdatum ligt na de ingangsdatum van de wijziging."])), (_l()(), i1.ɵeld(172, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["4) OVERIGE"])), (_l()(), i1.ɵeld(174, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["KWERRI BV zal geen persoonlijke gegevens van de opdrachtgever aan derden verstrekken zonder dat daar een wettelijke plicht voor bestaat. Dit geldt tevens voor eventuele vertrouwelijke informatie die ten behoeve van het uitvoeren van een overeenkomst verstrekt is aan KWERRI BV."])), (_l()(), i1.ɵeld(176, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Wanneer de opdrachtgever verkiest de webhosting van het project door een andere hoster te laten verzorgen, is hij gebonden aan de voorwaarden die deze webhoster stelt."])), (_l()(), i1.ɵeld(178, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Wanneer dit nodig mocht zijn, kunnen wijzigingen in een overeenkomst na schriftelijke bevestiging van beide partijen doorgevoerd worden. Hierdoor kan het overeengekomen tijdstip van oplevering veranderen. KWERRI BV zal de opdrachtgever zo spoedig mogelijk van de nieuwe opleveringsdatum en eventuele financi\u00EBle consequenties op de hoogte stellen."])), (_l()(), i1.ɵeld(180, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["KWERRI BV is vrij om voor promotiedoeleinden als referentie te verwijzen naar de geleverde eindproducten, tenzij nadrukkelijk anders is overeengekomen."])), (_l()(), i1.ɵeld(182, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["5) GESCHILLEN EN TOEPASSELIJK RECHT"])), (_l()(), i1.ɵeld(184, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Indien bij gerechtelijke uitspraak een of meer artikelen van deze voorwaarden ongeldig worden verklaard, zullen overige bepalingen van deze algemene voorwaarden volledig van kracht blijven en zullen KWERRI BV en de opdrachtgever in overleg treden teneinde nieuwe bepalingen ter vervanging van de nietige, dan wel vernietigde bepalingen in acht worden genomen."])), (_l()(), i1.ɵeld(186, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Op alle onder deze voorwaarden gedane aanbiedingen en gesloten overeenkomsten is uitsluitend het Belgisch recht van toepassing."])), (_l()(), i1.ɵeld(188, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Alle geschillen, direct of indirect uit de overeenkomst voortvloeiend of daarmee verband houdend, kunnen uitsluitend bij de bevoegde rechtbank van het Arrondissement Mechelen of de Vrederechter van het Kanton Heist-op-den-Berg aanhangig worden gemaakt."])), (_l()(), i1.ɵeld(190, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Met deze voorwaarden zijn alle voorafgaande exemplaren vervallen. Deze voorwaarden zijn gepubliceerd op de website van KWERRI BV op 1 oktober 2010"]))], null, null); }
function View_KwerriComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, "h1", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 4, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" 6. I operate under "])), (_l()(), i1.ɵeld(3, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Kwerri"])), (_l()(), i1.ɵted(-1, null, [", my freelancing company! "])), (_l()(), i1.ɵeld(6, 0, null, null, 11, "p", [["class", "intro"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Kwerri provides "])), (_l()(), i1.ɵeld(8, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["specialised consultancy in web engineering"])), (_l()(), i1.ɵted(-1, null, [". For me personally, Kwerri acts as my own incubator, allowing me to freelance on different projects + "])), (_l()(), i1.ɵeld(11, 0, null, null, 5, "a", [["routerLink", "/projects"], ["routerLinkActive", "active"], ["title", "Projects I'm involved in"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 12).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(12, 671744, [[2, 4]], 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵdid(13, 1720320, null, 2, i2.RouterLinkActive, [i2.Router, i1.ElementRef, i1.Renderer2, [2, i2.RouterLink], [2, i2.RouterLinkWithHref]], { routerLinkActive: [0, "routerLinkActive"] }, null), i1.ɵqud(603979776, 1, { links: 1 }), i1.ɵqud(603979776, 2, { linksWithHrefs: 1 }), (_l()(), i1.ɵted(-1, null, ["start my own"])), (_l()(), i1.ɵted(-1, null, [".\n"])), (_l()(), i1.ɵeld(18, 0, null, null, 0, "img", [["alt", "Kwerri logo"], ["id", "kwerri"], ["src", "data:image/png;base64,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"]], null, null, null, null, null)), (_l()(), i1.ɵeld(19, 0, null, null, 24, "table", [], null, null, null, null, null)), (_l()(), i1.ɵeld(20, 0, null, null, 23, "tr", [], null, null, null, null, null)), (_l()(), i1.ɵeld(21, 0, null, null, 9, "td", [], null, null, null, null, null)), (_l()(), i1.ɵeld(22, 0, null, null, 8, "p", [], null, null, null, null, null)), (_l()(), i1.ɵeld(23, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Kwerri BV"])), (_l()(), i1.ɵeld(25, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Mechelbaan 72"])), (_l()(), i1.ɵeld(27, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" 2221 Booischot"])), (_l()(), i1.ɵeld(29, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Belgium "])), (_l()(), i1.ɵeld(31, 0, null, null, 12, "td", [], null, null, null, null, null)), (_l()(), i1.ɵeld(32, 0, null, null, 11, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" V.A.T.: BE 0829 035 541"])), (_l()(), i1.ɵeld(34, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" R.P.R. Antwerpen, Mechelen"])), (_l()(), i1.ɵeld(36, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" (t) "])), (_l()(), i1.ɵeld(38, 0, null, null, 1, "a", [["href", "tel:+32494594460"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["+32 494 594460"])), (_l()(), i1.ɵeld(40, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" (e) "])), (_l()(), i1.ɵeld(42, 0, null, null, 1, "a", [["href", "mailto:info@kwerri.be"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["sam@kwerri.be"])), (_l()(), i1.ɵeld(44, 0, null, null, 1, "h2", [["id", "clients-partners"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Happy clients and partners"])), (_l()(), i1.ɵeld(46, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" We've worked with some very nice clients and partners in the past. With most we still do! Kwerri and it's official partners are keen on "])), (_l()(), i1.ɵeld(48, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["creating long-term beneficial and win-win relationships"])), (_l()(), i1.ɵted(-1, null, [".\n"])), (_l()(), i1.ɵeld(51, 0, null, null, 36, "ul", [["class", "clients"]], null, null, null, null, null)), (_l()(), i1.ɵeld(52, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(53, 0, null, null, 2, "a", [["class", "ignoreexternal"], ["href", "https://www.ordina.be/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(54, 0, null, null, 1, "img", [["alt", "Ordina"], ["title", "Ordina"]], null, null, null, null, null)), i1.ɵdid(55, 1720320, null, 0, i4.LazyLoadImageDirective, [i1.ElementRef, i1.NgZone, i1.PLATFORM_ID, [2, "options"]], { lazyImage: [0, "lazyImage"] }, null), (_l()(), i1.ɵeld(56, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(57, 0, null, null, 2, "a", [["class", "ignoreexternal"], ["href", "https://www.arhs-group.com/entities/digital/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(58, 0, null, null, 1, "img", [["alt", "ARHS Digital"], ["title", "ARHS Digital"]], null, null, null, null, null)), i1.ɵdid(59, 1720320, null, 0, i4.LazyLoadImageDirective, [i1.ElementRef, i1.NgZone, i1.PLATFORM_ID, [2, "options"]], { lazyImage: [0, "lazyImage"] }, null), (_l()(), i1.ɵeld(60, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(61, 0, null, null, 2, "a", [["class", "ignoreexternal"], ["href", "https://proximus.be"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(62, 0, null, null, 1, "img", [["alt", "Proximus"], ["title", "Proximus"]], null, null, null, null, null)), i1.ɵdid(63, 1720320, null, 0, i4.LazyLoadImageDirective, [i1.ElementRef, i1.NgZone, i1.PLATFORM_ID, [2, "options"]], { lazyImage: [0, "lazyImage"] }, null), (_l()(), i1.ɵeld(64, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(65, 0, null, null, 2, "a", [["class", "ignoreexternal"], ["href", "https://immoweb.be"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(66, 0, null, null, 1, "img", [["alt", "Immoweb"], ["title", "Immoweb"]], null, null, null, null, null)), i1.ɵdid(67, 1720320, null, 0, i4.LazyLoadImageDirective, [i1.ElementRef, i1.NgZone, i1.PLATFORM_ID, [2, "options"]], { lazyImage: [0, "lazyImage"] }, null), (_l()(), i1.ɵeld(68, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(69, 0, null, null, 2, "a", [["class", "ignoreexternal"], ["href", "https://www.vlaanderen.be/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(70, 0, null, null, 1, "img", [["alt", "Vlaamse Overheid"], ["title", "Vlaamse Overheid"]], null, null, null, null, null)), i1.ɵdid(71, 1720320, null, 0, i4.LazyLoadImageDirective, [i1.ElementRef, i1.NgZone, i1.PLATFORM_ID, [2, "options"]], { lazyImage: [0, "lazyImage"] }, null), (_l()(), i1.ɵeld(72, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(73, 0, null, null, 2, "a", [["class", "ignoreexternal"], ["href", "https://hackages.io"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(74, 0, null, null, 1, "img", [["alt", "Hackages"], ["title", "Hackages"]], null, null, null, null, null)), i1.ɵdid(75, 1720320, null, 0, i4.LazyLoadImageDirective, [i1.ElementRef, i1.NgZone, i1.PLATFORM_ID, [2, "options"]], { lazyImage: [0, "lazyImage"] }, null), (_l()(), i1.ɵeld(76, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(77, 0, null, null, 2, "a", [["class", "ignoreexternal"], ["href", "https://www.juvo.be/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(78, 0, null, null, 1, "img", [["alt", "Juvo"], ["title", "Juvo"]], null, null, null, null, null)), i1.ɵdid(79, 1720320, null, 0, i4.LazyLoadImageDirective, [i1.ElementRef, i1.NgZone, i1.PLATFORM_ID, [2, "options"]], { lazyImage: [0, "lazyImage"] }, null), (_l()(), i1.ɵeld(80, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(81, 0, null, null, 2, "a", [["class", "ignoreexternal"], ["href", "http://www.ideeds.be/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(82, 0, null, null, 1, "img", [["alt", "ideeds"], ["title", "ideeds"]], null, null, null, null, null)), i1.ɵdid(83, 1720320, null, 0, i4.LazyLoadImageDirective, [i1.ElementRef, i1.NgZone, i1.PLATFORM_ID, [2, "options"]], { lazyImage: [0, "lazyImage"] }, null), (_l()(), i1.ɵeld(84, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(85, 0, null, null, 2, "a", [["class", "ignoreexternal"], ["href", "http://www.vink.be"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(86, 0, null, null, 1, "img", [["alt", "Vink"], ["title", "Vink"]], null, null, null, null, null)), i1.ɵdid(87, 1720320, null, 0, i4.LazyLoadImageDirective, [i1.ElementRef, i1.NgZone, i1.PLATFORM_ID, [2, "options"]], { lazyImage: [0, "lazyImage"] }, null), (_l()(), i1.ɵeld(88, 0, null, null, 1, "h2", [["id", "legal-general-conditions"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Legal & general conditions"])), (_l()(), i1.ɵeld(90, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), i1.ɵeld(91, 0, null, null, 1, "a", [["href", "#"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.toggleGeneralConditionsShown($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["Show the general conditions (nl) / Toon de algemene voorwaarden"])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_KwerriComponent_1)), i1.ɵdid(94, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = "/projects"; _ck(_v, 12, 0, currVal_2); var currVal_3 = "active"; _ck(_v, 13, 0, currVal_3); var currVal_4 = "assets/images/clients/ordina.png"; _ck(_v, 55, 0, currVal_4); var currVal_5 = "assets/images/clients/arhs-digital.png"; _ck(_v, 59, 0, currVal_5); var currVal_6 = "assets/images/clients/proximus.jpg"; _ck(_v, 63, 0, currVal_6); var currVal_7 = "assets/images/clients/immoweb.jpg"; _ck(_v, 67, 0, currVal_7); var currVal_8 = "assets/images/clients/vo.png"; _ck(_v, 71, 0, currVal_8); var currVal_9 = "assets/images/clients/hackages.png"; _ck(_v, 75, 0, currVal_9); var currVal_10 = "assets/images/clients/juvo.png"; _ck(_v, 79, 0, currVal_10); var currVal_11 = "assets/images/clients/ideeds.png"; _ck(_v, 83, 0, currVal_11); var currVal_12 = "assets/images/clients/vink.png"; _ck(_v, 87, 0, currVal_12); var currVal_13 = _co.generalConditionsShown; _ck(_v, 94, 0, currVal_13); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 12).target; var currVal_1 = i1.ɵnov(_v, 12).href; _ck(_v, 11, 0, currVal_0, currVal_1); }); }
exports.View_KwerriComponent_0 = View_KwerriComponent_0;
function View_KwerriComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "sv-kwerri", [], null, null, null, View_KwerriComponent_0, RenderType_KwerriComponent)), i1.ɵdid(1, 49152, null, 0, i5.KwerriComponent, [], null, null)], null, null); }
exports.View_KwerriComponent_Host_0 = View_KwerriComponent_Host_0;
var KwerriComponentNgFactory = i1.ɵccf("sv-kwerri", i5.KwerriComponent, View_KwerriComponent_Host_0, {}, {}, []);
exports.KwerriComponentNgFactory = KwerriComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/kwerri/kwerri.component.scss.shim.ngstyle.js":
/*!********************************************************************!*\
  !*** ./src/app/pages/kwerri/kwerri.component.scss.shim.ngstyle.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["[_nghost-%COMP%] {\n  display: block;\n}\n\nimg#kwerri[_ngcontent-%COMP%] {\n  display: block;\n  float: left;\n  max-width: 200px;\n  margin-bottom: 25px;\n  margin-right: 50px;\n  border: 15px solid #f6f6f6;\n  padding: 15px;\n}\n\n@media (max-width: 1249px) {\n  img#kwerri[_ngcontent-%COMP%] {\n    max-width: none;\n    float: none;\n    margin-bottom: 25px;\n    margin-right: 0;\n  }\n}\n\n@media (max-width: 640px) {\n  img#kwerri[_ngcontent-%COMP%] {\n    width: calc(100% - 60px);\n    margin-bottom: 50px;\n    margin-right: 0;\n    margin-left: 0;\n  }\n}\n\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding-right: 50px;\n}\n\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  padding-right: 0px;\n}\n\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.clients[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 25px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.clients[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0;\n  width: calc(1 / 3 * 100%);\n}\n\n@media (min-width: 1300px) {\n  .clients[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: calc(1 / 5 * 100%);\n  }\n}\n\n.clients[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  width: calc(100% - 50px);\n}\n\n@media (max-width: 480px) {\n  table[_ngcontent-%COMP%] {\n    display: block;\n  }\n  table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n    display: block;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n    display: block;\n    padding: 0;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0;\n  }\n}\n\n#algemene-voorwaarden[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n\n#algemene-voorwaarden[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  font-size: 1.8em;\n}\n\n#algemene-voorwaarden[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-size: 1.6em;\n}\n\n#algemene-voorwaarden[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 1.4em;\n}\n\n#algemene-voorwaarden[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  font-size: 1.2em;\n}\n\n#algemene-voorwaarden[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n\n#algemene-voorwaarden[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], #algemene-voorwaarden[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  font-size: 1em;\n  margin-bottom: 10px;\n}\n\n#algemene-voorwaarden[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], #algemene-voorwaarden[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW12bG9lYmVyZ2hzL1Byb2plY3RzL0t3ZXJyaS9rd2Vycmktb3NzL3Byb2plY3RzL3NhbXZsb2ViZXJnaHMvc3JjL2FwcC9wYWdlcy9rd2Vycmkva3dlcnJpLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvc2FtdmxvZWJlcmdocy9zcmMvYXBwL3BhZ2VzL2t3ZXJyaS9rd2VycmkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBRUUsbUJBQUE7RUFDQSxrQkFBQTtFQUVGLDBCQUFBO0VBQ0EsYUFBQTtBQ0RGOztBREdFO0VBWEY7SUFZSSxlQUFBO0lBQ0EsV0FBQTtJQUVFLG1CQUFBO0lBQ0EsZUFBQTtFQ0RKO0FBQ0Y7O0FESUU7RUFwQkY7SUFxQkksd0JBQUE7SUFFRSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0VDRko7QUFDRjs7QURRSTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUNMTjs7QURPTTtFQUNFLGtCQUFBO0FDTFI7O0FEUU07RUFDRSxnQkFBQTtBQ05SOztBRFlBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO01BQUEsdUJBQUE7VUFBQSxtQkFBQTtFQUNBLG1CQUFBO01BQUEsZUFBQTtFQUNBLHlCQUFBO01BQUEsc0JBQUE7VUFBQSw4QkFBQTtBQ1RGOztBRFdFO0VBQ0UsU0FBQTtFQUNBLHlCQUFBO0FDVEo7O0FEVUk7RUFIRjtJQUlJLHlCQUFBO0VDUEo7QUFDRjs7QURTSTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7QUNQTjs7QURhQTtFQUNFO0lBQ0UsY0FBQTtFQ1ZGO0VEWUU7SUFDRSxjQUFBO0VDVko7RURhRTtJQUNFLGNBQUE7RUNYSjtFRGFJO0lBQ0UsbUJBQUE7SUFDQSxjQUFBO0lBQ0EsVUFBQTtFQ1hOO0VEYU07SUFDRSxnQkFBQTtFQ1hSO0FBQ0Y7O0FEaUJBO0VBRUksZ0JBQUE7QUNoQko7O0FEbUJFO0VBRUksbUJBQUE7RUFHQSxnQkFBQTtBQ3BCTjs7QUR3QkU7RUFFSSxtQkFBQTtFQUdBLGdCQUFBO0FDekJOOztBRDZCRTtFQUVJLG1CQUFBO0VBR0EsZ0JBQUE7QUM5Qk47O0FEa0NFO0VBRUksa0JBQUE7RUFHQSxnQkFBQTtBQ25DTjs7QUR1Q0U7RUFFSSxjQUFBO0FDdENOOztBRDBDRTtFQUVJLGNBQUE7RUFFRixtQkFBQTtBQzFDSjs7QUQ0Q0k7RUFFSSxjQUFBO0VBRUYsa0JBQUE7QUM1Q04iLCJmaWxlIjoicHJvamVjdHMvc2FtdmxvZWJlcmdocy9zcmMvYXBwL3BhZ2VzL2t3ZXJyaS9rd2VycmkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pbWcja3dlcnJpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IHtcbiAgICBib3R0b206IDI1cHg7XG4gICAgcmlnaHQ6IDUwcHg7XG4gIH1cbiAgYm9yZGVyOiAxNXB4IHNvbGlkICNmNmY2ZjY7XG4gIHBhZGRpbmc6IDE1cHg7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyNDlweCkge1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgICBmbG9hdDogbm9uZTtcbiAgICBtYXJnaW46IHtcbiAgICAgIGJvdHRvbTogMjVweDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcbiAgICBtYXJnaW46IHtcbiAgICAgIGJvdHRvbTogNTBweDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgbGVmdDogMDtcbiAgICB9XG4gIH1cbn1cblxudGFibGUge1xuICB0ciB7XG4gICAgdGQge1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5jbGllbnRzIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAyNXB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIGxpIHtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lkdGg6IGNhbGMoMSAvIDMgKiAxMDAlKTtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTMwMHB4KSB7XG4gICAgICB3aWR0aDogY2FsYygxIC8gNSAqIDEwMCUpO1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xuICAgIH1cbiAgfVxuXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICB0YWJsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICB0Ym9keSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICB0ciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgdGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuI2FsZ2VtZW5lLXZvb3J3YWFyZGVuIHtcbiAgbWFyZ2luOiB7XG4gICAgdG9wOiA0MHB4O1xuICB9XG5cbiAgaDEge1xuICAgIG1hcmdpbjoge1xuICAgICAgYm90dG9tOiAyMHB4O1xuICAgIH1cbiAgICBmb250OiB7XG4gICAgICBzaXplOiAxLjhlbTtcbiAgICB9XG4gIH1cblxuICBoMiB7XG4gICAgbWFyZ2luOiB7XG4gICAgICBib3R0b206IDE1cHg7XG4gICAgfVxuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IDEuNmVtO1xuICAgIH1cbiAgfVxuXG4gIGgzIHtcbiAgICBtYXJnaW46IHtcbiAgICAgIGJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogMS40ZW07XG4gICAgfVxuICB9XG5cbiAgaDQge1xuICAgIG1hcmdpbjoge1xuICAgICAgYm90dG9tOiA1cHg7XG4gICAgfVxuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IDEuMmVtO1xuICAgIH1cbiAgfVxuXG4gIHAge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IDFlbTtcbiAgICB9XG4gIH1cblxuICB1bCwgb2wge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IDFlbTtcbiAgICB9XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgIGxpIHtcbiAgICAgIGZvbnQ6IHtcbiAgICAgICAgc2l6ZTogMWVtO1xuICAgICAgfVxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW1nI2t3ZXJyaSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICBib3JkZXI6IDE1cHggc29saWQgI2Y2ZjZmNjtcbiAgcGFkZGluZzogMTVweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjQ5cHgpIHtcbiAgaW1nI2t3ZXJyaSB7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICAgIGZsb2F0OiBub25lO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgaW1nI2t3ZXJyaSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59XG5cbnRhYmxlIHRyIHRkIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcGFkZGluZy1yaWdodDogNTBweDtcbn1cbnRhYmxlIHRyIHRkOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG50YWJsZSB0ciB0ZCBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmNsaWVudHMge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDI1cHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY2xpZW50cyBsaSB7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IGNhbGMoMSAvIDMgKiAxMDAlKTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMzAwcHgpIHtcbiAgLmNsaWVudHMgbGkge1xuICAgIHdpZHRoOiBjYWxjKDEgLyA1ICogMTAwJSk7XG4gIH1cbn1cbi5jbGllbnRzIGxpIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgdGFibGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIHRhYmxlIHRib2R5IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICB0YWJsZSB0ciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgdGFibGUgdHIgdGQge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICB0YWJsZSB0ciB0ZDpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG59XG4jYWxnZW1lbmUtdm9vcndhYXJkZW4ge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuI2FsZ2VtZW5lLXZvb3J3YWFyZGVuIGgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1zaXplOiAxLjhlbTtcbn1cbiNhbGdlbWVuZS12b29yd2FhcmRlbiBoMiB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtc2l6ZTogMS42ZW07XG59XG4jYWxnZW1lbmUtdm9vcndhYXJkZW4gaDMge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDEuNGVtO1xufVxuI2FsZ2VtZW5lLXZvb3J3YWFyZGVuIGg0IHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuI2FsZ2VtZW5lLXZvb3J3YWFyZGVuIHAge1xuICBmb250LXNpemU6IDFlbTtcbn1cbiNhbGdlbWVuZS12b29yd2FhcmRlbiB1bCwgI2FsZ2VtZW5lLXZvb3J3YWFyZGVuIG9sIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4jYWxnZW1lbmUtdm9vcndhYXJkZW4gdWwgbGksICNhbGdlbWVuZS12b29yd2FhcmRlbiBvbCBsaSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59Il19 */"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/pages/kwerri/kwerri.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/kwerri/kwerri.component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var KwerriComponent = /** @class */ (function () {
    function KwerriComponent() {
        this.generalConditionsShown = false;
    }
    KwerriComponent.prototype.toggleGeneralConditionsShown = function ($event) {
        $event.preventDefault();
        this.generalConditionsShown = !this.generalConditionsShown;
    };
    return KwerriComponent;
}());
exports.KwerriComponent = KwerriComponent;


/***/ }),

/***/ "./src/app/pages/kwerri/kwerri.module.ngfactory.js":
/*!*********************************************************!*\
  !*** ./src/app/pages/kwerri/kwerri.module.ngfactory.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./kwerri.module */ "./src/app/pages/kwerri/kwerri.module.ts");
var i2 = __webpack_require__(/*! ../../../../../../node_modules/@angular/router/router.ngfactory */ "../../node_modules/@angular/router/router.ngfactory.js");
var i3 = __webpack_require__(/*! ./kwerri.component.ngfactory */ "./src/app/pages/kwerri/kwerri.component.ngfactory.js");
var i4 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i5 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var i6 = __webpack_require__(/*! ../../shared/highlight.service */ "./src/app/shared/highlight.service.ts");
var i7 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i8 = __webpack_require__(/*! ./kwerri-routing.module */ "./src/app/pages/kwerri/kwerri-routing.module.ts");
var i9 = __webpack_require__(/*! ng-lazyload-image */ "ng-lazyload-image");
var i10 = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var i11 = __webpack_require__(/*! ./kwerri.component */ "./src/app/pages/kwerri/kwerri.component.ts");
var KwerriModuleNgFactory = i0.ɵcmf(i1.KwerriModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.ɵangular_packages_router_router_lNgFactory, i3.KwerriComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i4.NgLocalization, i4.NgLocaleLocalization, [i0.LOCALE_ID, [2, i4.ɵangular_packages_common_common_a]]), i0.ɵmpd(4608, i5.HttpXsrfTokenExtractor, i5.ɵangular_packages_common_http_http_g, [i4.DOCUMENT, i0.PLATFORM_ID, i5.ɵangular_packages_common_http_http_e]), i0.ɵmpd(4608, i5.ɵangular_packages_common_http_http_h, i5.ɵangular_packages_common_http_http_h, [i5.HttpXsrfTokenExtractor, i5.ɵangular_packages_common_http_http_f]), i0.ɵmpd(5120, i5.HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [i5.ɵangular_packages_common_http_http_h]), i0.ɵmpd(4608, i5.ɵangular_packages_common_http_http_d, i5.ɵangular_packages_common_http_http_d, []), i0.ɵmpd(6144, i5.XhrFactory, null, [i5.ɵangular_packages_common_http_http_d]), i0.ɵmpd(4608, i5.HttpXhrBackend, i5.HttpXhrBackend, [i5.XhrFactory]), i0.ɵmpd(6144, i5.HttpBackend, null, [i5.HttpXhrBackend]), i0.ɵmpd(4608, i5.HttpHandler, i5.ɵHttpInterceptingHandler, [i5.HttpBackend, i0.Injector]), i0.ɵmpd(4608, i5.HttpClient, i5.HttpClient, [i5.HttpHandler]), i0.ɵmpd(4608, i6.HighlightService, i6.HighlightService, [i0.PLATFORM_ID]), i0.ɵmpd(1073742336, i4.CommonModule, i4.CommonModule, []), i0.ɵmpd(1073742336, i7.RouterModule, i7.RouterModule, [[2, i7.ɵangular_packages_router_router_a], [2, i7.Router]]), i0.ɵmpd(1073742336, i8.KwerriRoutingModule, i8.KwerriRoutingModule, []), i0.ɵmpd(1073742336, i5.HttpClientXsrfModule, i5.HttpClientXsrfModule, []), i0.ɵmpd(1073742336, i5.HttpClientModule, i5.HttpClientModule, []), i0.ɵmpd(1073742336, i9.LazyLoadImageModule, i9.LazyLoadImageModule, []), i0.ɵmpd(1073742336, i10.SharedModule, i10.SharedModule, []), i0.ɵmpd(1073742336, i1.KwerriModule, i1.KwerriModule, []), i0.ɵmpd(1024, i7.ROUTES, function () { return [[{ path: "", component: i11.KwerriComponent, data: i8.ɵ0 }]]; }, []), i0.ɵmpd(256, i5.ɵangular_packages_common_http_http_e, "XSRF-TOKEN", []), i0.ɵmpd(256, i5.ɵangular_packages_common_http_http_f, "X-XSRF-TOKEN", [])]); });
exports.KwerriModuleNgFactory = KwerriModuleNgFactory;


/***/ }),

/***/ "./src/app/pages/kwerri/kwerri.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/kwerri/kwerri.module.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var KwerriModule = /** @class */ (function () {
    function KwerriModule() {
    }
    return KwerriModule;
}());
exports.KwerriModule = KwerriModule;


/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.ngfactory.js":
/*!******************************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ngfactory.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./not-found.component.scss.shim.ngstyle */ "./src/app/pages/not-found/not-found.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ng-lazyload-image */ "ng-lazyload-image");
var i3 = __webpack_require__(/*! ./not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
var styles_NotFoundComponent = [i0.styles];
var RenderType_NotFoundComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_NotFoundComponent, data: {} });
exports.RenderType_NotFoundComponent = RenderType_NotFoundComponent;
function View_NotFoundComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, "h1", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" 404. Not found! "])), (_l()(), i1.ɵeld(3, 0, null, null, 4, "p", [["class", "intro"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Nothing to see here, unfortunately.. But please use the main navigation to find your way or "])), (_l()(), i1.ɵeld(5, 0, null, null, 1, "a", [["href", "/"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["go home here"])), (_l()(), i1.ɵted(-1, null, ["!\n"])), (_l()(), i1.ɵeld(8, 0, null, null, 1, "img", [["alt", "Not found GIF"]], null, null, null, null, null)), i1.ɵdid(9, 1720320, null, 0, i2.LazyLoadImageDirective, [i1.ElementRef, i1.NgZone, i1.PLATFORM_ID, [2, "options"]], { lazyImage: [0, "lazyImage"] }, null)], function (_ck, _v) { var currVal_0 = "https://media.giphy.com/media/9J7tdYltWyXIY/giphy.gif"; _ck(_v, 9, 0, currVal_0); }, null); }
exports.View_NotFoundComponent_0 = View_NotFoundComponent_0;
function View_NotFoundComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "sv-not-found", [], null, null, null, View_NotFoundComponent_0, RenderType_NotFoundComponent)), i1.ɵdid(1, 114688, null, 0, i3.NotFoundComponent, [i1.PLATFORM_ID, i1.Injector], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_NotFoundComponent_Host_0 = View_NotFoundComponent_Host_0;
var NotFoundComponentNgFactory = i1.ɵccf("sv-not-found", i3.NotFoundComponent, View_NotFoundComponent_Host_0, {}, {}, []);
exports.NotFoundComponentNgFactory = NotFoundComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.scss.shim.ngstyle.js":
/*!**************************************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.scss.shim.ngstyle.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["[_nghost-%COMP%] {\n  display: block;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW12bG9lYmVyZ2hzL1Byb2plY3RzL0t3ZXJyaS9rd2Vycmktb3NzL3Byb2plY3RzL3NhbXZsb2ViZXJnaHMvc3JjL2FwcC9wYWdlcy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvc2FtdmxvZWJlcmdocy9zcmMvYXBwL3BhZ2VzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InByb2plY3RzL3NhbXZsb2ViZXJnaHMvc3JjL2FwcC9wYWdlcy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var tokens_1 = __webpack_require__(/*! @nguniversal/express-engine/tokens */ "@nguniversal/express-engine/tokens");
var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(platformId, injector) {
        this.platformId = platformId;
        this.injector = injector;
    }
    NotFoundComponent.prototype.ngOnInit = function () {
        if (!common_1.isPlatformBrowser(this.platformId)) {
            var response = this.injector.get(tokens_1.RESPONSE);
            response.status(404);
        }
    };
    return NotFoundComponent;
}());
exports.NotFoundComponent = NotFoundComponent;


/***/ }),

/***/ "./src/app/pages/posts/image-zoom/image-zoom.component.ngfactory.js":
/*!**************************************************************************!*\
  !*** ./src/app/pages/posts/image-zoom/image-zoom.component.ngfactory.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./image-zoom.component.scss.shim.ngstyle */ "./src/app/pages/posts/image-zoom/image-zoom.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ./image-zoom.component */ "./src/app/pages/posts/image-zoom/image-zoom.component.ts");
var styles_ImageZoomComponent = [i0.styles];
var RenderType_ImageZoomComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_ImageZoomComponent, data: {} });
exports.RenderType_ImageZoomComponent = RenderType_ImageZoomComponent;
function View_ImageZoomComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "div", [["class", "wrapper"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 3, "div", [["class", "wrapper-inner"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "a", [["class", "close"], ["href", "#"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.closeZoom($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, [" \u00D7 "])), (_l()(), i1.ɵeld(4, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.zoomImage.src; var currVal_1 = _co.zoomImage.title; _ck(_v, 4, 0, currVal_0, currVal_1); }); }
exports.View_ImageZoomComponent_0 = View_ImageZoomComponent_0;
function View_ImageZoomComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "sv-image-zoom", [], null, [["window", "keyup"]], function (_v, en, $event) { var ad = true; if (("window:keyup" === en)) {
        var pd_0 = (i1.ɵnov(_v, 1).keyEvent($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_ImageZoomComponent_0, RenderType_ImageZoomComponent)), i1.ɵdid(1, 49152, null, 0, i2.ImageZoomComponent, [], null, null)], null, null); }
exports.View_ImageZoomComponent_Host_0 = View_ImageZoomComponent_Host_0;
var ImageZoomComponentNgFactory = i1.ɵccf("sv-image-zoom", i2.ImageZoomComponent, View_ImageZoomComponent_Host_0, { zoomImage: "zoomImage" }, { close: "close" }, []);
exports.ImageZoomComponentNgFactory = ImageZoomComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/posts/image-zoom/image-zoom.component.scss.shim.ngstyle.js":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/posts/image-zoom/image-zoom.component.scss.shim.ngstyle.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  z-index: 2000;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n.wrapper-inner[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.wrapper-inner[_ngcontent-%COMP%]   a.close[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  right: 25px;\n  width: 35px;\n  height: 35px;\n  color: #fff;\n  font-size: 35px;\n  line-height: 30px;\n  text-align: center;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 50px;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n\n.wrapper-inner[_ngcontent-%COMP%]   a.close[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 7px;\n  line-height: 15px;\n  right: 50px;\n  content: \"close\";\n  color: black;\n  font-size: 15px;\n  text-transform: lowercase;\n  display: none;\n  background: white;\n  padding: 3px 6px;\n  border-radius: 5px;\n}\n\n.wrapper-inner[_ngcontent-%COMP%]   a.close[_ngcontent-%COMP%]:hover:before {\n  display: block;\n}\n\n.wrapper-inner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  max-height: 90vh;\n  max-width: 90vw;\n  margin: 5vh auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW12bG9lYmVyZ2hzL1Byb2plY3RzL0t3ZXJyaS9rd2Vycmktb3NzL3Byb2plY3RzL3NhbXZsb2ViZXJnaHMvc3JjL2FwcC9wYWdlcy9wb3N0cy9pbWFnZS16b29tL2ltYWdlLXpvb20uY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9zYW12bG9lYmVyZ2hzL3NyYy9hcHAvcGFnZXMvcG9zdHMvaW1hZ2Utem9vbS9pbWFnZS16b29tLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFFQSxlQUFBO0VBQ0EsYUFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUNERjs7QURHRTtFQUNFLGtCQUFBO0FDREo7O0FER0k7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDRE47O0FER007RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRFI7O0FESU07RUFDRSxjQUFBO0FDRlI7O0FETUk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNKTiIsImZpbGUiOiJwcm9qZWN0cy9zYW12bG9lYmVyZ2hzL3NyYy9hcHAvcGFnZXMvcG9zdHMvaW1hZ2Utem9vbS9pbWFnZS16b29tLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLndyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG5cbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyMDAwO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcblxuICAmLWlubmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBhLmNsb3NlIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHJpZ2h0OiAyNXB4O1xuICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDdweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgIHJpZ2h0OiA1MHB4O1xuICAgICAgICBjb250ZW50OiAnY2xvc2UnO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogM3B4IDZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyOmJlZm9yZXtcbiAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXgtaGVpZ2h0OiA5MHZoO1xuICAgICAgbWF4LXdpZHRoOiA5MHZ3O1xuICAgICAgbWFyZ2luOiA1dmggYXV0bztcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi53cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDIwMDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cbi53cmFwcGVyLWlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLndyYXBwZXItaW5uZXIgYS5jbG9zZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAyNXB4O1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi53cmFwcGVyLWlubmVyIGEuY2xvc2U6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDdweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIHJpZ2h0OiA1MHB4O1xuICBjb250ZW50OiBcImNsb3NlXCI7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICBkaXNwbGF5OiBub25lO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogM3B4IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLndyYXBwZXItaW5uZXIgYS5jbG9zZTpob3ZlcjpiZWZvcmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi53cmFwcGVyLWlubmVyIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtaGVpZ2h0OiA5MHZoO1xuICBtYXgtd2lkdGg6IDkwdnc7XG4gIG1hcmdpbjogNXZoIGF1dG87XG59Il19 */"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/pages/posts/image-zoom/image-zoom.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/posts/image-zoom/image-zoom.component.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["ESCAPE"] = 27] = "ESCAPE";
})(KEY_CODE = exports.KEY_CODE || (exports.KEY_CODE = {}));
var ImageZoomComponent = /** @class */ (function () {
    function ImageZoomComponent() {
        this.close = new core_1.EventEmitter();
    }
    ImageZoomComponent.prototype.closeZoom = function ($event) {
        $event.preventDefault();
        this.close.emit();
    };
    ImageZoomComponent.prototype.keyEvent = function (event) {
        if (event.keyCode === KEY_CODE.ESCAPE) {
            this.closeZoom(event);
        }
    };
    return ImageZoomComponent;
}());
exports.ImageZoomComponent = ImageZoomComponent;


/***/ }),

/***/ "./src/app/pages/posts/post/post.component.ngfactory.js":
/*!**************************************************************!*\
  !*** ./src/app/pages/posts/post/post.component.ngfactory.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./post.component.scss.ngstyle */ "./src/app/pages/posts/post/post.component.scss.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ../image-zoom/image-zoom.component.ngfactory */ "./src/app/pages/posts/image-zoom/image-zoom.component.ngfactory.js");
var i3 = __webpack_require__(/*! ../image-zoom/image-zoom.component */ "./src/app/pages/posts/image-zoom/image-zoom.component.ts");
var i4 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i5 = __webpack_require__(/*! ../../../shared/hire-me/hire-me.component.ngfactory */ "./src/app/shared/hire-me/hire-me.component.ngfactory.js");
var i6 = __webpack_require__(/*! ../../../shared/hire-me/hire-me.component */ "./src/app/shared/hire-me/hire-me.component.ts");
var i7 = __webpack_require__(/*! ./post.component */ "./src/app/pages/posts/post/post.component.ts");
var i8 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i9 = __webpack_require__(/*! ../../../shared/data.service */ "./src/app/shared/data.service.ts");
var i10 = __webpack_require__(/*! ngx-seo */ "../../dist/ngx-seo/bundles/ngx-seo.umd.js");
var i11 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i12 = __webpack_require__(/*! ../../../shared/highlight.service */ "./src/app/shared/highlight.service.ts");
var styles_PostComponent = [i0.styles];
var RenderType_PostComponent = i1.ɵcrt({ encapsulation: 2, styles: styles_PostComponent, data: {} });
exports.RenderType_PostComponent = RenderType_PostComponent;
function View_PostComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, "span", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 5, "em", [], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Last update on "])), (_l()(), i1.ɵeld(4, 0, null, null, 2, "time", [], [[1, "datetime", 0]], null, null, null, null)), (_l()(), i1.ɵted(5, null, ["", ""])), i1.ɵppd(6, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.post.updateDatetime; _ck(_v, 4, 0, currVal_0); var currVal_1 = i1.ɵunv(_v, 5, 0, _ck(_v, 6, 0, i1.ɵnov(_v.parent.parent, 0), _co.post.updateDatetime, "fullDate")); _ck(_v, 5, 0, currVal_1); }); }
function View_PostComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "sv-image-zoom", [], null, [[null, "close"], ["window", "keyup"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("window:keyup" === en)) {
        var pd_0 = (i1.ɵnov(_v, 1).keyEvent($event) !== false);
        ad = (pd_0 && ad);
    } if (("close" === en)) {
        var pd_1 = (_co.closeImageZoom() !== false);
        ad = (pd_1 && ad);
    } return ad; }, i2.View_ImageZoomComponent_0, i2.RenderType_ImageZoomComponent)), i1.ɵdid(1, 49152, null, 0, i3.ImageZoomComponent, [], { zoomImage: [0, "zoomImage"] }, { close: "close" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.currentZoomImage; _ck(_v, 1, 0, currVal_0); }, null); }
function View_PostComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 15, "article", [["class", "post"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 0, "img", [["class", "introimage"]], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 6, "p", [["class", "posted"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Posted on "])), (_l()(), i1.ɵeld(6, 0, null, null, 2, "time", [], [[1, "datetime", 0]], null, null, null, null)), (_l()(), i1.ɵted(7, null, ["", ""])), i1.ɵppd(8, 2), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PostComponent_2)), i1.ɵdid(10, 16384, null, 0, i4.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(11, 0, null, null, 0, "div", [["highlight-js-content", ".highlighted"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 1, "sv-hire-me", [], null, null, null, i5.View_HireMeComponent_0, i5.RenderType_HireMeComponent)), i1.ɵdid(13, 49152, null, 0, i6.HireMeComponent, [], null, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PostComponent_3)), i1.ɵdid(15, 16384, null, 0, i4.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_5 = (!!_co.post.updateDatetime && (_co.post.publishDatetime != _co.post.updateDatetime)); _ck(_v, 10, 0, currVal_5); var currVal_7 = _co.currentZoomImage; _ck(_v, 15, 0, currVal_7); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.post.img; var currVal_1 = _co.post.title; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _co.post.title; _ck(_v, 3, 0, currVal_2); var currVal_3 = _co.post.publishDatetime; _ck(_v, 6, 0, currVal_3); var currVal_4 = i1.ɵunv(_v, 7, 0, _ck(_v, 8, 0, i1.ɵnov(_v.parent, 0), _co.post.publishDatetime, "fullDate")); _ck(_v, 7, 0, currVal_4); var currVal_6 = _co.post.content; _ck(_v, 11, 0, currVal_6); }); }
function View_PostComponent_0(_l) { return i1.ɵvid(0, [i1.ɵpid(0, i4.DatePipe, [i1.LOCALE_ID]), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PostComponent_1)), i1.ɵdid(2, 16384, null, 0, i4.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.post; _ck(_v, 2, 0, currVal_0); }, null); }
exports.View_PostComponent_0 = View_PostComponent_0;
function View_PostComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "sv-post", [], null, null, null, View_PostComponent_0, RenderType_PostComponent)), i1.ɵdid(1, 8503296, null, 0, i7.PostComponent, [i8.Router, i8.ActivatedRoute, i9.DataService, i10.SeoSocialShareService, i11.DomSanitizer, i10.JsonLdService, i12.HighlightService, i1.ElementRef], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_PostComponent_Host_0 = View_PostComponent_Host_0;
var PostComponentNgFactory = i1.ɵccf("sv-post", i7.PostComponent, View_PostComponent_Host_0, {}, {}, []);
exports.PostComponentNgFactory = PostComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/posts/post/post.component.scss.ngstyle.js":
/*!*****************************************************************!*\
  !*** ./src/app/pages/posts/post/post.component.scss.ngstyle.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["\ndiv.code-toolbar {\n\tposition: relative;\n}\ndiv.code-toolbar > .toolbar {\n\tposition: absolute;\n\ttop: .3em;\n\tright: .2em;\n\t-webkit-transition: opacity 0.3s ease-in-out;\n\ttransition: opacity 0.3s ease-in-out;\n\topacity: 0;\n}\ndiv.code-toolbar:hover > .toolbar {\n\topacity: 1;\n}\n\ndiv.code-toolbar:focus-within > .toolbar {\n\topacity: 1;\n}\ndiv.code-toolbar > .toolbar .toolbar-item {\n\tdisplay: inline-block;\n}\ndiv.code-toolbar > .toolbar a {\n\tcursor: pointer;\n}\ndiv.code-toolbar > .toolbar button {\n\tbackground: none;\n\tborder: 0;\n\tcolor: inherit;\n\tfont: inherit;\n\tline-height: normal;\n\toverflow: visible;\n\tpadding: 0;\n\t-webkit-user-select: none; \n\t-moz-user-select: none;\n\t-ms-user-select: none;\n}\ndiv.code-toolbar > .toolbar a,\ndiv.code-toolbar > .toolbar button,\ndiv.code-toolbar > .toolbar span {\n\tcolor: #bbb;\n\tfont-size: .8em;\n\tpadding: 0 .5em;\n\tbackground: #f5f2f0;\n\tbackground: rgba(224, 224, 224, 0.2);\n\tbox-shadow: 0 2px 0 0 rgba(0,0,0,0.2);\n\tborder-radius: .5em;\n}\ndiv.code-toolbar > .toolbar a:hover,\ndiv.code-toolbar > .toolbar a:focus,\ndiv.code-toolbar > .toolbar button:hover,\ndiv.code-toolbar > .toolbar button:focus,\ndiv.code-toolbar > .toolbar span:hover,\ndiv.code-toolbar > .toolbar span:focus {\n\tcolor: inherit;\n\ttext-decoration: none;\n}\n\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tcolor: black;\n\tbackground: none;\n\ttext-shadow: 0 1px white;\n\tfont-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n\tfont-size: 1em;\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\ttab-size: 4;\n\n\t-webkit-hyphens: none;\n\t-ms-hyphens: none;\n\thyphens: none;\n}\npre[class*=\"language-\"]::-moz-selection, pre[class*=\"language-\"] ::-moz-selection,\ncode[class*=\"language-\"]::-moz-selection, code[class*=\"language-\"] ::-moz-selection {\n\ttext-shadow: none;\n\tbackground: #b3d4fc;\n}\npre[class*=\"language-\"]::selection, pre[class*=\"language-\"] ::selection,\ncode[class*=\"language-\"]::selection, code[class*=\"language-\"] ::selection {\n\ttext-shadow: none;\n\tbackground: #b3d4fc;\n}\n@media print {\n\tcode[class*=\"language-\"],\n\tpre[class*=\"language-\"] {\n\t\ttext-shadow: none;\n\t}\n}\n\npre[class*=\"language-\"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n}\n:not(pre) > code[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tbackground: #f5f2f0;\n}\n\n:not(pre) > code[class*=\"language-\"] {\n\tpadding: .1em;\n\tborder-radius: .3em;\n\twhite-space: normal;\n}\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: slategray;\n}\n.token.punctuation {\n\tcolor: #999;\n}\n.token.namespace {\n\topacity: .7;\n}\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: #905;\n}\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: #690;\n}\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string {\n\tcolor: #9a6e3a;\n\tbackground: hsla(0, 0%, 100%, .5);\n}\n.token.atrule,\n.token.attr-value,\n.token.keyword {\n\tcolor: #07a;\n}\n.token.function,\n.token.class-name {\n\tcolor: #DD4A68;\n}\n.token.regex,\n.token.important,\n.token.variable {\n\tcolor: #e90;\n}\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n.token.entity {\n\tcursor: help;\n}\npre[class*=\"language-\"].line-numbers {\n\tposition: relative;\n\tpadding-left: 3.8em;\n\tcounter-reset: linenumber;\n}\npre[class*=\"language-\"].line-numbers > code {\n\tposition: relative;\n\twhite-space: inherit;\n}\n.line-numbers .line-numbers-rows {\n\tposition: absolute;\n\tpointer-events: none;\n\ttop: 0;\n\tfont-size: 100%;\n\tleft: -3.8em;\n\twidth: 3em; \n\tletter-spacing: -1px;\n\tborder-right: 1px solid #999;\n\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\n}\n.line-numbers-rows > span {\n\t\tpointer-events: none;\n\t\tdisplay: block;\n\t\tcounter-increment: linenumber;\n\t}\n.line-numbers-rows > span:before {\n\t\t\tcontent: counter(linenumber);\n\t\t\tcolor: #999;\n\t\t\tdisplay: block;\n\t\t\tpadding-right: 0.8em;\n\t\t\ttext-align: right;\n\t\t}\npre[data-line] {\n\tposition: relative;\n\tpadding: 1em 0 1em 3em;\n}\n.line-highlight {\n\tposition: absolute;\n\tleft: 0;\n\tright: 0;\n\tpadding: inherit 0;\n\tmargin-top: 1em; \n\n\tbackground: hsla(24, 20%, 50%,.08);\n\tbackground: -webkit-gradient(linear, left top, right top, color-stop(70%, hsla(24, 20%, 50%,.1)), to(hsla(24, 20%, 50%,0)));\n\tbackground: linear-gradient(to right, hsla(24, 20%, 50%,.1) 70%, hsla(24, 20%, 50%,0));\n\n\tpointer-events: none;\n\n\tline-height: inherit;\n\twhite-space: pre;\n}\n.line-highlight:before,\n\t.line-highlight[data-end]:after {\n\t\tcontent: attr(data-start);\n\t\tposition: absolute;\n\t\ttop: .4em;\n\t\tleft: .6em;\n\t\tmin-width: 1em;\n\t\tpadding: 0 .5em;\n\t\tbackground-color: hsla(24, 20%, 50%,.4);\n\t\tcolor: hsl(24, 20%, 95%);\n\t\tfont: bold 65%/1.5 sans-serif;\n\t\ttext-align: center;\n\t\tvertical-align: .3em;\n\t\tborder-radius: 999px;\n\t\ttext-shadow: none;\n\t\tbox-shadow: 0 1px white;\n\t}\n.line-highlight[data-end]:after {\n\t\tcontent: attr(data-end);\n\t\ttop: auto;\n\t\tbottom: .4em;\n\t}\n.line-numbers .line-highlight:before,\n.line-numbers .line-highlight:after {\n\tcontent: none;\n}\nsv-post {\n  display: block;\n  margin-bottom: 20px;\n}\n@media (max-width: 920px) {\n  sv-post h1 {\n    font-size: 1.4em !important;\n  }\n}\nsv-post h2 code, sv-post h3 code {\n  background: #eee;\n  padding-right: 3px;\n  padding-left: 3px;\n}\nsv-post .posted {\n  font-size: 14px !important;\n  font-style: italic;\n  line-height: 24px !important;\n  margin-bottom: 10px !important;\n}\nsv-post img.introimage {\n  float: left;\n  display: block;\n  margin-right: 15px;\n  margin-bottom: 15px;\n  max-height: 54px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW12bG9lYmVyZ2hzL1Byb2plY3RzL0t3ZXJyaS9rd2Vycmktb3NzL3Byb2plY3RzL3NhbXZsb2ViZXJnaHMvc3JjL3Njc3MvX2hsLnNjc3MiLCJub2RlX21vZHVsZXMvcHJpc21qcy9wbHVnaW5zL3Rvb2xiYXIvcHJpc20tdG9vbGJhci5jc3MiLCJub2RlX21vZHVsZXMvcHJpc21qcy90aGVtZXMvcHJpc20uY3NzIiwibm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy9saW5lLW51bWJlcnMvcHJpc20tbGluZS1udW1iZXJzLmNzcyIsIm5vZGVfbW9kdWxlcy9wcmlzbWpzL3BsdWdpbnMvbGluZS1oaWdobGlnaHQvcHJpc20tbGluZS1oaWdobGlnaHQuY3NzIiwiL1VzZXJzL3NhbXZsb2ViZXJnaHMvUHJvamVjdHMvS3dlcnJpL2t3ZXJyaS1vc3MvcHJvamVjdHMvc2FtdmxvZWJlcmdocy9zcmMvYXBwL3BhZ2VzL3Bvc3RzL3Bvc3QvcG9zdC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3NhbXZsb2ViZXJnaHMvc3JjL2FwcC9wYWdlcy9wb3N0cy9wb3N0L3Bvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNBQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxXQUFXO0NBQ1gsNENBQW9DO0NBQXBDLG9DQUFvQztDQUNwQyxVQUFVO0FBQ1g7QUFFQTtDQUNDLFVBQVU7QUFDWDtBQUVBOzREQUM0RDtBQUM1RDtDQUNDLFVBQVU7QUFDWDtBQUVBO0NBQ0MscUJBQXFCO0FBQ3RCO0FBRUE7Q0FDQyxlQUFlO0FBQ2hCO0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsU0FBUztDQUNULGNBQWM7Q0FDZCxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixVQUFVO0NBQ1YseUJBQXlCLEVBQUUsZUFBZTtDQUMxQyxzQkFBc0I7Q0FDdEIscUJB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LGtCQUFBO0VBQ0EsaUJBQUE7QUNBUjtBREtFO0VBRUksMEJBQUE7RUFDQSxrQkFBQTtFQUVGLDRCQUFBO0VBQ0EsOEJBQUE7QUNMSjtBRFFFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNOSiIsImZpbGUiOiJwcm9qZWN0cy9zYW12bG9lYmVyZ2hzL3NyYy9hcHAvcGFnZXMvcG9zdHMvcG9zdC9wb3N0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGltcG9ydCBcIn5wcmlzbWpzL3BsdWdpbnMvdG9vbGJhci9wcmlzbS10b29sYmFyLmNzc1wiO1xuQGltcG9ydCBcIn5wcmlzbWpzL3RoZW1lcy9wcmlzbS5jc3NcIjtcbkBpbXBvcnQgXCJ+cHJpc21qcy9wbHVnaW5zL2xpbmUtbnVtYmVycy9wcmlzbS1saW5lLW51bWJlcnMuY3NzXCI7XG5AaW1wb3J0IFwifnByaXNtanMvcGx1Z2lucy9saW5lLWhpZ2hsaWdodC9wcmlzbS1saW5lLWhpZ2hsaWdodC5jc3NcIjtcbiIsImRpdi5jb2RlLXRvb2xiYXIge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAuM2VtO1xuXHRyaWdodDogLjJlbTtcblx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xuXHRvcGFjaXR5OiAwO1xufVxuXG5kaXYuY29kZS10b29sYmFyOmhvdmVyID4gLnRvb2xiYXIge1xuXHRvcGFjaXR5OiAxO1xufVxuXG4vKiBTZXBhcmF0ZSBsaW5lIGIvYyBydWxlcyBhcmUgdGhyb3duIG91dCBpZiBzZWxlY3RvciBpcyBpbnZhbGlkLlxuICAgSUUxMSBhbmQgb2xkIEVkZ2UgdmVyc2lvbnMgZG9uJ3Qgc3VwcG9ydCA6Zm9jdXMtd2l0aGluLiAqL1xuZGl2LmNvZGUtdG9vbGJhcjpmb2N1cy13aXRoaW4gPiAudG9vbGJhciB7XG5cdG9wYWNpdHk6IDE7XG59XG5cbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciAudG9vbGJhci1pdGVtIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgYSB7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyIGJ1dHRvbiB7XG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cdGJvcmRlcjogMDtcblx0Y29sb3I6IGluaGVyaXQ7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdGxpbmUtaGVpZ2h0OiBub3JtYWw7XG5cdG92ZXJmbG93OiB2aXNpYmxlO1xuXHRwYWRkaW5nOiAwO1xuXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBmb3IgYnV0dG9uICovXG5cdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyIGEsXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgYnV0dG9uLFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyIHNwYW4ge1xuXHRjb2xvcjogI2JiYjtcblx0Zm9udC1zaXplOiAuOGVtO1xuXHRwYWRkaW5nOiAwIC41ZW07XG5cdGJhY2tncm91bmQ6ICNmNWYyZjA7XG5cdGJhY2tncm91bmQ6IHJnYmEoMjI0LCAyMjQsIDIyNCwgMC4yKTtcblx0Ym94LXNoYWRvdzogMCAycHggMCAwIHJnYmEoMCwwLDAsMC4yKTtcblx0Ym9yZGVyLXJhZGl1czogLjVlbTtcbn1cblxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyIGE6aG92ZXIsXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgYTpmb2N1cyxcbmRpdi5jb2RlLXRvb2xiYXIgPiAudG9vbGJhciBidXR0b246aG92ZXIsXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgYnV0dG9uOmZvY3VzLFxuZGl2LmNvZGUtdG9vbGJhciA+IC50b29sYmFyIHNwYW46aG92ZXIsXG5kaXYuY29kZS10b29sYmFyID4gLnRvb2xiYXIgc3Bhbjpmb2N1cyB7XG5cdGNvbG9yOiBpbmhlcml0O1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4iLCIvKipcbiAqIHByaXNtLmpzIGRlZmF1bHQgdGhlbWUgZm9yIEphdmFTY3JpcHQsIENTUyBhbmQgSFRNTFxuICogQmFzZWQgb24gZGFiYmxldCAoaHR0cDovL2RhYmJsZXQuY29tKVxuICogQGF1dGhvciBMZWEgVmVyb3VcbiAqL1xuXG5jb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSxcbnByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0ge1xuXHRjb2xvcjogYmxhY2s7XG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cdHRleHQtc2hhZG93OiAwIDFweCB3aGl0ZTtcblx0Zm9udC1mYW1pbHk6IENvbnNvbGFzLCBNb25hY28sICdBbmRhbGUgTW9ubycsICdVYnVudHUgTW9ubycsIG1vbm9zcGFjZTtcblx0Zm9udC1zaXplOiAxZW07XG5cdHRleHQtYWxpZ246IGxlZnQ7XG5cdHdoaXRlLXNwYWNlOiBwcmU7XG5cdHdvcmQtc3BhY2luZzogbm9ybWFsO1xuXHR3b3JkLWJyZWFrOiBub3JtYWw7XG5cdHdvcmQtd3JhcDogbm9ybWFsO1xuXHRsaW5lLWhlaWdodDogMS41O1xuXG5cdC1tb3otdGFiLXNpemU6IDQ7XG5cdC1vLXRhYi1zaXplOiA0O1xuXHR0YWItc2l6ZTogNDtcblxuXHQtd2Via2l0LWh5cGhlbnM6IG5vbmU7XG5cdC1tb3otaHlwaGVuczogbm9uZTtcblx0LW1zLWh5cGhlbnM6IG5vbmU7XG5cdGh5cGhlbnM6IG5vbmU7XG59XG5cbnByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl06Oi1tb3otc2VsZWN0aW9uLCBwcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIDo6LW1vei1zZWxlY3Rpb24sXG5jb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXTo6LW1vei1zZWxlY3Rpb24sIGNvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIDo6LW1vei1zZWxlY3Rpb24ge1xuXHR0ZXh0LXNoYWRvdzogbm9uZTtcblx0YmFja2dyb3VuZDogI2IzZDRmYztcbn1cblxucHJlW2NsYXNzKj1cImxhbmd1YWdlLVwiXTo6c2VsZWN0aW9uLCBwcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIDo6c2VsZWN0aW9uLFxuY29kZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl06OnNlbGVjdGlvbiwgY29kZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0gOjpzZWxlY3Rpb24ge1xuXHR0ZXh0LXNoYWRvdzogbm9uZTtcblx0YmFja2dyb3VuZDogI2IzZDRmYztcbn1cblxuQG1lZGlhIHByaW50IHtcblx0Y29kZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0sXG5cdHByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0ge1xuXHRcdHRleHQtc2hhZG93OiBub25lO1xuXHR9XG59XG5cbi8qIENvZGUgYmxvY2tzICovXG5wcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIHtcblx0cGFkZGluZzogMWVtO1xuXHRtYXJnaW46IC41ZW0gMDtcblx0b3ZlcmZsb3c6IGF1dG87XG59XG5cbjpub3QocHJlKSA+IGNvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdLFxucHJlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSB7XG5cdGJhY2tncm91bmQ6ICNmNWYyZjA7XG59XG5cbi8qIElubGluZSBjb2RlICovXG46bm90KHByZSkgPiBjb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSB7XG5cdHBhZGRpbmc6IC4xZW07XG5cdGJvcmRlci1yYWRpdXM6IC4zZW07XG5cdHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi50b2tlbi5jb21tZW50LFxuLnRva2VuLnByb2xvZyxcbi50b2tlbi5kb2N0eXBlLFxuLnRva2VuLmNkYXRhIHtcblx0Y29sb3I6IHNsYXRlZ3JheTtcbn1cblxuLnRva2VuLnB1bmN0dWF0aW9uIHtcblx0Y29sb3I6ICM5OTk7XG59XG5cbi50b2tlbi5uYW1lc3BhY2Uge1xuXHRvcGFjaXR5OiAuNztcbn1cblxuLnRva2VuLnByb3BlcnR5LFxuLnRva2VuLnRhZyxcbi50b2tlbi5ib29sZWFuLFxuLnRva2VuLm51bWJlcixcbi50b2tlbi5jb25zdGFudCxcbi50b2tlbi5zeW1ib2wsXG4udG9rZW4uZGVsZXRlZCB7XG5cdGNvbG9yOiAjOTA1O1xufVxuXG4udG9rZW4uc2VsZWN0b3IsXG4udG9rZW4uYXR0ci1uYW1lLFxuLnRva2VuLnN0cmluZyxcbi50b2tlbi5jaGFyLFxuLnRva2VuLmJ1aWx0aW4sXG4udG9rZW4uaW5zZXJ0ZWQge1xuXHRjb2xvcjogIzY5MDtcbn1cblxuLnRva2VuLm9wZXJhdG9yLFxuLnRva2VuLmVudGl0eSxcbi50b2tlbi51cmwsXG4ubGFuZ3VhZ2UtY3NzIC50b2tlbi5zdHJpbmcsXG4uc3R5bGUgLnRva2VuLnN0cmluZyB7XG5cdGNvbG9yOiAjOWE2ZTNhO1xuXHRiYWNrZ3JvdW5kOiBoc2xhKDAsIDAlLCAxMDAlLCAuNSk7XG59XG5cbi50b2tlbi5hdHJ1bGUsXG4udG9rZW4uYXR0ci12YWx1ZSxcbi50b2tlbi5rZXl3b3JkIHtcblx0Y29sb3I6ICMwN2E7XG59XG5cbi50b2tlbi5mdW5jdGlvbixcbi50b2tlbi5jbGFzcy1uYW1lIHtcblx0Y29sb3I6ICNERDRBNjg7XG59XG5cbi50b2tlbi5yZWdleCxcbi50b2tlbi5pbXBvcnRhbnQsXG4udG9rZW4udmFyaWFibGUge1xuXHRjb2xvcjogI2U5MDtcbn1cblxuLnRva2VuLmltcG9ydGFudCxcbi50b2tlbi5ib2xkIHtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udG9rZW4uaXRhbGljIHtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4udG9rZW4uZW50aXR5IHtcblx0Y3Vyc29yOiBoZWxwO1xufVxuIiwicHJlW2NsYXNzKj1cImxhbmd1YWdlLVwiXS5saW5lLW51bWJlcnMge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHBhZGRpbmctbGVmdDogMy44ZW07XG5cdGNvdW50ZXItcmVzZXQ6IGxpbmVudW1iZXI7XG59XG5cbnByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0ubGluZS1udW1iZXJzID4gY29kZSB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0d2hpdGUtc3BhY2U6IGluaGVyaXQ7XG59XG5cbi5saW5lLW51bWJlcnMgLmxpbmUtbnVtYmVycy1yb3dzIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcblx0dG9wOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGxlZnQ6IC0zLjhlbTtcblx0d2lkdGg6IDNlbTsgLyogd29ya3MgZm9yIGxpbmUtbnVtYmVycyBiZWxvdyAxMDAwIGxpbmVzICovXG5cdGxldHRlci1zcGFjaW5nOiAtMXB4O1xuXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjOTk5O1xuXG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC1tcy11c2VyLXNlbGVjdDogbm9uZTtcblx0dXNlci1zZWxlY3Q6IG5vbmU7XG5cbn1cblxuXHQubGluZS1udW1iZXJzLXJvd3MgPiBzcGFuIHtcblx0XHRwb2ludGVyLWV2ZW50czogbm9uZTtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRjb3VudGVyLWluY3JlbWVudDogbGluZW51bWJlcjtcblx0fVxuXG5cdFx0LmxpbmUtbnVtYmVycy1yb3dzID4gc3BhbjpiZWZvcmUge1xuXHRcdFx0Y29udGVudDogY291bnRlcihsaW5lbnVtYmVyKTtcblx0XHRcdGNvbG9yOiAjOTk5O1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRwYWRkaW5nLXJpZ2h0OiAwLjhlbTtcblx0XHRcdHRleHQtYWxpZ246IHJpZ2h0O1xuXHRcdH1cbiIsInByZVtkYXRhLWxpbmVdIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRwYWRkaW5nOiAxZW0gMCAxZW0gM2VtO1xufVxuXG4ubGluZS1oaWdobGlnaHQge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IDA7XG5cdHJpZ2h0OiAwO1xuXHRwYWRkaW5nOiBpbmhlcml0IDA7XG5cdG1hcmdpbi10b3A6IDFlbTsgLyogU2FtZSBhcyAucHJpc23igJlzIHBhZGRpbmctdG9wICovXG5cblx0YmFja2dyb3VuZDogaHNsYSgyNCwgMjAlLCA1MCUsLjA4KTtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBoc2xhKDI0LCAyMCUsIDUwJSwuMSkgNzAlLCBoc2xhKDI0LCAyMCUsIDUwJSwwKSk7XG5cblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG5cblx0bGluZS1oZWlnaHQ6IGluaGVyaXQ7XG5cdHdoaXRlLXNwYWNlOiBwcmU7XG59XG5cblx0LmxpbmUtaGlnaGxpZ2h0OmJlZm9yZSxcblx0LmxpbmUtaGlnaGxpZ2h0W2RhdGEtZW5kXTphZnRlciB7XG5cdFx0Y29udGVudDogYXR0cihkYXRhLXN0YXJ0KTtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiAuNGVtO1xuXHRcdGxlZnQ6IC42ZW07XG5cdFx0bWluLXdpZHRoOiAxZW07XG5cdFx0cGFkZGluZzogMCAuNWVtO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjQsIDIwJSwgNTAlLC40KTtcblx0XHRjb2xvcjogaHNsKDI0LCAyMCUsIDk1JSk7XG5cdFx0Zm9udDogYm9sZCA2NSUvMS41IHNhbnMtc2VyaWY7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdHZlcnRpY2FsLWFsaWduOiAuM2VtO1xuXHRcdGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuXHRcdHRleHQtc2hhZG93OiBub25lO1xuXHRcdGJveC1zaGFkb3c6IDAgMXB4IHdoaXRlO1xuXHR9XG5cblx0LmxpbmUtaGlnaGxpZ2h0W2RhdGEtZW5kXTphZnRlciB7XG5cdFx0Y29udGVudDogYXR0cihkYXRhLWVuZCk7XG5cdFx0dG9wOiBhdXRvO1xuXHRcdGJvdHRvbTogLjRlbTtcblx0fVxuXG4ubGluZS1udW1iZXJzIC5saW5lLWhpZ2hsaWdodDpiZWZvcmUsXG4ubGluZS1udW1iZXJzIC5saW5lLWhpZ2hsaWdodDphZnRlciB7XG5cdGNvbnRlbnQ6IG5vbmU7XG59XG4iLCJAaW1wb3J0ICdobCc7XG5cbi8vIGNhbid0IHVzZSBob3N0IGhlcmUgYmVjYXVzZSBvZiB2aWV3RW5jYXBzdWxhdGlvbiBub25lXG5zdi1wb3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgaDEge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCkge1xuICAgICAgZm9udC1zaXplOiAxLjRlbSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIGgyLCBoMyB7XG4gICAgY29kZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgcGFkZGluZzoge1xuICAgICAgICByaWdodDogM3B4O1xuICAgICAgICBsZWZ0OiAzcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnBvc3RlZCB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgICAgc3R5bGU6IGl0YWxpYztcbiAgICB9XG4gICAgbGluZS1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpbWcuaW50cm9pbWFnZSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgbWF4LWhlaWdodDogNTRweDtcbiAgfVxuXG59XG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0IFwifnByaXNtanMvcGx1Z2lucy90b29sYmFyL3ByaXNtLXRvb2xiYXIuY3NzXCI7XG5AaW1wb3J0IFwifnByaXNtanMvdGhlbWVzL3ByaXNtLmNzc1wiO1xuQGltcG9ydCBcIn5wcmlzbWpzL3BsdWdpbnMvbGluZS1udW1iZXJzL3ByaXNtLWxpbmUtbnVtYmVycy5jc3NcIjtcbkBpbXBvcnQgXCJ+cHJpc21qcy9wbHVnaW5zL2xpbmUtaGlnaGxpZ2h0L3ByaXNtLWxpbmUtaGlnaGxpZ2h0LmNzc1wiO1xuc3YtcG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkyMHB4KSB7XG4gIHN2LXBvc3QgaDEge1xuICAgIGZvbnQtc2l6ZTogMS40ZW0gIWltcG9ydGFudDtcbiAgfVxufVxuc3YtcG9zdCBoMiBjb2RlLCBzdi1wb3N0IGgzIGNvZGUge1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xufVxuc3YtcG9zdCAucG9zdGVkIHtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGluZS1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xufVxuc3YtcG9zdCBpbWcuaW50cm9pbWFnZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBtYXgtaGVpZ2h0OiA1NHB4O1xufSJdfQ== */"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/pages/posts/post/post.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/posts/post/post.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
var ngx_seo_1 = __webpack_require__(/*! ngx-seo */ "../../dist/ngx-seo/bundles/ngx-seo.umd.js");
var data_service_1 = __webpack_require__(/*! ../../../shared/data.service */ "./src/app/shared/data.service.ts");
var environment_1 = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var highlight_service_1 = __webpack_require__(/*! ../../../shared/highlight.service */ "./src/app/shared/highlight.service.ts");
var PostComponent = /** @class */ (function () {
    function PostComponent(router, route, dataService, seoSocialShareService, sanitizer, jsonLdService, highlightService, elementRef) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.seoSocialShareService = seoSocialShareService;
        this.sanitizer = sanitizer;
        this.jsonLdService = jsonLdService;
        this.highlightService = highlightService;
        this.elementRef = elementRef;
        this.highlighted = false;
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        var slug = this.route.snapshot.params['slug'];
        this.dataService
            .getData('/posts/data.json')
            .pipe(operators_1.map(function (posts) {
            return posts.find(function (post) {
                return post.slug === slug;
            });
        }), operators_1.switchMap(function (post) {
            _this.post = post;
            var jsonLd = _this.jsonLdService.getObject('BlogPosting', {
                name: post.title + " - Posts - " + environment_1.environment.seo.title,
                url: environment_1.environment.url + _this.router.routerState.snapshot.url,
                author: _this.jsonLdService.getObject('Person', {
                    name: 'Sam Vloeberghs',
                }, undefined),
                publisher: _this.jsonLdService.getObject('Person', {
                    name: 'Sam Vloeberghs',
                }, undefined),
                headline: post.title,
                description: post.short,
                image: environment_1.environment.url + "/" + post.imgShare,
                dateCreated: post.publishDatetime,
                datePublished: post.publishDatetime,
                dateModified: post.updateDatetime,
            });
            _this.jsonLdService.setData(jsonLd);
            var seoData = {
                title: post.title + " - Posts - " + environment_1.environment.seo.title,
                description: post.short,
                image: "" + environment_1.environment.url + post.imgShare,
                url: environment_1.environment.url + _this.router.routerState.snapshot.url,
                type: 'article',
                author: post.author,
                published: post.publishDatetime,
                modified: post.updateDatetime,
            };
            _this.seoSocialShareService.setData(seoData);
            return _this.dataService.getDataText("/posts/" + slug + "/post.html");
        }))
            .subscribe(function (content) {
            _this.post.content = _this.sanitizer.bypassSecurityTrustHtml(content);
        }, function (error) {
            _this.error = error;
            _this.router.navigateByUrl('/not-found', {
                skipLocationChange: true
            });
        });
    };
    PostComponent.prototype.ngAfterViewChecked = function () {
        if (this.post && this.post.content && !this.highlighted) {
            this.highlightService.highlightAll();
            this.highlighted = true;
            this.initImageZoom();
        }
    };
    PostComponent.prototype.closeImageZoom = function () {
        this.currentZoomImage = null;
    };
    PostComponent.prototype.initImageZoom = function () {
        var _this = this;
        var htmlElements = this.elementRef.nativeElement.querySelectorAll('img.zoomin');
        for (var i = 0; i < htmlElements.length; i++) {
            htmlElements[i].addEventListener('click', function ($event) {
                _this.currentZoomImage = {
                    src: $event.target.src,
                    title: $event.target.title,
                };
            });
        }
    };
    return PostComponent;
}());
exports.PostComponent = PostComponent;


/***/ }),

/***/ "./src/app/pages/posts/posts-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/posts/posts-routing.module.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var ɵ0 = {
    seo: {
        title: "Posts - " + environment_1.environment.seo.title,
        description: "Whenever I find the time, I try to write down what I've been working on. Here you can find all of my posts.",
        shareImg: '/assets/share/projects-talksworkshops.png',
    },
};
exports.ɵ0 = ɵ0;
var PostsRoutingModule = /** @class */ (function () {
    function PostsRoutingModule() {
    }
    return PostsRoutingModule;
}());
exports.PostsRoutingModule = PostsRoutingModule;


/***/ }),

/***/ "./src/app/pages/posts/posts.component.ngfactory.js":
/*!**********************************************************!*\
  !*** ./src/app/pages/posts/posts.component.ngfactory.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./posts.component.scss.shim.ngstyle */ "./src/app/pages/posts/posts.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./posts.component */ "./src/app/pages/posts/posts.component.ts");
var i5 = __webpack_require__(/*! ../../shared/data.service */ "./src/app/shared/data.service.ts");
var styles_PostsComponent = [i0.styles];
var RenderType_PostsComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_PostsComponent, data: {} });
exports.RenderType_PostsComponent = RenderType_PostsComponent;
function View_PostsComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 16, "article", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 3, "a", [["class", "img"]], [[1, "title", 0], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(2, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(3, 2), (_l()(), i1.ɵeld(4, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 11, "a", [["class", "excerpt"]], [[1, "title", 0], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 6).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(6, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(7, 2), (_l()(), i1.ɵeld(8, 0, null, null, 2, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(10, null, ["", ""])), (_l()(), i1.ɵeld(11, 0, null, null, 4, "p", [["class", "posted"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Posted on "])), (_l()(), i1.ɵeld(13, 0, null, null, 2, "time", [], [[1, "datetime", 0]], null, null, null, null)), (_l()(), i1.ɵted(14, null, ["", ""])), i1.ɵppd(15, 2), (_l()(), i1.ɵeld(16, 0, null, null, 0, "p", [], [[8, "innerHTML", 1]], null, null, null, null))], function (_ck, _v) { var currVal_3 = _ck(_v, 3, 0, "/posts", _v.parent.context.$implicit.slug); _ck(_v, 2, 0, currVal_3); var currVal_9 = _ck(_v, 7, 0, "/posts", _v.parent.context.$implicit.slug); _ck(_v, 6, 0, currVal_9); }, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.title; var currVal_1 = i1.ɵnov(_v, 2).target; var currVal_2 = i1.ɵnov(_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); var currVal_4 = _v.parent.context.$implicit.img; var currVal_5 = _v.parent.context.$implicit.title; _ck(_v, 4, 0, currVal_4, currVal_5); var currVal_6 = _v.parent.context.$implicit.title; var currVal_7 = i1.ɵnov(_v, 6).target; var currVal_8 = i1.ɵnov(_v, 6).href; _ck(_v, 5, 0, currVal_6, currVal_7, currVal_8); var currVal_10 = _v.parent.context.$implicit.title; _ck(_v, 10, 0, currVal_10); var currVal_11 = _v.parent.context.$implicit.publishDatetime; _ck(_v, 13, 0, currVal_11); var currVal_12 = i1.ɵunv(_v, 14, 0, _ck(_v, 15, 0, i1.ɵnov(_v.parent.parent, 0), _v.parent.context.$implicit.publishDatetime, "fullDate")); _ck(_v, 14, 0, currVal_12); var currVal_13 = _v.parent.context.$implicit.short; _ck(_v, 16, 0, currVal_13); }); }
function View_PostsComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PostsComponent_2)), i1.ɵdid(2, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(0, null, null, 0))], function (_ck, _v) { var currVal_0 = !_v.context.$implicit.hidden; _ck(_v, 2, 0, currVal_0); }, null); }
function View_PostsComponent_0(_l) { return i1.ɵvid(0, [i1.ɵpid(0, i3.DatePipe, [i1.LOCALE_ID]), (_l()(), i1.ɵeld(1, 0, null, null, 5, "h1", [], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 4, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" 2. I try to "])), (_l()(), i1.ɵeld(4, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["write down"])), (_l()(), i1.ɵted(-1, null, [" my experience, if it's worth reading! "])), (_l()(), i1.ɵand(16777216, null, null, 2, null, View_PostsComponent_1)), i1.ɵdid(8, 278528, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), i1.ɵpid(131072, i3.AsyncPipe, [i1.ChangeDetectorRef])], function (_ck, _v) { var _co = _v.component; var currVal_0 = i1.ɵunv(_v, 8, 0, i1.ɵnov(_v, 9).transform(_co.posts$)); _ck(_v, 8, 0, currVal_0); }, null); }
exports.View_PostsComponent_0 = View_PostsComponent_0;
function View_PostsComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "sv-posts", [], null, null, null, View_PostsComponent_0, RenderType_PostsComponent)), i1.ɵdid(1, 49152, null, 0, i4.PostsComponent, [i5.DataService, i2.Router], null, null)], null, null); }
exports.View_PostsComponent_Host_0 = View_PostsComponent_Host_0;
var PostsComponentNgFactory = i1.ɵccf("sv-posts", i4.PostsComponent, View_PostsComponent_Host_0, {}, {}, []);
exports.PostsComponentNgFactory = PostsComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/posts/posts.component.scss.shim.ngstyle.js":
/*!******************************************************************!*\
  !*** ./src/app/pages/posts/posts.component.scss.shim.ngstyle.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["[_nghost-%COMP%] {\n  display: block;\n}\n\narticle[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #f6f6f6;\n}\n\narticle[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\narticle[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 20px;\n  border: none;\n  margin: 0;\n}\n\narticle[_ngcontent-%COMP%]   a.img[_ngcontent-%COMP%] {\n  width: 65%;\n  display: block;\n  margin: 0 auto;\n}\n\n@media (min-width: 921px) {\n  article[_ngcontent-%COMP%]   a.img[_ngcontent-%COMP%] {\n    float: left;\n    width: 120px;\n  }\n}\n\n@media (min-width: 1281px) {\n  article[_ngcontent-%COMP%]   a.img[_ngcontent-%COMP%] {\n    float: left;\n    width: 225px;\n    display: block;\n  }\n}\n\narticle[_ngcontent-%COMP%]   a.img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\narticle[_ngcontent-%COMP%]   a.img[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  -webkit-animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n          animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n\narticle[_ngcontent-%COMP%]   a.excerpt[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  color: #000;\n  margin-top: 20px;\n  text-align: justify;\n  border: none;\n}\n\n@media (min-width: 921px) {\n  article[_ngcontent-%COMP%]   a.excerpt[_ngcontent-%COMP%] {\n    margin-left: 150px;\n    margin-top: 0;\n    text-align: left;\n  }\n}\n\n@media (min-width: 1281px) {\n  article[_ngcontent-%COMP%]   a.excerpt[_ngcontent-%COMP%] {\n    margin-left: 275px;\n  }\n}\n\narticle[_ngcontent-%COMP%]   a.excerpt[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  padding-bottom: 2px;\n  border: none;\n}\n\narticle[_ngcontent-%COMP%]   a.excerpt[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #000;\n  border-bottom: 1px dotted #000;\n  text-decoration: none;\n  font-weight: 500;\n}\n\narticle[_ngcontent-%COMP%]   a.excerpt[_ngcontent-%COMP%]   .posted[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  font-size: 12px;\n  word-spacing: 0;\n}\n\narticle[_ngcontent-%COMP%]   a.excerpt[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW12bG9lYmVyZ2hzL1Byb2plY3RzL0t3ZXJyaS9rd2Vycmktb3NzL3Byb2plY3RzL3NhbXZsb2ViZXJnaHMvc3JjL2FwcC9wYWdlcy9wb3N0cy9wb3N0cy5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3NhbXZsb2ViZXJnaHMvc3JjL2FwcC9wYWdlcy9wb3N0cy9wb3N0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBRENFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FDQUo7O0FER0U7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNESjs7QURHSTtFQUxGO0lBTUksV0FBQTtJQUNBLFlBQUE7RUNBSjtBQUNGOztBREVJO0VBVkY7SUFXSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7RUNDSjtBQUNGOztBRENJO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUNDTjs7QURFSTtFQUNFLHdFQUFBO1VBQUEsZ0VBQUE7RUFDQSx1Q0FBQTtVQUFBLCtCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7QUNBTjs7QURJRTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBRElJO0VBUkY7SUFTSSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxnQkFBQTtFQ0RKO0FBQ0Y7O0FER0k7RUFkRjtJQWVJLGtCQUFBO0VDQUo7QUFDRjs7QURHSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDRE47O0FESUk7RUFDRSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDRk47O0FES0k7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDSE47O0FET007RUFDRSw2QkFBQTtBQ0xSIiwiZmlsZSI6InByb2plY3RzL3NhbXZsb2ViZXJnaHMvc3JjL2FwcC9wYWdlcy9wb3N0cy9wb3N0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmFydGljbGUge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNmY2ZjY7XG5cbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBjbGVhcjogYm90aDtcbiAgfVxuXG4gICY6bGFzdC1jaGlsZCB7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIGEuaW1nIHtcbiAgICB3aWR0aDogNjUlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIHdpZHRoOiAxMjBweDtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTI4MXB4KSB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIHdpZHRoOiAyMjVweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICY6aG92ZXIgaW1nIHtcbiAgICAgIGFuaW1hdGlvbjogc2hha2UgMC44MnMgY3ViaWMtYmV6aWVyKC4zNiwgLjA3LCAuMTksIC45NykgYm90aDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xuICAgIH1cbiAgfVxuXG4gIGEuZXhjZXJwdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBib3JkZXI6IG5vbmU7XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTIxcHgpIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjgxcHgpIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyNzVweDtcblxuICAgIH1cblxuICAgIGgyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICBjb2xvcjogIzAwMDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgIzAwMDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuXG4gICAgLnBvc3RlZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgd29yZC1zcGFjaW5nOiAwO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgc3BhbiB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmFydGljbGUge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNmY2ZjY7XG59XG5hcnRpY2xlOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuYXJ0aWNsZTpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuYXJ0aWNsZSBhLmltZyB7XG4gIHdpZHRoOiA2NSU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkge1xuICBhcnRpY2xlIGEuaW1nIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjgxcHgpIHtcbiAgYXJ0aWNsZSBhLmltZyB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDIyNXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5hcnRpY2xlIGEuaW1nIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbmFydGljbGUgYS5pbWc6aG92ZXIgaW1nIHtcbiAgYW5pbWF0aW9uOiBzaGFrZSAwLjgycyBjdWJpYy1iZXppZXIoMC4zNiwgMC4wNywgMC4xOSwgMC45NykgYm90aDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xufVxuYXJ0aWNsZSBhLmV4Y2VycHQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzAwMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgYm9yZGVyOiBub25lO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSB7XG4gIGFydGljbGUgYS5leGNlcnB0IHtcbiAgICBtYXJnaW4tbGVmdDogMTUwcHg7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MXB4KSB7XG4gIGFydGljbGUgYS5leGNlcnB0IHtcbiAgICBtYXJnaW4tbGVmdDogMjc1cHg7XG4gIH1cbn1cbmFydGljbGUgYS5leGNlcnB0IGgyIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5hcnRpY2xlIGEuZXhjZXJwdCBzcGFuIHtcbiAgY29sb3I6ICMwMDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgIzAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuYXJ0aWNsZSBhLmV4Y2VycHQgLnBvc3RlZCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd29yZC1zcGFjaW5nOiAwO1xufVxuYXJ0aWNsZSBhLmV4Y2VycHQ6aG92ZXIgc3BhbiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xufSJdfQ== */"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/pages/posts/posts.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/posts/posts.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
var data_service_1 = __webpack_require__(/*! ../../shared/data.service */ "./src/app/shared/data.service.ts");
var PostsComponent = /** @class */ (function () {
    function PostsComponent(dataService, router) {
        var _this = this;
        this.dataService = dataService;
        this.router = router;
        this.posts$ = this.dataService
            .getData('/posts/data.json')
            .pipe(operators_1.map(function (response) { return response; }), operators_1.tap({
            error: function (_) {
                _this.router.navigateByUrl('/not-found');
            },
        }));
    }
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;


/***/ }),

/***/ "./src/app/pages/posts/posts.module.ngfactory.js":
/*!*******************************************************!*\
  !*** ./src/app/pages/posts/posts.module.ngfactory.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./posts.module */ "./src/app/pages/posts/posts.module.ts");
var i2 = __webpack_require__(/*! ../../../../../../node_modules/@angular/router/router.ngfactory */ "../../node_modules/@angular/router/router.ngfactory.js");
var i3 = __webpack_require__(/*! ./posts.component.ngfactory */ "./src/app/pages/posts/posts.component.ngfactory.js");
var i4 = __webpack_require__(/*! ./post/post.component.ngfactory */ "./src/app/pages/posts/post/post.component.ngfactory.js");
var i5 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i6 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var i7 = __webpack_require__(/*! ../../shared/highlight.service */ "./src/app/shared/highlight.service.ts");
var i8 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i9 = __webpack_require__(/*! ./posts-routing.module */ "./src/app/pages/posts/posts-routing.module.ts");
var i10 = __webpack_require__(/*! ng-lazyload-image */ "ng-lazyload-image");
var i11 = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var i12 = __webpack_require__(/*! ./posts.component */ "./src/app/pages/posts/posts.component.ts");
var i13 = __webpack_require__(/*! ./post/post.component */ "./src/app/pages/posts/post/post.component.ts");
var PostsModuleNgFactory = i0.ɵcmf(i1.PostsModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.ɵangular_packages_router_router_lNgFactory, i3.PostsComponentNgFactory, i4.PostComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i5.NgLocalization, i5.NgLocaleLocalization, [i0.LOCALE_ID, [2, i5.ɵangular_packages_common_common_a]]), i0.ɵmpd(4608, i6.HttpXsrfTokenExtractor, i6.ɵangular_packages_common_http_http_g, [i5.DOCUMENT, i0.PLATFORM_ID, i6.ɵangular_packages_common_http_http_e]), i0.ɵmpd(4608, i6.ɵangular_packages_common_http_http_h, i6.ɵangular_packages_common_http_http_h, [i6.HttpXsrfTokenExtractor, i6.ɵangular_packages_common_http_http_f]), i0.ɵmpd(5120, i6.HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [i6.ɵangular_packages_common_http_http_h]), i0.ɵmpd(4608, i6.ɵangular_packages_common_http_http_d, i6.ɵangular_packages_common_http_http_d, []), i0.ɵmpd(6144, i6.XhrFactory, null, [i6.ɵangular_packages_common_http_http_d]), i0.ɵmpd(4608, i6.HttpXhrBackend, i6.HttpXhrBackend, [i6.XhrFactory]), i0.ɵmpd(6144, i6.HttpBackend, null, [i6.HttpXhrBackend]), i0.ɵmpd(4608, i6.HttpHandler, i6.ɵHttpInterceptingHandler, [i6.HttpBackend, i0.Injector]), i0.ɵmpd(4608, i6.HttpClient, i6.HttpClient, [i6.HttpHandler]), i0.ɵmpd(4608, i7.HighlightService, i7.HighlightService, [i0.PLATFORM_ID]), i0.ɵmpd(1073742336, i5.CommonModule, i5.CommonModule, []), i0.ɵmpd(1073742336, i8.RouterModule, i8.RouterModule, [[2, i8.ɵangular_packages_router_router_a], [2, i8.Router]]), i0.ɵmpd(1073742336, i9.PostsRoutingModule, i9.PostsRoutingModule, []), i0.ɵmpd(1073742336, i6.HttpClientXsrfModule, i6.HttpClientXsrfModule, []), i0.ɵmpd(1073742336, i6.HttpClientModule, i6.HttpClientModule, []), i0.ɵmpd(1073742336, i10.LazyLoadImageModule, i10.LazyLoadImageModule, []), i0.ɵmpd(1073742336, i11.SharedModule, i11.SharedModule, []), i0.ɵmpd(1073742336, i1.PostsModule, i1.PostsModule, []), i0.ɵmpd(1024, i8.ROUTES, function () { return [[{ path: "", component: i12.PostsComponent, data: i9.ɵ0 }, { path: ":slug", component: i13.PostComponent }]]; }, []), i0.ɵmpd(256, i6.ɵangular_packages_common_http_http_e, "XSRF-TOKEN", []), i0.ɵmpd(256, i6.ɵangular_packages_common_http_http_f, "X-XSRF-TOKEN", [])]); });
exports.PostsModuleNgFactory = PostsModuleNgFactory;


/***/ }),

/***/ "./src/app/pages/posts/posts.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/posts/posts.module.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PostsModule = /** @class */ (function () {
    function PostsModule() {
    }
    return PostsModule;
}());
exports.PostsModule = PostsModule;


/***/ }),

/***/ "./src/app/pages/projects/projects-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/projects/projects-routing.module.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var ɵ0 = {
    seo: {
        title: "Projects - " + environment_1.environment.seo.title,
        description: "Together with some very nice people I'm involved in different kinds of personal, fun but also professional projects. They range from building software services & products, to organising conferences & meetups that build communities.",
        shareImg: '/assets/share/projects-talksworkshops.png',
    },
};
exports.ɵ0 = ɵ0;
var ProjectsRoutingModule = /** @class */ (function () {
    function ProjectsRoutingModule() {
    }
    return ProjectsRoutingModule;
}());
exports.ProjectsRoutingModule = ProjectsRoutingModule;


/***/ }),

/***/ "./src/app/pages/projects/projects.component.ngfactory.js":
/*!****************************************************************!*\
  !*** ./src/app/pages/projects/projects.component.ngfactory.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./projects.component.scss.shim.ngstyle */ "./src/app/pages/projects/projects.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ng-lazyload-image */ "ng-lazyload-image");
var i3 = __webpack_require__(/*! ./projects.component */ "./src/app/pages/projects/projects.component.ts");
var styles_ProjectsComponent = [i0.styles];
var RenderType_ProjectsComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_ProjectsComponent, data: {} });
exports.RenderType_ProjectsComponent = RenderType_ProjectsComponent;
function View_ProjectsComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, "h1", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 4, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" 4. Sometimes I'm busy, on cool "])), (_l()(), i1.ɵeld(3, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["projects"])), (_l()(), i1.ɵted(-1, null, ["! "])), (_l()(), i1.ɵeld(6, 0, null, null, 7, "p", [["class", "intro"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Together with some very nice people I'm involved in different kinds of personal, fun but also professional projects. They range from "])), (_l()(), i1.ɵeld(8, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["building software services & products"])), (_l()(), i1.ɵted(-1, null, [", to "])), (_l()(), i1.ɵeld(11, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["organising conferences & meetups that build communities"])), (_l()(), i1.ɵted(-1, null, [".\n"])), (_l()(), i1.ɵeld(14, 0, null, null, 16, "article", [], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 2, "a", [["class", "ignoreexternal"], ["href", "https://ng-be.org"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 1, "img", [["alt", "NG-BE"]], null, null, null, null, null)), i1.ɵdid(17, 1720320, null, 0, i2.LazyLoadImageDirective, [i1.ElementRef, i1.NgZone, i1.PLATFORM_ID, [2, "options"]], { lazyImage: [0, "lazyImage"] }, null), (_l()(), i1.ɵeld(18, 0, null, null, 12, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(19, 0, null, null, 1, "h2", [["id", "ngbe"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["NG-BE: Belgium's Angular Conference"])), (_l()(), i1.ɵeld(21, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" NG-BE is "])), (_l()(), i1.ɵeld(23, 0, null, null, 1, "a", [["href", "https://ng-be.org"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["the Belgian Angular conference"])), (_l()(), i1.ɵted(-1, null, [" and its first edition was held at the beautiful Holiday Inn Ghent, Expo venue in Ghent on December 8 & 9, 2016. NG-BE is the perfect opportunity for the Belgian Angular community to learn about the latest Angular v2+ developments. "])), (_l()(), i1.ɵeld(26, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Together with Jurgen ("])), (_l()(), i1.ɵeld(28, 0, null, null, 1, "a", [["href", "https://twitter.com/jvandemo"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["@jvandemo"])), (_l()(), i1.ɵted(-1, null, [") we've bootstrapped this awesome community project. Thanks for being a great co-organiser Jurgen! "])), (_l()(), i1.ɵeld(31, 0, null, null, 15, "article", [], null, null, null, null, null)), (_l()(), i1.ɵeld(32, 0, null, null, 2, "a", [["class", "ignoreexternal"], ["href", "http://sponsormatch.eu"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(33, 0, null, null, 1, "img", [["alt", "SponsorMatch"]], null, null, null, null, null)), i1.ɵdid(34, 1720320, null, 0, i2.LazyLoadImageDirective, [i1.ElementRef, i1.NgZone, i1.PLATFORM_ID, [2, "options"]], { lazyImage: [0, "lazyImage"] }, null), (_l()(), i1.ɵeld(35, 0, null, null, 11, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(36, 0, null, null, 1, "h2", [["id", "sponsormatch"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["SponsorMatch - The match-making marketplace for sponsorships"])), (_l()(), i1.ɵeld(38, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), i1.ɵeld(39, 0, null, null, 1, "a", [["href", "http://sponsormatch.eu"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["SponsorMatch"])), (_l()(), i1.ɵted(-1, null, [" is a platform that brings organisers and sponsors together. It\u2019s a mash-up between a funding- and datingplatform for organisers and companies in their quest for interesting, well defined audience targeted sponsoring opportunities! "])), (_l()(), i1.ɵeld(42, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Kurt ("])), (_l()(), i1.ɵeld(44, 0, null, null, 1, "a", [["href", "https://twitter.com/cosinski"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["@Cosinski"])), (_l()(), i1.ɵted(-1, null, [") contacted me in 2016 to start-up this project. Beginning of 2018 we've relaunched with our 2nd version. "])), (_l()(), i1.ɵeld(47, 0, null, null, 24, "article", [], null, null, null, null, null)), (_l()(), i1.ɵeld(48, 0, null, null, 2, "a", [["class", "ignoreexternal"], ["href", "http://jsbe.io"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(49, 0, null, null, 1, "img", [["alt", "JSBE.io"]], null, null, null, null, null)), i1.ɵdid(50, 1720320, null, 0, i2.LazyLoadImageDirective, [i1.ElementRef, i1.NgZone, i1.PLATFORM_ID, [2, "options"]], { lazyImage: [0, "lazyImage"] }, null), (_l()(), i1.ɵeld(51, 0, null, null, 20, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(52, 0, null, null, 1, "h2", [["id", "jsbe"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["The JSBE Meetup group"])), (_l()(), i1.ɵeld(54, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), i1.ɵeld(55, 0, null, null, 1, "a", [["href", "http://jsbe.io"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["JSBE"])), (_l()(), i1.ɵted(-1, null, [" aims to maintain a user group for all sorts of topics related to the javascript ecosystem, including front-end, back-end, mobile & IOT, at various locations across Belgium. Who is welcome? Well everyone! "])), (_l()(), i1.ɵeld(58, 0, null, null, 13, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Together with a nice group of enthusiastic people we bring hot JS topics to the public in a nice and comfortable setting. I recently, since October 2018, left the team to gain extra-time for other projects. Thanks for the years of being part of a great team Kwinten("])), (_l()(), i1.ɵeld(60, 0, null, null, 1, "a", [["href", "https://twitter.com/KwintenP"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["@KwintenP"])), (_l()(), i1.ɵted(-1, null, ["), Dennis ("])), (_l()(), i1.ɵeld(63, 0, null, null, 1, "a", [["href", "https://twitter.com/dennisjaamann"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["@dennisjaamann"])), (_l()(), i1.ɵted(-1, null, ["), Jan ("])), (_l()(), i1.ɵeld(66, 0, null, null, 1, "a", [["href", "https://twitter.com/Mr_Jean"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["@Mr_Jean"])), (_l()(), i1.ɵted(-1, null, [") & Steven ("])), (_l()(), i1.ɵeld(69, 0, null, null, 1, "a", [["href", "https://twitter.com/stevenbeeckman"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["@stevenbeeckman"])), (_l()(), i1.ɵted(-1, null, ["). "]))], function (_ck, _v) { var currVal_0 = "assets/images/projects/ngbe.svg"; _ck(_v, 17, 0, currVal_0); var currVal_1 = "assets/images/projects/sponsormatch.png"; _ck(_v, 34, 0, currVal_1); var currVal_2 = "assets/images/projects/jsbe.jpg"; _ck(_v, 50, 0, currVal_2); }, null); }
exports.View_ProjectsComponent_0 = View_ProjectsComponent_0;
function View_ProjectsComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "sv-projects", [], null, null, null, View_ProjectsComponent_0, RenderType_ProjectsComponent)), i1.ɵdid(1, 49152, null, 0, i3.ProjectsComponent, [], null, null)], null, null); }
exports.View_ProjectsComponent_Host_0 = View_ProjectsComponent_Host_0;
var ProjectsComponentNgFactory = i1.ɵccf("sv-projects", i3.ProjectsComponent, View_ProjectsComponent_Host_0, {}, {}, []);
exports.ProjectsComponentNgFactory = ProjectsComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/projects/projects.component.scss.shim.ngstyle.js":
/*!************************************************************************!*\
  !*** ./src/app/pages/projects/projects.component.scss.shim.ngstyle.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["[_nghost-%COMP%] {\n  display: block;\n}\n\narticle[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #f6f6f6;\n}\n\narticle[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\narticle[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n  border: none;\n  margin: 0;\n}\n\narticle[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: block;\n  width: 60%;\n  margin: 0 auto 20px auto;\n}\n\n@media (min-width: 921px) {\n  article[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    float: left;\n    display: block;\n    max-width: 120px;\n    margin-right: 30px;\n  }\n}\n\n@media (min-width: 1281px) {\n  article[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    float: left;\n    display: block;\n    max-width: 200px;\n    margin-right: 40px;\n  }\n}\n\narticle[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\narticle[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  -webkit-animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n          animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n\n@media (min-width: 921px) {\n  article[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    margin-left: 240px;\n  }\n}\n\n@media (min-width: 921px) {\n  article[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    margin-left: 150px;\n  }\n}\n\n@media (min-width: 1281px) {\n  article[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    margin-left: 240px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW12bG9lYmVyZ2hzL1Byb2plY3RzL0t3ZXJyaS9rd2Vycmktb3NzL3Byb2plY3RzL3NhbXZsb2ViZXJnaHMvc3JjL2FwcC9wYWdlcy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3NhbXZsb2ViZXJnaHMvc3JjL2FwcC9wYWdlcy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGNBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtBQ0FGOztBREVFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0U7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FDREo7O0FESUU7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0FDRko7O0FESUk7RUFMRjtJQU1JLFdBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFQ0RKO0FBQ0Y7O0FER0k7RUFaRjtJQWFJLFdBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFQ0FKO0FBQ0Y7O0FERUk7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQ0FOOztBREdJO0VBQ0Usd0VBQUE7VUFBQSxnRUFBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtBQ0ROOztBRE1FO0VBQ0U7SUFDRSxrQkFBQTtFQ0pKO0FBQ0Y7O0FET0U7RUFDRTtJQUNFLGtCQUFBO0VDTEo7QUFDRjs7QURRRTtFQUNFO0lBQ0Usa0JBQUE7RUNOSjtBQUNGIiwiZmlsZSI6InByb2plY3RzL3NhbXZsb2ViZXJnaHMvc3JjL2FwcC9wYWdlcy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYXJ0aWNsZSB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y2ZjZmNjtcblxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG5cbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgJiA+IGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWFyZ2luOiAwIGF1dG8gMjBweCBhdXRvO1xuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWF4LXdpZHRoOiAxMjBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTI4MXB4KSB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICA6aG92ZXIgaW1nIHtcbiAgICAgIGFuaW1hdGlvbjogc2hha2UgMC44MnMgY3ViaWMtYmV6aWVyKC4zNiwgLjA3LCAuMTksIC45NykgYm90aDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xuICAgIH1cblxuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSB7XG4gICAgJiA+IGRpdiB7XG4gICAgICBtYXJnaW4tbGVmdDogMjQwcHg7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSB7XG4gICAgJiA+IGRpdiB7XG4gICAgICBtYXJnaW4tbGVmdDogMTUwcHg7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyODFweCkge1xuICAgICYgPiBkaXYge1xuICAgICAgbWFyZ2luLWxlZnQ6IDI0MHB4O1xuICAgIH1cbiAgfVxuXG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5hcnRpY2xlIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjZmNmY2O1xufVxuYXJ0aWNsZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cbmFydGljbGU6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cbmFydGljbGUgPiBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogMCBhdXRvIDIwcHggYXV0bztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkge1xuICBhcnRpY2xlID4gYSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWF4LXdpZHRoOiAxMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjgxcHgpIHtcbiAgYXJ0aWNsZSA+IGEge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICB9XG59XG5hcnRpY2xlID4gYSBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5hcnRpY2xlID4gYSA6aG92ZXIgaW1nIHtcbiAgYW5pbWF0aW9uOiBzaGFrZSAwLjgycyBjdWJpYy1iZXppZXIoMC4zNiwgMC4wNywgMC4xOSwgMC45NykgYm90aDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSB7XG4gIGFydGljbGUgPiBkaXYge1xuICAgIG1hcmdpbi1sZWZ0OiAyNDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSB7XG4gIGFydGljbGUgPiBkaXYge1xuICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyODFweCkge1xuICBhcnRpY2xlID4gZGl2IHtcbiAgICBtYXJnaW4tbGVmdDogMjQwcHg7XG4gIH1cbn0iXX0= */"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/pages/projects/projects.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/projects/projects.component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    return ProjectsComponent;
}());
exports.ProjectsComponent = ProjectsComponent;


/***/ }),

/***/ "./src/app/pages/projects/projects.module.ngfactory.js":
/*!*************************************************************!*\
  !*** ./src/app/pages/projects/projects.module.ngfactory.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./projects.module */ "./src/app/pages/projects/projects.module.ts");
var i2 = __webpack_require__(/*! ../../../../../../node_modules/@angular/router/router.ngfactory */ "../../node_modules/@angular/router/router.ngfactory.js");
var i3 = __webpack_require__(/*! ./projects.component.ngfactory */ "./src/app/pages/projects/projects.component.ngfactory.js");
var i4 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i5 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var i6 = __webpack_require__(/*! ../../shared/highlight.service */ "./src/app/shared/highlight.service.ts");
var i7 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i8 = __webpack_require__(/*! ./projects-routing.module */ "./src/app/pages/projects/projects-routing.module.ts");
var i9 = __webpack_require__(/*! ng-lazyload-image */ "ng-lazyload-image");
var i10 = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var i11 = __webpack_require__(/*! ./projects.component */ "./src/app/pages/projects/projects.component.ts");
var ProjectsModuleNgFactory = i0.ɵcmf(i1.ProjectsModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.ɵangular_packages_router_router_lNgFactory, i3.ProjectsComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i4.NgLocalization, i4.NgLocaleLocalization, [i0.LOCALE_ID, [2, i4.ɵangular_packages_common_common_a]]), i0.ɵmpd(4608, i5.HttpXsrfTokenExtractor, i5.ɵangular_packages_common_http_http_g, [i4.DOCUMENT, i0.PLATFORM_ID, i5.ɵangular_packages_common_http_http_e]), i0.ɵmpd(4608, i5.ɵangular_packages_common_http_http_h, i5.ɵangular_packages_common_http_http_h, [i5.HttpXsrfTokenExtractor, i5.ɵangular_packages_common_http_http_f]), i0.ɵmpd(5120, i5.HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [i5.ɵangular_packages_common_http_http_h]), i0.ɵmpd(4608, i5.ɵangular_packages_common_http_http_d, i5.ɵangular_packages_common_http_http_d, []), i0.ɵmpd(6144, i5.XhrFactory, null, [i5.ɵangular_packages_common_http_http_d]), i0.ɵmpd(4608, i5.HttpXhrBackend, i5.HttpXhrBackend, [i5.XhrFactory]), i0.ɵmpd(6144, i5.HttpBackend, null, [i5.HttpXhrBackend]), i0.ɵmpd(4608, i5.HttpHandler, i5.ɵHttpInterceptingHandler, [i5.HttpBackend, i0.Injector]), i0.ɵmpd(4608, i5.HttpClient, i5.HttpClient, [i5.HttpHandler]), i0.ɵmpd(4608, i6.HighlightService, i6.HighlightService, [i0.PLATFORM_ID]), i0.ɵmpd(1073742336, i4.CommonModule, i4.CommonModule, []), i0.ɵmpd(1073742336, i7.RouterModule, i7.RouterModule, [[2, i7.ɵangular_packages_router_router_a], [2, i7.Router]]), i0.ɵmpd(1073742336, i8.ProjectsRoutingModule, i8.ProjectsRoutingModule, []), i0.ɵmpd(1073742336, i5.HttpClientXsrfModule, i5.HttpClientXsrfModule, []), i0.ɵmpd(1073742336, i5.HttpClientModule, i5.HttpClientModule, []), i0.ɵmpd(1073742336, i9.LazyLoadImageModule, i9.LazyLoadImageModule, []), i0.ɵmpd(1073742336, i10.SharedModule, i10.SharedModule, []), i0.ɵmpd(1073742336, i1.ProjectsModule, i1.ProjectsModule, []), i0.ɵmpd(1024, i7.ROUTES, function () { return [[{ path: "", component: i11.ProjectsComponent, data: i8.ɵ0 }]]; }, []), i0.ɵmpd(256, i5.ɵangular_packages_common_http_http_e, "XSRF-TOKEN", []), i0.ɵmpd(256, i5.ɵangular_packages_common_http_http_f, "X-XSRF-TOKEN", [])]); });
exports.ProjectsModuleNgFactory = ProjectsModuleNgFactory;


/***/ }),

/***/ "./src/app/pages/projects/projects.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/projects/projects.module.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ProjectsModule = /** @class */ (function () {
    function ProjectsModule() {
    }
    return ProjectsModule;
}());
exports.ProjectsModule = ProjectsModule;


/***/ }),

/***/ "./src/app/pages/talks/talks-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/talks/talks-routing.module.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var ɵ0 = {
    seo: {
        title: "Talks and workshops - " + environment_1.environment.seo.title,
        description: "The things I talk about can be of all kinds. Mostly I share the things I do for the projects I'm involved in, but it can also just be a good incentive to learn in-depth about a specific technology. Or trying to solve a problem I faced during my day-to-day coding battles, setting up architectures, etc.",
        shareImg: '/assets/share/projects-talksworkshops.png',
    },
};
exports.ɵ0 = ɵ0;
var TalksRoutingModule = /** @class */ (function () {
    function TalksRoutingModule() {
    }
    return TalksRoutingModule;
}());
exports.TalksRoutingModule = TalksRoutingModule;


/***/ }),

/***/ "./src/app/pages/talks/talks.component.ngfactory.js":
/*!**********************************************************!*\
  !*** ./src/app/pages/talks/talks.component.ngfactory.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./talks.component.scss.shim.ngstyle */ "./src/app/pages/talks/talks.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ng-lazyload-image */ "ng-lazyload-image");
var i5 = __webpack_require__(/*! ./talks.component */ "./src/app/pages/talks/talks.component.ts");
var styles_TalksComponent = [i0.styles];
var RenderType_TalksComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_TalksComponent, data: {} });
exports.RenderType_TalksComponent = RenderType_TalksComponent;
function View_TalksComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, "h1", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 4, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" 3. I like to "])), (_l()(), i1.ɵeld(3, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["talk and organise"])), (_l()(), i1.ɵted(-1, null, [", giving others a stage! "])), (_l()(), i1.ɵeld(6, 0, null, null, 11, "p", [["class", "intro"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" The things I talk about can be of all kinds. Mostly I share the things I do for the "])), (_l()(), i1.ɵeld(8, 0, null, null, 5, "a", [["routerLink", "/projects"], ["routerLinkActive", "active"], ["title", "Projects I'm involved in"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 9).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(9, 671744, [[2, 4]], 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵdid(10, 1720320, null, 2, i2.RouterLinkActive, [i2.Router, i1.ElementRef, i1.Renderer2, [2, i2.RouterLink], [2, i2.RouterLinkWithHref]], { routerLinkActive: [0, "routerLinkActive"] }, null), i1.ɵqud(603979776, 1, { links: 1 }), i1.ɵqud(603979776, 2, { linksWithHrefs: 1 }), (_l()(), i1.ɵted(-1, null, ["projects I'm involved in"])), (_l()(), i1.ɵted(-1, null, [", but it can also just be a good incentive to "])), (_l()(), i1.ɵeld(15, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["learn in-depth about a specific technology"])), (_l()(), i1.ɵted(-1, null, [". Or trying to solve a problem I faced during my day-to-day coding battles, setting up architectures, etc.\n"])), (_l()(), i1.ɵeld(18, 0, null, null, 5, "div", [["class", "sidepic right"]], null, null, null, null, null)), (_l()(), i1.ɵeld(19, 0, null, null, 2, "a", [["class", "ignoreexternal"], ["href", "https://photos.google.com/share/AF1QipOpnydz8dY6QJdHvklZjL6oKZ7fsOP997hS31_MHk3oxhoc5DQLmovXp__mn4Ksfg?key=VDhDYl9kVXI0LUgzZUdyYVhfM2lPM2JkRlFNZUxn"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(20, 0, null, null, 1, "img", [["alt", "NG-BE 2018 opening ceremony"]], null, null, null, null, null)), i1.ɵdid(21, 1720320, null, 0, i4.LazyLoadImageDirective, [i1.ElementRef, i1.NgZone, i1.PLATFORM_ID, [2, "options"]], { lazyImage: [0, "lazyImage"] }, null), (_l()(), i1.ɵeld(22, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Opening ceremony by Sam, Wassim & Jurgen, NG-BE 2018"])), (_l()(), i1.ɵeld(24, 0, null, null, 10, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Besides that "])), (_l()(), i1.ɵeld(26, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["I love to train people in using the technologies I love to explore"])), (_l()(), i1.ɵted(-1, null, [" as an early adaptor. As a regular co-organiser of the "])), (_l()(), i1.ɵeld(29, 0, null, null, 1, "a", [["href", "https://www.meetup.com/angular-belgium/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Angular Belgium"])), (_l()(), i1.ɵted(-1, null, [" meetup group and "])), (_l()(), i1.ɵeld(32, 0, null, null, 1, "a", [["href", "https://ng-be.org"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["NG-BE conference"])), (_l()(), i1.ɵted(-1, null, [" I try to invite & welcome as many passionate developers as we can.\n"])), (_l()(), i1.ɵeld(35, 0, null, null, 7, "p", [], null, null, null, null, null)), (_l()(), i1.ɵeld(36, 0, null, null, 2, "a", [["routerLink", "/"], ["title", "Get in touch to have me talk at your event!"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 37).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(37, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Contact me"])), (_l()(), i1.ɵted(-1, null, [" if you'd like me to talk at your event, I would be very happy to! And "])), (_l()(), i1.ɵeld(40, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["if you are a speaker, experienced or only beginning, we have a stage for you!"])), (_l()(), i1.ɵted(-1, null, [" We invite everybody to come and speak about any web-related topic they are willing to share something about!\n"])), (_l()(), i1.ɵeld(43, 0, null, null, 1, "h2", [["id", "upcoming-events"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Upcoming events"])), (_l()(), i1.ɵeld(45, 0, null, null, 108, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(46, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(47, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [11/03] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(50, 0, null, null, 1, "a", [["class", "title"], ["href", "https://www.meetup.com/en-AU/Nulab-Techtalks-AMS/events/269136985"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Creating powerful offline experiences with Workbox "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(53, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Amsterdam, The Netherlands ( "])), (_l()(), i1.ɵeld(55, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Nulab Tech Talks Amsterdam - Speaker"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵeld(58, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(59, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [02/04] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(62, 0, null, null, 1, "a", [["class", "title"], ["href", "https://www.meetup.com/AngularJS-Bucharest/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Better SEO & sharing on social media platforms with Angular Universal "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(65, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Bucharest, Romania ( "])), (_l()(), i1.ɵeld(67, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Angular Bucharest - Speaker"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵeld(70, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(71, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [04/04] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(74, 0, null, null, 1, "a", [["class", "title"], ["href", "https://codecamp.ro/iasi"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Creating powerful offline experiences with Workbox "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(77, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Iasi, Romania ( "])), (_l()(), i1.ɵeld(79, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Codecamp - Iasi - Speaker"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵeld(82, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(83, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [23/04] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(86, 0, null, null, 1, "a", [["class", "title"], ["href", "https://meetup.com/GDG-toulouse"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Scully - The Static Site Generator for Angular - Getting started and adding custom plugins "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(89, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Toulouse, France ( "])), (_l()(), i1.ɵeld(91, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["GDG Toulouse - Speaker"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵeld(94, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(95, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [07/05] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(98, 0, null, null, 1, "a", [["class", "title"], ["href", "https://meetup.com/Angular-Belgium"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Scully - The Static Site Generator for Angular - Getting started and adding custom plugins "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(101, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Lier, Belgium ( "])), (_l()(), i1.ɵeld(103, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Angular Belgium - Speaker & Organiser"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵeld(106, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(107, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [12/05] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(110, 0, null, null, 1, "a", [["class", "title"], ["href", "https://www.meetup.com/Angular-Meetup-Leipzig/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Scully - The Static Site Generator for Angular - Getting started and adding custom plugins "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(113, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Leipzig, Germany ( "])), (_l()(), i1.ɵeld(115, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Angular Meetup Leipzig #28 - Speaker"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵeld(118, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(119, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [13/05] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(122, 0, null, null, 1, "a", [["class", "title"], ["href", "https://www.meetup.com/angular-heidelberg/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Scully - The Static Site Generator for Angular - Getting started and adding custom plugins "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(125, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Heidelberg, Germany ( "])), (_l()(), i1.ɵeld(127, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Angular Heidelberg Meetup v? - Speaker"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵeld(130, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(131, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [10/06] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(134, 0, null, null, 1, "a", [["class", "title"], ["href", "https://www.meetup.com/Angular-Malaga/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" TBD "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(137, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Malaga, Spain ( "])), (_l()(), i1.ɵeld(139, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Angular Malaga - Speaker"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵeld(142, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(143, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [03-04/12] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(146, 0, null, null, 1, "a", [["class", "title"], ["href", "https://ng-be.org/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" NG-BE 2020 "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(149, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Holiday Inn - Ghent, Belgium ( "])), (_l()(), i1.ɵeld(151, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Organiser"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵeld(154, 0, null, null, 1, "h2", [["id", "speaker-info"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["My speaker info"])), (_l()(), i1.ɵeld(156, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Please refer to the following details if you are looking for my picture and (short) bio.\n"])), (_l()(), i1.ɵeld(158, 0, null, null, 28, "table", [["class", "speaker-info"]], null, null, null, null, null)), (_l()(), i1.ɵeld(159, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), i1.ɵeld(160, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Link to picture:"])), (_l()(), i1.ɵeld(162, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), i1.ɵeld(163, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), i1.ɵeld(164, 0, null, null, 1, "a", [["href", "https://samvloeberghs.be/assets/images/samvloeberghs.jpg"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" https://samvloeberghs.be/assets/images/samvloeberghs.jpg "])), (_l()(), i1.ɵeld(166, 0, null, null, 7, "tr", [], null, null, null, null, null)), (_l()(), i1.ɵeld(167, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Short speaker bio:"])), (_l()(), i1.ɵeld(169, 0, null, null, 4, "td", [], null, null, null, null, null)), (_l()(), i1.ɵeld(170, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Sam is a freelance software architect and Internet entrepreneur, currently focusing on frontend technologies. Co-organiser of NG-BE and Angular Belgium meetup. "])), (_l()(), i1.ɵeld(172, 0, null, null, 1, "a", [["href", "https://samvloeberghs.be"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["https://samvloeberghs.be"])), (_l()(), i1.ɵeld(174, 0, null, null, 12, "tr", [], null, null, null, null, null)), (_l()(), i1.ɵeld(175, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Full speaker bio:"])), (_l()(), i1.ɵeld(177, 0, null, null, 9, "td", [], null, null, null, null, null)), (_l()(), i1.ɵeld(178, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Sam is a freelance software architect and Internet entrepreneur, currently focusing on frontend technologies and frameworks like Angular and Workbox while keeping a sharp eye on the basics and advanced aspects of HTML5. "])), (_l()(), i1.ɵeld(180, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" He is the co-organiser of the Belgian Angular Conference, NG-BE and the Angular Belgium meetup. Sam writes about the technologies he uses on a daily base at "])), (_l()(), i1.ɵeld(182, 0, null, null, 1, "a", [["href", "https://samvloeberghs.be"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["https://samvloeberghs.be"])), (_l()(), i1.ɵted(-1, null, [". "])), (_l()(), i1.ɵeld(185, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" While he is not working he likes to spend time with his family and working out in the gym or going for a long walk! "])), (_l()(), i1.ɵeld(187, 0, null, null, 1, "h2", [["id", "past-events"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Past events"])), (_l()(), i1.ɵeld(189, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["2020"])), (_l()(), i1.ɵeld(191, 0, null, null, 30, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(192, 0, null, null, 14, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(193, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [05/03/20] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(196, 0, null, null, 1, "a", [["class", "title"], ["href", "https://www.meetup.com/Fronteers-BE/events/267803949/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Creating powerful offline experiences with Workbox "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(199, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Leuven, Belgium ( "])), (_l()(), i1.ɵeld(201, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Fronteers meetup at Cronos Leuven - Speaker"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(205, 0, null, null, 1, "a", [["href", "https://docs.google.com/presentation/d/e/2PACX-1vQ0nl-4qYQKemuFO8zHoMDa2gboXpDbOoy1PjoaUbJeoSdx8b9z-uGvsEo0fnzDVrsaBaEH4C4hQ0cW/pub?start=false&loop=true&delayms=60000"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" slides "])), (_l()(), i1.ɵeld(207, 0, null, null, 14, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(208, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [29/01/20] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(211, 0, null, null, 1, "a", [["class", "title"], ["href", "https://www.meetup.com/en-AU/BeJS-JS-community-in-Brussels/events/267808671/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Creating powerful offline experiences with Workbox "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(214, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Brussels ( "])), (_l()(), i1.ɵeld(216, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["BeJS #2 meetup - Speaker"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(220, 0, null, null, 1, "a", [["href", "https://docs.google.com/presentation/d/e/2PACX-1vTB_oqOPkEBH839xEUVhO9EG3Y5eRHtaEcvL1-az8eqgx4t0Q-le2eVF-B6wWWY1AH0FLe-oR8cbC7O/pub?start=false&loop=false&delayms=60000"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" slides "])), (_l()(), i1.ɵeld(222, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["2019"])), (_l()(), i1.ɵeld(224, 0, null, null, 141, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(225, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(226, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [05-06/12/19] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(229, 0, null, null, 1, "a", [["class", "title"], ["href", "https://ng-be.org/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" NG-BE 2019 "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(232, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Holiday Inn - Ghent, Belgium ( "])), (_l()(), i1.ɵeld(234, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Organiser"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵeld(237, 0, null, null, 14, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(238, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [18/10] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(241, 0, null, null, 1, "a", [["class", "title"], ["href", "https://ngspain.com/schedule/2019-10-19?sessionId=117"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Better SEO & sharing on social media platforms with Angular Universal "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(244, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Google Campus - Madrid, Spain ( "])), (_l()(), i1.ɵeld(246, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["ngSpain Conference - Speaker"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(250, 0, null, null, 1, "a", [["href", "https://docs.google.com/presentation/d/1XJFJyw9ZTzzv_e2npdCYlbGb020DVXc05PxSW8oXYr8/edit"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" slides "])), (_l()(), i1.ɵeld(252, 0, null, null, 14, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(253, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [04/10] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(256, 0, null, null, 1, "a", [["class", "title"], ["href", "https://ordina-jworks.github.io/join/#sam-vloeberghs"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Better SEO & sharing on social media platforms with Angular Universal "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(259, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Elewijt Center, Belgium ( "])), (_l()(), i1.ɵeld(261, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Ordina JWorks - JOIN event - Speaker"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(265, 0, null, null, 1, "a", [["href", "https://docs.google.com/presentation/d/11C_VmhHKA13pfTzjfC22hXV-7WT2ZRfsQtnDHlTW694/edit?usp=sharing"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" slides "])), (_l()(), i1.ɵeld(267, 0, null, null, 14, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(268, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [02/10] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(271, 0, null, null, 1, "a", [["class", "title"], ["href", "https://www.meetup.com/JSLuxembourg/events/261315634/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Implementing powerful offline experiences with Workbox "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(274, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Luxembourg City, Luxembourg ( "])), (_l()(), i1.ɵeld(276, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["JavaScript Meetup Luxembourg - Speaker"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(280, 0, null, null, 1, "a", [["href", "https://docs.google.com/presentation/d/16_yZG-Z4wuVkluaAuSvo0d4qaJcBcy6BEuSH71JRivY/edit?usp=sharing"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" slides "])), (_l()(), i1.ɵeld(282, 0, null, null, 11, "li", [["class", "canceled"]], null, null, null, null, null)), (_l()(), i1.ɵeld(283, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [19/09] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(286, 0, null, null, 1, "a", [["class", "title"], ["href", "https://gears.gent/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Implementing powerful offline experiences with Workbox (event canceled) "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(289, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" ArtCube - Ghent, Belgium ( "])), (_l()(), i1.ɵeld(291, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Gears by Showpad - Speaker"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵeld(294, 0, null, null, 14, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(295, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [18/09] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(298, 0, null, null, 1, "a", [["class", "title"], ["href", "https://www.meetup.com/jsbe-io/events/264182223/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Implementing powerful offline experiences with Workbox "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(301, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" House of Innovation - Antwerp, Belgium ( "])), (_l()(), i1.ɵeld(303, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["JSBE meetup - Speaker"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(307, 0, null, null, 1, "a", [["href", "https://docs.google.com/presentation/d/1Q4Yf2tb7Rf4oYD5NwXgzV1pD62MHFZ2CUfAn2BFqEmg/edit?usp=sharing"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" slides "])), (_l()(), i1.ɵeld(309, 0, null, null, 14, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(310, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [25/07] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(313, 0, null, null, 1, "a", [["class", "title"], ["href", "https://www.meetup.com/Angular-Portugal/events/262583435/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Better SEO & sharing on social media platforms with Angular Universal "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(316, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" KWAN - Lisbon, Portugal ( "])), (_l()(), i1.ɵeld(318, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Angular Portugal Meetup - Speaker"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(322, 0, null, null, 1, "a", [["href", "https://docs.google.com/presentation/d/17oImRmLS0mhOWT0XvLUSuGzADIXsb91gRP-Yp6f4Sw8/edit?usp=sharing"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" slides "])), (_l()(), i1.ɵeld(324, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(325, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [15/05] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(328, 0, null, null, 1, "a", [["class", "title"], ["href", "https://editx.eu/it-challenge/angular-challenge-europe-2019"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Angular Challenge Europe - Finals "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(331, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Showpad - Ghent, Belgium ( "])), (_l()(), i1.ɵeld(333, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Speaker & organiser "])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵeld(336, 0, null, null, 14, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(337, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [25/04] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(340, 0, null, null, 1, "a", [["class", "title"], ["href", "https://www.meetup.com/Angular-Belgium/events/259904753/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Going offline with Workbox & Custom decorators in TypeScript "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(343, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" PeopleWear - Lier, Belgium ( "])), (_l()(), i1.ɵeld(345, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Angular Belgium - Speaker & organiser"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(349, 0, null, null, 1, "a", [["href", "https://docs.google.com/presentation/d/12-9fqNMKzXquZkrdyZ6uFc8AYsls1VqmqMLZpJvKyfc/edit?usp=sharing"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" slides "])), (_l()(), i1.ɵeld(351, 0, null, null, 14, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(352, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [21/02] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(355, 0, null, null, 1, "a", [["class", "title"], ["href", "https://www.meetup.com/jsbe-io/events/258273772/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Angular Universal & SEO and Consumer Driven contract testing with Pact "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(358, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Axxes - Antwerp, Belgium ( "])), (_l()(), i1.ɵeld(360, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Speaker"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(364, 0, null, null, 1, "a", [["href", "https://docs.google.com/presentation/d/1jDzp1Lw4zJMhgPAk7UZweDIf2ALmpI2EqIIXyi_UoJE/edit?usp=sharing"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" slides "])), (_l()(), i1.ɵeld(366, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["2018"])), (_l()(), i1.ɵeld(368, 0, null, null, 84, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(369, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(370, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [20/12] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(373, 0, null, null, 1, "a", [["class", "title"], ["href", "https://www.meetup.com/Angular-Belgium/events/256381588/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" End of year meetup: Angular & Firebase "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(376, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Cegeka - Ghent, Belgium ( "])), (_l()(), i1.ɵeld(378, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Angular Belgium host"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵeld(381, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(382, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [06-07/12] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(385, 0, null, null, 1, "a", [["class", "title"], ["href", "https://ng-be.org/2018"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" NG-BE 2018 "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(388, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Holiday Inn - Ghent, Belgium ( "])), (_l()(), i1.ɵeld(390, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Organiser"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵeld(393, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(394, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [4/10] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(397, 0, null, null, 1, "a", [["class", "title"], ["href", "https://www.meetup.com/Angular-Belgium/events/254730800/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Oauth 2.0, Nest and Enterprise Architectures "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(400, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Ordina - Mechelen, Belgium ( "])), (_l()(), i1.ɵeld(402, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Angular Belgium host"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵeld(405, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(406, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [31/05] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(409, 0, null, null, 1, "a", [["class", "title"], ["href", "https://www.meetup.com/Angular-Belgium/events/249697455/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" NGXS & Architectures for huge Angular Apps "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(412, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Microsoft - Brussels, Belgium ( "])), (_l()(), i1.ɵeld(414, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Angular Belgium & JSBE host"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵeld(417, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(418, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [17/05] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(421, 0, null, null, 1, "a", [["class", "title"], ["href", "https://editx.eu/it-challenge/angular-challenge-ng-be-google"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Angular Challenge - Finals "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(424, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Google - Brussels, Belgium ( "])), (_l()(), i1.ɵeld(426, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Organiser"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵeld(429, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(430, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [15/03] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(433, 0, null, null, 1, "a", [["class", "title"], ["href", "https://www.meetup.com/jsbe-io/events/247378674/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Lighthouse (CI) & What's next for JavaScript "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(436, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" KommaBoard - Mechelen, Belgium ( "])), (_l()(), i1.ɵeld(438, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["JSBE host"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵeld(441, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(442, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [15/02] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(445, 0, null, null, 1, "a", [["class", "title"], ["href", "https://www.meetup.com/jsbe-io/events/246879506/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Make testing great again and WebComponents with StencilJS "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(448, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Showpad - Ghent, Belgium ( "])), (_l()(), i1.ɵeld(450, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["JSBE host"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵeld(453, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["2017"])), (_l()(), i1.ɵeld(455, 0, null, null, 96, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(456, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(457, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [07-08/12] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(460, 0, null, null, 1, "a", [["class", "title"], ["href", "https://ng-be.org/2017"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" NG-BE 2017 "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(463, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Holiday Inn - Ghent, Belgium ( "])), (_l()(), i1.ɵeld(465, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Organiser"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵeld(468, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(469, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [05/12] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(472, 0, null, null, 1, "a", [["class", "title"], ["href", "https://www.meetup.com/jsbe-io/events/245107224/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Web audio and RxJS & VueJS "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(475, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" TVH - Waregem, Belgium ( "])), (_l()(), i1.ɵeld(477, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["JSBE host"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵeld(480, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(481, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [13/06] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(484, 0, null, null, 1, "a", [["class", "title"], ["href", "https://www.meetup.com/jsbe-io/events/240025854/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" React Native & Creating and maintaining OpenSource libraries "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(487, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Spilberg - Antwerpen, Belgium ( "])), (_l()(), i1.ɵeld(489, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["JSBE host"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵeld(492, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(493, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [30/05] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(496, 0, null, null, 1, "a", [["class", "title"], ["href", "https://www.meetup.com/jsbe-io/events/239901685/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Angular in a microservice world and Module loading vs Module bundling "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(499, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Teamleader - Ghent, Belgium ( "])), (_l()(), i1.ɵeld(501, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["JSBE host"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵeld(504, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(505, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [17/05] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(508, 0, null, null, 1, "a", [["class", "title"], ["href", "https://www.meetup.com/en-AU/Angular-Belgium/events/239475929/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" May Meetup: Angular CLI & i18n "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(511, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" AE - Leuven, Belgium ( "])), (_l()(), i1.ɵeld(513, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["JSBE host"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵeld(516, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(517, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [13/03] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(520, 0, null, null, 1, "a", [["class", "title"], ["href", "https://www.meetup.com/jsbe-io/events/238029184/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Firebase & Ionic 2 "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(523, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Hackages - Brussels, Belgium ( "])), (_l()(), i1.ɵeld(525, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["JSBE host"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵeld(528, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(529, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [23/02] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(532, 0, null, null, 1, "a", [["class", "title"], ["href", "https://www.meetup.com/jsbe-io/events/234124697/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Building secure web applications "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(535, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Ordina - Mechelen, Belgium ( "])), (_l()(), i1.ɵeld(537, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["JSBE host"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵeld(540, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(541, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [12/02] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(544, 0, null, null, 1, "a", [["class", "title"], ["href", "https://ngvikings.org/schedule/day2?sessionId=84"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Getting started with Ionic 2 & Firebase "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(547, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" ngVikings - Copenhagen, Belgium ( "])), (_l()(), i1.ɵeld(549, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["workshop trainer"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵeld(552, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["2016"])), (_l()(), i1.ɵeld(554, 0, null, null, 120, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(555, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(556, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [08-09/12] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(559, 0, null, null, 1, "a", [["class", "title"], ["href", "https://ng-be.org/2016"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" NG-BE 2016 "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(562, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Holiday Inn - Ghent, Belgium ( "])), (_l()(), i1.ɵeld(564, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Organiser"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵeld(567, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(568, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [01/12] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(571, 0, null, null, 1, "a", [["class", "title"], ["href", "https://www.meetup.com/Angular-Belgium/events/235752358/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" December Meetup: RXJS/Redux & E2E Testing with Protractor "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(574, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Voxbone - Brussels, Belgium ( "])), (_l()(), i1.ɵeld(576, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["JSBE host"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵeld(579, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(580, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [23/11] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(583, 0, null, null, 1, "a", [["class", "title"], ["href", "https://www.meetup.com/jsbe-io/events/232274308/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Optimizing Single Page Applications for production "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(586, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Madewithlove - Leuven, Belgium ( "])), (_l()(), i1.ɵeld(588, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["JSBE host & speaker"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵeld(591, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(592, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [28/10] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(595, 0, null, null, 1, "a", [["class", "title"], ["href", "http://hackages.io"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Testing Angular applications with Protractor and CucumberJS "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(598, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Hackages - Brussels, Belgium ( "])), (_l()(), i1.ɵeld(600, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["workshop trainer"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵeld(603, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(604, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [22/10] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(607, 0, null, null, 1, "a", [["class", "title"], ["href", "https://devfest.be/schedule/day1?sessionId=212"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Testing web applications with Protractor & CucumberJS ( "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(610, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" GDG Devfest Belgium, Brussels ( "])), (_l()(), i1.ɵeld(612, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["speaker"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵeld(615, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(616, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [19/10] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(619, 0, null, null, 1, "a", [["class", "title"], ["href", "http://www.meetup.com/Ionic-Belgium-Meetup/events/231960971/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Implementation of the NG-BE 2016 app in Ionic 2 "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(622, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Adneom - Brussels, Belgium ( "])), (_l()(), i1.ɵeld(624, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["JSBE host & speaker"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵeld(627, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(628, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [07/09] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(631, 0, null, null, 1, "a", [["class", "title"], ["href", "https://www.meetup.com/jsbe-io/events/232273738/"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Redux integration in React and Angular v2 "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(634, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Teamleader - Ghent, Belgium ( "])), (_l()(), i1.ɵeld(636, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["JSBE host"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵeld(639, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(640, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [18/04] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(643, 0, null, null, 1, "a", [["class", "title"], ["href", "https://www.eventbrite.com/e/an-evening-learning-angular-20-at-realdolmen-tickets-23194640795#"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" ES2015 and beyond "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(646, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Microsoft - Brussels, Belgium ( "])), (_l()(), i1.ɵeld(648, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["JSBE host"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵeld(651, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(652, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [18/04] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(655, 0, null, null, 1, "a", [["class", "title"], ["href", "https://www.eventbrite.com/e/an-evening-learning-angular-20-at-realdolmen-tickets-23194640795#"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Testing Angular applications with Protractor and CucumberJS "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(658, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" RealDolmen - Halle, Belgium ( "])), (_l()(), i1.ɵeld(660, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["speaker"])), (_l()(), i1.ɵted(-1, null, [" ) "])), (_l()(), i1.ɵeld(663, 0, null, null, 11, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(664, 0, null, null, 1, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" [11/03] "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(667, 0, null, null, 1, "a", [["class", "title"], ["href", "https://hackages.io#"], ["rel", "noopener"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Testing AngularJS 1.x applications with Protractor and CucumberJS "])), (_l()(), i1.ɵted(-1, null, [" - "])), (_l()(), i1.ɵeld(670, 0, null, null, 4, "span", [["class", "where"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Crelan - Brussels, Belgium ( "])), (_l()(), i1.ɵeld(672, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["workshop trainer"])), (_l()(), i1.ɵted(-1, null, [" ) "]))], function (_ck, _v) { var currVal_2 = "/projects"; _ck(_v, 9, 0, currVal_2); var currVal_3 = "active"; _ck(_v, 10, 0, currVal_3); var currVal_4 = "assets/images/talks/ngbe2018.jpg"; _ck(_v, 21, 0, currVal_4); var currVal_7 = "/"; _ck(_v, 37, 0, currVal_7); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 9).target; var currVal_1 = i1.ɵnov(_v, 9).href; _ck(_v, 8, 0, currVal_0, currVal_1); var currVal_5 = i1.ɵnov(_v, 37).target; var currVal_6 = i1.ɵnov(_v, 37).href; _ck(_v, 36, 0, currVal_5, currVal_6); }); }
exports.View_TalksComponent_0 = View_TalksComponent_0;
function View_TalksComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "sv-talks", [], null, null, null, View_TalksComponent_0, RenderType_TalksComponent)), i1.ɵdid(1, 49152, null, 0, i5.TalksComponent, [], null, null)], null, null); }
exports.View_TalksComponent_Host_0 = View_TalksComponent_Host_0;
var TalksComponentNgFactory = i1.ɵccf("sv-talks", i5.TalksComponent, View_TalksComponent_Host_0, {}, {}, []);
exports.TalksComponentNgFactory = TalksComponentNgFactory;


/***/ }),

/***/ "./src/app/pages/talks/talks.component.scss.shim.ngstyle.js":
/*!******************************************************************!*\
  !*** ./src/app/pages/talks/talks.component.scss.shim.ngstyle.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["[_nghost-%COMP%] {\n  display: block;\n}\n\nul[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  padding: 0;\n  margin-bottom: 20px;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\nul[_ngcontent-%COMP%]   li.canceled[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n\n@media (max-width: 920px) {\n  table.speaker-info[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media (min-width: 920px) {\n  table.speaker-info[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    min-width: 225px;\n  }\n}\n\ntable.speaker-info[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.speaker-info[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  display: block;\n  word-break: break-word;\n  padding-left: 0;\n}\n\ntable.speaker-info[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW12bG9lYmVyZ2hzL1Byb2plY3RzL0t3ZXJyaS9rd2Vycmktb3NzL3Byb2plY3RzL3NhbXZsb2ViZXJnaHMvc3JjL2FwcC9wYWdlcy90YWxrcy90YWxrcy5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL3NhbXZsb2ViZXJnaHMvc3JjL2FwcC9wYWdlcy90YWxrcy90YWxrcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUVFLGdCQUFBO0VBQ0EsVUFBQTtFQUVFLG1CQUFBO0FDREo7O0FESUU7RUFFSSxtQkFBQTtBQ0hOOztBRE1JO0VBQ0UsNkJBQUE7QUNKTjs7QURZRTtFQUZGO0lBR0ksV0FBQTtFQ1JGO0FBQ0Y7O0FEV0k7RUFERjtJQUVJLGdCQUFBO0VDUko7QUFDRjs7QURXRTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUVFLGVBQUE7QUNWTjs7QURjRTtFQUNFLGtCQUFBO0FDWkoiLCJmaWxlIjoicHJvamVjdHMvc2FtdmxvZWJlcmdocy9zcmMvYXBwL3BhZ2VzL3RhbGtzL3RhbGtzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxudWwge1xuXG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjoge1xuICAgIGJvdHRvbTogMjBweDtcbiAgfVxuXG4gIGxpIHtcbiAgICBtYXJnaW46IHtcbiAgICAgIGJvdHRvbTogMTVweDtcbiAgICB9XG5cbiAgICAmLmNhbmNlbGVkIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIH1cbiAgfVxuXG59XG5cbnRhYmxlLnNwZWFrZXItaW5mbyB7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDkyMHB4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICB0aCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMHB4KSB7XG4gICAgICBtaW4td2lkdGg6IDIyNXB4O1xuICAgIH1cbiAgfVxuXG4gIHRoLCB0ZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICBwYWRkaW5nOiB7XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cbiAgfVxuXG4gIHRkIHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIH1cbn1cblxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxudWwge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxudWwgbGkge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxudWwgbGkuY2FuY2VsZWQge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDkyMHB4KSB7XG4gIHRhYmxlLnNwZWFrZXItaW5mbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5MjBweCkge1xuICB0YWJsZS5zcGVha2VyLWluZm8gdGgge1xuICAgIG1pbi13aWR0aDogMjI1cHg7XG4gIH1cbn1cbnRhYmxlLnNwZWFrZXItaW5mbyB0aCwgdGFibGUuc3BlYWtlci1pbmZvIHRkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbnRhYmxlLnNwZWFrZXItaW5mbyB0ZCB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn0iXX0= */"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/pages/talks/talks.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/talks/talks.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TalksComponent = /** @class */ (function () {
    function TalksComponent() {
    }
    return TalksComponent;
}());
exports.TalksComponent = TalksComponent;


/***/ }),

/***/ "./src/app/pages/talks/talks.module.ngfactory.js":
/*!*******************************************************!*\
  !*** ./src/app/pages/talks/talks.module.ngfactory.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./talks.module */ "./src/app/pages/talks/talks.module.ts");
var i2 = __webpack_require__(/*! ../../../../../../node_modules/@angular/router/router.ngfactory */ "../../node_modules/@angular/router/router.ngfactory.js");
var i3 = __webpack_require__(/*! ./talks.component.ngfactory */ "./src/app/pages/talks/talks.component.ngfactory.js");
var i4 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i5 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var i6 = __webpack_require__(/*! ../../shared/highlight.service */ "./src/app/shared/highlight.service.ts");
var i7 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i8 = __webpack_require__(/*! ./talks-routing.module */ "./src/app/pages/talks/talks-routing.module.ts");
var i9 = __webpack_require__(/*! ng-lazyload-image */ "ng-lazyload-image");
var i10 = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var i11 = __webpack_require__(/*! ./talks.component */ "./src/app/pages/talks/talks.component.ts");
var TalksModuleNgFactory = i0.ɵcmf(i1.TalksModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.ɵangular_packages_router_router_lNgFactory, i3.TalksComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i4.NgLocalization, i4.NgLocaleLocalization, [i0.LOCALE_ID, [2, i4.ɵangular_packages_common_common_a]]), i0.ɵmpd(4608, i5.HttpXsrfTokenExtractor, i5.ɵangular_packages_common_http_http_g, [i4.DOCUMENT, i0.PLATFORM_ID, i5.ɵangular_packages_common_http_http_e]), i0.ɵmpd(4608, i5.ɵangular_packages_common_http_http_h, i5.ɵangular_packages_common_http_http_h, [i5.HttpXsrfTokenExtractor, i5.ɵangular_packages_common_http_http_f]), i0.ɵmpd(5120, i5.HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [i5.ɵangular_packages_common_http_http_h]), i0.ɵmpd(4608, i5.ɵangular_packages_common_http_http_d, i5.ɵangular_packages_common_http_http_d, []), i0.ɵmpd(6144, i5.XhrFactory, null, [i5.ɵangular_packages_common_http_http_d]), i0.ɵmpd(4608, i5.HttpXhrBackend, i5.HttpXhrBackend, [i5.XhrFactory]), i0.ɵmpd(6144, i5.HttpBackend, null, [i5.HttpXhrBackend]), i0.ɵmpd(4608, i5.HttpHandler, i5.ɵHttpInterceptingHandler, [i5.HttpBackend, i0.Injector]), i0.ɵmpd(4608, i5.HttpClient, i5.HttpClient, [i5.HttpHandler]), i0.ɵmpd(4608, i6.HighlightService, i6.HighlightService, [i0.PLATFORM_ID]), i0.ɵmpd(1073742336, i4.CommonModule, i4.CommonModule, []), i0.ɵmpd(1073742336, i7.RouterModule, i7.RouterModule, [[2, i7.ɵangular_packages_router_router_a], [2, i7.Router]]), i0.ɵmpd(1073742336, i8.TalksRoutingModule, i8.TalksRoutingModule, []), i0.ɵmpd(1073742336, i5.HttpClientXsrfModule, i5.HttpClientXsrfModule, []), i0.ɵmpd(1073742336, i5.HttpClientModule, i5.HttpClientModule, []), i0.ɵmpd(1073742336, i9.LazyLoadImageModule, i9.LazyLoadImageModule, []), i0.ɵmpd(1073742336, i10.SharedModule, i10.SharedModule, []), i0.ɵmpd(1073742336, i1.TalksModule, i1.TalksModule, []), i0.ɵmpd(1024, i7.ROUTES, function () { return [[{ path: "", component: i11.TalksComponent, data: i8.ɵ0 }]]; }, []), i0.ɵmpd(256, i5.ɵangular_packages_common_http_http_e, "XSRF-TOKEN", []), i0.ɵmpd(256, i5.ɵangular_packages_common_http_http_f, "X-XSRF-TOKEN", [])]); });
exports.TalksModuleNgFactory = TalksModuleNgFactory;


/***/ }),

/***/ "./src/app/pages/talks/talks.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/talks/talks.module.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TalksModule = /** @class */ (function () {
    function TalksModule() {
    }
    return TalksModule;
}());
exports.TalksModule = TalksModule;


/***/ }),

/***/ "./src/app/shared/data.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/data.service.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var http_1 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
var environment_1 = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var i2 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var DataService = /** @class */ (function () {
    function DataService(http, transferState) {
        this.http = http;
        this.transferState = transferState;
    }
    DataService.prototype.getData = function (file) {
        var _this = this;
        var key = platform_browser_1.makeStateKey(file);
        if (this.transferState.hasKey(key)) {
            return rxjs_1.of(this.transferState.get(key, null));
        }
        return this.http
            .get("" + environment_1.environment.url + file)
            .pipe(operators_1.tap(function (response) { return _this.transferState.set(key, response); }));
    };
    DataService.prototype.getDataText = function (file) {
        var _this = this;
        var key = platform_browser_1.makeStateKey(file);
        if (this.transferState.hasKey(key)) {
            return rxjs_1.of(this.transferState.get(key, null));
        }
        return this.http
            .get("" + environment_1.environment.url + file, { responseType: 'text' })
            .pipe(operators_1.tap(function (response) { return _this.transferState.set(key, response); }));
    };
    DataService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DataService_Factory() { return new DataService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.TransferState)); }, token: DataService, providedIn: "root" });
    return DataService;
}());
exports.DataService = DataService;


/***/ }),

/***/ "./src/app/shared/environment.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/environment.service.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
var workbox_window_1 = __webpack_require__(/*! workbox-window */ "workbox-window");
var environment_1 = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var EnvironmentService = /** @class */ (function () {
    function EnvironmentService(platformId) {
        this.platformId = platformId;
        this.newVersionAvailable = new rxjs_1.BehaviorSubject(false);
        this.applicationUpdateOngoing = new rxjs_1.BehaviorSubject(false);
        this.applicationUpdateRequested = new rxjs_1.BehaviorSubject(false);
        this.serviceWorkerReady = new rxjs_1.BehaviorSubject(false);
        this.swFile = '/sw.js';
        this.swRegisterOptions = {};
        this.newVersionAvailable$ = this.newVersionAvailable.asObservable();
        this.applicationUpdateOngoing$ = this.applicationUpdateOngoing.asObservable();
        // Check that we are in a browsers and service workers are available
        // Only register service worker when in production
        if (common_1.isPlatformBrowser(this.platformId) && 'serviceWorker' in navigator && environment_1.environment.production) {
            this.registerServiceWorker();
        }
        else {
            this.serviceWorkerReady.next(true);
        }
    }
    EnvironmentService.prototype.isEnvironmentReady = function () {
        var _this = this;
        var swReady$ = new rxjs_1.Observable(function (observer) {
            _this.serviceWorkerReady.pipe(operators_1.filter(function (serviceWorkerReady) { return serviceWorkerReady; }), operators_1.first()).subscribe(function (_) {
                observer.next(true);
                observer.complete();
            });
        });
        return swReady$.toPromise();
    };
    EnvironmentService.prototype.update = function () {
        this.applicationUpdateRequested.next(true);
    };
    EnvironmentService.prototype.registerServiceWorker = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var wb, postsCache, e_1;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        wb = new workbox_window_1.Workbox(this.swFile, this.swRegisterOptions);
                        wb.addEventListener('activated', function (event) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                if (!event.isUpdate) {
                                    // If your service worker is configured to precache assets, those
                                    // assets should all be available now.
                                    // window.location.reload();
                                    // Send a message telling the service worker to claim the clients
                                    // This is the first install, so the functionality of the app
                                    // should meet the functionality of the service worker!
                                    wb.messageSW({ type: 'CLIENTS_CLAIM' });
                                    // The service worker is ready, so we can bootstrap the app
                                    this.serviceWorkerReady.next(true);
                                }
                                return [2 /*return*/];
                            });
                        }); });
                        // we use this waiting listener to show updates
                        // when the user refreshes the page and a new service worker is going to waiting
                        // this is specificaly only valid when refreshed!
                        wb.addEventListener('waiting', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return tslib_1.__generator(this, function (_a) {
                                // inform any functionality that is interested in this update
                                this.newVersionAvailable.next(true);
                                // listen to application update requests
                                this.applicationUpdateRequested.pipe(operators_1.filter(function (applicationUpdateRequested) { return applicationUpdateRequested; }), operators_1.first()).subscribe(function (_) {
                                    wb.addEventListener('controlling', function () {
                                        // new service worker became active, lets reload!
                                        window.location.reload();
                                    });
                                    // Send a message telling the service worker to skip waiting.
                                    // This will trigger the `controlling` event handler above.
                                    // Note: for this to work, you have to add a message
                                    // listener in your service worker. See below.
                                    wb.messageSW({ type: 'SKIP_WAITING' });
                                    // let anybody interested know we are updating the application
                                    _this.applicationUpdateOngoing.next(true);
                                });
                                return [2 /*return*/];
                            });
                        }); });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, wb.register()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, caches.open('posts')];
                    case 3:
                        postsCache = _a.sent();
                        postsCache.add('posts/data.json');
                        if (navigator.serviceWorker.controller) {
                            this.serviceWorkerReady.next(true);
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.log('error registering service worker', e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    EnvironmentService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function EnvironmentService_Factory() { return new EnvironmentService(i0.ɵɵinject(i0.PLATFORM_ID)); }, token: EnvironmentService, providedIn: "root" });
    return EnvironmentService;
}());
exports.EnvironmentService = EnvironmentService;


/***/ }),

/***/ "./src/app/shared/highlight.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/highlight.service.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
__webpack_require__(/*! prismjs */ "prismjs");
__webpack_require__(/*! prismjs/plugins/line-numbers/prism-line-numbers */ "prismjs/plugins/line-numbers/prism-line-numbers");
__webpack_require__(/*! prismjs/plugins/line-highlight/prism-line-highlight */ "prismjs/plugins/line-highlight/prism-line-highlight");
__webpack_require__(/*! prismjs/components/prism-css */ "prismjs/components/prism-css");
__webpack_require__(/*! prismjs/components/prism-bash */ "prismjs/components/prism-bash");
__webpack_require__(/*! prismjs/components/prism-json */ "prismjs/components/prism-json");
__webpack_require__(/*! prismjs/components/prism-javascript */ "prismjs/components/prism-javascript");
__webpack_require__(/*! prismjs/components/prism-markup */ "prismjs/components/prism-markup");
__webpack_require__(/*! prismjs/components/prism-typescript */ "prismjs/components/prism-typescript");
__webpack_require__(/*! prismjs/components/prism-sass */ "prismjs/components/prism-sass");
__webpack_require__(/*! prismjs/components/prism-scss */ "prismjs/components/prism-scss");
var HighlightService = /** @class */ (function () {
    function HighlightService(platformId) {
        this.platformId = platformId;
    }
    HighlightService.prototype.highlightAll = function () {
        if (common_1.isPlatformBrowser(this.platformId)) {
            Prism.highlightAll();
        }
    };
    return HighlightService;
}());
exports.HighlightService = HighlightService;


/***/ }),

/***/ "./src/app/shared/hire-me/hire-me.component.ngfactory.js":
/*!***************************************************************!*\
  !*** ./src/app/shared/hire-me/hire-me.component.ngfactory.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./hire-me.component.scss.shim.ngstyle */ "./src/app/shared/hire-me/hire-me.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./hire-me.component */ "./src/app/shared/hire-me/hire-me.component.ts");
var styles_HireMeComponent = [i0.styles];
var RenderType_HireMeComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_HireMeComponent, data: {} });
exports.RenderType_HireMeComponent = RenderType_HireMeComponent;
function View_HireMeComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 0, "i", [["class", "fa fa-handshake-o"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 5, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" By reading this article I hope you can find a solution for your problem. If it still seems a little bit unclear, "])), (_l()(), i1.ɵeld(3, 0, null, null, 2, "a", [["class", "alert-link"], ["routerLink", "/kwerri"], ["title", "Hire me"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 4).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(4, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["you can hire me"])), (_l()(), i1.ɵted(-1, null, [" for helping you solve your specific problem or usecase. Sometimes even just a quick code review or second opinion can make a great difference.\n"]))], function (_ck, _v) { var currVal_2 = "/kwerri"; _ck(_v, 4, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 4).target; var currVal_1 = i1.ɵnov(_v, 4).href; _ck(_v, 3, 0, currVal_0, currVal_1); }); }
exports.View_HireMeComponent_0 = View_HireMeComponent_0;
function View_HireMeComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "sv-hire-me", [], null, null, null, View_HireMeComponent_0, RenderType_HireMeComponent)), i1.ɵdid(1, 49152, null, 0, i4.HireMeComponent, [], null, null)], null, null); }
exports.View_HireMeComponent_Host_0 = View_HireMeComponent_Host_0;
var HireMeComponentNgFactory = i1.ɵccf("sv-hire-me", i4.HireMeComponent, View_HireMeComponent_Host_0, {}, {}, []);
exports.HireMeComponentNgFactory = HireMeComponentNgFactory;


/***/ }),

/***/ "./src/app/shared/hire-me/hire-me.component.scss.shim.ngstyle.js":
/*!***********************************************************************!*\
  !*** ./src/app/shared/hire-me/hire-me.component.scss.shim.ngstyle.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["[_nghost-%COMP%] {\n  display: block;\n  margin-bottom: 20px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'%3E%3Cpath fill='%2331708f' d='M519.2 127.9l-47.6-47.6A56.252 56.252 0 0 0 432 64H205.2c-14.8 0-29.1 5.9-39.6 16.3L118 127.9H0v255.7h64c17.6 0 31.8-14.2 31.9-31.7h9.1l84.6 76.4c30.9 25.1 73.8 25.7 105.6 3.8 12.5 10.8 26 15.9 41.1 15.9 18.2 0 35.3-7.4 48.8-24 22.1 8.7 48.2 2.6 64-16.8l26.2-32.3c5.6-6.9 9.1-14.8 10.9-23h57.9c.1 17.5 14.4 31.7 31.9 31.7h64V127.9H519.2zM48 351.6c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16zm390-6.9l-26.1 32.2c-2.8 3.4-7.8 4-11.3 1.2l-23.9-19.4-30 36.5c-6 7.3-15 4.8-18 2.4l-36.8-31.5-15.6 19.2c-13.9 17.1-39.2 19.7-55.3 6.6l-97.3-88H96V175.8h41.9l61.7-61.6c2-.8 3.7-1.5 5.7-2.3H262l-38.7 35.5c-29.4 26.9-31.1 72.3-4.4 101.3 14.8 16.2 61.2 41.2 101.5 4.4l8.2-7.5 108.2 87.8c3.4 2.8 3.9 7.9 1.2 11.3zm106-40.8h-69.2c-2.3-2.8-4.9-5.4-7.7-7.7l-102.7-83.4 12.5-11.4c6.5-6 7-16.1 1-22.6L367 167.1c-6-6.5-16.1-6.9-22.6-1l-55.2 50.6c-9.5 8.7-25.7 9.4-34.6 0-9.3-9.9-8.5-25.1 1.2-33.9l65.6-60.1c7.4-6.8 17-10.5 27-10.5l83.7-.2c2.1 0 4.1.8 5.5 2.3l61.7 61.6H544v128zm48 47.7c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16z'/%3E%3C/svg%3E%0A\");\n  background-repeat: no-repeat;\n  background-size: 35px 35px;\n  background-position:  25px 15px;\n  position: relative;\n  padding: 15px 15px 15px 85px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: transparent;\n  border-radius: 4px;\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n[_nghost-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-top-color: #a6e1ec;\n}\n[_nghost-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #31708f;\n}\n[_nghost-%COMP%]    > p[_ngcontent-%COMP%], [_nghost-%COMP%]    > ul[_ngcontent-%COMP%], [_nghost-%COMP%]    > ol[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  line-height: 1.8em;\n}\n[_nghost-%COMP%]    > p[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n[_nghost-%COMP%]   .alert-link[_ngcontent-%COMP%] {\n  color: #245269;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW12bG9lYmVyZ2hzL1Byb2plY3RzL0t3ZXJyaS9rd2Vycmktb3NzL3Byb2plY3RzL3NhbXZsb2ViZXJnaHMvc3JjL2FwcC9zaGFyZWQvaGlyZS1tZS9oaXJlLW1lLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NhbXZsb2ViZXJnaHMvUHJvamVjdHMvS3dlcnJpL2t3ZXJyaS1vc3MvcHJvamVjdHMvc2FtdmxvZWJlcmdocy9zcmMvc2Nzcy9fbWl4aW5zLnNjc3MiLCJwcm9qZWN0cy9zYW12bG9lYmVyZ2hzL3NyYy9hcHAvc2hhcmVkL2hpcmUtbWUvaGlyZS1tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQ0hBLHlyQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSwrQkFBQTtFREdBLGtCQUFBO0VBQ0EsNEJBQUE7RUFHRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUdGLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FFSEY7QUZLRTtFQUNFLHlCQUFBO0FFSEo7QUZNRTtFQUNFLGNBQUE7QUVKSjtBRk9FO0VBR0UsZ0JBQUE7RUFDQSxrQkFBQTtBRVBKO0FGVUU7RUFDRSxlQUFBO0FFUko7QUZXRTtFQUNFLGNBQUE7QUVUSiIsImZpbGUiOiJwcm9qZWN0cy9zYW12bG9lYmVyZ2hzL3NyYy9hcHAvc2hhcmVkL2hpcmUtbWUvaGlyZS1tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ21peGlucyc7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICRzdmctZGF0YTogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDY0MCA1MTInJTNFJTNDcGF0aCBmaWxsPSclMjMzMTcwOGYnIGQ9J001MTkuMiAxMjcuOWwtNDcuNi00Ny42QTU2LjI1MiA1Ni4yNTIgMCAwIDAgNDMyIDY0SDIwNS4yYy0xNC44IDAtMjkuMSA1LjktMzkuNiAxNi4zTDExOCAxMjcuOUgwdjI1NS43aDY0YzE3LjYgMCAzMS44LTE0LjIgMzEuOS0zMS43aDkuMWw4NC42IDc2LjRjMzAuOSAyNS4xIDczLjggMjUuNyAxMDUuNiAzLjggMTIuNSAxMC44IDI2IDE1LjkgNDEuMSAxNS45IDE4LjIgMCAzNS4zLTcuNCA0OC44LTI0IDIyLjEgOC43IDQ4LjIgMi42IDY0LTE2LjhsMjYuMi0zMi4zYzUuNi02LjkgOS4xLTE0LjggMTAuOS0yM2g1Ny45Yy4xIDE3LjUgMTQuNCAzMS43IDMxLjkgMzEuN2g2NFYxMjcuOUg1MTkuMnpNNDggMzUxLjZjLTguOCAwLTE2LTcuMi0xNi0xNnM3LjItMTYgMTYtMTYgMTYgNy4yIDE2IDE2YzAgOC45LTcuMiAxNi0xNiAxNnptMzkwLTYuOWwtMjYuMSAzMi4yYy0yLjggMy40LTcuOCA0LTExLjMgMS4ybC0yMy45LTE5LjQtMzAgMzYuNWMtNiA3LjMtMTUgNC44LTE4IDIuNGwtMzYuOC0zMS41LTE1LjYgMTkuMmMtMTMuOSAxNy4xLTM5LjIgMTkuNy01NS4zIDYuNmwtOTcuMy04OEg5NlYxNzUuOGg0MS45bDYxLjctNjEuNmMyLS44IDMuNy0xLjUgNS43LTIuM0gyNjJsLTM4LjcgMzUuNWMtMjkuNCAyNi45LTMxLjEgNzIuMy00LjQgMTAxLjMgMTQuOCAxNi4yIDYxLjIgNDEuMiAxMDEuNSA0LjRsOC4yLTcuNSAxMDguMiA4Ny44YzMuNCAyLjggMy45IDcuOSAxLjIgMTEuM3ptMTA2LTQwLjhoLTY5LjJjLTIuMy0yLjgtNC45LTUuNC03LjctNy43bC0xMDIuNy04My40IDEyLjUtMTEuNGM2LjUtNiA3LTE2LjEgMS0yMi42TDM2NyAxNjcuMWMtNi02LjUtMTYuMS02LjktMjIuNi0xbC01NS4yIDUwLjZjLTkuNSA4LjctMjUuNyA5LjQtMzQuNiAwLTkuMy05LjktOC41LTI1LjEgMS4yLTMzLjlsNjUuNi02MC4xYzcuNC02LjggMTctMTAuNSAyNy0xMC41bDgzLjctLjJjMi4xIDAgNC4xLjggNS41IDIuM2w2MS43IDYxLjZINTQ0djEyOHptNDggNDcuN2MtOC44IDAtMTYtNy4yLTE2LTE2czcuMi0xNiAxNi0xNiAxNiA3LjIgMTYgMTZjMCA4LjktNy4yIDE2LTE2IDE2eicvJTNFJTNDL3N2ZyUzRSUwQVwiO1xuICBAaW5jbHVkZSBzdmctYmctaWNvbigkc3ZnLWRhdGEsICczNXB4IDM1cHgnLCAnIDI1cHggMTVweCcpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDg1cHg7XG5cbiAgYm9yZGVyOiB7XG4gICAgd2lkdGg6IDFweDtcbiAgICBzdHlsZTogc29saWQ7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHJhZGl1czogNHB4O1xuICB9XG5cbiAgY29sb3I6ICMzMTcwOGY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWVkZjc7XG4gIGJvcmRlci1jb2xvcjogI2JjZThmMTtcblxuICBociB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI2E2ZTFlYztcbiAgfVxuXG4gIGVtIHtcbiAgICBjb2xvcjogIzMxNzA4ZjtcbiAgfVxuXG4gICYgPiBwLFxuICAmID4gdWwsXG4gICYgPiBvbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBsaW5lLWhlaWdodDogMS44ZW07XG4gIH1cblxuICAmID4gcCArIHAge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuXG4gIC5hbGVydC1saW5rIHtcbiAgICBjb2xvcjogIzI0NTI2OTtcbiAgfVxuXG59XG4iLCJAbWl4aW4gc3ZnLWJnLWljb24oJGRhdGEsICRzaXplLCAkcG9zaXRpb246ICcwcHggMHB4Jykge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJGRhdGEpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6ICN7JHNpemV9O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAjeyRwb3NpdGlvbn07XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDY0MCA1MTInJTNFJTNDcGF0aCBmaWxsPSclMjMzMTcwOGYnIGQ9J001MTkuMiAxMjcuOWwtNDcuNi00Ny42QTU2LjI1MiA1Ni4yNTIgMCAwIDAgNDMyIDY0SDIwNS4yYy0xNC44IDAtMjkuMSA1LjktMzkuNiAxNi4zTDExOCAxMjcuOUgwdjI1NS43aDY0YzE3LjYgMCAzMS44LTE0LjIgMzEuOS0zMS43aDkuMWw4NC42IDc2LjRjMzAuOSAyNS4xIDczLjggMjUuNyAxMDUuNiAzLjggMTIuNSAxMC44IDI2IDE1LjkgNDEuMSAxNS45IDE4LjIgMCAzNS4zLTcuNCA0OC44LTI0IDIyLjEgOC43IDQ4LjIgMi42IDY0LTE2LjhsMjYuMi0zMi4zYzUuNi02LjkgOS4xLTE0LjggMTAuOS0yM2g1Ny45Yy4xIDE3LjUgMTQuNCAzMS43IDMxLjkgMzEuN2g2NFYxMjcuOUg1MTkuMnpNNDggMzUxLjZjLTguOCAwLTE2LTcuMi0xNi0xNnM3LjItMTYgMTYtMTYgMTYgNy4yIDE2IDE2YzAgOC45LTcuMiAxNi0xNiAxNnptMzkwLTYuOWwtMjYuMSAzMi4yYy0yLjggMy40LTcuOCA0LTExLjMgMS4ybC0yMy45LTE5LjQtMzAgMzYuNWMtNiA3LjMtMTUgNC44LTE4IDIuNGwtMzYuOC0zMS41LTE1LjYgMTkuMmMtMTMuOSAxNy4xLTM5LjIgMTkuNy01NS4zIDYuNmwtOTcuMy04OEg5NlYxNzUuOGg0MS45bDYxLjctNjEuNmMyLS44IDMuNy0xLjUgNS43LTIuM0gyNjJsLTM4LjcgMzUuNWMtMjkuNCAyNi45LTMxLjEgNzIuMy00LjQgMTAxLjMgMTQuOCAxNi4yIDYxLjIgNDEuMiAxMDEuNSA0LjRsOC4yLTcuNSAxMDguMiA4Ny44YzMuNCAyLjggMy45IDcuOSAxLjIgMTEuM3ptMTA2LTQwLjhoLTY5LjJjLTIuMy0yLjgtNC45LTUuNC03LjctNy43bC0xMDIuNy04My40IDEyLjUtMTEuNGM2LjUtNiA3LTE2LjEgMS0yMi42TDM2NyAxNjcuMWMtNi02LjUtMTYuMS02LjktMjIuNi0xbC01NS4yIDUwLjZjLTkuNSA4LjctMjUuNyA5LjQtMzQuNiAwLTkuMy05LjktOC41LTI1LjEgMS4yLTMzLjlsNjUuNi02MC4xYzcuNC02LjggMTctMTAuNSAyNy0xMC41bDgzLjctLjJjMi4xIDAgNC4xLjggNS41IDIuM2w2MS43IDYxLjZINTQ0djEyOHptNDggNDcuN2MtOC44IDAtMTYtNy4yLTE2LTE2czcuMi0xNiAxNi0xNiAxNiA3LjIgMTYgMTZjMCA4LjktNy4yIDE2LTE2IDE2eicvJTNFJTNDL3N2ZyUzRSUwQVwiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAzNXB4IDM1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246ICAyNXB4IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggODVweDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6ICMzMTcwOGY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWVkZjc7XG4gIGJvcmRlci1jb2xvcjogI2JjZThmMTtcbn1cbjpob3N0IGhyIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2E2ZTFlYztcbn1cbjpob3N0IGVtIHtcbiAgY29sb3I6ICMzMTcwOGY7XG59XG46aG9zdCA+IHAsIDpob3N0ID4gdWwsIDpob3N0ID4gb2wge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBsaW5lLWhlaWdodDogMS44ZW07XG59XG46aG9zdCA+IHAgKyBwIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuOmhvc3QgLmFsZXJ0LWxpbmsge1xuICBjb2xvcjogIzI0NTI2OTtcbn0iXX0= */"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/shared/hire-me/hire-me.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/hire-me/hire-me.component.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HireMeComponent = /** @class */ (function () {
    function HireMeComponent() {
    }
    return HireMeComponent;
}());
exports.HireMeComponent = HireMeComponent;


/***/ }),

/***/ "./src/app/shared/route-helper.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/route-helper.service.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ga_1 = __webpack_require__(/*! angulartics2/ga */ "angulartics2/ga");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var ngx_seo_1 = __webpack_require__(/*! ngx-seo */ "../../dist/ngx-seo/bundles/ngx-seo.umd.js");
var environment_1 = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i2 = __webpack_require__(/*! angulartics2/ga */ "angulartics2/ga");
var i3 = __webpack_require__(/*! ngx-seo */ "../../dist/ngx-seo/bundles/ngx-seo.umd.js");
// inject in root
var RouteHelper = /** @class */ (function () {
    function RouteHelper(router, activatedRoute, angulartics2GoogleAnalytics, seoSocialShareService, jsonLdService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.angulartics2GoogleAnalytics = angulartics2GoogleAnalytics;
        this.seoSocialShareService = seoSocialShareService;
        this.jsonLdService = jsonLdService;
        this.currentUrl = new rxjs_1.BehaviorSubject('');
        this.routes = [, '/', '/posts', '/talks-workshops', '/projects', '/about', '/kwerri'];
        this.angulartics2GoogleAnalytics.startTracking();
        this.setupRouting();
        this.currentUrl$ = this.currentUrl.asObservable();
    }
    RouteHelper.prototype.keyboardNavigate = function (key) {
        if (this.routes[key]) {
            this.router.navigateByUrl(this.routes[key]);
        }
    };
    RouteHelper.prototype.setupRouting = function () {
        var _this = this;
        this.router.events.pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }), operators_1.map(function () { return _this.activatedRoute; }), operators_1.map(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), operators_1.filter(function (route) { return route.outlet === 'primary'; })).subscribe(function (route) {
            var seo = route.snapshot.data['seo'];
            _this.currentUrl.next(_this.router.routerState.snapshot.url);
            if (seo) {
                var jsonLd = _this.jsonLdService.getObject('Website', {
                    name: seo.title,
                    url: environment_1.environment.url + _this.router.routerState.snapshot.url,
                });
                _this.jsonLdService.setData(jsonLd);
                var seoData = {
                    title: seo.title,
                    description: seo.description,
                    image: environment_1.environment.url + seo.shareImg,
                    author: environment_1.environment.seo.author,
                    url: environment_1.environment.url + _this.router.routerState.snapshot.url,
                    type: 'website',
                };
                _this.seoSocialShareService.setData(seoData);
            }
            else {
                var jsonLd = _this.jsonLdService.getObject('Website', {
                    name: environment_1.environment.seo.title,
                    url: environment_1.environment.url,
                });
                _this.jsonLdService.setData(jsonLd);
                var seoData = {
                    title: environment_1.environment.seo.title,
                    description: environment_1.environment.seo.description,
                    image: environment_1.environment.url + environment_1.environment.seo.shareImg,
                    author: environment_1.environment.seo.author,
                    url: environment_1.environment.url,
                    type: 'website',
                };
                _this.seoSocialShareService.setData(seoData);
            }
        });
    };
    RouteHelper.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function RouteHelper_Factory() { return new RouteHelper(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i1.ActivatedRoute), i0.ɵɵinject(i2.Angulartics2GoogleAnalytics), i0.ɵɵinject(i3.SeoSocialShareService), i0.ɵɵinject(i3.JsonLdService)); }, token: RouteHelper, providedIn: "root" });
    return RouteHelper;
}());
exports.RouteHelper = RouteHelper;


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var http_1 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var ng_lazyload_image_1 = __webpack_require__(/*! ng-lazyload-image */ "ng-lazyload-image");
var highlight_service_1 = __webpack_require__(/*! ./highlight.service */ "./src/app/shared/highlight.service.ts");
var hire_me_component_1 = __webpack_require__(/*! ./hire-me/hire-me.component */ "./src/app/shared/hire-me/hire-me.component.ts");
var MODULES = [
    common_1.CommonModule,
    router_1.RouterModule,
    http_1.HttpClientModule,
    ng_lazyload_image_1.LazyLoadImageModule,
];
var PIPES = [
// put pipes here
];
var COMPONENTS = [
    hire_me_component_1.HireMeComponent,
];
var PROVIDERS = [
    highlight_service_1.HighlightService,
];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule,
            providers: PROVIDERS.slice(),
        };
    };
    return SharedModule;
}());
exports.SharedModule = SharedModule;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: true,
    url: 'http://localhost:8443',
    facebookAppId: '663623713804818',
    twitterSiteCreator: '@samvloeberghs',
    seo: {
        title: 'Sam Vloeberghs - Freelance Webdeveloper & Software Engineer',
        description: 'I\'m a Belgium based freelance software engineer and Internet entrepreneur, building webapplications and trying to make the world wide web a better place for you to spend your days.',
        shareImg: '/assets/share/home.jpg',
        type: 'Website',
        author: 'Sam Vloeberghs',
        section: 'Webdevelopment',
    },
};


/***/ }),

/***/ "./src/main.server.ts":
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_server_module_ngfactory_1 = __webpack_require__(/*! ./app/app.server.module.ngfactory */ "./src/app/app.server.module.ngfactory.js");
exports.AppServerModuleNgFactory = app_server_module_ngfactory_1.AppServerModuleNgFactory;
var __lazy_0__ = __webpack_require__(/*! ./app/pages/home/home.module.ngfactory.js */ "./src/app/pages/home/home.module.ngfactory.js");
var __lazy_1__ = __webpack_require__(/*! ./app/pages/kwerri/kwerri.module.ngfactory.js */ "./src/app/pages/kwerri/kwerri.module.ngfactory.js");
var __lazy_2__ = __webpack_require__(/*! ./app/pages/about/about.module.ngfactory.js */ "./src/app/pages/about/about.module.ngfactory.js");
var __lazy_3__ = __webpack_require__(/*! ./app/pages/talks/talks.module.ngfactory.js */ "./src/app/pages/talks/talks.module.ngfactory.js");
var __lazy_4__ = __webpack_require__(/*! ./app/pages/projects/projects.module.ngfactory.js */ "./src/app/pages/projects/projects.module.ngfactory.js");
var __lazy_5__ = __webpack_require__(/*! ./app/pages/posts/posts.module.ngfactory.js */ "./src/app/pages/posts/posts.module.ngfactory.js");
var app_server_module_1 = __webpack_require__(/*! ./app/app.server.module */ "./src/app/app.server.module.ts");
exports.AppServerModule = app_server_module_1.AppServerModule;
exports.LAZY_MODULE_MAP = { "./pages/home/home.module#HomeModule": __lazy_0__.HomeModuleNgFactory, "./pages/kwerri/kwerri.module#KwerriModule": __lazy_1__.KwerriModuleNgFactory, "./pages/about/about.module#AboutModule": __lazy_2__.AboutModuleNgFactory, "./pages/talks/talks.module#TalksModule": __lazy_3__.TalksModuleNgFactory, "./pages/projects/projects.module#ProjectsModule": __lazy_4__.ProjectsModuleNgFactory, "./pages/posts/posts.module#PostsModule": __lazy_5__.PostsModuleNgFactory };


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/main.server.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/samvloeberghs/Projects/Kwerri/kwerri-oss/projects/samvloeberghs/src/main.server.ts */"./src/main.server.ts");


/***/ }),

/***/ "@angular/animations":
/*!**************************************!*\
  !*** external "@angular/animations" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations");

/***/ }),

/***/ "@angular/animations/browser":
/*!**********************************************!*\
  !*** external "@angular/animations/browser" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations/browser");

/***/ }),

/***/ "@angular/common":
/*!**********************************!*\
  !*** external "@angular/common" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/common/http":
/*!***************************************!*\
  !*** external "@angular/common/http" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/platform-browser":
/*!********************************************!*\
  !*** external "@angular/platform-browser" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),

/***/ "@angular/platform-browser/animations":
/*!*******************************************************!*\
  !*** external "@angular/platform-browser/animations" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser/animations");

/***/ }),

/***/ "@angular/platform-server":
/*!*******************************************!*\
  !*** external "@angular/platform-server" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-server");

/***/ }),

/***/ "@angular/router":
/*!**********************************!*\
  !*** external "@angular/router" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "@nguniversal/express-engine/tokens":
/*!*****************************************************!*\
  !*** external "@nguniversal/express-engine/tokens" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/express-engine/tokens");

/***/ }),

/***/ "@nguniversal/module-map-ngfactory-loader":
/*!***********************************************************!*\
  !*** external "@nguniversal/module-map-ngfactory-loader" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/module-map-ngfactory-loader");

/***/ }),

/***/ "angulartics2":
/*!*******************************!*\
  !*** external "angulartics2" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("angulartics2");

/***/ }),

/***/ "angulartics2/ga":
/*!**********************************!*\
  !*** external "angulartics2/ga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("angulartics2/ga");

/***/ }),

/***/ "ng-lazyload-image":
/*!************************************!*\
  !*** external "ng-lazyload-image" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ng-lazyload-image");

/***/ }),

/***/ "prismjs":
/*!**************************!*\
  !*** external "prismjs" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prismjs");

/***/ }),

/***/ "prismjs/components/prism-bash":
/*!************************************************!*\
  !*** external "prismjs/components/prism-bash" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-bash");

/***/ }),

/***/ "prismjs/components/prism-css":
/*!***********************************************!*\
  !*** external "prismjs/components/prism-css" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-css");

/***/ }),

/***/ "prismjs/components/prism-javascript":
/*!******************************************************!*\
  !*** external "prismjs/components/prism-javascript" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-javascript");

/***/ }),

/***/ "prismjs/components/prism-json":
/*!************************************************!*\
  !*** external "prismjs/components/prism-json" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-json");

/***/ }),

/***/ "prismjs/components/prism-markup":
/*!**************************************************!*\
  !*** external "prismjs/components/prism-markup" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-markup");

/***/ }),

/***/ "prismjs/components/prism-sass":
/*!************************************************!*\
  !*** external "prismjs/components/prism-sass" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-sass");

/***/ }),

/***/ "prismjs/components/prism-scss":
/*!************************************************!*\
  !*** external "prismjs/components/prism-scss" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-scss");

/***/ }),

/***/ "prismjs/components/prism-typescript":
/*!******************************************************!*\
  !*** external "prismjs/components/prism-typescript" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-typescript");

/***/ }),

/***/ "prismjs/plugins/line-highlight/prism-line-highlight":
/*!**********************************************************************!*\
  !*** external "prismjs/plugins/line-highlight/prism-line-highlight" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prismjs/plugins/line-highlight/prism-line-highlight");

/***/ }),

/***/ "prismjs/plugins/line-numbers/prism-line-numbers":
/*!******************************************************************!*\
  !*** external "prismjs/plugins/line-numbers/prism-line-numbers" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prismjs/plugins/line-numbers/prism-line-numbers");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),

/***/ "workbox-window":
/*!*********************************!*\
  !*** external "workbox-window" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("workbox-window");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map