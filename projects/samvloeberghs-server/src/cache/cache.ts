export function getCachePath(originalUrl: string): string {

  let cachePath = originalUrl.substr(1).replace(new RegExp('/', 'g'), '_');
  if (cachePath === '') {
    cachePath = 'index';
  }
  return cachePath;

}
