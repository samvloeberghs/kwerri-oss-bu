# scully-minify-html

---
!! **PLUGIN RENAMED**

This plugin has been renamed and republished to `scully-plugin-minify-html`, find the new version here:
https://www.npmjs.com/package/scully-plugin-minify-html
---

This `postRenderer` plugin for [Scully](http://scully.io/) will minify the HTML of your prerendered pages. 
Removing unnecessary code will decrease the size of your files.

This will speed up your loading times and mobile scores even more!

## Installation

To install this library with `npm` run

```
$ npm install scully-minify-html --save-dev
```
or with `yarn`
```
$ yarn add scully-minify-html
```

## Usage

Import and add the plugin to the `defaultPostRenderers` to execute it on all rendered pages 
or use the `postRenderers` on a route configuration to execute it for a specific route:

```js
const {RouteTypes} = require('@scullyio/scully');
const {MinifyHtml} = require('scully-minify-html');

const postRenderers = [MinifyHtml];

exports.config = {
  projectRoot: './src/app',
  defaultPostRenderers: postRenderers,  // for all routes
  routes: {
    '/blog/:slug': {
      type: RouteTypes.contentFolder,
      slug: {
        folder: "./blog"
      },
      postRenderers: postRenderers      // per route config
    },
  }
};
```

Now build your app and then just run the Scully command.

```shell script
npm run build --prod
npm run scully
```

### Configuring the `html-minifier` options

The `MinifyHtml` plugin uses [html-minifier](https://www.npmjs.com/package/html-minifier) under the hood, so we can configure the minify options that are being used.
The available options can be found in the interface [`Options`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/html-minifier/index.d.ts)

**The default configuration is currently set at:**

```ts
import { Options } from 'html-minifier';

const defaultMinifyOptions: Options = {
  caseSensitive: true,
  removeComments: true,
  collapseWhitespace: true,
  collapseBooleanAttributes: true,
  removeRedundantAttributes: true,
  useShortDoctype: true,
  removeEmptyAttributes: true,
  minifyCSS: true,
  minifyJS: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  // don't remove attribute quotes, not all social media platforms can parse this over-optimization
  removeAttributeQuotes: false,
  // don't remove optional tags, like the head, not all social media platforms can parse this over-optimization
  removeOptionalTags: false,
};
```

Configuring the options can be done on the Scully config root level, for the `defaultPostRenderers` or at route config level for the `postRenderers`.

If you don't provide options at the route level, the configuration from the root level will be used.

```js
const {RouteTypes} = require('@scullyio/scully');
const {MinifyHtml} = require('scully-minify-html');

const postRenderers = [MinifyHtml];

const minifyHtmlOptions = {
  removeComments: false
};

exports.config = {
  projectRoot: './src/app',
  defaultPostRenderers: postRenderers,
  minifyHtmlOptions,    // for all routes
  routes: {
    '/blog/:slug': {
      type: RouteTypes.contentFolder,
      slug: {
        folder: "./blog"
      },
      postRenderers: postRenderers,
      minifyHtmlOptions,    // per route config
    },
  }
};
```

## More information

I've written a [blogpost about custom plugins for Scully](https://samvloeberghs.be/posts/custom-plugins-for-scully-angular-static-site-generator).
Check it out to learn more on how to build your own custom plugins.

More info on getting started with [Scully](http://scully.io/) can be found on [their homepage](http://scully.io/).
