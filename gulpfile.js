//引入gulp和组件
var gulp = require('gulp');                 //基础库
var browerSync = require('browser-sync');
var imagemin = require('gulp-imagemin');    //图片压缩
var sass = require('gulp-sass');            //sass
var uglify = require('gulp-uglify');        //js压缩
var cleanCss = require('gulp-clean-css'); //css压缩

//style处理
gulp.task('style', function () {
    return gulp.src([
            'src/sass/*.scss',
            'src/sass/*.css',
        ])
        .pipe(sass())
        // .pipe(cleanCss())
        .pipe(gulp.dest('dist/css'))
        .pipe(browerSync.reload({
            stream: true
        }));
});
//html
gulp.task('html', function () {
    gulp.src(['src/*.html','src/**/*.html'])
        .pipe(gulp.dest('dist/'))
        .pipe(browerSync.reload({
            stream: true
        }));
});
//图片处理
gulp.task('image', function () {
    gulp.src('src/img/*.*')
        //.pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
        .pipe(browerSync.reload({
            stream: true
        }));
});

//js处理
gulp.task('script', function () {
    gulp.src('src/**/*.js')
        // .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/'))
        .pipe(browerSync.reload({
            stream: true
        }));
});


gulp.task('serve', ['script', 'style', 'image','html'],
    function () {
        browerSync({
            server: {
                baseDir: [''],
                index: 'dist/index.html'
            }
        }, function (err, bs) {
            console.log(bs.options.getIn(["urls", "local"]));
        });

        gulp.watch(['src/*.html','src/**/*.html'],['html']);
        gulp.watch(['src/sass/*.scss', 'src/sass/*.css'], ['style']);
        gulp.watch('src/**/*.js', ['script']);
        gulp.watch('src/img/*.*', ['image']);
    });
