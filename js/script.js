$(document).ready(function () {

  var owl = $('.owl-carousel');
  owl.owlCarousel({
    margin: 0,
    dots: true,
    nav: true,
    autoHeight: true,
    loop: true,
    navText: ['<span>Пред<b>ыдущий</b></span', '<span>След<b>ующий</b></span>'],
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

  $('.menu__link, .price__map').bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
  });


  $(".gallery__add").on("click", function(e) {


    if(window.innerWidth >= 768) {
      var elementsHide = $('.gallery__block--hide-desktop');

      if(elementsHide.length >= 3) {
        elementsHide[0].classList.remove('gallery__block--hide-desktop');
        elementsHide[1].classList.remove('gallery__block--hide-desktop');
        elementsHide[2].classList.remove('gallery__block--hide-desktop');

        var counts = $('.gallery__block--hide-desktop').length;
        if (counts == 0) {
          $(this).hide();
        }

      } else if (elementsHide.length == 2) {
        elementsHide[0].classList.remove('gallery__block--hide-desktop');
        elementsHide[1].classList.remove('gallery__block--hide-desktop');
        $(this).hide();
      }
      else if(elementsHide.length == 1) {
        elementsHide[0].classList.remove('gallery__block--hide-desktop');
        $(this).hide();
      }

    } else {
      elementsHide = $('.gallery__block--hide-mobile');

      if(elementsHide.length >= 2) {
        elementsHide[0].classList.remove('gallery__block--hide-mobile');
        elementsHide[1].classList.remove('gallery__block--hide-mobile');

        var counts = $('.gallery__block--hide-mobile').length;
        if (counts == 0) {
          $(this).hide();
        }

      }
      else if(elementsHide.length == 1) {
        elementsHide[0].classList.remove('gallery__block--hide-mobile');
        $(this).hide();
      }
    }

  });


  new WOW().init({
    mobile: false,
    offset: 150
  });

});


$(window).resize(function(){

  if(window.innerWidth >= 980) {

  }

});