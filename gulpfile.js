const gulp = require('gulp');
const pug = require('gulp-pug');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const sourcemaps = require('gulp-sourcemaps');
const LessAutoprefix = require('less-plugin-autoprefix');

gulp.task('less', () => {
  const autoprefix = new LessAutoprefix({
    browsers: [
      '> 0.5%',
      'last 5 versions',
      'Firefox ESR',
      'not dead',
      'IE 9-11'
    ]
  });

  return gulp.src('./styles/styles.less')
    .pipe(sourcemaps.init())
    .pipe(less({
      plugins: [autoprefix]
    }))
    .pipe(cssmin())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./styles/'));
});

gulp.task('pug', () => {
  return gulp.src('./*.pug')
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest(file => './'))
});


gulp.task('default', gulp.parallel('less', 'pug'));