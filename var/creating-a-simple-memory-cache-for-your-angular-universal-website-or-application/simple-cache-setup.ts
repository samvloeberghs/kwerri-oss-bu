const ngApp = (req, res) => {
  const config = {
    req,
    res,
    preboot: true,
    baseUrl: '/',
    requestUrl: req.originalUrl,
    originUrl: 'http://localhost:80',
  };

  const allowedPages = ['/', '/about', '/contact'];

  if (allowedPages.includes(req.originalUrl)) {
    const entry = cache.get(req.originalUrl); // check if we have a cache entry
    if (entry) {
      res.send(entry);                        // send the cache entry
    } else {
      res.render('index', config, (err, html) => {
        cache.put(req.originalUrl, html);     // save the rendered HTML in the cache
        res.send(html);
      });
    }
  } else {
    res.render('index', config);        // just render with no cache
  }
};
