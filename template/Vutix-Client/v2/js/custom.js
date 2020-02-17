/*--------------------------------------------------
Project:        Vutix
Version:        1.0
Author:         Company Name
-----------------------------------------------------

    JS INDEX
    ================================================
    * preloader js
    * sticky menu js
    *  Slide menu js
    * slick icon slider
    * Hover-3d
    * Isotop with ImagesLoaded
    * masonry-item
    * bottom to top
    * partner slider
    * Team-slider
    * Google-Map
    ================================================*/
(function ($) {
  "use strict";
  var $main_window = $(window);
  /*====================================
      preloader js
    ======================================*/
  $main_window.on('load', function () {
    $('#preloader').fadeOut('slow');
  });
  /*====================================
      sticky menu js
    ======================================*/
  var windows = $(window);
  var sticky = $('.header-fixed');
  windows.on('scroll', function () {
    var scroll = windows.scrollTop();
    if (scroll < 50) {
      sticky.removeClass('stick');
    } else {
      sticky.addClass('stick');
    }
  });
  /*====================================
    Slide menu js
  ======================================*/
  $(windows).on('click', function () {
    $('.menu-tab').click(function () {
      $('.menu-hide').toggleClass('show');
      $('.menu-tab').toggleClass('active');
    });
    $('a').click(function () {
      $('.menu-hide').removeClass('show');
      $('.menu-tab').removeClass('active');
    });
  });
  /*-------------- Record-Slide ------------*/
  $('.record-slide').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [{
      breakpoint: 992,
      settings: {
        centerMode: true,
        slidesToShow: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        centerMode: false,
        slidesToShow: 1
      }
    }]
  });
  /*-------------- Record-Slide ------------*/
  var $slickEl = $('.center-mode-slide');
  $slickEl.slick({
    centerMode: true,
    slidesToShow: 5,
    centerPadding: '0px',
    focusOnSelect: true,
    dots: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 2
        }
      }
    ]
  });
  /*====================================
  slick Product slider
  ======================================*/
  $('.slide-pro').slick({
    infinite: true,
    arrows: false,
    dots: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,

  });
  /*====================================
slick Galley slider
======================================*/
  $('.slider-screen').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-btn',
    autoplay: true
  });
  $('.slider-btn').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-screen',
    dots: false,
    focusOnSelect: true

  });
  /*====================================
              bottom to top
          ======================================*/
  var btn = $('#btn-to-top');
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, '300');
  });
  /*====================================
 increment and decrement
======================================*/
  var buttonPlus = $(".cart-qty-plus");
  var buttonMinus = $(".cart-qty-minus");

  var incrementPlus = buttonPlus.on('click', function () {
    var $n = $(this)
      .parent(".inc-dec-control")
      .parent(".inc-dec-contain")
      .find(".qty");
    $n.val(Number($n.val()) + 1);
  });

  var incrementMinus = buttonMinus.on('click', function () {
    var $n = $(this)
      .parent(".inc-dec-control")
      .parent(".inc-dec-contain")
      .find(".qty");
    var amount = Number($n.val());
    if (amount > 0) {
      $n.val(amount - 1);
    }
  });

})(jQuery);