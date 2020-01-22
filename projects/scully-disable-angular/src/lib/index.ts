import { registerPlugin } from '@scullyio/scully';
import { scullyConfig } from '@scullyio/scully/utils/config';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const disableAngularPlugin = async (html) => {
  const statsJsonPath = join(scullyConfig.distFolder, 'stats.json');
  if (!existsSync(statsJsonPath)) {
    const noStatsJsonError = `A stats.json is required for the 'disableAngular' plugin.
Please run 'npm build' with the '--stats-json' flag`;
    console.error(noStatsJsonError);
    throw new Error(noStatsJsonError);
  }

  const scullyDisableAngularStatsJsonPath = join(scullyConfig.distFolder, 'scully-disable-angular-stats.json');
  let scullyDisableAngularStatsJson = '';
  if (!existsSync(scullyDisableAngularStatsJsonPath)) {
    const errorCreatingScullyDisableAngularStatsJsonError = 'The scully-disable-angular-stats.json could not be created';
    try {
      scullyDisableAngularStatsJson = JSON.parse(readFileSync(statsJsonPath, { encoding: 'utf8' }).toString()).assetsByChunkName;
      writeFileSync(scullyDisableAngularStatsJsonPath, JSON.stringify(scullyDisableAngularStatsJson));
    } catch (e) {
      console.error(e);
      console.error(errorCreatingScullyDisableAngularStatsJsonError);
      throw new Error(errorCreatingScullyDisableAngularStatsJsonError);
    }
  } else {
    scullyDisableAngularStatsJson = JSON.parse(readFileSync(scullyDisableAngularStatsJsonPath, { encoding: 'utf8' }).toString());
  }

  Object.values(scullyDisableAngularStatsJson).map(entry => entry[0]).forEach(entry => {
    html = html.replace(new RegExp(`<script src="?${entry}"?( nomodule(="")?)? defer><\/script>`, 'gmi'), '');
  });
  return Promise.resolve(html);
};

// no validation implemented
const disableAngularPluginValidator = async () => [];
export const DisableAngular = 'disableAngular';
registerPlugin('render', DisableAngular, disableAngularPlugin);
