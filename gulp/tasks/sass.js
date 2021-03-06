module.exports = function () {
	$.gulp.task('sass', function() {
		return $.gulp.src('./dev/static/sass/global.sass')
			.pipe($.gp.sourcemaps.init())
			.pipe($.gp.sass())
			.pipe($.gp.autoprefixer({
				browsers: ['last 4 versions']
			}))
			.pipe($.gp.rename('main.css'))
			// .pipe($.gp.csso({
			// 	restructure: true
			// }))
			.pipe($.gp.sourcemaps.write())
			.pipe($.gulp.dest('./build/assets/css'))
			.pipe($.bs.stream());
	});	
} 