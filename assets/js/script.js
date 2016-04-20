$(document).ready(function() {
    $('.carousel').carousel({
        interval: 5000
    }); 
    $('.carousel').carousel('cycle');

    $('#top-nav').onePageNav({
             currentClass: 'active',
             changeHash: true,
             scrollSpeed: 500
    });
});



  // animation
$(window).scroll(function() {
    //carousel fade
    var carousel = $('#myCarousel');
    if($(window).scrollTop() < 300 ){
         carousel.fadeIn("slow");
   } else {
         carousel.fadeOut("slow");
   }
    
    $('#about,.album,.blogevent ul li').each(function(){
    var elementPos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (elementPos < topOfWindow + 400) {
        $(this).addClass("animated fadeInUp");
      }
    });


    $('h3,h4').each(function(){
    var elementPos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (elementPos < topOfWindow+500) {
        $(this).addClass("animated fadeInUp");
      }
    });
});