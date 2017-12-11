var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('compile-sass', function () {
  return gulp.src('./app/assets/styles/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(postcss([autoprefixer]))
    .pipe(gulp.dest('./app/compiled-assets/styles'));
});