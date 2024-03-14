const gulp = require('gulp')
const iconfont = require('gulp-iconfont')
const svgmin = require('gulp-svgmin')
const rename = require('gulp-rename')
const consolidate = require('gulp-consolidate')
const chokidar = require('chokidar');
const { spawn } = require('child_process');
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

// Define a task to upload images
gulp.task('upload-images', (done) => {
    const uploadProcess = spawn('node', ['src/utilities/upload.js'])

    uploadProcess.on('close', (code) => {
        console.log(`Upload process exited with code ${code}`)
        done()
    })
})

// To watch for any changes in the images directory
gulp.task('watch', () => {
    chokidar.watch('src/assets/images/*').on('all', (event, path) => {
        console.log(event, path)
        gulp.series('iconfont', 'upload-images')()
    })
})

gulp.task('default', gulp.series('iconfont'));