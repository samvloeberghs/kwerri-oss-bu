import { allowedPaths } from '../cache.config';

export function getCachePath(originalUrl: string): string {

  let cachePath = originalUrl.substr(1).replace('/', '_');
  if (cachePath === '') {
    cachePath = 'home';
  }
  return cachePath;

}

export function isCacheAllowed(cachePath: string): boolean {
  return allowedPaths.indexOf(cachePath) > -1;
}
