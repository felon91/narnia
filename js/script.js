$(document).ready(function () {

  var owl = $('.owl-carousel');
  owl.owlCarousel({
    margin: 0,
    nav: true,
    dots: false,
    loop: true,
    navText: [],
    responsive: {
      0: {
        items: 1
      }
    }
  });

  $(".mask").mask("+7 (999) 999-99-99");

});