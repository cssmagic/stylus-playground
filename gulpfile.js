'use strict'

const path = require('path')
const gulp = require('gulp')
const browserSync = require('browser-sync').create()

const PATH_CSS = './src/css/'
const FILES_CSS = './src/css/*.styl'
const FILES_HTML = './src/*.html'

const VENDOR_FILES = [
	'./node_modules/normalize.css/normalize.css',
	'./node_modules/cmui-zero/dist/zero.css',
]

gulp.task('vendor', () => {
	return gulp.src(VENDOR_FILES)
		.pipe(gulp.dest(path.join(PATH_CSS, 'vendor')))
})

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

	function logError(err) {
		let plugin = err.plugin || ''
		const nameMapping = {
			'gulp-stylus': 'Stylus',
			'gulp-postcss': 'PostCSS',
		}
		const pluginName = nameMapping[plugin] || 'Unknown'
		console.error(`\n[${pluginName}] Compiling Error!\n`)
		console.error(err.stack || err.message)
		console.error('\n')

		browserSync.notify(`<span style="color: red; font-family: sans-serif; font-weight: bold;"><code>${pluginName}</code> Compiling Error!</span>`)
		this.emit('end')
	}

	return gulp.src(FILES_CSS)
		.pipe(stylus({
			linenos: true,
			compress: false,
			errors: true,
			'include css': true,
		}))
		.on('error', logError)
		.pipe(postcss([
			autoprefixer({
				browsers: AUTOPREFIXER_BROWSERS,
			}),
		]))
		.on('error', logError)
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
	'vendor',
	'css',
	'serve',
	gulp.parallel([
		'watch-css',
		'watch-html',
	]),
]))
