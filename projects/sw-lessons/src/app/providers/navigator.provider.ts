/**
 * see window.provider.ts
 */

import { isPlatformBrowser } from '@angular/common';
import { ClassProvider, FactoryProvider, InjectionToken, PLATFORM_ID, Injectable } from '@angular/core';

/* Create a new injection token for injecting the navigator. */
export const NAVIGATOR = new InjectionToken('NavigatorToken');

/* Define abstract class for obtaining reference to the global navigator object. */
export abstract class NavigatorRef {
    get nativeNavigator(): Navigator | object {
        throw new Error('Not implemented.');
    }
}

/* Define class that implements the abstract class and returns the native navigator object. */
@Injectable()
export class BrowserNavigatorRef extends NavigatorRef {
    constructor() {
        super();
    }

    get nativeNavigator(): Navigator | object {
        return navigator;
    }
}

/* Create an factory function that returns the native navigator object. */
export function navigatorFactory(browserNavigatorRef: BrowserNavigatorRef, platformId: object): Navigator | object {
    return isPlatformBrowser(platformId) ? browserNavigatorRef.nativeNavigator : {};
}

/* Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class. */
export const browserNavigatorProvider: ClassProvider = {
    provide: NavigatorRef,
    useClass: BrowserNavigatorRef,
};

/* Create an injectable provider that uses the navigatorFactory function for returning the native navigator object. */
export const navigatorProvider: FactoryProvider = {
    provide: NAVIGATOR,
    useFactory: navigatorFactory,
    deps: [NavigatorRef, PLATFORM_ID],
};

/* Create an array of providers. */
export const NAVIGATOR_PROVIDERS = [browserNavigatorProvider, navigatorProvider];
