'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const LessAutoprefix = require('less-plugin-autoprefix');
const cssmin = require('gulp-cssmin');

gulp.task('compile', function () {
    return gulp.src('./src/demo.less')
        .pipe(less({
            plugins: [new LessAutoprefix({ browsers: ['ie>8', 'last 2 versions'] })]
        }))
        .pipe(cssmin())
        .pipe(gulp.dest('./lib'));
});

gulp.task('copyfont', function () {
    return gulp.src('./src/fonts/**')
        .pipe(cssmin())
        .pipe(gulp.dest('./lib/fonts'));
});


gulp.task('build', ['compile', 'copyfont']);
gulp.task('watch', function () {
    gulp.watch('./src/*.less', ['compile']);
});
