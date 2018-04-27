const gulp = require('gulp');
const scss = require('gulp-sass');
const minify = require('gulp-minify');



gulp.task('scss', () => {
    gulp.src('scss/**/*.scss')
        .pipe(scss().on('error', scss.logError))
        .pipe(gulp.dest('public/css/'));
});


gulp.task('library', () => {
    let lirabry =  [
        "packages/bootstrap/dist/css/bootstrap.min.css",
        "packages/bootstrap/dist/js/bootstrap.min.js",
        "packages/jquery/dist/jquery.min.js",
        "packages/popper.js/dist/umd/popper.min.js",
        "packages/font-awesome/css/font-awesome.min.css"
    ];

    gulp.src(lirabry).pipe(gulp.dest("public/library/"));
});
gulp.task('default', () => {
    gulp.watch("scss/**/*.scss", ['scss']);
});