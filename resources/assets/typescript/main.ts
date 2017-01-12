/// <reference path="../../../typings/index.d.ts" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ApplicationModule } from './application.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(ApplicationModule);