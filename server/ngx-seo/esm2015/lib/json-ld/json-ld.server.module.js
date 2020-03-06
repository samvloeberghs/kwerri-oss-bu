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
export class ServerJsonLdModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1sZC5zZXJ2ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNlby8iLCJzb3VyY2VzIjpbImxpYi9qc29uLWxkL2pzb24tbGQuc2VydmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7QUFFbEQsTUFBTSxVQUFVLHNCQUFzQixDQUFDLEdBQWEsRUFBRSxhQUE0Qjs7VUFDMUUsa0JBQWtCOzs7SUFBRzs7Y0FDbkIsTUFBTSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDNUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFBO0lBQ0QsT0FBTyxrQkFBa0IsQ0FBQztBQUM1QixDQUFDO0FBWUQsTUFBTSxPQUFPLGtCQUFrQjs7O1lBVjlCLFFBQVEsU0FBQztnQkFDUixTQUFTLEVBQUU7b0JBQ1QsYUFBYSxFQUFFO3dCQUNiLE9BQU8sRUFBRSxxQkFBcUI7d0JBQzlCLFVBQVUsRUFBRSxzQkFBc0I7d0JBQ2xDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUM7d0JBQy9CLEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQkVGT1JFX0FQUF9TRVJJQUxJWkVEIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tc2VydmVyJztcbmltcG9ydCB7IEpzb25MZFNlcnZpY2UgfSBmcm9tICcuL2pzb24tbGQuc2VydmljZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVKc29uTGRGYWN0b3J5KGRvYzogRG9jdW1lbnQsIGpzb25MZFNlcnZpY2U6IEpzb25MZFNlcnZpY2UpIHtcbiAgY29uc3Qgc2VyaWFsaXplQW5kSW5qZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHNjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2FwcGxpY2F0aW9uL2xkK2pzb24nKTtcbiAgICBzY3JpcHQudGV4dENvbnRlbnQgPSBqc29uTGRTZXJ2aWNlLnRvSnNvbigpO1xuICAgIGRvYy5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gIH07XG4gIHJldHVybiBzZXJpYWxpemVBbmRJbmplY3Q7XG59XG5cbkBOZ01vZHVsZSh7XG4gIHByb3ZpZGVyczogW1xuICAgIEpzb25MZFNlcnZpY2UsIHtcbiAgICAgIHByb3ZpZGU6IEJFRk9SRV9BUFBfU0VSSUFMSVpFRCxcbiAgICAgIHVzZUZhY3Rvcnk6IHNlcmlhbGl6ZUpzb25MZEZhY3RvcnksXG4gICAgICBkZXBzOiBbRE9DVU1FTlQsIEpzb25MZFNlcnZpY2VdLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VydmVySnNvbkxkTW9kdWxlIHtcbn1cbiJdfQ==