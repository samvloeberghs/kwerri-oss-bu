# scully-plugin-disable-angular

This `postRenderer` plugin for [Scully](http://scully.io/) removes the static assets that bootstrap the Angular 
application. Optionally you can also remove the dynamic transfer state from the HTML.

If you are only using Angular to build a static / informational website with little extra functionality 
it could be overkill to still use Angular on the frontend.
 
Disabling Angular on the frontend will speed up your loading times and mobile scores even more!

## Installation

To install this library with `npm` run

```
$ npm install scully-plugin-disable-angular --save-dev
```
or with `yarn`
```
$ yarn add scully-plugin-disable-angular
```

## Usage

Import and add the plugin to the `defaultPostRenderers` to execute it on all rendered pages 
or use the `postRenderers` on a route configuration to execute it for a specific route:

**Important:** the current implementation of Scully is that if you provide a `postRenderers` option 
on a route level, it will ignore the configuration of the `defaultPostRenderers` option at
the root level of the config.

For more information, check out: https://github.com/scullyio/scully/issues/595

```js
const {RouteTypes} = require('@scullyio/scully');
const {DisableAngular} = require('scully-plugin-disable-angular');

const postRenderers = [DisableAngular];

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

Now build your app with the `--stats-json` flag enabled as the plugin needs to know which assets 
have been build for your app. Then just run the Scully command.

```shell script
npm run build -- --prod --stats-json
npm run scully
```

## Clearing dynamic state

When disabling Angular in your prerendered pages there is no point in keeping
the dynamic state serialized in your HTML. By providing the option `removeState` 
to the configuration the plugin will remove this state from the HTML.

```js
const {RouteTypes, setPluginConfig} = require('@scullyio/scully');
const {DisableAngular} = require('scully-plugin-disable-angular');

const postRenderers = [DisableAngular];

setPluginConfig(DisableAngular, 'postProcessByHtml', {
  removeState: true
});

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

## Ignore routes

In some cases you might still need Angular on some pages/routes of your application, for example when you have heavy JS functionality that you can't or don't want to replace with pure JS. 

These pages or routes can be specified by using the `setPluginConfig` function for the `DisableAngular` plugin.

In the example below the 2 pages or routes `/blog/9` and `/contact` are excluded from the `DisableAngular` plugin process:

```js
const {RouteTypes, setPluginConfig} = require('@scullyio/scully');
const {DisableAngular} = require('scully-plugin-disable-angular');

const postRenderers = [DisableAngular];

setPluginConfig(DisableAngular, 'postProcessByHtml', {
  ignoreRoutes: [
    '/blog/9', 
    '/contact',
  ]
});

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

<!--
// NOT APPLICABLE AT THIS POINT!!
## Keep JS files

Since you don't need the JS the files are removed.
If you want to keep them for some reason, just enable the option `keepJsFiles`:

```ts
setPluginConfig(DisableAngular, 'postProcessByHtml', {
  keepJsFiles: true
});
```
-->

## More information

I've written a [blogpost about custom plugins for Scully](https://samvloeberghs.be/posts/custom-plugins-for-scully-angular-static-site-generator).
Check it out to learn more on how to build your own custom plugins.

More info on getting started with [Scully](http://scully.io/) can be found on [their homepage](http://scully.io/).
