/// <reference path="../../../typings/index.d.ts" />

import '../../../node_modules/path/path.js'
import '../../../node_modules/zone.js/dist/zone.js'
import '../../../node_modules/reflect-metadata/Reflect.js'

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ApplicationModule } from './application.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(ApplicationModule);