var $             = require('gulp-load-plugins')();
var browserSync = false;
var config        = require('../util/loadConfig').shopify;
var gulp          = require('gulp');
var gulpif        = require('gulp-if');
var cache         = require('gulp-cached');

// BUILD SHOPIFY TEMPLATE FILES
gulp.task('shopify-templates', function(){
  return gulp.src(config.templatesSrc)
    .pipe(cache())
    .pipe(gulp.dest(config.templatesDest));
});
