import { ScullyConfig } from '@scullyio/scully';
const { MinifyHtml } = require('../dist/scully-plugin-minify-html');
const { DisableAngular } = require('../dist/scully-plugin-disable-angular');

const { Posts } = require('./plugins/samvloeberghs-posts');

export const config: ScullyConfig = {
  projectRoot: './projects/samvloeberghs/src',
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
