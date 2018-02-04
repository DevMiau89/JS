const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function(){
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
    gulp.src("es6/**/*.css", "public/es6/**/*.css")
    .pipe(autoprefixer())
    .pipe(gulp.dest("public/dist"))
});

gulp.task('watch', function () {
    gulp.watch("es6/**/*.css", "public/es6/**/*.css", gulp.parallel('css'));
})
