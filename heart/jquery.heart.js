;$(document).ready(function() {

  (function($) {
    $('body').css('-webkit-transition', 'all 1s ease');
    globalScale = 1;

    var _heart = function(_heartX, _heartY, _scale) {

      //scale = _scale / globalScale;
      //globalScale = _scale;
      scale = _scale;

      // offsetX
      var screenCenterX = $(window).width()/2;
      var heartX = _heartX * scale;
      var offsetX = screenCenterX - heartX;


      // offsetY
      var screenCenterY = $(window).height()/2;
      var heartY = _heartY * scale;
      var offsetY = screenCenterY - heartY;

      // Transform
      $('body').css('-webkit-transform', 'translate('+offsetX+'px,'+offsetY+'px) scale('+scale+')');
    };

    $.fn.heart = function(x, y, scale) {
      heartX = x + this.offset().left;
      heartY = y + this.offset().top;
      _heart(heartX, heartY, scale);
    }

    $.resetHeart = function() {
      globalScale = 1;
      $('body').css('-webkit-transform', 'none'); 
    }

  })(jQuery);

});
