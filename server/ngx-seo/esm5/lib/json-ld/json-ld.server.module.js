/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BEFORE_APP_SERIALIZED } from '@angular/platform-server';
import { JsonLdService } from './json-ld.service';
/**
 * @param {?} doc
 * @param {?} jsonLdService
 * @return {?}
 */
export function serializeJsonLdFactory(doc, jsonLdService) {
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
export { ServerJsonLdModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1sZC5zZXJ2ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNlby8iLCJzb3VyY2VzIjpbImxpYi9qc29uLWxkL2pzb24tbGQuc2VydmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7QUFFbEQsTUFBTSxVQUFVLHNCQUFzQixDQUFDLEdBQWEsRUFBRSxhQUE0Qjs7UUFDMUUsa0JBQWtCOzs7SUFBRzs7WUFDbkIsTUFBTSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDNUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFBO0lBQ0QsT0FBTyxrQkFBa0IsQ0FBQztBQUM1QixDQUFDO0FBRUQ7SUFBQTtJQVdBLENBQUM7O2dCQVhBLFFBQVEsU0FBQztvQkFDUixTQUFTLEVBQUU7d0JBQ1QsYUFBYSxFQUFFOzRCQUNiLE9BQU8sRUFBRSxxQkFBcUI7NEJBQzlCLFVBQVUsRUFBRSxzQkFBc0I7NEJBQ2xDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUM7NEJBQy9CLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO2lCQUNGOztJQUVELHlCQUFDO0NBQUEsQUFYRCxJQVdDO1NBRFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJFRk9SRV9BUFBfU0VSSUFMSVpFRCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLXNlcnZlcic7XG5pbXBvcnQgeyBKc29uTGRTZXJ2aWNlIH0gZnJvbSAnLi9qc29uLWxkLnNlcnZpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplSnNvbkxkRmFjdG9yeShkb2M6IERvY3VtZW50LCBqc29uTGRTZXJ2aWNlOiBKc29uTGRTZXJ2aWNlKSB7XG4gIGNvbnN0IHNlcmlhbGl6ZUFuZEluamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgndHlwZScsICdhcHBsaWNhdGlvbi9sZCtqc29uJyk7XG4gICAgc2NyaXB0LnRleHRDb250ZW50ID0ganNvbkxkU2VydmljZS50b0pzb24oKTtcbiAgICBkb2MuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICB9O1xuICByZXR1cm4gc2VyaWFsaXplQW5kSW5qZWN0O1xufVxuXG5ATmdNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtcbiAgICBKc29uTGRTZXJ2aWNlLCB7XG4gICAgICBwcm92aWRlOiBCRUZPUkVfQVBQX1NFUklBTElaRUQsXG4gICAgICB1c2VGYWN0b3J5OiBzZXJpYWxpemVKc29uTGRGYWN0b3J5LFxuICAgICAgZGVwczogW0RPQ1VNRU5ULCBKc29uTGRTZXJ2aWNlXSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNlcnZlckpzb25MZE1vZHVsZSB7XG59XG4iXX0=