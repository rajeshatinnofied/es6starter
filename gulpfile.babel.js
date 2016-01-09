'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import browserSync from 'browser-sync';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import del from 'del';

const dirs = {
  src: 'src',
  dest: 'build'
};

const sassPaths = {
  src: `${dirs.src}/sass/`,
  dest: `${dirs.dest}/styles/`
};
const indexPaths = {
  src: `${dirs.src}/index.html`,
  dest: `${dirs.dest}/`
};
var onError = function(err) {
    notify.onError({
        title: 'Gulp',
        subtitle: 'Failure!',
        message: 'Error: <%= error.message %>',
        sound: 'Beep'
    })(err);

    this.emit('end');
};

gulp.task('clean', (cb) => {
  del(['build/**'],cb);
});

gulp.task('styles', () => {
  return gulp.src(`${sassPaths.src}app.scss`)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(sassPaths.dest));
});

gulp.task('copyIndex',() => {
  return gulp.src(indexPaths.src)
    .pipe(gulp.dest(indexPaths.dest));
});

gulp.task('js', () => {
  return gulp.src('src/scripts/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(`${dirs.dest}/scripts/`));
});

gulp.task('server', () => {
  browserSync({
    server: {
     baseDir: './build' 
    }
  });
});

gulp.task('watch', () => {
    gulp.watch(['src/sass/**/*.scss'], ['styles']);
    gulp.watch(['src/scripts/**/*.js'],['js']);
    gulp.watch(indexPaths.src, ['copyIndex']);
});

gulp.task('serve',['build','server'], () => {
  return gulp.watch([
    indexPaths.src, 
    './src/sass/**/*.scss','src/scripts/**/*.js'
  ], [
   'build', browserSync.reload
  ]);
});

gulp.task('build', ['styles','copyIndex','js']);
gulp.task('default', ['build','watch']);