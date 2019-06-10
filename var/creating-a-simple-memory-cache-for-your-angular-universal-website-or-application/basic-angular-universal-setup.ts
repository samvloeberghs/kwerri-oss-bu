import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('your-app/server/main');

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});
