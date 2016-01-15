'use strict';

var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    connect = require('gulp-connect'),
    browserify = require('browserify'),
    uglify = require('gulp-uglify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    livereload = require('gulp-livereload');

var config = {
    distPath: './dist',
    sourcePath: './app'
};


gulp.task('serve', function () {
    connect.server({
        root: 'dist',
        port: 4700,
        livereload: true
    });
});

gulp.task('browserify', function() {
    return browserify(config.sourcePath + '/js/app.js')
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest(config.distPath + '/assets/js'))
        .pipe(livereload());
});

gulp.task('fonts', function() {
    return gulp.src(config.sourcePath + '/fonts/**.*')
        .pipe(gulp.dest(config.distPath + '/assets/fonts'))
        .pipe(livereload());
});

gulp.task('sass', function() {
    return sass(config.sourcePath + '/sass/styles.scss', {
        style: 'compressed',
        loadPath: [
            config.sourcePath + '/sass'
        ]
    })
    .pipe(gulp.dest(config.distPath + '/assets/css'))
    .pipe(livereload());

});

gulp.task('directive-templates', function() {
    return gulp.src([
        config.sourcePath + '/js/directives/templates/**.*'
    ])
        .pipe(gulp.dest('./dist/assets/js/directives/templates'))
        .pipe(livereload());
});

gulp.task('index-html', function() {
    return gulp.src([
        config.sourcePath + '/index.html'
    ])
        .pipe(gulp.dest('./dist'))
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('app/js/**/*.js', ['browserify']);
    gulp.watch('app/sass/*.scss', ['sass']);
    gulp.watch('app/js/directives/templates/*.html', ['directive-templates']);
    gulp.watch('app/index.html', ['index-html']);
});

gulp.task('default', ['serve', 'watch', 'browserify','directive-templates','fonts','sass','index-html']);