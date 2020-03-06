/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable, Optional, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
/**
 * @record
 */
export function JsonLd() { }
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
            object = tslib_1.__assign({ '@context': context }, object);
        }
        if (rawData) {
            object = tslib_1.__assign({}, object, rawData);
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
export { JsonLdService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1sZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNlby8iLCJzb3VyY2VzIjpbImxpYi9qc29uLWxkL2pzb24tbGQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBRTlELDRCQUVDO0FBRUQ7SUFLRSx1QkFDb0QsVUFBa0IsRUFDckIsR0FBUTtRQURMLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDckIsUUFBRyxHQUFILEdBQUcsQ0FBSztJQUV6RCxDQUFDOzs7OztJQUVELCtCQUFPOzs7O0lBQVAsVUFBUSxJQUF1QjtRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7OztJQUVELGlDQUFTOzs7Ozs7SUFBVCxVQUFVLElBQVksRUFBRSxPQUFnQixFQUFFLE9BQTZCO1FBQTdCLHdCQUFBLEVBQUEsNkJBQTZCOztZQUNqRSxNQUFNLEdBQVc7WUFDbkIsT0FBTyxFQUFFLElBQUk7U0FDZDtRQUNELElBQUksT0FBTyxFQUFFO1lBQ1gsTUFBTSxzQkFDSixVQUFVLEVBQUUsT0FBTyxJQUNoQixNQUFNLENBQ1YsQ0FBQztTQUNIO1FBQ0QsSUFBSSxPQUFPLEVBQUU7WUFDWCxNQUFNLHdCQUNELE1BQU0sRUFDTixPQUFPLENBQ1gsQ0FBQztTQUNIO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELDhCQUFNOzs7SUFBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFTyxxQ0FBYTs7OztJQUFyQjtRQUNFLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7O2dCQUNyRCxlQUFlLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLG9DQUFvQyxDQUFDO1lBQ3ZGLElBQUksZUFBZSxFQUFFO2dCQUNuQixlQUFlLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUM3QztpQkFBTTtnQkFDTCxlQUFlLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ25ELGVBQWUsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLHFCQUFxQixDQUFDLENBQUM7Z0JBQzVELGVBQWUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDNUM7U0FDRjtJQUNILENBQUM7O2dCQW5ERixVQUFVOzs7O2dCQU11RCxNQUFNLHVCQUFuRSxRQUFRLFlBQUksTUFBTSxTQUFDLFdBQVc7Z0RBQzlCLFFBQVEsWUFBSSxNQUFNLFNBQUMsUUFBUTs7SUE4Q2hDLG9CQUFDO0NBQUEsQUFyREQsSUFxREM7U0FwRFksYUFBYTs7Ozs7O0lBRXhCLCtCQUFrQzs7Ozs7SUFHaEMsbUNBQW9FOzs7OztJQUNwRSw0QkFBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQsIGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBKc29uTGQge1xuICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IE9iamVjdDtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEpzb25MZFNlcnZpY2Uge1xuXG4gIHByaXZhdGUganNvbkxkOiBKc29uTGQgfCBKc29uTGRbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHJlYWRvbmx5IHBsYXRmb3JtSWQ6IE9iamVjdCxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIHJlYWRvbmx5IGRvYzogYW55LFxuICApIHtcbiAgfVxuXG4gIHNldERhdGEoZGF0YTogSnNvbkxkIHwgSnNvbkxkW10pIHtcbiAgICB0aGlzLmpzb25MZCA9IGRhdGE7XG4gICAgdGhpcy5pbmplY3RCcm93c2VyKCk7XG4gIH1cblxuICBnZXRPYmplY3QodHlwZTogc3RyaW5nLCByYXdEYXRhPzogSnNvbkxkLCBjb250ZXh0ID0gJ2h0dHA6Ly9zY2hlbWEub3JnJyk6IEpzb25MZCB7XG4gICAgbGV0IG9iamVjdDogSnNvbkxkID0ge1xuICAgICAgJ0B0eXBlJzogdHlwZSxcbiAgICB9O1xuICAgIGlmIChjb250ZXh0KSB7XG4gICAgICBvYmplY3QgPSB7XG4gICAgICAgICdAY29udGV4dCc6IGNvbnRleHQsXG4gICAgICAgIC4uLm9iamVjdCxcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChyYXdEYXRhKSB7XG4gICAgICBvYmplY3QgPSB7XG4gICAgICAgIC4uLm9iamVjdCxcbiAgICAgICAgLi4ucmF3RGF0YSxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH1cblxuICB0b0pzb24oKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuanNvbkxkKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5qZWN0QnJvd3NlcigpIHtcbiAgICBpZiAodGhpcy5wbGF0Zm9ybUlkICYmIGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIGxldCBsZEpzb25TY3JpcHRUYWcgPSB0aGlzLmRvYy5oZWFkLnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFt0eXBlPSdhcHBsaWNhdGlvbi9sZCtqc29uJ11gKTtcbiAgICAgIGlmIChsZEpzb25TY3JpcHRUYWcpIHtcbiAgICAgICAgbGRKc29uU2NyaXB0VGFnLnRleHRDb250ZW50ID0gdGhpcy50b0pzb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxkSnNvblNjcmlwdFRhZyA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBsZEpzb25TY3JpcHRUYWcuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2FwcGxpY2F0aW9uL2xkK2pzb24nKTtcbiAgICAgICAgbGRKc29uU2NyaXB0VGFnLnRleHRDb250ZW50ID0gdGhpcy50b0pzb24oKTtcbiAgICAgICAgdGhpcy5kb2MuaGVhZC5hcHBlbmRDaGlsZChsZEpzb25TY3JpcHRUYWcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iXX0=