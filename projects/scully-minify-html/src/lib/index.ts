import { configValidator } from '@scullyio/scully';
import { minify } from 'html-minifier';

const defaultMinifyOptions = {
  removeComments: true,
  removeCommentsFromCDATA: true,
  collapseWhitespace: true,
  collapseBooleanAttributes: true,
  removeRedundantAttributes: true,
  useShortDoctype: true,
  removeEmptyAttributes: true,
  minifyCSS: true,
  // don't remove attribute quotes, not all social media platforms can parse this over-optimization
  removeAttributeQuotes: false,
  // don't remove optional tags, like the head, not all social media platforms can parse this over-optimization
  removeOptionalTags: false,
};

export const minifyHtmlPluginFactory = (minifyOptions?) => {

  const minifyHtmlPlugin = async (html, route) => {
    const localMinifyOptions = {
      ...defaultMinifyOptions,
      ...minifyOptions,
    };
    const minifiedHtml = minify(html, localMinifyOptions);
    return Promise.resolve(minifiedHtml);
  };
  minifyHtmlPlugin[configValidator] = async options => {
    return [];
  };
  return minifyHtmlPlugin;

};


export const MinifyHtml = 'minifyHtml';
