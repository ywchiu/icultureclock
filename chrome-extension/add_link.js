$(document).ready(function(){
  setInterval(function(){
    $('.masonry-brick').each(function(){
      if ($(this).find('.iclock').length > 0){}
      else {
        $(this).append('<div class="iclock" style="background-color: transparent; position: relative; z-index: 99999;top: -30px; text-align: right; margin-right: 70px;;"><a href="localhost:8000/demo.html">iClock</a></div>');
      }
    });
  }, 1000);
});
