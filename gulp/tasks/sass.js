var $             = require('gulp-load-plugins')();
var autoprefixer  = require('gulp-autoprefixer');
var config        = require('../util/loadConfig').sass;
var gulp          = require('gulp');
var sass          = require('gulp-sass');
var uglifycss     = require('gulp-uglifycss');
var cache         = require('gulp-cached');

gulp.task('sass', function() {
  var pipe = gulp.src(config.src)
    // .pipe(cache())
    // .pipe($.sourcemaps.init())
    .pipe($.sass({
        includePaths: config.includePaths
        })
      .on('error', $.sass.logError))
    // .pipe(autoprefixer(config.compatibility))
    // .pipe(uglifycss())
    .pipe($.concat(config.filename))
    .pipe(gulp.dest(config.dest));

  return pipe;
});
