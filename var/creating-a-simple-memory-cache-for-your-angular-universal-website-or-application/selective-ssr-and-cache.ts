// Our index.html we'll use as our template
const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();

app.engine('html', (_, options, callback) => {
  renderModuleFactory(AppServerModuleNgFactory, {
    document: template,
    // ...
  }).then(html => {
    callback(null, html);
  });
});

const cache = require('memory-cache');

const ngApp = (req, res) => {
  const config = {
    // ...
  };

  const allowedPages = ['/', '/about', '/contact'];

  if (allowedPages.includes(req.originalUrl)) {
    // ...
  } else {
    res.send(template);                       // just return the templates
  }
};
