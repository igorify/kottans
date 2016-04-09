var gulp = require('gulp');
var bower = require('gulp-bower');
var runSequence = require('run-sequence');
var debug = require( 'gulp-debug' );
var clean = require( 'gulp-clean' );
var livereload = require('gulp-livereload');
var browserify = require( 'gulp-browserify' );
var handlebars = require('gulp-handlebars');
var wrap = require( 'gulp-wrap' );
var declare = require( 'gulp-declare' );
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var less = require('gulp-less');
var csscomb = require('gulp-csscomb');2
var cssnano = require('gulp-cssnano');
var htmlmin = require('gulp-htmlmin');
var server = require('gulp-develop-server');


gulp.task('default', function () {
    runSequence(['build']);
});

gulp.task('build', function () {
    runSequence(
        'clean-build', 
        'copy-html','copy-img', 'copy-js',
        ['bower', 'copy-libs', 'browserify', 'templates', 'css'],
        ['node-server','watch']
    );
} );

gulp.task('bower', function() {
    return bower();
});

gulp.task('browserify', function () {
    gulp.src('client_src/pokemons.js')
        .pipe(browserify({
            insertGlobals : true,
            debug : !gulp.prod
        }))
        .pipe(gulp.dest('client_build'));

} );

gulp.task('templates', function() {
    return gulp.src( 'client_src/components/**/*.hbs' )
        .pipe(handlebars())
        .pipe(wrap('Handlebars.template(<%= contents %>)'))
        .pipe(declare({
            namespace: 'App.templates',
            noRedeclare: true
        }))
        .pipe(concat('templates.js'))
        .pipe(gulp.dest('client_build'));
} );


gulp.task('copy-html', function () {
    return gulp.src('client_src/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('client_build'));
});
gulp.task('copy-img', function () {
    return gulp.src('client_src/*.{gif, jpg, png}')
        .pipe(gulp.dest('client_build'));
});
gulp.task('copy-js', function () {
    return gulp.src('client_src/core/**')
        .pipe(gulp.dest('client_build/core'));
});
gulp.task('copy-libs', function () {
    return gulp.src( ['client_src/libs/handlebars/handlebars.min.js', 'client_src/libs/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('client_build/libs'));
});

gulp.task('css', function () {
    return gulp.src('client_src/**/*.less' )
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(concat('components.css'))
        .pipe(csscomb())
        .pipe(sourcemaps.init())
        .pipe(cssnano())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('client_build'));
} );


gulp.task('reload-page', function () {
    return gulp.src('client_build/!**')
        .pipe(livereload());
} );

gulp.task('clean-build', function () {
    return gulp.src('client_build/*', { read: false })
        .pipe(clean({ force: true }));
} );

gulp.task( 'node-server', function() {
    server.listen( { path: './app.js' } );
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('client_src/**/*.@(html|js|less|hbs)', ['build']);
} );
