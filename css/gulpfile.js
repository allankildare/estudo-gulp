const {series, parallel} = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function tranformacaoCSS() {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError)) //  tratando erro
        .pipe(uglifycss({ "uglyComments": true })) // minifica
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('build/css'))
}

function copiarHTML() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
}

exports.default = parallel(tranformacaoCSS, copiarHTML) // executando em paralelo