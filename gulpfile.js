var gulp = require('gulp');
var connect = require('gulp-connect');
var once = require('async-once');

gulp.task('connect-dev', once(function () {
    return connect.server({
        port: '/',
        port: 8080
    });
}));

gulp.task('default', gulp.series('connect-dev'));