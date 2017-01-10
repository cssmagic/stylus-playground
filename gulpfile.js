'use strict'

const path = require('path')
const gulp = require('gulp')
const browserSync = require('browser-sync').create()

const PATH_CSS = './src/css/'
const FILES_CSS = './src/css/*.styl'
const FILES_HTML = './src/*.html'

gulp.task('css', () => {
	const stylus = require('gulp-stylus')
	const postcss = require('gulp-postcss')
	const autoprefixer = require('autoprefixer')

	const AUTOPREFIXER_BROWSERS = [
		'last 2 Safari versions',
		'last 2 Chrome versions',
		'last 2 Firefox versions',
		'Android >= 4',
		'iOS >= 7',
	]

	return gulp.src(FILES_CSS)
		.pipe(stylus({
			linenos: true,
			compress: false,
			errors: true,
			'include css': true,
		}))
		.on('error', function (err) {
			console.error(err.message)
			this.emit('end')
		})
		.pipe(postcss([
			autoprefixer({
				browsers: AUTOPREFIXER_BROWSERS,
			}),
		]))
		.pipe(gulp.dest(PATH_CSS))
		.pipe(browserSync.stream())
})

gulp.task('watch-css', () => {
	gulp.watch(FILES_CSS, gulp.series('css'))
})
gulp.task('watch-html', () => {
	gulp.watch(FILES_HTML)
		.on('change', browserSync.reload)
})

gulp.task('serve', (done) => {
    browserSync.init({
        server: './src/',
    })
	done()
})

gulp.task('default', gulp.series([
	'css',
	'serve',
	gulp.parallel([
		'watch-css',
		'watch-html',
	]),
]))
