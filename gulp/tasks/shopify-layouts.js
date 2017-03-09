var $             = require('gulp-load-plugins')();
var browserSync = false;
var config        = require('../util/loadConfig').shopify;
var gulp          = require('gulp');
var gulpif        = require('gulp-if');
var cache         = require('gulp-cached');

// BUILD SHOPIFY LANGUAGE FILES
gulp.task('shopify-layouts', function(){
  return gulp.src(config.layoutsSrc)
    .pipe(cache())
    .pipe(gulp.dest(config.layoutsDest));
});
