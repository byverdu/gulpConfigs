const gulp = require( 'gulp' );
const cssnano = require( 'gulp-cssnano' );
const sourcemaps = require( 'gulp-sourcemaps' );
const rename = require( 'gulp-rename' );
const concat = require( 'gulp-concat' );
const paths = require( '../paths' );

gulp.task( 'css-minify', ['clean', 'sass'], () => {
  return gulp.src( paths.srcCss )
    .pipe( sourcemaps.init())
    .pipe( cssnano())
    .pipe(concat('styles.css'))
    .pipe( rename({ suffix: '.min' }))
    .pipe( sourcemaps.write( '.' ))
    .pipe( gulp.dest( paths.destCss ));
});

gulp.task('move-images', ['css-minify'], () => {
  gulp.src( paths.srcImg )
    .pipe(gulp.dest( paths.destImg ))
});

gulp.task('build-css', [
  'css-minify',
  'move-images'
]);
