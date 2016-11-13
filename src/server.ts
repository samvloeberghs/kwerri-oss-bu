// the polyfills must be one of the first things imported in node.js.
// The only modules to be imported higher - node modules with es6-promise 3.x or other Promise polyfill dependency
// (rule of thumb: do it if you have zone.js exception that it has been overwritten)
// if you are including modules that modify Promise, such as NewRelic,, you must include them before polyfills
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
app.get('/', ngApp);
app.get('/posts', ngApp);
app.get('/posts/*', ngApp); // or use /:id?
app.get('/talks', ngApp);
app.get('/projects', ngApp);
app.get('/contact', ngApp);

app.get('*', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  var pojo = {status: 404, message: 'No Content'};
  var json = JSON.stringify(pojo, null, 2);
  res.status(404).send(json);
});

let ca = [
  fs.readFileSync('../cert/rootca/AddTrustExternalCARoot.crt'),
  fs.readFileSync('../cert/rootca/COMODORSAAddTrustCA.crt'),
  fs.readFileSync('../cert/rootca/COMODORSADomainValidationSecureServerCA.crt')
];

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

let server = spdy.createServer({
  key: fs.readFileSync('../cert/*_samvloeberghs_be.key'),
  cert: fs.readFileSync('../cert/*_samvloeberghs_be.crt'),
  ca: fs.readFileSync('../cert/*_samvloeberghs_be.ca-bundle'),
  ciphers: ciphers.join(':'),
  //ca: ca
  //cert: fs.readFileSync('../cert/full_*_samvloeberghs_be.ca-bundle')
}, app)
  .listen(app.get('port'), (err) => {
    if (err) {
      throw new Error(err);
    }
    console.log('Listening on port: ' + app.get('port'));
  });

const http = require('http');
const httpPort = isProd ? 80 : 8080;
http.createServer(function (req, res) {
  res.writeHead(301, {"Location": "https://" + req.headers['host'] + req.url});
  res.end();
}).listen(httpPort);

function ngApp(req, res) {

  const config = {
    req,
    res,
    preboot: false,
    baseUrl: '/',
    requestUrl: req.originalUrl,
    originUrl: isProd ? 'https://ng2.samvloeberghs.be' : 'https://localhost:4444'
  };

  let allowedBlogCachePaths = [
    'posts_whats-with-the-subjects-in-rxjs5'
  ];
  let allowedCachePaths = ['', 'home', 'posts', 'talks', 'projects', ...allowedBlogCachePaths];
  let cachePath = req.originalUrl.substr(1).replace('/', '_');
  if (cachePath === '') {
    cachePath = 'home';
  }
  let fileCachePath = cacheFolder + '/' + cachePath;


  // IF CACHE ALLOWED
  // ----------------
  console.log(allowedCachePaths, cachePath);
  if (allowedCachePaths.indexOf(cachePath) > -1) {

    // check for existing file for the requests uri
    try {

      fs.accessSync(fileCachePath, fs.F_OK);
      readHtmlCache(fileCachePath, (html: string) => {
        console.log('cache exists for: ' + cachePath);
        let minifiedHtml = minify(html, minifyOptions);
        res.status(200).send(minifiedHtml);
      });

    } catch (e) {

      console.log('no cache for: ' + cachePath);

      res.render('index', config, (err, html) => {

        if (err) {
          console.log(err);
        }

        let minifiedHtml = minify(html, minifyOptions);
        saveHtmlCache(fileCachePath, minifiedHtml);

        // send output
        res.status(200).send(minifiedHtml);
      });

    }


  }
  // CACHE NOT ALLOWED
  // -----------------
  else {
    // no caching
    console.log('cache not allowed for: ' + cachePath);
    res.render('index', config, (err, html) => {

      if (err) {
        console.log(err);
      }

      let minifiedHtml = minify(html, minifyOptions);

      // send output
      res.status(200).send(minifiedHtml);
    });
  }

}

const cacheFolder = 'cache';
function readHtmlCache(path, cb) {

  fs.readFile(path, {encoding: 'utf-8'}, function (err, data) {
    if (err) {
      return console.log(err);
    }
    cb(data);

  });
}
function saveHtmlCache(path, html) {

  fs.writeFile(path, html, {encoding: 'utf-8'}, function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  });

}
