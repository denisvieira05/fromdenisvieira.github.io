'use strict';

var gulp          = require( 'gulp' ),
    config        = require('./gulp.config')(),
    connect       = require( 'gulp-connect' ),
    sass          = require('gulp-sass'),
    concat        = require('gulp-concat'),
    gutil         = require('gulp-util'),
    sourcemaps    = require('gulp-sourcemaps'),
    htmlmin       = require('gulp-htmlmin');

var files = [
    'src/*.html',
    'src/assets/sass/**/*.scss',
    'src/assets/js/*.js'
];

gulp.task( 'files', function() {
    gulp.src( files ).pipe( connect.reload() );
});

gulp.task('sass', function () {
    gulp.src(config.sass + '*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('src/assets/'));
});

gulp.task('copyHtml', function() {
  // copy any html files in source/ to public/
  gulp.src('src/*.html').pipe(gulp.dest('public'));
});

gulp.task('build-js', function() {
  return gulp.src('src/js/*.js')
    .pipe(sourcemaps.init())
      .pipe(concat('bundle.js'))
      //only uglify if gulp is ran with '--type production'
      .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/assets/javascript'))
    .pipe(gulp.dest('public/assets/javascript'));
});


gulp.task( 'watch', function() {
    gulp.watch( files, [ 'sass','files']);
});

gulp.task( 'connect', function() {
    connect.server({ root: 'src',livereload: true });
});


gulp.task( 'default', [ 'connect', 'watch','sass' ]);
