const gulp = require('gulp');
const handlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');
const paths = require( '../paths' );
import * as content from '../htmlContent'

const options = {
  ignorePartials: true,
  // partials to be included
  batch : [paths.srcPartials]
};

// index.html
gulp.task('compile-index', ['clean'], () => {
  const templateData = {
    boxContent: content.safeString(
      content.indexBoxHtml
    )
  };

  return gulp.src( paths.srcIndexHbs )
      .pipe(handlebars( templateData, options ))
      .pipe(rename('index.html'))
      .pipe(gulp.dest( paths.destDir ));
});

gulp.task( 'build-html', [
  'compile-index'
]);
