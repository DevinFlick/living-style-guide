'use strict';

var gulp            = require('gulp'),
    cssnano         = require('cssnano'),
    sass            = require('gulp-sass'),
    livingcss       = require('gulp-livingcss'),
    minimist        = require('minimist'),

    argv = minimist(process.argv.slice(2), { boolean: true });

    gulp.task('default', function(){
      gulp.src('src/css/test-styles.css')
          .pipe(livingcss())
          .pipe(gulp.dest('dist'))
    });
