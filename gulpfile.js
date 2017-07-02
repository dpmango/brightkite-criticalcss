// DECLARE VARIABLES
var gulp          = require('gulp');
var rename        = require('gulp-rename');
var useref        = require('gulp-useref');
var cache         = require('gulp-cache');
var del           = require('del');
var runSequence   = require('run-sequence');
var browserSync   = require('browser-sync').create();
var gutil         = require('gulp-util');
var critical      = require('critical').stream;

// Generate & Inline Critical-path CSS
gulp.task('critical', function () {
  return gulp.src('src/index.html')
      .pipe(critical({base: 'src/', inline: true, css: ['src/css/min.css']}))
      .on('error', function(err) { gutil.log(gutil.colors.red(err.message)); })
      .pipe(gulp.dest('dist'));
});
