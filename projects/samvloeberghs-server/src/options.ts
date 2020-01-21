import { Options } from 'html-minifier';

const tooMuchHtmlMinifyOptions: Options = {
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
  removeAttributeQuotes: true,
  removeOptionalTags: true
};

const goodHtmlMinifyOptions = Object.assign({}, tooMuchHtmlMinifyOptions, {
  removeAttributeQuotes: false,
  removeOptionalTags: false,
});

export const htmlMinifyOptions: Options = goodHtmlMinifyOptions;
// export const htmlMinifyOptions = tooMuchHtmlMinifyOptions;
