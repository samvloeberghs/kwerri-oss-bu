export const htmlMinifyOptions = {
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

export const serverConfig = {
  noUniversal : {
    universal: false,
    cache: false
  },
  universalNoCache: {
    universal: true,
    cache: false
  },
  universalFileCache: {
    universal: true,
    cache: 'file'
  },
  universalMemoryCache: {
    universal: true,
    cache: 'memory'
  }
};