var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');

gulp.task('js', function () {
  gulp.src(['src/**/module.js', 'src/**/*.js'])
    .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      .pipe(ngAnnotate())
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./assets/js/'))
    .pipe(livereload());
});

gulp.task('css', function () {
  gulp.src(['src/**/app.css', 'src/**/*.css'])
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./assets/css/'))
    .pipe(livereload());
});

gulp.task('partials', function () {
  gulp.src(['src/**/*.html'])
    .pipe(gulp.dest('./assets/partials/'))
    .pipe(livereload());
});

gulp.task('watch', ['js', 'css', 'partials'], function () {
  livereload.listen();
  gulp.watch('src/**/*.js', ['js']);
  gulp.watch('src/**/*.css', ['css']);
  gulp.watch('src/**/*.html', ['partials']);
  gulp.watch('index.html', function() { livereload.changed('index.html'); });
  nodemon({ script: 'server.js', ext: 'html js css' });
});

gulp.task('default', ['watch']);