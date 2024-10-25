/*Dependencia para usar sass */
import {src,dest,watch} from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

export function css(done){
    src('src/scss/**/*.scss')//Ubicamos el archivo
        .pipe(sass().on('error',sass.logError))//compilamos el sass
        .pipe(dest('build/css'))//destino

    done();
}

//Esta funcion escucha por cambios en los archivos sass
export function watch(done){
    watch('src/scss/**/*.scss',css)
    done();
}