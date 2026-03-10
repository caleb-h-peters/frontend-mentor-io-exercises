const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// Serve and watch for changes
gulp.task('serve', function () {
    browserSync.init({
        server: './src', // Serve files from src/
    });

    // Watch HTML files
    gulp.watch('src/*.html').on('change', browserSync.reload);

    // Watch CSS files
    gulp.watch('src/css/*.css').on('change', browserSync.stream);

    // Watch JS files (reload on change)
    gulp.watch('src/js/*.js').on('change', browserSync.reload);
});

// Default task
gulp.task('default', gulp.series('serve'));