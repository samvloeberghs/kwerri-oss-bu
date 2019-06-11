// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import * as express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('../../../dist/samvloeberghs/server/main');
const {provideModuleMap} = require('@nguniversal/module-map-ngfactory-loader');

// Faster server renders w/ prod mode
enableProdMode();

// Express server
const app = express();
const PORT = 80;
const DIST_FOLDER = join(process.cwd(), 'server', 'samvloeberghs');

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// serve static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

// Our index.html we'll use as our template
const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();

app.engine('html', (_, options, callback) => {
  renderModuleFactory(AppServerModuleNgFactory, {
    document: template,
    url: options.req.url,
    extraProviders: [
      provideModuleMap(LAZY_MODULE_MAP),
    ],
  }).then(html => {
    callback(null, html);
  });
});

const ngApp = (req, res) => {
  const config = {
    req,
    res,
    preboot: true,
    baseUrl: '/',
    requestUrl: req.originalUrl,
    originUrl: 'http://localhost:80',
  };

  res.render('index', config);
};

app.get('*', ngApp);

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node server listening on port ${PORT}`);
});
