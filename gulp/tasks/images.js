var $             = require('gulp-load-plugins')();
var config        = require('../util/loadConfig').images;
var gulp          = require('gulp');
var cache         = require('gulp-cached');

// BUILD SHOPIFY TEMPLATE FILES
gulp.task('images', function(){
  return gulp.src(config.src)
    .pipe(cache())
    .pipe(gulp.dest(config.dest));
});
