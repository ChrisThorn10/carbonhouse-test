var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('compile-sass', function () {
  return gulp.src('./app/assets/styles/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./app/compiled-assets/styles'));
});