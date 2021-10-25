const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')
const uglify = require('gulp-uglify')

function buildStyles() {
  return src('assets/src/sass/**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' })) // compressed & expanded
    .pipe(purgecss({ content: ['*.html'] }))
    .pipe(dest('assets/dist/css'))
}

function compressJs() {
  return src('assets/src/js/*.js')
    .pipe(uglify())
    .pipe(dest('assets/dist/js'))
};

function watchTask() {
  watch(['assets/src/sass/**/*.scss', '*.html', 'assets/src/js/*.js'], series(buildStyles, compressJs))
}

exports.default = series(buildStyles, compressJs, watchTask)