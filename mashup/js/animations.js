/* q-music mashup animation.js
=========================================================*/
//Effecten om de website enkele animaties te geven.

/* Functions
=========================================================*/

//Pijltje dat beweegt.
//Snippet van Stack Overflow.
function arrowShake(){
  
  jQuery.fn.shake = function() {
    this.each(function(i) {
      $(this).css({
        "position" : "relative",

      });
      for (var x = 1; x <= 2; x++) {
        $(this).animate({
          top : -5,
          duration:'slow'
        }, 50).animate({
          top : 0,
          duration:'slow'
        }, 50).animate({
          top : 5,
          duration:'slow'
        }, 50).animate({
          top : 0,
          duration:'slow'
        }, 50);
      }
    });
    return this;
  }

  setInterval(function() {
    $('.wiggle').shake();
  }, 5000);
}


//Zorgt ervoor dat de select-preview div mee volgt bij het scrollen.
//Snippet van Stack Overflow.
function scrollingDiv(){

  $(window).scroll(function(){
    $("#select-preview").stop()
    .animate({"marginTop": 
      ($(window).scrollTop()) + "px", "marginLeft":
      ($(window).scrollLeft()) + "px"}, "fast" 
      );
  });
}


//Extra info over de mixtape animatie bij hover.
function mixtapeInfo(){
  $('#mixtape').hover(function(){
    $('#mix-info').toggle('slow');
  });
}

/* $(document).ready(...);
=========================================================*/

$(document).ready(function(){

  //Call all the functions
  arrowShake();
  scrollingDiv();
  mixtapeInfo();

});