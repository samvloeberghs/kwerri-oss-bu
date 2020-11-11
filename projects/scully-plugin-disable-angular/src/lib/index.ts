import { getPluginConfig, HandledRoute, registerPlugin, scullyConfig } from '@scullyio/scully';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const JSON5 = require('json5');

export const DisableAngular = 'disableAngular';

export interface DisableAngularOptions {
  removeState: boolean;
  ignoreRoutes: string[];
}

const escapeRegExp = (string): string => {
  // $& means the whole matched string
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

const disableAngularPlugin = (html: string, route: HandledRoute): Promise<string> => {
  const disableAngularOptions = getPluginConfig<DisableAngularOptions>(DisableAngular, 'render');

  if (disableAngularOptions.ignoreRoutes && disableAngularOptions.ignoreRoutes.includes(route.route)) {
    return Promise.resolve(html);
  }

  const es2015StatsJsonPath = join(scullyConfig.distFolder, 'stats-es2015.json');
  const es5StatsJsonPath = join(scullyConfig.distFolder, 'stats.json');
  const es2015AssetsPathExists = existsSync(es2015StatsJsonPath);
  const es5AssetsPathExists = existsSync(es5StatsJsonPath);

  if (!es2015AssetsPathExists && !es5AssetsPathExists) {
    const noStatsJsonError = `A stats(-es2015).json is required for the 'disableAngular' plugin.
Please run 'ng build' with the '--stats-json' flag`;
    console.error(noStatsJsonError);
    throw new Error(noStatsJsonError);
  }

  // es2015
  let statsJsonPath = es2015StatsJsonPath;
  // es5
  if (es5AssetsPathExists) {
    statsJsonPath = es5StatsJsonPath;
  }

  const scullyDisableAngularStatsJsonPath = join(scullyConfig.distFolder, 'scully-plugin-disable-angular-stats.json');
  let scullyDisableAngularStatsJson = [];
  if (!existsSync(scullyDisableAngularStatsJsonPath)) {
    const errorCreatingScullyDisableAngularStatsJsonError = 'The scully-plugin-disable-angular-stats.json could not be created';
    try {
      scullyDisableAngularStatsJson = JSON5.parse(readFileSync(statsJsonPath, { encoding: 'utf8' }).toString()).assets;
      writeFileSync(scullyDisableAngularStatsJsonPath, JSON5.stringify(scullyDisableAngularStatsJson));
    } catch (e) {
      console.error(e);
      console.error(errorCreatingScullyDisableAngularStatsJsonError);
      throw new Error(errorCreatingScullyDisableAngularStatsJsonError);
    }
  } else {
    scullyDisableAngularStatsJson = JSON5.parse(readFileSync(scullyDisableAngularStatsJsonPath, { encoding: 'utf8' }).toString());
  }

  let assetsList = scullyDisableAngularStatsJson
    .map(entry => entry['name'])
    .filter(entry => entry.includes('.js'));
  assetsList = [...assetsList, ...assetsList.map(asset => {
    return asset.includes('-es5') ?
      asset.replace('-es5', '-es2015') :
      asset.replace('-es2015', '-es5');
  })];

  assetsList.forEach(entry => {
    const regex = new RegExp(`<script( charset="?utf-8"?)? src="?${escapeRegExp(entry)}"?( type="?module"?)?( nomodule(="")?)?( defer(="")?)?><\/script>`, 'gmi');
    html = html.replace(regex, '');
  });

  html = html.replace(`</head>`, `<script>window.ScullyIOAngularDisabled = true;</script></head>`);

  if (disableAngularOptions.removeState) {
    const regex = new RegExp('<script id="ScullyIO-transfer-state">([\\S\\s]*?)<\\/script>');
    html = html.replace(regex, '');
  }

  return Promise.resolve(html);
};

// no validation implemented
const disableAngularPluginValidator = async () => [];
registerPlugin('render', DisableAngular, disableAngularPlugin);
