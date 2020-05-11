import { registerPlugin, HandledRoute, ScullyConfig, scullyConfig } from '@scullyio/scully';
import { minify, Options } from 'html-minifier';

const defaultMinifyOptions: Options = {
  caseSensitive: true,
  removeComments: true,
  collapseWhitespace: true,
  collapseBooleanAttributes: true,
  removeRedundantAttributes: true,
  useShortDoctype: true,
  removeEmptyAttributes: true,
  minifyCSS: true,
  minifyJS: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  // don't remove attribute quotes, not all social media platforms can parse this over-optimization
  removeAttributeQuotes: false,
  // don't remove optional tags, like the head, not all social media platforms can parse this over-optimization
  removeOptionalTags: false,
  ignoreCustomFragments: [
    /\/\*\* ___SCULLY_STATE_(START|END)___ \*\//
  ]
};

export interface MinifyHtmlHandledRoute extends HandledRoute {
  minifyHtmlOptions: Options;
}

export interface MinifyHtmlScullyConfig extends ScullyConfig {
  minifyHtmlOptions: Options;
}

export const minifyHtmlPlugin = async (html, route: MinifyHtmlHandledRoute) => {
  let localMinifyOptions = defaultMinifyOptions;
  if (route.minifyHtmlOptions) {
    localMinifyOptions = {
      ...defaultMinifyOptions,
      ...route.minifyHtmlOptions,
      ignoreCustomComments: [
        ...route.minifyHtmlOptions.ignoreCustomComments,
        ...defaultMinifyOptions.ignoreCustomComments
      ]
    };
  } else if ((scullyConfig as MinifyHtmlScullyConfig).minifyHtmlOptions) {
    localMinifyOptions = {
      ...defaultMinifyOptions,
      ...(scullyConfig as MinifyHtmlScullyConfig).minifyHtmlOptions,
    };
  }
  const minifiedHtml = minify(html, localMinifyOptions);
  return Promise.resolve(minifiedHtml);
};

// no validation implemented
const minifyHtmlPluginValidator = async () => [];
export const MinifyHtml = 'minifyHtml';
registerPlugin('render', MinifyHtml, minifyHtmlPlugin);
