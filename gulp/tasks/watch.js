var gulp = require('gulp');	//download the gulp package
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('watch', function(){
	
	browserSync.init({
		notify:false,
		server:{
			baseDir: "app"	
			}
		});						
							
	watch('./app/index.html', function(){
		browserSync.reload();
		});
    
    //watch any future folders in styles, watch any .css files
	watch('./app/assets/styles/**/*.scss', function(){
		gulp.start('cssInject');
		});
	});	


//compile-sass is a dependency to cssInject.  cssInject wont begin until styles has run.
gulp.task('cssInject',['compile-sass'] , function(){
	return gulp.src('./app/compiled-assets/styles/styles.css')
		.pipe(browserSync.stream());
	
	});	