// Babel will convert JSX syntax into vanilla js
var babel = require('gulp-babel');

gulp.task('react', () =>
	gulp.src('./script.js')
		.pipe(babel({
			presets: ['babel-preset-react']
		}))
		.pipe(gulp.dest('./dist'))
);