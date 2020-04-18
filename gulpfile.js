var gulp = require('gulp');
var sass = require('gulp-sass');
var browser_sync = require('browser-sync');
gulp.task('sass', function(){
    return gulp.src('srcs/scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('srcs/css'))
    .pipe(browser_sync.stream());
});
gulp.task('start', function() {
    browser_sync.init({
        server: {
            baseDir: 'srcs'
        }
    });
    gulp.watch('srcs/**/*.scss', gulp.series('sass'));
    gulp.watch('srcs/**/*.js').on('change', browser_sync.reload);
    gulp.watch('srcs/*.html').on('change', browser_sync.reload);
});