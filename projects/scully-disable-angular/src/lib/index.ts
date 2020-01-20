import { configValidator } from '@scullyio/scully';

export const disableAngularPluginFactory = () => {

  const disableAngularPlugin = async (html, route) => {
    return Promise.resolve(html);
  };
  disableAngularPluginFactory[configValidator] = async options => {
    return [];
  };
  return disableAngularPlugin;

};


export const DisableAngular = 'disableAngular';
