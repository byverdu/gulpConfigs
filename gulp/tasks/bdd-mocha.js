const gulp = require( 'gulp' );
const mocha = require( 'gulp-mocha' );
const browserSync = require( 'browser-sync' );
const paths = require( '../paths' );

const mochaOpts = {
  ui: 'bdd',
  compilers: 'js:babel-core/register'
};

gulp.task( 'test-runner', () => {
  gulp.src( paths.srcTest )
    .pipe( mocha( mochaOpts ));
});

gulp.task( 'serve-test', ['test-runner'], ( done ) => {
  browserSync({
    open: false,
    port: 9000,
    server: {
      baseDir: paths.srcMocha,
      middleware( req, res, next ) {
        res.setHeader( 'Access-Control-Allow-Origin', '*' );
        next();
      }
    }
  }, done );
});
