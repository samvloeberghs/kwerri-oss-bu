// These are important and needed before anything else// These are important and needed before anything else
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
const spdy = require('spdy');
const compression = require('compression');
const cors = require('cors');

import { MemoryCacheStore, getCachePath, isCacheAllowed, FileCacheStore } from './cache';
import { allowedPaths, type } from './cache.config';

const minify = require('html-minifier').minify;
const minifyOptions = require('./options').htmlMinifyOptions;

// TODO: do this with proper DI
(global as any).hljs = {
  configure: () => {
  },
  highlightBlock: () => {
  },
};

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();
const PORT = +process.env.PORT || 8443;
const HTTP_PORT = +process.env.HTTP_PORT || 8080;
const PROD = !!process.env.PROD || false;
const HTTPS = !!process.env.HTTPS || false;
const DIST_FOLDER = join(process.cwd(), 'dist', 'samvloeberghs');

if (!PROD) {
  (global as any).WebSocket = require('ws');
  (global as any).XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
}

// Our index.html we'll use as our template
const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();

app.engine('html', (_, options, callback) => {
  renderModuleFactory(AppServerModuleNgFactory, {
    // Our index.html
    document: template,
    url: options.req.url,
    // DI so that we can get lazy-loading to work differently (since we need it to just instantly render it)
    extraProviders: [
      provideModuleMap(LAZY_MODULE_MAP),
    ],
  }).then(html => {
    callback(null, html);
  });
});

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));
app.set('port', PORT);

if (PROD) {
  const corsOptions = {
    origin: 'https://samvloeberghs.be',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
  app.use(cors(corsOptions));
}

app.use(compression({
  filter: (req, res) => {
    let ignore = false;
    try {
      const userAgent = req.headers['user-agent'];
      ignore = /iPhone|iPad|FxiOS|CriOS/i.test(userAgent) || (userAgent.indexOf('AppleWebKit') > -1 && userAgent.indexOf('Chrome') === -1);
    } catch (e) {
      console.log(e);
    }
    return ignore ? false : compression.filter(req, res);
  },
}));

// TEMP API
// hardcoded because changing soon to a nest api
app.get('/data/posts', (req, res) => {
  res.json(require('../../../dist/samvloeberghs/browser/assets/posts/data.json'));
});

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

let myCache;
switch (type) {
  case 'memory':
    myCache = new MemoryCacheStore();
    break;
  default:
    myCache = new FileCacheStore();
    break;
}

allowedPaths.forEach((aPath) => {
  aPath = '/' + aPath;
  app.get(aPath, ngApp);
});

app.get('*', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const pojo = {status: 404, message: 'No Content'};
  const json = JSON.stringify(pojo, null, 2);
  res.status(404).send(json);
});

function ngApp(req, res) {

  const config = {
    req,
    res,
    preboot: false,
    baseUrl: '/',
    requestUrl: req.originalUrl,
    originUrl: PROD ? 'https://samvloeberghs.be' : HTTPS ? `https://localhost:${PORT}` : `http://localhost:${PORT}`,
  };

  if (isCacheAllowed(req.originalUrl)) {

    // IF CACHE ALLOWED
    // ----------------

    const cachePath = getCachePath(req.originalUrl);

    myCache.get(cachePath, (entry) => {

      if (entry) {
        res.status(200).send(entry);
      } else {

        res.render('index', config, (err, html) => {

          if (err) {
            console.log(err);
          }

          const minifiedHtml = minify(html, minifyOptions);
          myCache.put(cachePath, minifiedHtml);
          res.status(200).send(minifiedHtml);

        });

      }

    });

  } else {

    // CACHE NOT ALLOWED
    // -----------------

    res.render('index', config, (err, html) => {

      if (err) {
        console.log(err);
      }

      res.status(200).send(minify(html, minifyOptions));

    });
  }

}

/*
 SERVERS :
 ---------
 */

if (HTTPS) {

  /*
   HTTPS SERVER
   -------------
   Our main server serving over HTTPS
   */

  const ciphers = [
    'ECDHE-RSA-AES256-SHA384',
    'DHE-RSA-AES256-SHA384',
    'ECDHE-RSA-AES256-SHA256',
    'DHE-RSA-AES256-SHA256',
    'ECDHE-RSA-AES128-SHA256',
    'DHE-RSA-AES128-SHA256',
    'HIGH',
    '!aNULL',
    '!eNULL',
    '!EXPORT',
    '!DES',
    '!RC4',
    '!MD5',
    '!PSK',
    '!SRP',
    '!CAMELLIA',
  ];

  const server = spdy.createServer(
    {
      key: readFileSync('../cert/samvloeberghs.be/samvloeberghs_be.key'),
      cert: readFileSync('../cert/samvloeberghs.be/samvloeberghs_be.crt'),
      ca: readFileSync('../cert/samvloeberghs.be/samvloeberghs_be.ca-bundle'),
      ciphers: ciphers.join(':'),
    }, app,
  );

  server.listen(app.get('port'), (err) => {
    if (err) {
      throw new Error(err);
    }
    console.log(`Node server listening on ${app.get('port')}`);
  });

  /*
   HTTP SERVER:
   -------------
   used a 301 redirect to the HTTPS server
   */

  const http = require('http');
  http.createServer(function (req, res) {
    res.writeHead(301, {'Location': 'https://' + req.headers['host'] + req.url});
    res.end();
  }).listen(HTTP_PORT, () => {
    console.log(`Node server listening on ${HTTP_PORT}`);
  });

} else {

  /*
   HTTP SERVER:
   -------------
   local development
   */

  // Start up the Node server
  app.listen(PORT, () => {
    console.log(`Node server listening on http://localhost:${PORT}`);
  });

}
