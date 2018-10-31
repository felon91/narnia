$(document).ready(function () {

  var owl = $('.owl-carousel');
  owl.owlCarousel({
    margin: 0,
    dots: true,
    nav: true,
    loop: true,
    navText: ['<span>След<b>ующий</b></span>', '<span>Пред<b>ыдущий</b></span>'],
    responsive: {
      0: {
        items: 1,
      }
    }
  });

  $(".mask").mask("+7 (999) 999-99-99");

});