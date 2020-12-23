const gulp = require('gulp')
const { series, parallel, src } = require('gulp')

const antes1 = callback => {
    console.log('tarefa antes 1!')
    return callback()
}

const antes2 = callback => {
    console.log('tarefa antes 2!')
    return callback()
}

function copiar(callback) {
    console.log('tarefa de copiar')
    return callback()
}

const fim = callback => {
    // src -> seleciona os arquivos
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    gulp.src('pastaA/**/*.txt') // qualquer arquivo que esteja na pasta A, com extensao .txt
        // pipe -> transforma    
        .pipe(gulp.dest('pastaB')) // o destino eh definido para a pasta B, automaticamente criada
    return callback()
}

module.exports.default = series(
    parallel(antes1, antes2), // antes 1 e antes 2 ocorrem em paralelo
    copiar,
    fim
)