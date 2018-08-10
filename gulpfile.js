// including plugins
const gulp              = require('gulp'),
      minifyCSS         = require('gulp-clean-css'),
      autoprefixer      = require('gulp-autoprefixer'),
      gp_concat         = require('gulp-concat'),
      gp_rename         = require('gulp-rename'),
      gp_uglify         = require('gulp-uglify'),
      to5               = require('gulp-6to5'),
      path              = require('path'),
      sass              = require('gulp-sass')

gulp.task('css', ['sass'], function(){
    return gulp.src(
            [
              // './public/pages/assets/css/theme.css',
              './public/pages/assets/css/entypo.css',
              './public/pages/assets/css/socicon.css',
              './public/css/user-variables.css',
              './public/css/user.css',
              './public/css/theme.css',
            ]
        )
        .pipe(minifyCSS())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(gp_concat('style.min.css'))
        .pipe(gulp.dest('./public/dist/css/'))
})

gulp.task('sass', function () {
  return gulp.src(
    [
      './public/scss/theme.scss',
      './public/scss/user-variables.scss',
      './public/scss/user.scss'
    ]
  )
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
})

gulp.task('copy-fonts', function(){
  return gulp.src(
          [
            './public/pages/assets/fonts/**'
          ]
      )
      .pipe(gulp.dest('./public/dist/fonts/'))
})

gulp.task('copy-img', function(){
    return gulp.src(
            [
              './public/pages/assets/img/**'
            ]
        )
        .pipe(gulp.dest('./public/dist/assets/img/'))
})

gulp.task('style', ['css', 'copy-fonts', 'copy-img'], function(){})


gulp.task('js', function(){
    return gulp.src(
            [

              './public/pages/assets/js/jquery.min.js',
              './public/pages/assets/js/popper.min.js',
              './public/pages/assets/js/jquery.smartWizard.min.js',
              './public/pages/assets/js/flickity.pkgd.min.js',
              './public/pages/assets/js/scrollMonitor.js',
              './public/pages/assets/js/smooth-scroll.polyfills.js',
              './public/pages/assets/js/prism.js',
              './public/pages/assets/js/zoom.min.js',
              './public/pages/assets/js/bootstrap.js',
              './public/pages/assets/js/theme.js',

            ]
        )
        .pipe(gp_concat('vendor.min.js'))
        .pipe(gulp.dest('./public/dist/js/'))
        .pipe(gp_rename('vendor.min.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('./public/dist/js/'))
});

gulp.task('es6-es5', ['js'], function(){
    return gulp.src([
                './src/*/**.js',
                './src/*/*/**.js'
            ]
        )
        .pipe(to5())
        .pipe(gulp.dest('./public/dist/es5/'))
});

gulp.task('watch', function() {
    gulp.watch(['./src/*/**.js', './src/*/*/**.js', './public/js/**.js'], ['es6-es5'])
})

gulp.task('prod', ['style', 'es6-es5', 'js'], function(){})

gulp.task('default', ['es6-es5', 'watch', 'style'], function(){})
