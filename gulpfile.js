// For more information on how to configure a task runner, please visit:
// https://github.com/gulpjs/gulp

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cssminify = require('gulp-minify-css');

gulp.task('scripts', function() {
    gulp.src(["Scripts/jquery-2.1.4.js", "Scripts/jquery.easing.1.3.js"])
        .pipe(concat('index.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest("Scripts"))
});

gulp.task('css', function () {
    gulp.src("Css/*.css")
        .pipe(concat('index.min.css'))
        .pipe(cssminify())
        .pipe(gulp.dest("Css"))
});

gulp.task('default', ['scripts', 'css']);