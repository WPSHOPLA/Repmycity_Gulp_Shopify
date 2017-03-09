var $             = require('gulp-load-plugins')();
var browserSync = false;
var config        = require('../util/loadConfig').shopify;
var gulp          = require('gulp');
var gulpif        = require('gulp-if');
var cache         = require('gulp-cached');

// BUILD SHOPIFY SNIPPETS FILES
gulp.task('shopify-snippets', function(){
  return gulp.src(config.snippetsSrc)
    .pipe(cache())
    .pipe(gulp.dest(config.snippetsDest));
});
