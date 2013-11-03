$(document).ready(function(){
  setInterval(function(){
    $('.masonry-brick').each(function(){
      if ($(this).find('.iclock').length > 0){}
      else {
        $(this).append('<div class="iclock" style="background-color: transparent; position: relative; z-index: 99999;top: -30px; text-align: right; margin-right: 70px;;"><a class="iclock-link" href="http://localhost:8000/index.html">iClock</a></div>');
        $('.iclock-link').click(function(){
          console.log('click');
          window.location = 'http://localhost:8000/index.html';
        });
      }
    });
  }, 1000);

});
