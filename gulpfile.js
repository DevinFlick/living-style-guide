'use strict';

var gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    cleanCss        = require('gulp-clean-css'),
    livingcss       = require('gulp-livingcss'),
    rename          = require('gulp-rename'),
    size            = require('gulp-size'),
    del             = require('del'),
    runSequence     = require('run-sequence'),
    browserSync     = require('browser-sync').create();

gulp.task('sass', function () {
  return gulp.src('src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'))
});

gulp.task('livingcss', function(){
  gulp.src('src/css/*.css')
    .pipe(livingcss('dist', [{template: 'src/template/template.hbs'}]))
    .pipe(gulp.dest('dist'))
});

gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
})

gulp.task('clean:dist', function() {
  return del.sync('dist/*.html');
})

gulp.task('clean:src/css', function(){
  return del.sync('src/css/*');
})

gulp.task('watch', function (){
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/css/*.css', ['livingcss']);
  gulp.watch('dist/*.html', browserSync.reload);
  gulp.watch('src/*.html', browserSync.reload);
  gulp.watch('src/js/**/*.js', browserSync.reload);
});

gulp.task('default', function(){
  runSequence(
    'clean:dist',
    'clean:src/css',
    'sass',
    'livingcss',
    'watch',
    'browserSync'
  )
});

// Gulp watch syntax
// gulp.watch('files-to-watch', ['tasks', 'to', 'run']);
