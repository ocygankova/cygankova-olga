const project_folder = 'dist';
const source_folder = '#src';

const path = {
  build: {
    html: project_folder + '/',
    css: project_folder + '/css',
    js: project_folder + '/js',
    img: project_folder + '/img',
    fonts: project_folder + '/fonts',
    libs: project_folder + '/libs',
  },
  src: {
    html: [
      source_folder + '/*.html',
      '!' + source_folder + '/_*.html',
    ],
    css: source_folder + '/scss/style.scss',
    js: source_folder + '/js/script.js',
    img: source_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
    fonts: source_folder + '/fonts/*.{woff,woff2}',
  },
  watch: {
    html: source_folder + '/**/*.html',
    css: source_folder + '/scss/**/*.scss',
    js: source_folder + '/js/**/*.js',
    img: source_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
  },
  clean: './' + project_folder + '/',
};

//================Plugin Vars============>
const { src, dest } = require('gulp'),
  gulp = require('gulp'),
  browsersync = require('browser-sync').create(),
  fileinclude = require('gulp-file-include'),
  del = require('del'),
  scss = require('gulp-sass')(require('sass')),
  autoprefixer = require('gulp-autoprefixer'),
  // group_media = require('gulp-group-css-media-queries'),
  clean_css = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify-es').default,
  // imagemin = require('gulp-imagemin'),
  webp = require('gulp-webp'),
  // webpcss = require('gulp-webpcss'),
  webphtml2 = require('gulp-webp-html-nosvg');
// svgSprite = require('gulp-svg-sprite');
// ttf2woff = require('gulp-ttf2woff'),
// ttf2woff2 = require('gulp-ttf2woff2');

//======================Folder Funtions========================>
function libs() {
  return gulp
    .src([
      source_folder + '/libs/bootstrap/dist/js/bootstrap.min.js',
      source_folder + '/libs/swiper-bundle.min.js',
    ])
    .pipe(dest(path.build.libs));
}

function html() {
  return src(path.src.html)
    .pipe(fileinclude())
    .pipe(webphtml2())
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream());
}

function css() {
  return (
    src(path.src.css)
      .pipe(
        scss({ outputStyle: 'expanded' }).on('error', scss.logError)
      )
      // .pipe(group_media())
      .pipe(
        autoprefixer({
          cascade: true,
        })
      )
      // .pipe(webpcss({ webpClass: '.webp', noWebpClass: '.no-webp' }))
      .pipe(dest(path.build.css))
      .pipe(clean_css())
      .pipe(
        rename({
          extname: '.min.css',
        })
      )
      .pipe(dest(path.build.css))
      .pipe(browsersync.stream())
  );
}

function js() {
  return src(path.src.js)
    .pipe(fileinclude())
    .pipe(dest(path.build.js))
    .pipe(uglify())
    .pipe(
      rename({
        extname: '.min.js',
      })
    )
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream());
}

function images() {
  return (
    src(path.src.img)
      .pipe(
        webp({
          quality: 90,
        })
      )
      .pipe(dest(path.build.img))
      .pipe(src(path.src.img))
      // .pipe(imagemin([
      //     imagemin.gifsicle({ interlaced: true }),
      //     imagemin.mozjpeg({ quality: 70, progressive: true }),
      //     imagemin.optipng({ optimizationLevel: 3 }),
      //     imagemin.svgo({
      //         plugins: [
      //             { removeViewBox: false },
      //             { cleanupIDs: false }
      //         ]
      //     })
      // ]))
      .pipe(dest(path.build.img))
      .pipe(browsersync.stream())
  );
}

function fonts() {
  // src(path.src.fonts)
  //     .pipe(ttf2woff())
  //     .pipe(dest(path.build.fonts))
  return (
    src(path.src.fonts)
      // .pipe(ttf2woff2())
      .pipe(dest(path.build.fonts))
  );
}

//================Other Functions====================>
function browserSync() {
  browsersync.init({
    server: {
      baseDir: './' + project_folder + '/',
    },
    port: 5000,
    notify: false,
    online: true,
  });
}

function watchFiles() {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.img], images);
}

function clean() {
  return del(path.clean);
}

//=========================Tasks===============>

gulp.task('svgSprite', function () {
  return gulp
    .src([source_folder + '/iconsprite/*.svg'])
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: '../icons/icons.svg',
            // example: true
          },
        },
      })
    )
    .pipe(dest(path.build.img));
});

//=====================================================================
const build = gulp.series(
  clean,
  gulp.parallel(js, css, html, images, fonts, libs)
);
const watch = gulp.series(
  build,
  gulp.parallel(watchFiles, browserSync)
);

exports.libs = libs;
exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;