const tooMuchHtmlMinifyOptions = {
  removeComments: true,
  removeCommentsFromCDATA: true,
  collapseWhitespace: true,
  collapseBooleanAttributes: true,
  removeAttributeQuotes: true,
  removeRedundantAttributes: true,
  useShortDoctype: true,
  removeEmptyAttributes: true,
  removeOptionalTags: true,
  minifyCSS: true,
};

const goodHtmlMinifyOptions = Object.assign({}, tooMuchHtmlMinifyOptions, {
  removeAttributeQuotes: false,
  removeOptionalTags: false,
});

export const htmlMinifyOptions = goodHtmlMinifyOptions;
// export const htmlMinifyOptions = tooMuchHtmlMinifyOptions;
