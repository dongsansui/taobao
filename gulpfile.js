/**
 * Created by John on 2017/10/19.
 */
var gulp = require("gulp");
var webserver = require("gulp-webserver");
var url = require("url");

gulp.task("server",function(){
    gulp.src(".")
        .pipe(webserver({
            livedload:true,
            directoryListing:true,
            middleware: function (req,res,next) {
                var requstUrl = url.parse(req.url).pathname;
                console.log(requstUrl);
            },
            open:"/index.html",
            port:"8088"
        }))
})