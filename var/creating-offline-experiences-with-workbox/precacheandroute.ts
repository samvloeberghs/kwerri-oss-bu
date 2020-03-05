// service-worker.ts
import {
  cleanupOutdatedCaches,
  precacheAndRoute,
} from 'workbox-precaching';

cleanupOutdatedCaches();
const assetsToCache = self.__WB_MANIFEST;
precacheAndRoute(assetsToCache);
