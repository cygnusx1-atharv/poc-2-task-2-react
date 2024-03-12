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
        .on('glyphs', (glyphs, options) => {
            // console.log(glyphs, options)
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