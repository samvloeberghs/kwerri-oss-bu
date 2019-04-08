const fs = require('fs');
const workboxConfig = require('../projects/samvloeberghs/workbox-config.js');
const samvloeberghsCacheConfig = require('../projects/samvloeberghs-server/src/cache.config.js');

const contents = fs.readFileSync(workboxConfig.swDest, 'utf8');
const allowedPathsString = JSON.stringify(samvloeberghsCacheConfig.allowedPaths);
const newContents = contents.replace('const allowedPaths = [];', `const allowedPaths = ${allowedPathsString};`)
fs.writeFileSync(workboxConfig.swDest, newContents, 'utf8');

