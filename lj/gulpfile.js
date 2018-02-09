const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['js', 'styles', 'watch'], function(){
    // Run ESLint
    gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
    .pipe(eslint())
    .pipe(eslint.format());
    // Node source
    gulp.src("es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
    // browser source
    gulp.src("public/es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("public/dist"));

});



gulp.task('styles', function () {
    gulp.src("es6/css/*.css")
    .pipe(autoprefixer())
    .pipe(gulp.dest("public/es6/css"));
    console.log('Hello!');
});

gulp.task('watch', function () {
    gulp.watch("es6/**/*.css", ['styles']);
});



gulp.task('js',function () {
    gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
    .pipe(eslint())
    .pipe(eslint.format());
    // Node source
    gulp.src("es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
    // browser source
    gulp.src("public/es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("public/dist"));
});

gulp.task('watch', function () {
    gulp.watch("es6/**/*.js", ['js']);
});
