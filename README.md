# Gulp Configs

Collection of gulp tasks and packages with examples to speed up develpment for new projects.

Contains tasks for:

- 🐓 [browserify](https://github.com/byverdu/gulpConfigs/blob/master/gulp/tasks/browserify.js)
- 🚀 [hot reload by using browser-sync](https://github.com/byverdu/gulpConfigs/blob/master/gulp/tasks/serve.js)
- 📺 [watch and reload browser-sync](https://github.com/byverdu/gulpConfigs/blob/master/gulp/tasks/watch.js)
- ☕ [testing frontend with fixtures using mocha](https://github.com/byverdu/gulpConfigs/blob/master/gulp/tasks/bdd-mocha.js)
- ♊ [tdd with mocha](https://github.com/byverdu/gulpConfigs/blob/master/gulp/tasks/tdd-mocha.js)
- 🚲 [compile handlebars to html](https://github.com/byverdu/gulpConfigs/blob/master/gulp/tasks/compile-handlebars.js)
- 🍓 [compile sass](https://github.com/byverdu/gulpConfigs/blob/master/gulp/tasks/sass.js)
- 😱 [minify js](https://github.com/byverdu/gulpConfigs/blob/master/gulp/tasks/build-js.js)
- 🍩 [minify and concat css](https://github.com/byverdu/gulpConfigs/blob/master/gulp/tasks/build-css.js)
- 🌔 [nodemon with express and browser-sync](https://github.com/byverdu/gulpConfigs/blob/master/gulp/tasks/browserSync-express-nodemon.js)
- 🌔 [flow, with type checker and strip-types](https://github.com/byverdu/gulpConfigs/blob/master/gulp/tasks/flow-type.js)

``` javascript
"devDependencies": {
  "babelify": "^7.3.0",
  "browser-sync": "^2.18.8",
  "browserify": "^14.3.0",
  "del": "^2.2.2",
  "gulp": "^3.9.1",
  "gulp-compile-handlebars": "^0.6.1",
  "gulp-concat": "^2.6.1",
  "gulp-cssnano": "^2.1.2",
	"gulp-flowtype": "^1.0.0",
  "gulp-mocha": "^4.3.1",
  "gulp-nodemon": "^2.2.1",
  "gulp-notify": "^3.0.0",
  "gulp-sass": "^3.1.0",
  "gulp-rename": "^1.2.2",
  "gulp-sourcemaps": "^2.6.0",
  "gulp-uglify": "^2.1.2",
  "gulp-util": "^3.0.8",
  "gulp-watch": "^4.3.11",
  "handlebars": "^4.0.6",
  "require-dir": "^0.3.1",
  "vinyl-buffer": "^1.0.0",
  "vinyl-source-stream": "^1.1.0",
  "watchify": "^3.9.0"
}
```
