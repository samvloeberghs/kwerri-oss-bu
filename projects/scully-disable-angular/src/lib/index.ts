import { registerPlugin } from '@scullyio/scully';
import { scullyConfig } from '@scullyio/scully/utils/config';
import { writeFileSync, readFileSync, existsSync } from 'fs';


const disableAngularPlugin = async (html, route) => {

  console.log(scullyConfig);
  console.log(route);
  // parse the stats.json
  // if(existsSync)

  return Promise.resolve(html);
};

const DisableAngularValidator = async () => [];
export const DisableAngular = 'disableAngular';
registerPlugin('render', DisableAngular, disableAngularPlugin, DisableAngularValidator);
