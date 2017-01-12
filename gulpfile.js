const elixir = require('laravel-elixir')

require('laravel-elixir-vue-2')
require('elixir-typescript')


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

process.env.DISABLE_NOTIFIER = true

elixir(mix => {
    let css = 'public/css/'
    mix.sass('global.scss', css + 'global.css')
});

gulp.task('init', () => {
    gulp.src('node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest('public/fonts/font-awesome/'))
});