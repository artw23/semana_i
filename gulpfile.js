var gulp = require('gulp');

var sass    = require('gulp-sass'),
    minifyCss   = require('gulp-minify-css');

var paths = {
    appScss: ['**/*.scss', '!node_modules/**/*.*']
}


gulp.task('sass', function () {
  gulp.src(paths.appScss)
    .pipe(sass({
        includePaths: [
          'node_modules/foundation-sites/scss'
        ]
    }).on('error', sass.logError)) // this will prevent our future watch-task from crashing on sass-errors
    .pipe(minifyCss({compatibility: 'ie8'})) // see the gulp-sass doc for more information on compatibilitymodes
        .pipe(gulp.dest(function(file) {
            return file.base; // because of Angular 2's encapsulation, it's natural to save the css where the scss-file was
    }));
});

gulp.task('watch', ['sass'],function(){ // brackets makes sure we run ts and sass once before the watch starts
        gulp.watch(paths.appScss, ['sass']); // run the sass-task any time stuff in the appScss changes
    });
