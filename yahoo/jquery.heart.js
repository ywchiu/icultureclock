;$(document).ready(function() {

  (function($) {
    if ($('body').offset().top != 0) $('body').prepend('<div style="width:1px; height: 1px"></div>');
    $('body').css('-webkit-transform-origin', '0% 0%');
    $('body').css('-webkit-transition', 'all 1s ease');
    curScale = 1;
    originHeartX = undefined;
    originHeartY = undefined;

    var _heart = function(_heartX, _heartY, _scale) {

      scale = _scale;

      // offsetX
      var screenCenterX = $(window).width() / 2;
      var scaledHeartX = _heartX * scale;
      var translateX = screenCenterX - scaledHeartX;


      // offsetY
      var screenCenterY = $(window).height() / 2;
      var scaledHeartY = _heartY * scale;
      var translateY = screenCenterY - scaledHeartY;


      // Transform
      $('body').css('-webkit-transform', 'translate('+translateX+'px,'+translateY+'px) scale('+scale+')');
    };

    $.fn.heart = function(x, y, scale) {
      if (originHeartX == undefined) {
        var heartX = x + this.offset().left;
        var heartY = y + this.offset().top;
        curScale = scale;
        console.log(heartX, heartY);
        _heart(heartX, heartY, scale);
      }
      else {
        var screenCenterX = $(window).width() / 2;
        var screenCenterY = $(window).height() / 2;
        var heartX = this.offset().left + curScale * x;
        var heartY = this.offset().top + curScale * y;
        var offsetX = heartX - screenCenterX;
        var offsetY = heartY - screenCenterY;
        heartX = originHeartX + offsetX/curScale;
        heartY = originHeartY + offsetY/curScale;
        console.log(heartX, heartY);
        _heart(heartX, heartY, scale);
      }
      originHeartX = heartX;
      originHeartY = heartY;
    }

    $.resetHeart = function() {
      curScale = 1;
      originHeartX = undefined;
      originHeartY = undefined;
      $('body').css('-webkit-transform', 'none'); 
    }

  })(jQuery);

});
