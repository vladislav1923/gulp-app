'use strict';

module.exports = function() {
  $.gulp.task('sprite:png', function () {

  var spriteData = $.gulp.src('./source/images/sprite/*.{png,gif}').pipe($.gp.spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));
 
  var imgStream = spriteData.img 
    .pipe($.buffer())
    .pipe($.gp.imagemin())
    .pipe($.gulp.dest($.config.root + '/assets/img/sprite'));
 
  var cssStream = spriteData.css
    .pipe($.gulp.dest('source/style/common/scss-sprite/'));
 
  return $.merge(imgStream, cssStream);
  })
};
