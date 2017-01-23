var gulp = require('gulp'),
    //concat = require('gulp-concat'),
    //rename = require('gulp-rename'),
    //jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify');
// Load plugins  
var $ = require('gulp-load-plugins')();

/* es6 */
gulp.task('es6', function() {

    return gulp.src(['app/dev/es6js/*.js','app/dev/js/*.js'])
        .pipe($.plumber())
        .pipe($.babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('app/dist/js/'));
});


/*一般js*/
gulp.task('js', function() {
    return gulp.src('app/dev/js/*.js')
        .pipe($.uglify())
        .pipe(gulp.dest('app/dist/js'));
});

gulp.task('default',['es6', 'js']);
