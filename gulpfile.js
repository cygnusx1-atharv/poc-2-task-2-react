const gulp = require('gulp')
const iconfont = require('gulp-iconfont')
const svgmin = require('gulp-svgmin')
const rename = require('gulp-rename')
const consolidate = require('gulp-consolidate')
const fontName = 'atharv-font'

// Task
gulp.task('iconfont', function () {
    return gulp.src(['src/assets/images/*.svg'])
        .pipe(svgmin())
        .pipe(iconfont({
            fontName: fontName,
            formats: ['svg', 'eot', 'woff', 'ttf'],
            prependUnicode: false,
            startUnicode: 97, // 'a'
            normalize: true,
            fontHeight: 1001
        }))
        .on('glyphs', (glyphs) => {

            // Copy the glyphs & their unicode into a file
            gulp.src(['src/assets/templates/icon_details_js.template'])
                .pipe(consolidate('lodash', {
                    glyphs
                }))
                .pipe(rename('imagesData.js'))
                .pipe(gulp.dest('src/data'))

            gulp.src(['src/assets/templates/icons_css.template'])
                .pipe(consolidate('lodash', {
                    glyphs,
                    fontName: fontName,
                    fontPath: '../../assets/fonts/icons/',
                    className: 'icon'
                }))
                .pipe(rename('icon.css'))
                .pipe(gulp.dest('src/components/Icon'))
        })
        .pipe(gulp.dest('src/assets/fonts/icons'))
})

gulp.task('default', gulp.series('iconfont'));