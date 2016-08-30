//引入依赖的插件
var gulp = require('gulp');
var minifyCss = require('gulp-clean-css');


//创建一个压缩css的任务
//minify-css任务名随便取

gulp.task('minify-css', function() {
	//用来指定需要压缩的css目录
	//用来指定在styles目录下的所有带有.css后缀的文件
  return gulp.src('styles/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    //把压缩后的css文件输出到dist目录
    .pipe(gulp.dest('dist'));
});
