var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var watch = require('gulp-watch');

gulp.task('styles', function () {
    return watch('src/**/*.scss', function () {
        gulp
            .src('src/styles.scss')
            .pipe(sassGlob())
            .pipe(sass())
            .pipe(gulp.dest('src'));
    });
});

