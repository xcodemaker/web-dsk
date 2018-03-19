var gulp=require('gulp');
var watch=require('gulp-watch'),
postcss=require('gulp-postcss'),
autoprefixer=require('autoprefixer'),
cssvars=require('postcss-simple-vars'),
nested=require('postcss-nested'),
cssImport=require('postcss-import');

gulp.task("default",function(){
    console.log("Hello gulp");
});

gulp.task("html",function(){
    console.log("html task perform");
});

gulp.task("styles",function(){
    gulp.src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport,cssvars,autoprefixer,nested]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task("watch",function(){
    watch("./app/index.html",function(){
        gulp.start('html');
    });
    watch("./app/assets/styles/**/*.css",function(){
        gulp.start('styles');
    });
});


