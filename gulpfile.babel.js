'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import notify from 'gulp-notify';
import browserSync from 'browser-sync';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import del from 'del';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import glob from 'glob';
import browserify from 'browserify';
import plumber from 'gulp-plumber';
import cssmin from 'gulp-minify-css';
import uglify from 'gulp-uglify';

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

const bowerPath = './bower_components/';

const jsConfig = {
  sourceFiles: './src/scripts/**/*.js',
  launcher: './src/scripts/app.js',
  dest: './build/scripts/',
  globalNamespace: 'mynamespace'
}

const paths = {
  libCss: [
    './bower_components/fontawesome/css/font-awesome.css',
    './bower_components/bootstrap/dist/css/bootstrap.css'
  ],
  libJs: [
    './bower_components/jquery/dist/jquery.js',
    './bower_components/bootstrap/dist/js/bootstrap.js'
  ]
};
function onError(err) {
    notify.onError({
        title: 'Gulp',
        subtitle: 'Failure!',
        message: function(){
          return 'Error: <%= error.message %>';
        },
        sound: 'Beep'
    })(err);

    this.emit('end');
};

gulp.task('clean', () => {
  del.sync(['build/**']);
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
  var filenames = glob.sync(jsConfig.sourceFiles);
  return browserify({
      entries: filenames,
      debug: true
  })
  .require(jsConfig.launcher, {expose: jsConfig.globalNamespace})
  .transform(babelify)
  .bundle()
  .on('error',onError)
  .pipe(source('app.js')) // generated output file
  .pipe(buffer())         // required for sourcemaps
  .pipe(sourcemaps.init())
  .pipe(sourcemaps.write("."))
  .pipe(gulp.dest(jsConfig.dest))
  .pipe(notify({
      title: 'Gulp',
      subtitle: 'success',
      message: 'Js task finished',
      sound: "Pop"
  }));
});

gulp.task('fontawesomeFonts',() => {
  return gulp.src([
          bowerPath+'fontawesome/fonts/*.*'])
  .pipe(gulp.dest(dirs.dest+'/fonts/'));
});

gulp.task('libCss',() => {
  return gulp.src(paths.libCss)
    .pipe(cssmin())
    .pipe(concat('lib.min.css'))
    .pipe(gulp.dest(dirs.dest + '/styles'));
});

gulp.task('libJs', () => {
  return gulp.src(paths.libJs)
    .pipe(concat('lib.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(dirs.dest + '/scripts'));
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

gulp.task('build', ['fontawesomeFonts','libCss','libJs','styles','copyIndex','js']);
gulp.task('default', ['build','watch']);