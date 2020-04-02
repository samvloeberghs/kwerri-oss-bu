import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';

if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from './app/app.server.module';
export { REQUEST, RESPONSE } from '@nguniversal/express-engine/tokens';
export { ngExpressEngine, RenderOptions } from '@nguniversal/express-engine';
export { renderModuleFactory, renderModule } from '@angular/platform-server';
