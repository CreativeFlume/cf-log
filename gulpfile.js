var gulp = require('gulp');
var mocha = require('gulp-mocha');
var babel = require('gulp-babel');
var run = require('run-sequence');

gulp.task('babel', function() {
  return gulp
    .src(['./src/*.js'])
    .pipe(babel({
      presets: ['es2015', 'stage-0'] 
    }))
    .pipe(gulp.dest('./dist/src'));
});


gulp.task('mocha', function () {
  return gulp
    .src('./dist/**/*Spec.js')
    .pipe(mocha());
});

gulp.task('test', function () {
  run('babel', 'mocha');
});


gulp.task('watch', function() {
  gulp.watch(['./src/*.js' ], ['test']);
});

gulp.task('default', ['babel']);
