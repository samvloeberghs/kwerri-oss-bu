import 'angular2-universal-polyfills';

// Fix Universal Style
import { NodeDomRootRenderer, NodeDomRenderer } from 'angular2-universal/node';
function renderComponentFix(componentProto: any) {
  return new NodeDomRenderer(this, componentProto, this._animationDriver);
}
NodeDomRootRenderer.prototype.renderComponent = renderComponentFix;
// End Fix Universal Style

import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';

// Angular 2
import { enableProdMode } from '@angular/core';
// Angular 2 Universal
import { createEngine } from 'angular2-express-engine';

const minify = require('html-minifier').minify;
const minifyOptions = require('./options').htmlMinifyOptions;
const spdy = require('spdy');
const fs = require('fs');

// App
import { MainModule } from './app/app.node.module';

// enable prod for faster renders
enableProdMode();

const app = express();
const ROOT = path.join(path.resolve(__dirname, '..'));
const isProd = process.env.ENV === 'PROD';

if (!isProd) {
  console.log('Running in DEV mode');
} else {
  console.log('Running in PROD mode');
}

// Express View
app.engine('.html', createEngine({
  precompile: true,
  ngModule: MainModule,
  providers: [
    // stateless providers only since it's shared
  ]
}));
app.set('port', isProd ? 443 : 4444);
app.set('views', __dirname);
app.set('view engine', 'html');

app.use(cookieParser('Angular 2 Universal'));
app.use(bodyParser.json());
app.use(compression());

// Serve static files
app.use('/assets', express.static(path.join(__dirname, 'assets'), {maxAge: 30}));
app.use(express.static(path.join(ROOT, 'dist/client'), {index: false}));

const helmet = require('helmet');
const ONE_YEAR = 31536000000;

app.use(helmet.hsts({
  maxAge: ONE_YEAR,
  includeSubdomains: true,
  force: true
}));

// Routes with html5pushstate
// ensure routes match client-side-app

import { FileCacheStore } from './server/cache/filecache';
import { MemoryCacheStore } from './server/cache/memorycache';
const myCache = new MemoryCacheStore();
import { getCachePath, isCacheAllowed } from './server/cache/cache';
import { allowedPaths } from './server/cache.config';

// Routes with html5pushstate
// ensure routes match client-side-app
allowedPaths.forEach((path) => {
  path = '/' + path;
  app.get(path, ngApp);
});

app.get('*', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  var pojo = {status: 404, message: 'No Content'};
  var json = JSON.stringify(pojo, null, 2);
  res.status(404).send(json);
});

function ngApp(req, res) {

  const config = {
    req,
    res,
    preboot: false,
    baseUrl: '/',
    requestUrl: req.originalUrl,
    originUrl: isProd ? 'https://ng2.samvloeberghs.be' : 'https://localhost:4444'
  };

  // IF CACHE ALLOWED
  // ----------------
  //if (allowedCachePaths.indexOf(cachePath) > -1) {
  if (isCacheAllowed(req.originalUrl)) {

    const cachePath = getCachePath(req.originalUrl);

    myCache.get(cachePath, (entry) => {

      if (entry) {
        res.status(200).send(entry);
      }
      else {

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

  }
  // CACHE NOT ALLOWED
  // -----------------
  else {
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

/*
 HTTPS SERVER
 -------------
 Our main server serving over HTTPS
 */

let ciphers = [
  "ECDHE-RSA-AES256-SHA384",
  "DHE-RSA-AES256-SHA384",
  "ECDHE-RSA-AES256-SHA256",
  "DHE-RSA-AES256-SHA256",
  "ECDHE-RSA-AES128-SHA256",
  "DHE-RSA-AES128-SHA256",
  "HIGH",
  "!aNULL",
  "!eNULL",
  "!EXPORT",
  "!DES",
  "!RC4",
  "!MD5",
  "!PSK",
  "!SRP",
  "!CAMELLIA"
];

let server = spdy.createServer(
  {
    key: fs.readFileSync('../cert/*_samvloeberghs_be.key'),
    cert: fs.readFileSync('../cert/*_samvloeberghs_be.crt'),
    ca: fs.readFileSync('../cert/*_samvloeberghs_be.ca-bundle'),
    ciphers: ciphers.join(':')
  }, app
);

server.listen(app.get('port'), (err) => {
  if (err) {
    throw new Error(err);
  }
  console.log('Listening on port: ' + app.get('port'));
});

/*
 HTTP SERVER:
 -------------
 used a 301 redirect to the HTTPS server
 */

const http = require('http');
const httpPort = isProd ? 80 : 8080;
http.createServer(function (req, res) {
  res.writeHead(301, {"Location": "https://" + req.headers['host'] + req.url});
  res.end();
}).listen(httpPort);