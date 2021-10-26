// Variables
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const babel = require("gulp-babel");
const uglify = require('gulp-uglify');



// Style
function buildStyles() {
  return src('assets/src/sass/**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' })) // compressed & expanded
    .pipe(dest('assets/dist/css'))
};

// javascript
function buildJavascript() {
  return src("assets/src/js/*.js")
    .pipe(babel({
      presets: ["@babel/preset-env"]
    }))
    .pipe(dest("assets/src/js/babel"));
};

function compressJavascript() {
  return src('assets/src/js/babel/*.js')
    .pipe(uglify())
    .pipe(dest('assets/dist/js'))
};

// Watch
function watchTask() {
  watch(['*.html', 'assets/src/sass/**/*.scss', 'assets/src/js/*.js', 'assets/src/js/babel/*.js'], series(buildStyles, buildJavascript, compressJavascript))
};

exports.default = series(buildStyles, buildJavascript, compressJavascript, watchTask)