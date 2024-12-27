let mix = require('laravel-mix')
let path = require('path')
let NovaExtension = require('laravel-nova-devtool')
// require('./mix')

mix.extend('nova', new NovaExtension())

mix
  .setPublicPath('dist')
  .js('resources/js/field.js', 'js')
  .vue({ version: 3 })
  .webpackConfig(require('./webpack.config'))
  .sass('resources/sass/field.scss', 'css')
  .nova('dmitrybubyakin/nova-medialibrary-field')
  // .version()
  .alias({
    // '@': path.join(__dirname, 'resources/js/'),
    '@': 'vendor/laravel/nova/resources/js',
    'laravel-nova': path.join(__dirname, 'vendor/laravel/nova/resources/js/mixins/packages.js'),
  })
// .sourceMaps()

