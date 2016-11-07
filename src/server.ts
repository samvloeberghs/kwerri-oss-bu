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

// Angular 2
import { enableProdMode } from '@angular/core';
// Angular 2 Universal
import { createEngine } from 'angular2-express-engine';

// App
import { MainModule } from './app/app.node.module';

// enable prod for faster renders
enableProdMode();

const app = express();
const ROOT = path.join(path.resolve(__dirname, '..'));

// Express View
app.engine('.html', createEngine({
  precompile: true,
  ngModule: MainModule,
  providers: [
    // stateless providers only since it's shared
  ]
}));
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname);
app.set('view engine', 'html');

app.use(cookieParser('Angular 2 Universal'));
app.use(bodyParser.json());

// Serve static files
app.use('/assets', express.static(path.join(__dirname, 'assets'), {maxAge: 30}));
app.use(express.static(path.join(ROOT, 'dist/client'), {index: false}));

import { serverApi } from './backend/api';
// Our API for demos only
app.get('/data.json', serverApi);

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

// Server
let server = app.listen(app.get('port'), () => {
  console.log(`Listening on: http://localhost:${server.address().port}`);
});

function ngApp(req, res) {

  const config = {
    req,
    res,
    preboot: false,
    baseUrl: '/',
    requestUrl: req.originalUrl,
    originUrl: 'http://localhost:3000'
  };

  let allowedCachePaths = ['', 'home', 'posts', 'talks', 'projects', 'contact'];
  let cachePath = req.originalUrl.substr(1).replace('/', '_');
  let fileCachePath = cacheFolder + '/' + cachePath;

  console.log(allowedCachePaths, cachePath, fileCachePath);

  // IF CACHE ALLOWED
  // ----------------
  if (allowedCachePaths.indexOf(cachePath)) {

    // check for existing file for the requests uri
    try {

      fs.accessSync(fileCachePath, fs.F_OK);
      readHtmlCache(fileCachePath, (html: string) => {
        console.log('cache exists for: ' + cachePath);
        res.status(200).send(html);
      });

    } catch (e) {

      console.log('no cache for: ' + cachePath);

      res.render('index', config, (err, html) => {

        if (err) {
          console.log(err);
        }

        saveHtmlCache(fileCachePath, html);

        // send output
        res.status(200).send(html);
      });

    }


  }
  // CACHE NOT ALLOWED
  // -----------------
  else {
    // no caching
    console.log('cache not allowed for: ' + cachePath);
    res.render('index', config);
  }

}

const fs = require('fs');
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

