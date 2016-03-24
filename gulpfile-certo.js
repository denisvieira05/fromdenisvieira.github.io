var gulp = require('gulp');

var clean = require('gulp-clean');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var notify = require('gulp-notify');

var bases = {
 src: 'src/',
 public: 'public/',
 lib: 'src/lib/'
};

var paths = {
 scripts: ['./src/assets/scripts/**/*.js', '!./src/assets/scripts/libs/**/*.js'],
 libs: [ bases.lib + 'jquery/dist/jquery.min.js',
         bases.lib + 'bootstrap-sass/assets/javascripts/bootstrap.min.js'],
 styles: ['styles/*.css'],
 html: ['*.html'],
 images: ['images/**/**'],
 extras: ['crossdomain.xml', 'humans.txt', 'manifest.appcache', 'robots.txt', 'favicon.ico'],
 sass: ['./src/assets/styles/'],
 watch: ['src/assets/styles/**/*.scss','src/assets/js/*.js','./src/']
};

// Delete the public directory
gulp.task('clean', function() {
 return gulp.src(bases.public)
 .pipe(clean())
 .pipe(notify({ message: 'Clean Public Directory' }));
});

// Watch modifies in files
gulp.task( 'watch-files', function() {
    gulp.src( paths.watch ).pipe( connect.reload() );
});

gulp.task('compile-sass', function () {
    gulp.src(paths.sass + '*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('src/assets/styles/'))
    .pipe(notify({ message: 'Sass compile task complete' }));
});

// Process scripts and concatenate them into one output file
gulp.task('scripts', ['clean'], function() {
 gulp.src(paths.scripts, {cwd: bases.src})
 .pipe(jshint())
 .pipe(jshint.reporter('default'))
 .pipe(uglify())
 .pipe(concat('bundle.min.js'))
 .pipe(gulp.dest(bases.public + 'scripts/'))
 .pipe(notify({ message: 'JS Hinting and scripts concat task complete' }));
});

// Imagemin images and ouput them in dist
gulp.task('imagemin', ['clean'], function() {
 gulp.src(paths.images, {cwd: bases.src})
 .pipe(imagemin())
 .pipe(gulp.dest(bases.public + 'images/'));
});

// Copy all other files to dist directly
gulp.task('copy', ['clean'], function() {
 // Copy html
 gulp.src(paths.html, {cwd: bases.src})
 .pipe(gulp.dest(bases.public));

 // Copy styles
 gulp.src(paths.styles, {cwd: bases.src})
 .pipe(gulp.dest(bases.public + 'styles'));

 // Copy lib scripts, maintaining the original directory structure
 gulp.src(paths.libs, {cwd: 'src/**'})
 .pipe(gulp.dest(bases.public))

 // // Copy extra html5bp files
 // gulp.src(paths.extras, {cwd: bases.src})
 // .pipe(gulp.dest(bases.public));
 .pipe(notify({ message: 'Copy to public folder task complete' }));
});


gulp.task( 'connect', function() {
    connect.server({ root: './src',livereload: true });
});

// A development task to run anytime a file changes
gulp.task('watch', function() {
 gulp.watch(paths.watch, ['scripts','compile-sass','watch-files']);
});

// Define the build task as a sequence of the above tasks
gulp.task('build', ['clean', 'scripts','compile-sass', 'imagemin', 'copy']);

// Define the default task as a sequence of the above tasks
gulp.task('default', ['default','watch','connect']);
