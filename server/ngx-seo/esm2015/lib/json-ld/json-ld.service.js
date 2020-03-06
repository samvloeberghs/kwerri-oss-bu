/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Optional, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
/**
 * @record
 */
export function JsonLd() { }
export class JsonLdService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1sZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNlby8iLCJzb3VyY2VzIjpbImxpYi9qc29uLWxkL2pzb24tbGQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFFOUQsNEJBRUM7QUFHRCxNQUFNLE9BQU8sYUFBYTs7Ozs7SUFJeEIsWUFDb0QsVUFBa0IsRUFDckIsR0FBUTtRQURMLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDckIsUUFBRyxHQUFILEdBQUcsQ0FBSztJQUV6RCxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxJQUF1QjtRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7OztJQUVELFNBQVMsQ0FBQyxJQUFZLEVBQUUsT0FBZ0IsRUFBRSxPQUFPLEdBQUcsbUJBQW1COztZQUNqRSxNQUFNLEdBQVc7WUFDbkIsT0FBTyxFQUFFLElBQUk7U0FDZDtRQUNELElBQUksT0FBTyxFQUFFO1lBQ1gsTUFBTSxtQkFDSixVQUFVLEVBQUUsT0FBTyxJQUNoQixNQUFNLENBQ1YsQ0FBQztTQUNIO1FBQ0QsSUFBSSxPQUFPLEVBQUU7WUFDWCxNQUFNLHFCQUNELE1BQU0sRUFDTixPQUFPLENBQ1gsQ0FBQztTQUNIO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRU8sYUFBYTtRQUNuQixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFOztnQkFDckQsZUFBZSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQ0FBb0MsQ0FBQztZQUN2RixJQUFJLGVBQWUsRUFBRTtnQkFDbkIsZUFBZSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDN0M7aUJBQU07Z0JBQ0wsZUFBZSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNuRCxlQUFlLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO2dCQUM1RCxlQUFlLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQzVDO1NBQ0Y7SUFDSCxDQUFDOzs7WUFuREYsVUFBVTs7OztZQU11RCxNQUFNLHVCQUFuRSxRQUFRLFlBQUksTUFBTSxTQUFDLFdBQVc7NENBQzlCLFFBQVEsWUFBSSxNQUFNLFNBQUMsUUFBUTs7Ozs7OztJQUo5QiwrQkFBa0M7Ozs7O0lBR2hDLG1DQUFvRTs7Ozs7SUFDcEUsNEJBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5ULCBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSnNvbkxkIHtcbiAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBPYmplY3Q7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKc29uTGRTZXJ2aWNlIHtcblxuICBwcml2YXRlIGpzb25MZDogSnNvbkxkIHwgSnNvbkxkW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSByZWFkb25seSBwbGF0Zm9ybUlkOiBPYmplY3QsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSByZWFkb25seSBkb2M6IGFueSxcbiAgKSB7XG4gIH1cblxuICBzZXREYXRhKGRhdGE6IEpzb25MZCB8IEpzb25MZFtdKSB7XG4gICAgdGhpcy5qc29uTGQgPSBkYXRhO1xuICAgIHRoaXMuaW5qZWN0QnJvd3NlcigpO1xuICB9XG5cbiAgZ2V0T2JqZWN0KHR5cGU6IHN0cmluZywgcmF3RGF0YT86IEpzb25MZCwgY29udGV4dCA9ICdodHRwOi8vc2NoZW1hLm9yZycpOiBKc29uTGQge1xuICAgIGxldCBvYmplY3Q6IEpzb25MZCA9IHtcbiAgICAgICdAdHlwZSc6IHR5cGUsXG4gICAgfTtcbiAgICBpZiAoY29udGV4dCkge1xuICAgICAgb2JqZWN0ID0ge1xuICAgICAgICAnQGNvbnRleHQnOiBjb250ZXh0LFxuICAgICAgICAuLi5vYmplY3QsXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAocmF3RGF0YSkge1xuICAgICAgb2JqZWN0ID0ge1xuICAgICAgICAuLi5vYmplY3QsXG4gICAgICAgIC4uLnJhd0RhdGEsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG5cbiAgdG9Kc29uKCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLmpzb25MZCk7XG4gIH1cblxuICBwcml2YXRlIGluamVjdEJyb3dzZXIoKSB7XG4gICAgaWYgKHRoaXMucGxhdGZvcm1JZCAmJiBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICBsZXQgbGRKc29uU2NyaXB0VGFnID0gdGhpcy5kb2MuaGVhZC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbdHlwZT0nYXBwbGljYXRpb24vbGQranNvbiddYCk7XG4gICAgICBpZiAobGRKc29uU2NyaXB0VGFnKSB7XG4gICAgICAgIGxkSnNvblNjcmlwdFRhZy50ZXh0Q29udGVudCA9IHRoaXMudG9Kc29uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZEpzb25TY3JpcHRUYWcgPSB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgbGRKc29uU2NyaXB0VGFnLnNldEF0dHJpYnV0ZSgndHlwZScsICdhcHBsaWNhdGlvbi9sZCtqc29uJyk7XG4gICAgICAgIGxkSnNvblNjcmlwdFRhZy50ZXh0Q29udGVudCA9IHRoaXMudG9Kc29uKCk7XG4gICAgICAgIHRoaXMuZG9jLmhlYWQuYXBwZW5kQ2hpbGQobGRKc29uU2NyaXB0VGFnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuIl19