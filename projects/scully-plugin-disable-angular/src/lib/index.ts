import { getPluginConfig, registerPlugin, scullyConfig } from '@scullyio/scully';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

export const DisableAngular = 'disableAngular';

export interface DisableAngularOptions {
  removeState: boolean;
}

const escapeRegExp = (string): string => {
  // $& means the whole matched string
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

const disableAngularPlugin = (html: string) => {
  const tsConfigPath = 'tsconfig.json';
  const tsConfig = JSON.parse(readFileSync(tsConfigPath, { encoding: 'utf8' }).toString());
  const disableAngularOptions = getPluginConfig<DisableAngularOptions>(DisableAngular, 'render');

  let isEs5Config = false;
  let statsJsonPath = join(scullyConfig.distFolder, 'stats-es2015.json');
  if (tsConfig.compilerOptions.target === 'es5') {
    isEs5Config = true;
    statsJsonPath = join(scullyConfig.distFolder, 'stats.json');
  }

  if (!existsSync(statsJsonPath)) {
    const noStatsJsonError = `A ${isEs5Config ? 'stats' : 'stats-es2015'}.json is required for the 'disableAngular' plugin.
Please run 'ng build' with the '--stats-json' flag`;
    console.error(noStatsJsonError);
    throw new Error(noStatsJsonError);
  }

  const scullyDisableAngularStatsJsonPath = join(scullyConfig.distFolder, 'scully-plugin-disable-angular-stats.json');
  let scullyDisableAngularStatsJson = [];
  if (!existsSync(scullyDisableAngularStatsJsonPath)) {
    const errorCreatingScullyDisableAngularStatsJsonError = 'The scully-plugin-disable-angular-stats.json could not be created';
    try {
      scullyDisableAngularStatsJson = JSON.parse(readFileSync(statsJsonPath, { encoding: 'utf8' }).toString()).assets;
      writeFileSync(scullyDisableAngularStatsJsonPath, JSON.stringify(scullyDisableAngularStatsJson));
    } catch (e) {
      console.error(e);
      console.error(errorCreatingScullyDisableAngularStatsJsonError);
      throw new Error(errorCreatingScullyDisableAngularStatsJsonError);
    }
  } else {
    scullyDisableAngularStatsJson = JSON.parse(readFileSync(scullyDisableAngularStatsJsonPath, { encoding: 'utf8' }).toString());
  }

  let assetsList = scullyDisableAngularStatsJson.filter(entry => {
    return entry['name'].includes('.js') && (
      entry['name'].includes('-es5') || entry['name'].includes('-es2015')
    );
  }).map(entry => entry['name']);
  assetsList = [...assetsList, ...assetsList.map(asset => {
    return asset.includes('-es5') ?
      asset.replace('-es5', '-es2015') :
      asset.replace('-es2015', '-es5');
  })];

  console.log(assetsList);

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
