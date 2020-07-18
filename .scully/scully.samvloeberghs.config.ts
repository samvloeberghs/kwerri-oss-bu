import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
const { MinifyHtml } = require('../dist/scully-plugin-minify-html');
const { DisableAngular } = require('../dist/scully-plugin-disable-angular');

const { Posts } = require('./plugins/samvloeberghs-posts');

setPluginConfig(DisableAngular, {
  removeState: true
});

export const config: ScullyConfig = {
  projectName: 'samvloeberghs',
  distFolder: './dist/samvloeberghs',
  outDir: './dist/samvloeberghs-static',
  defaultPostRenderers: [DisableAngular, MinifyHtml],
  routes: {
    '/posts/:slug': {
      type: Posts,
      url: 'http://localhost:4200/posts/data.json',
    },
  },
};