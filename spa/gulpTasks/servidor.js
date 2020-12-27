/* essa eh uma solucao bem semelhante ao live server, extensao do visual studio code */
const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function servidor() {
    return gulp.src('build')
    .pipe(webserver({
        port: 8080, // usa a porta 8080
        open: true, // abre o browser
        livereload: true, // atualiza automagicamente :)
    }))
}

function monitorarArquivos(callback) {
    // monitorando de acordo com os formatos dos arquivos
    watch('src/**/*.html', () => gulp.series('appHTML')()) // sempre que alterar o html, o gulp realiza a task appHTML
    watch('src/**/*.scss', () => gulp.series('appCSS')()) 
    watch('src/**/*.js', () => gulp.series('appJS')()) 
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')()) 

    return callback()
}


module.exports = {
    monitorarArquivos,
    servidor
}