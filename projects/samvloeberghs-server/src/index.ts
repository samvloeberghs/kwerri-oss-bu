// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import * as express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('../../../dist/samvloeberghs/server/main');
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');
import { REQUEST, RESPONSE } from '@nguniversal/express-engine/tokens';

const spdy = require('spdy');
const compression = require('compression');
import { MemoryCacheStore, getCachePath, FileCacheStore } from './cache';
import { type } from './cache.config';
import { Request, Response } from 'express';
import { RenderOptions } from '@nguniversal/express-engine';

const minify = require('html-minifier').minify;
const minifyOptions = require('./options').htmlMinifyOptions;

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

app.engine('html', (_, options: RenderOptions, callback) => {
  renderModuleFactory(AppServerModuleNgFactory, {
    document: template,
    url: options.req.url,
    extraProviders: [
      provideModuleMap(LAZY_MODULE_MAP),
      {
        provide: REQUEST,
        useValue: options.req,
      },
      {
        provide: RESPONSE,
        useValue: options.req.res,
      },
    ],
  }).then(html => {
    callback(null, html);
  });
});

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));
app.set('port', PORT);

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
app.get('*.*', express.static(join(DIST_FOLDER, 'browser'), {
  maxAge: '31536000000', // THIS IS IN MS!!
}));

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

const ngApp = (req: Request, res: Response, next: Function) => {

  const config = {
    req,
    res,
    preboot: true,
    baseUrl: '/',
    requestUrl: req.originalUrl,
  };

  // GENERE CACHEPATH AND GET THE CACHE
  const cachePath = getCachePath(req.originalUrl);
  myCache.get(cachePath, (entry) => {

    // SET A 7d CACHE HEADER
    res.header('Cache-Control', 'public, max-age=604800'); // THIS IS IN SECONDS!!

    // IF WE HAVE A CACHE ENTRY
    // return the cache entry
    if (entry) {
      // console.log('entry served from cache: ', cachePath);
      res.send(entry);
    } else {

      // NO CACHE ENTRY
      // LET'S RENDER
      res.render('index', config, (err, html) => {

        // SOMETHING HAS FAILED
        // just log the error and return the original template for CSR
        if (err) {
          console.log(err);
          res.send(template);
        }

        // MINIFY THE HTML
        // but not too much:
        // https://samvloeberghs.be/posts/better-sharing-on-social-media-platforms-with-angular-universal
        const minifiedHtml = minify(html, minifyOptions);

        // CHECK IF IT WAS AN OK STATUS CODE
        // if so cache
        if (res.statusCode > -1 && res.statusCode < 300) {
          myCache.put(cachePath, minifiedHtml);
          // console.log('entry rendered from scratch and now in cache: ', cachePath);
        } else {
          // console.log('entry rendered from scratch: ', cachePath);
        }

        // RETURN THE MINIFIED HTML
        res.send(minifiedHtml);

      });

    }

  });

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
    res.writeHead(301, { 'Location': 'https://' + req.headers['host'] + req.url });
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
