const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

function appHTML() {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true})) // retira os espacos em branco
        .pipe(gulp.dest('build'))
}

function appCSS() {
    return gulp.src('src/assets/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglifyComments": true }))
        .pipe(concat('app.min.css')) //minifica o css
        .pipe(gulp.dest('build/assets/css'))
}

function appJS() {
    return gulp.src('src/assets/js/**/*.js') // todos os arquivos js
        .pipe(babel({ presets: ['ENV'] })) // versao mais atual do javascript
        .pipe(uglify())
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('build/assets/js'))
}

function appIMG() {
    return gulp.src('src/assets/imgs/**/*.*') // imagens em qualquer formato
        .pipe(gulp.dest('build/assets/imgs'))
}

gulp.task('appHTML', appHTML) // registrando task
gulp.task('appCSS', appCSS) 
gulp.task('appJS', appJS) 
gulp.task('appIMG', appIMG) 

module.exports = {
    appHTML,
    appCSS,
    appJS,
    appIMG
}