var config      = require('../util/loadConfig').clean;
var del         = require('del');
var gulp        = require('gulp');
var cache       = require('gulp-cached');

gulp.task('clean', function(done) {
  cache.caches = {};
  del(config);
  done();
});
