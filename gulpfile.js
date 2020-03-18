const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const pug = require('gulp-pug');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const connect = require('gulp-connect');
const sourcemaps = require('gulp-sourcemaps');
const LessAutoprefix = require('less-plugin-autoprefix');

gulp.task('less', () => {
  console.log('task: less');
  const autoprefix = new LessAutoprefix({
    browsers: [
      '> 0.5%',
      'last 5 versions',
      'Firefox ESR',
      'not dead',
      'IE 9-11',
    ],
  });
  return gulp
    .src('./styles/styles.less')
    .pipe(sourcemaps.init())
    .pipe(
      less({
        plugins: [autoprefix],
      })
    )
    .pipe(cssmin())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./styles/'));
});

gulp.task('pug', () => {
  console.log('task: pug');
  return gulp
    .src('./*.pug')
    .pipe(pug({
      pretty: true,
      filters: {
        svg: code => {
          return code;
        },
        inlineSVG: src => {
          const fullPath = path.resolve(src);
          let content = fs.readFileSync(fullPath, 'utf-8');
          return content
            .replace(/<svg [a-z\s":\/=\d.]+>/g, `<symbol id="${src.split('/').slice(-1)[0]}">`)
            .replace('</svg>', '</symbol>');
        }
      }
    }))
    .pipe(gulp.dest(file => './'));
});

gulp.task('webserver', () =>
  connect.server({
    root: './',
    livereload: true,
    port: parseInt(process.env.PORT) || 8080,
    host: '0.0.0.0',
  })
);

gulp.task('watch', () => {
  console.log('task: watch');
  gulp.watch('./styles/*.less', gulp.series('less'));
  gulp.watch('./*.pug', gulp.series('pug'));
});

gulp.task('default', gulp.parallel('less', 'pug'));

gulp.task('serve', gulp.parallel('default', 'webserver', 'watch'));
