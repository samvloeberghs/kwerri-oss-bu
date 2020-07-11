const {
  httpGetJson, registerPlugin, routeSplit
} = require('@scullyio/scully');

const Posts = 'posts';

const postsPlugin = async (route, config) => {
  const list = await httpGetJson(config.url);
  const { createPath } = routeSplit(route);
  const handledRoutes = [];
  for (let item of list) {
    handledRoutes.push({
      route: createPath(item.slug)
    });
  }
  return handledRoutes;
};

registerPlugin('router', Posts, postsPlugin);
exports.Posts = Posts;
