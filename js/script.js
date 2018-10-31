$(document).ready(function () {

  var owl = $('.owl-carousel');
  owl.owlCarousel({
    margin: 0,
    dots: true,
    nav: true,
    autoHeight: true,
    loop: true,
    navText: ['<span>След<b>ующий</b></span>', '<span>Пред<b>ыдущий</b></span>'],
    responsive: {
      0: {
        items: 1,
      }
    }
  });

  $(".mask").mask("+7 (999) 999-99-99");

  $('.gallery__btn, .gist__btn, .themes__btn').bind("click", function(e){
    $('html, body').stop().animate({
      scrollTop: $('#participation').offset().top
    }, 1000);
    e.preventDefault();
  });

  $('.price__btn').bind("click", function(e){
    $('html, body').stop().animate({
      scrollTop: $('#meeting').offset().top
    }, 1000);
    e.preventDefault();
  });

  $('.menu__link').bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
  });

});