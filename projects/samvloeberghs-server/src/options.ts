const tooMuchHtmlMinifyOptions = {
  removeComments: true,
  removeCommentsFromCDATA: true,
  collapseWhitespace: true,
  collapseBooleanAttributes: true,
  removeRedundantAttributes: true,
  useShortDoctype: true,
  removeEmptyAttributes: true,
  minifyCSS: true,
  removeAttributeQuotes: true,
  removeOptionalTags: true
};

const goodHtmlMinifyOptions = Object.assign({}, tooMuchHtmlMinifyOptions, {
  removeAttributeQuotes: false,
  removeOptionalTags: false,
});

// export const htmlMinifyOptions = goodHtmlMinifyOptions;
export const htmlMinifyOptions = tooMuchHtmlMinifyOptions;
