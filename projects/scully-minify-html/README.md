# scully-minify-html

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

Usage is simple. Add the plugin to the `defaultPostRenders` to execute it on all rendered pages 
or use the `postRenders` on a route configuration to execute it for a specific route:

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

## More information

I've written a [blogpost about custom plugins for Scully](https://samvloeberghs.be/posts/custom-plugins-for-scully-angular-static-site-generator).
Check it out to learn more on how to build your own custom plugins.

More info on getting started with [Scully](http://scully.io/) can be found on [their homepage](http://scully.io/).
