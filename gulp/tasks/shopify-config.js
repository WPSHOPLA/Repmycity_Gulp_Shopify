var $             = require('gulp-load-plugins')();
var browserSync = false;
var config        = require('../util/loadConfig').shopify;
var gulp          = require('gulp');
var gulpif        = require('gulp-if');
var sequence      = require('run-sequence');
var cache         = require('gulp-cached');

// BUILD SHOPIFY MAIN CONFIG FILE
gulp.task('shopify-main-config', function(){
  return gulp.src(config.mainConfigSrc)
    .pipe(cache())
    .pipe(gulp.dest(config.mainConfigDest));
});

// BUILD SHOPIFY CONFIG FOLDER FILES
gulp.task('shopify-config-files', function(){
  return gulp.src(config.configSrc)
    .pipe(cache())
    .pipe(gulp.dest(config.configDest));
});

// BUILD SHOPIFY CONFIG FILES
gulp.task('shopify-config', function(done) {
  sequence('shopify-main-config', 'shopify-config-files', done);
});
