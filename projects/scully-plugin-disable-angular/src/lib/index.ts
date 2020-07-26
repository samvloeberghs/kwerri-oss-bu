import { getPluginConfig, registerPlugin, scullyConfig } from '@scullyio/scully';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const JSON5 = require('json5');

export const DisableAngular = 'disableAngular';

export interface DisableAngularOptions {
  removeState: boolean;
}

const escapeRegExp = (string): string => {
  // $& means the whole matched string
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

const disableAngularPlugin = (html: string) => {
  const disableAngularOptions = getPluginConfig<DisableAngularOptions>(DisableAngular, 'render');
  // First try reading the tsconfig from the src of the application ( src/ or projects/<app>/
  // This is the case with ng v9 and ng v10 and multiple apps generated in /projects
  // The default app for a ng v10 angular cli app is in src, and it uses the roots tsconfig.app.json
  const tsConfigPath = join(scullyConfig.projectRoot, 'tsconfig.app.json');
  let tsConfig;
  try {
    tsConfig = JSON5.parse(readFileSync(tsConfigPath, { encoding: 'utf8' }).toString());
  } catch (e) {
    // try reading from the root
    const rootTsConfigPath = 'tsconfig.app.json';
    try {
      tsConfig = JSON5.parse(readFileSync(rootTsConfigPath, { encoding: 'utf8' }).toString());
    } catch (e) {
      console.log(`Error reading tsConfig at specific project path: ${tsConfigPath} and root path: ${rootTsConfigPath}`);
      console.error(e);
      throw new Error(e);
    }
  }

  let isEs5Config = false;
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
    isEs5Config = true;
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
  if (!isEs5Config) {
    assetsList = [...assetsList, ...assetsList.map(asset => {
      return asset.includes('-es5') ?
        asset.replace('-es5', '-es2015') :
        asset.replace('-es2015', '-es5');
    })];
  }

  assetsList.forEach(entry => {
    const regex = new RegExp(`<script( charset="?utf-8"?)? src="?${escapeRegExp(entry)}"?( type="?module"?)?( nomodule(="")?)?( defer(="")?)?><\/script>`, 'gmi');
    html = html.replace(regex, '');
  });

  if (disableAngularOptions.removeState) {
    const regex = new RegExp('<script id="ScullyIO-transfer-state">([\\S\\s]*?)<\\/script>');
    html = html.replace(regex, '');
  }

  return html;
};

// no validation implemented
const disableAngularPluginValidator = async () => [];
registerPlugin('render', DisableAngular, disableAngularPlugin);
