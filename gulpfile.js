var gulp = require('gulp');  
var nodemon = require('gulp-nodemon');  
var sass = require('gulp-ruby-sass');  
var autoprefixer = require('gulp-autoprefixer');  
var jshint = require('gulp-jshint');  
var livereload = require('gulp-livereload');  

gulp.task('styles', function() {  
  return sass('public/css/scss/*.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('public/css'))
    .pipe(livereload());
});

gulp.task('scripts', function() {  
  return gulp.src('public/js/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(livereload());
});

// gulp.task('ejs',function(){  
//     return gulp.src('views/**/*.ejs')
//     .pipe(livereload());
// });

gulp.task('watch', function() {  
    livereload.listen();
    gulp.watch('public/css/**/*.scss', ['styles']);
    gulp.watch('public/js/*.js', ['scripts']);
    // gulp.watch('views/**/*.ejs', ['ejs']);
});

// gulp.task('server',function(){  
//     nodemon({
//         'script': 'server.js',
//         'ignore': 'public/js/*.js'
//     });
// });

// gulp.task('serve', ['server','watch']);  
gulp.task('serve', ['watch']);  


// npm
// "del": "^2.2.2",
//     "gulp": "^3.9.1",
//     "gulp-autoprefixer": "^3.1.1",
//     "gulp-livereload": "^3.8.1",
//     "gulp-minify-css": "^1.2.4",
//     "gulp-nodemon": "^2.2.1",
//     "gulp-rename": "^1.2.2",
//     "gulp-sass": "^3.1.0",
//     "gulp-uglify": "^2.1.2",
//     "gulp-util": "^3.0.8"

// var gulp = require("gulp"),
// 		util = require("gulp-util"),
// 		sass = require("gulp-sass"),
// 		autoprefixer = require('gulp-autoprefixer'),
// 		minifycss = require('gulp-minify-css'),
// 		rename = require('gulp-rename'),
// 		log = util.log;
 
// var sassFiles = "src/scss/*.scss";

// gulp.task("sass", function(){ 
// 		log("Generate CSS files " + (new Date()).toString());
//     gulp.src(sassFiles)
//             .pipe(sass({ style: 'expanded' }))
// 						.pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9"))
//             .pipe(gulp.dest("dist/css"))
//             .pipe(rename({suffix: '.min'}))
//             .pipe(minifycss())
//             .pipe(gulp.dest('dist/css'));
// });

// gulp.task("watch", function(){
//     log("Watching scss files for modifications");
//     gulp.watch(sassFiles, ["sass"]);
// });

// gulp.task("default", ["sass"]);

