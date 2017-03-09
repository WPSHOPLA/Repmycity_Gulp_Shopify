try
{
  var config      = require('../util/loadConfig').watch;
  var gulp        = require('gulp');
  var shell       = require('gulp-shell')

  // Watch files for changes, recompile/rebuild and reload the browser
  gulp.task('watch', function() {
    // shopify files
    gulp.watch(config.snippets, ['shopify-snippets']);
    gulp.watch(config.templates, ['shopify-templates']);
    gulp.watch(config.locales, ['shopify-locales']);
    gulp.watch(config.layouts, ['shopify-layouts']);
    gulp.watch(config.config, ['shopify-config']);

    // assets
    gulp.watch(config.javascript, ['customJS']);
    gulp.watch(config.sass, ['sass']);
    gulp.watch(config.images, ['images']);
    gulp.watch(config.fonts, ['fonts']);
  });

  // shopify watch and deploy to shopify theme
  gulp.task('shopify-watch', shell.task([
    'cd _site && theme watch'
  ]));
}
catch (e)
{
}
