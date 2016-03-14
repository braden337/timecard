var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('styles', function() {
  return gulp.src('src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(reload({ stream: true }));
});

gulp.task('scripts', function() {
  return gulp.src('src/js/main.js')
    .pipe(babel({presets: ['es2015']}))
    .pipe(gulp.dest('dist/js'))
    .pipe(reload({ stream: true }));
});

gulp.task('html', function() {
  return gulp.src('index.html')
    .pipe(reload({ stream: true }));
});

gulp.task('default', ['styles', 'scripts'], function() {  
  
  browserSync({
    server: { baseDir: '' },
    reloadOnRestart: true
  });

  gulp.watch('src/scss/style.scss', ['styles']);
  gulp.watch('src/js/main.js', ['scripts']);
  gulp.watch('index.html', ['html']);

});