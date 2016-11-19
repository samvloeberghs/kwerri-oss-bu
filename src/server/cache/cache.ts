import { allowedCachePaths } from '../cache.config';

export function getCachePath(originalUrl: string): string {

  let cachePath = originalUrl.substr(1).replace('/', '_');
  if (cachePath === '') {
    cachePath = 'home';
  }
  return cachePath;

}

export function isCacheAllowed(cachePath: string): boolean {
  return allowedCachePaths.indexOf(cachePath) > -1;
}