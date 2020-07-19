export const fixExternalUrl = (externalUrl: string) => {
  const splittedExternalUrl = externalUrl.split('?');
  // /a/b/c/        => '/a/b/c/' , undefined
  // /a/b/c         => '/a/b/c' , undefined
  // /a/b/c/#test   => '/a/b/c/' , 'test'
  // /a/b/c#test    => '/a/b/c' , 'test'
  if (!splittedExternalUrl[0].endsWith('/')) {
    externalUrl = `${splittedExternalUrl[0]}/`;
    if (Boolean(splittedExternalUrl[1])) {
      externalUrl = `${externalUrl}?${splittedExternalUrl[1]}`;
    }
  }
  return externalUrl;
};
