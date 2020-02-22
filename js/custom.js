/*--------------------------------------------------
Project:        Siocale
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
        scrollToView = function(destination) {
            document.getElementById(destination).scrollIntoView({
                block: 'start',
                inline: 'nearest',
                behavior: 'smooth'
            })
        }
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
        /*====================================
        slick icon slider
        ======================================*/
        $('.hero-slide').slick({
            infinite: true,
            dots: true,
            // fade: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
        /*====================================
                Isotop with ImagesLoaded
            ======================================*/
        var isotopFilter = $('.isotop-filter');
        var isotopGrid = $('.isotop-grid');
        var isotopGridMasonry = $('.isotop-grid-masonry');
        var isotopGridItem = '.isotop-item';
        /*-- Images Loaded --*/
        isotopGrid.imagesLoaded(function () {
            /*-- Filter List --*/
            isotopFilter.on('click', 'button', function () {
                isotopFilter.find('button').removeClass('active');
                $(this).addClass('active');
                var filterValue = $(this).attr('data-filter');
                isotopGrid.isotope({
                    filter: filterValue
                });
            });
            /*-- Filter Grid Layout FitRows --*/
            isotopGrid.isotope({
                itemSelector: isotopGridItem,
                layoutMode: 'fitRows',
                masonry: {
                    columnWidth: '.isotop-grid',
                }
            });
            /*-- Filter Grid Layout Masonary --*/
            isotopGridMasonry.isotope({
                itemSelector: isotopGridItem,
                layoutMode: 'masonry',
                masonry: {
                    columnWidth: 1,
                }
            });
        });
        /*====================================
        masonry-item
        ======================================*/
        $('.masonry-item').imagesLoaded(function () {
            $('.masonry-item').isotope({
                itemSelector: '.masonry',
                percentPosition: true,
                masonry: {
                    columnWidth: '.masonry'
                }
            });
        });
        /*====================================
        slick testimonial slider
        ======================================*/
        $('.testi-slide').slick({
            infinite: true,
            dots: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
        /*====================================
       slick testimonial slider
       ======================================*/
        $('.extra-slide').slick({
            infinite: true,
            dots: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
        /*====================================
            bottom to top
        ======================================*/
        var btn = $('#btn-to-top');
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 300) {
                btn.addClass('show');
                btn.fadeIn();
                if ($(window).scrollTop() === $(document).height()-$(window).height() ) {
                    btn.css("color","white");
                    btn.css("border-color","white");
                } else {
                    btn.css("color","#020323");
                    btn.css("border-color","#020323");
                }
            } else {
                btn.removeClass('show');
                btn.fadeOut();
                btn.css("color","#020323");
                btn.css("border-color","#020323");
            }
        });
        btn.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, '300');
        });
        /*====================================
            side navigation
        ======================================*/
        var sidebar = $('.side-nav');
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 300) {
                sidebar.addClass('show');
                sidebar.fadeIn();
                if ($(window).scrollTop() === $(document).height()-$(window).height() ) {
                    sidebar.removeClass('show');
                } else {
                    sidebar.addClass('show');
                    sidebar.fadeIn();
                }
            } else {
                sidebar.removeClass('show');
                sidebar.fadeOut();
            }
        });
        /*====================================
        partner slider
        ======================================*/
        $('.partner-slide').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [{
                breakpoint: 992,
                settings: {
                    centerMode: false,
                    slidesToShow: 3
                }
            }, {
                breakpoint: 768,
                settings: {
                    centerMode: false,
                    slidesToShow: 2
                },
                breakpoint: 480,
                settings: {
                    centerMode: false,
                    slidesToShow: 1
                }
            }]
        });
        /*====================================
        Team slider
        ======================================*/
        $('.team-slide').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
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
        /*------------------ Hover-3d --------------------*/
        $('.js-tilt').tilt({
            glare: true,
            maxGlare: .5,
        });
    })(jQuery);
    /*------------------ Google-Map --------------------*/
    var iconmap = document.querySelectorAll('#map');
    var img_src = $("#map").attr('data-icon');
    var google;
    for (var i in iconmap)
        if (iconmap.hasOwnProperty(i)) {
            function initMap() {
                var map = new google.maps.Map(document.getElementById("map"), {
                    zoom: 10,
                    center: {
                        lat: 40.7819502,
                        lng: -74.7357194
                    }
                });
                var map_icon = img_src;
                var marker = new google.maps.Marker({
                    position: map.getCenter(),
                    icon: map_icon,
                    map: map
                });
            }
        }