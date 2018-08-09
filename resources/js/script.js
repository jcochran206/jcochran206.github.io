$(document).ready(function(){
$('.js--aboutme').waypoint(function(direction){
  if (direction == "down") {
    $('nav').addClass('sticky');
  } else {
    $('nav').removeClass('sticky');
  }
});


/* mobile nav toggle */
/* Mobile navigation */
$('.js--nav-icon').click(function(){
  var nav = $('.js--main-nav');
  var icon = $('.js--nav-icon ion-icon');

  nav.slideToggle(200);

  });

});
