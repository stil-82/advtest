var gulp = require('gulp');
var pug = require('gulp-pug');

gulp.task('pug', function () {

 gulp.src('src/pages/*.pug')

 .pipe(pug({
     pretty: true
 }))
 .pipe(gulp.dest('dest'))
});

gulp.task('watch', function () {
    gulp.watch('src/pages/*.pug',['pug'])
});

