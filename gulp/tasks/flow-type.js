// assumes that flow-remove-types is installed
const gulp = require('gulp');
const flow = require('gulp-flowtype');
const childProcess = require('child_process');

gulp.task( 'type-check', () => {
  return gulp.src('./src-dev/_file_to_check.js')
    .pipe(flow({
      abort: true // exit on first error
    }))
    .pipe(gulp.dest('./src'));
});

gulp.task( 'strip-types', ['type-check'], () => {
  childProcess.exec('./node_modules/.bin/flow-remove-types -p -o src/file_checked.js src/_file_to_check.js');
});

gulp.task('flow', ['type-check', 'strip-types']);
