'use strict';

var gulp          = require( 'gulp' ),
    config        = require('./gulp.config')(),
    connect       = require( 'gulp-connect' ),
    sass          = require('gulp-sass'),
    concat        = require('gulp-concat'),
    gutil         = require('gulp-util'),
    sourcemaps    = require('gulp-sourcemaps'),
    uglify        = require('gulp-uglify'),
    jshint        = require('gulp-jshint'),
    htmlmin       = require('gulp-htmlmin'),
    imagemin      = require('gulp-imagemin'),
    clean         = require('gulp-clean'),
    notify        = require('gulp-notify');

var files = [
    './src/*.html',
    'src/assets/styles/**/*.scss',
    'src/assets/js/*.js',
    'src/assets/images/**',
    'src/assets/fonts/**',
];

// Delete the dist directory
gulp.task('clean', function() {
 return gulp.src('./public')
 .pipe(clean());
});

gulp.task('compile-sass', function () {
    gulp.src(config.sass + '*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('src/assets/styles/'))
    .pipe(gulp.dest('public/assets/styles/'));
});

gulp.task('build-js', function() {
  return gulp.src('src/assets/scripts/script.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.js'))
    //   only uglify if gulp is ran with '--type production'
    .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/assets/scripts'))
    .pipe(gulp.dest('public/assets/scripts'));
});

gulp.task( 'bootstrap_styles', function() {
    return gulp.src([
        config.lib + 'bootstrap-sass/assets/stylesheets/bootstrap/**'])
        .pipe(gulp.dest('src/assets/styles/1-tools/bootstrap'));
});

gulp.task('copy-libs',['bootstrap_styles'], function() {
    return gulp.src([config.lib + 'jquery/dist/jquery.min.js',
        config.lib + 'bootstrap-sass/assets/javascripts/bootstrap.min.js',
        './src/assets/libs/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('libs.js'))
        .pipe(sourcemaps.write())
        .pipe(uglify())
        .pipe(gulp.dest('src/assets/scripts/'));
});


// Imagemin images and ouput them in dist
gulp.task('imagemin', function() {
 gulp.src('./src/assets/images/**')
 .pipe(imagemin())
 .pipe(gulp.dest('public/assets/images/'));
});


// Copy all other files to dist directly
gulp.task('final_build', ['copy-libs','build-js','compile-sass'], function() {

    // Copy html
    gulp.src('./src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./public/'));

    // Copy pdf file to curriculum
    gulp.src('./src/*.pdf')
    .pipe(gulp.dest('./public/'));

    // Copy styles
    gulp.src('./src/assets/styles/main.css')
    .pipe(gulp.dest('./public/assets/styles/'));

    // Copy CNAME
    gulp.src('./src/CNAME')
    .pipe(gulp.dest('./public/'));

    // Copy fonts
    gulp.src('./src/assets/fonts/**')
    .pipe(gulp.dest('./public/assets/fonts/'));

    // Copy fontawesome
    gulp.src('./src/lib/font-awesome/**')
    .pipe(gulp.dest('./src/assets/fonts/font-awesome'))
    .pipe(gulp.dest('./public/assets/fonts/font-awesome'));

    // Minified images and copy to public
    gulp.src('./src/assets/images/**')
    // .pipe(imagemin())
    .pipe(gulp.dest('./public/assets/images/'));

    // Copy lib scripts, maintaining the original directory structure
    gulp.src(['./src/assets/scripts/libs.js','./src/assets/scripts/bundle.js'])
    .pipe(gulp.dest('./public/assets/scripts/'))
    .pipe(notify({ message: 'Build project in public folder #taskcomplete' }));

});

gulp.task( 'files', function() {
    gulp.src( files ).pipe( connect.reload() );
});

gulp.task( 'connect-public', function() {
    connect.server({ root: './public',livereload: true });
});

gulp.task( 'connect-dev', function() {
    connect.server({ root: './src',livereload: true });
});

gulp.task( 'watch', ['compile-sass','build-js','files'], function() {
    gulp.watch( files, ['compile-sass','build-js','files']);
});

gulp.task( 'build', ['compile-sass','build-js','final_build','files','connect-public']);

gulp.task( 'default', ['watch','connect-dev']);
