'use strict'

const path = require('path')
const gulp = require('gulp')

const PATH_CSS = './src/css/'
const FILES_CSS = './src/css/*.styl'

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
		.pipe(postcss([
			autoprefixer({
				browsers: AUTOPREFIXER_BROWSERS,
			}),
		]))
		.pipe(gulp.dest(PATH_CSS))
})

gulp.task('default', gulp.series([
	'watch',
]))
