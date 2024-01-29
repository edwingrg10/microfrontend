import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { CursosModule } from './app/cursos.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(CursosModule)
  .catch(err => console.error(err));
