const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');
require('elixir-typescript');


/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
    mix.sass('app.scss')
      .webpack('app.js')
      .copy('node_modules/@angular', 'public/vendor/@angular')
      .copy('node_modules/anular2-in-memory-web-api', 'public/vendor/anular2-in-memory-web-api')
      .copy('node_modules/core-js', 'public/vendor/core-js')
      .copy('node_modules/reflect-metadata', 'public/vendor/reflect-metadata')
      .copy('node_modules/systemjs', 'public/vendor/systemjs')
      .copy('node_modules/rxjs', 'public/vendor/rxjs')
      .copy('node_modules/zone.js', 'public/vendor/zone.js')

      .typescript(
          [
              'app.component.ts',
              'app.module.ts',
              'main.ts'
          ],
          'public/app',
          {
              "target": "es5",
              "module": "system",
              "moduleResolution": "node",
              "sourceMap": true,
              "emitDecoratorMetadata": true,
              "experimentalDecorators": true,
              "removeComments": false,
              "noImplicitAny": false
          }
      );
});
