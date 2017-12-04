'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('sass', function () {
 return gulp.src('./app/assets/styles/styles.css')
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest('./app/temp/styles'));
});