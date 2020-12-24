const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(callback) {
    // configuracao do workflow
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false, // tira os comentarios
            presets: ["env"] // versao mais nova do js
        }))
        .pipe(uglify())
        .on('error', erro => console.log("Ocorreu o erro:",erro))
        .pipe(concat('codigo.min.js')) // arquivo minificado
        .pipe(gulp.dest('build')) // destino vai ser a pasta build

    return callback()
}

function fim(callback) {
    console.log('Fim!')
    return callback()
}

exports.default = series(transformacaoJS, fim)