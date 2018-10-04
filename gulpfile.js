var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass-compile", function() {
  gulp
    .src("./project/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./project/css"));
});

gulp.task("sass:watch", function() {
  gulp.watch("./project/scss/*.scss", ["sass-compile"]);
});
