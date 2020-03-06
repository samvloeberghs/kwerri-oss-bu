// service-worker.ts
import { createHandlerBoundToURL } from 'workbox-precaching';
import { NavigationRoute, registerRoute } from 'workbox-routing';

const defaultRouteHandler = createHandlerBoundToURL('/index.html');
const defaultNavigationRoute = new NavigationRoute(defaultRouteHandler);
registerRoute(defaultNavigationRoute);
