// Assigning modules to local variables
var gulp = require('gulp');
var sass = require('gulp-sass');
var pkg = require('./package.json');

// Default task
gulp.task('default', ['sass']);

// Watch Task that watches for SASS/CSS or JS changes and compiles
gulp.task('dev', ['sass'], function() {
    gulp.watch('scss/*.scss', ['sass']);
});

// Sass task to compile the sass files and add the banner
gulp.task('sass', function(cb) {
    return gulp.src('scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
    cb(err);
});