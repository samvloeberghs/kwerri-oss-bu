const cache = require('memory-cache');

// save a value in the cache
cache.put('foo', 'bar');

// retrieve value from the cache
const cachedValue = cache.get('foo');

// delete key from cache
cache.del('foo');

// clear cache completely
cache.clear();
