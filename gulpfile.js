'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('sass', function () {
  return gulp.src('css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

gulp.task('images', function() {
    return gulp.src('images/art/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
        }))
        .pipe(gulp.dest('images'));
});

gulp.task('sass:watch', function () {
  gulp.watch('css/*.scss', ['sass']);
});