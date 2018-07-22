const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const autoprefixer = require('gulp-autoprefixer');
const minifyCss = require('gulp-minify-css');
const uglify = require('gulp-uglify');

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

gulp.task('uglify', function() {
   return gulp.src("dist/test.js")
    .pipe(uglify())
    .pipe(gulp.dest('min-js'))
});

gulp.task('minify-css', function() {
   return gulp.src("es6/css/style.css")
    .pipe(minifyCss({keepBreaks: true}))
    .pipe(gulp.dest('css-min'))
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
