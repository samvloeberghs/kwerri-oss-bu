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
import { MemoryCacheStore, getCachePath, isValidPage, FileCacheStore } from './cache';
import { type } from './cache.config';

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
const DIST_FOLDER = join(process.cwd(), 'server', 'samvloeberghs');

if (!PROD) {
  (global as any).WebSocket = require('ws');
  (global as any).XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
}

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

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));
app.set('port', PORT);

/*
const corsOptions = {
  origin: 'https://samvloeberghs.be',
  preflightContinue: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
*/

app.use((req, res, next) => {
  const corsWhitelist = [
    'https://www.samvloeberghs.be',
    `https://www.samvloeberghs.be:${PORT}`,
    'https://samvloeberghs.be',
    `https://samvloeberghs.be:${PORT}`,
  ];
  if (corsWhitelist.indexOf(req.get('origin')) !== -1) {
    res.header('Access-Control-Allow-Origin', req.get('origin'));
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, HEAD, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  }
  next();
});

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

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

// Decide the caching strategy
let myCache;
switch (type) {
  case 'memory':
    myCache = new MemoryCacheStore();
    break;
  default:
    myCache = new FileCacheStore();
    break;
}

const ngApp = (req, res) => {

  const config = {
    req,
    res,
    preboot: true,
    baseUrl: '/',
    requestUrl: req.originalUrl,
    originUrl: PROD ? 'https://samvloeberghs.be' : HTTPS ? `https://localhost:${PORT}` : `http://localhost:${PORT}`,
  };

  if (isValidPage(req.originalUrl)) {

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

    // NO VALID PAGE
    // -----------------

    res.render('index', config, (err, html) => {

      if (err) {
        console.log(err);
      }

      res.status(404).send(minify(html, minifyOptions));

    });
  }

};

app.get('*', ngApp);

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
