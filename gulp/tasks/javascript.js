var $             = require('gulp-load-plugins')();
var browserSync = false;
var config        = require('../util/loadConfig').javascript;
var gulp          = require('gulp');
var gulpif        = require('gulp-if');
var sequence      = require('run-sequence');
var uglify        = require('gulp-uglify');
var cache         = require('gulp-cached');

// MAIN JS IS LOADED IN THE BOTTOM OF <BODY>
gulp.task('customJS', function(){
  return gulp.src(config.src)
    // .pipe(cache())
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    // .pipe($.uglify())
    .pipe($.concat(config.filename))
    .pipe(gulp.dest(config.dest));
});

gulp.task('vendorJS', function(){
  return gulp.src(config.vendorSrc)
    // .pipe(cache())
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    // .pipe($.uglify())
    .pipe($.concat(config.vendorFilename))
    .pipe(gulp.dest(config.dest));
});

gulp.task('javascript', function(done) {
  sequence('vendorJS', 'customJS', done);
});
