;
(function($) {
    "use strict";

    $(document).ready(function() {

        /*-------------------------------
            Navbar Fix
          ------------------------------*/
        if ($(window).width() < 991) {
            navbarFix()
        }

        $(".menu-item-has-children a").on("click", function() {
            var element = $(this).parent("li");
            if (element.hasClass("show")) {
                element.removeClass("show");
                element.children("ul").slideUp(500);
            } else {
                element.siblings("li").removeClass('show');
                element.addClass("show");
                element.siblings("li").find("ul").slideUp(500);
                element.children('ul').slideDown(500);
            }
        });
        /*--------------------
            wow js init
        ---------------------*/
        new WOW().init();

        /*-------------------------
            magnific popup activation
        -------------------------*/
        $('.video-play-btn,.video-popup,.small-vide-play-btn').magnificPopup({
            type: 'video'
        });

        $('.popup-btn').magnificPopup({
            type: 'image'
            // other options
          });
        /*------------------
            back to top
        ------------------*/
        $(document).on('click', '.back-to-top', function() {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });

    
        /*-----------------------------------------------
           Search Popup
        -----------------------------------------------*/
        var bodyOvrelay = $('.body-overlay');
        var searchPopup = $('#search-popup');
        var sidebarMenu = $('#sidebar-menu');

        bodyOvrelay.on('click', function (e) {
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
        });
        $(document).on('click', '#search', function (e) {
            e.preventDefault();
            searchPopup.addClass('active');
            bodyOvrelay.addClass('active');
        });

     /*------------------
        hero two
    ------------------*/
    var $herotwo = $('.hero-two-activition');
    if ($herotwo.length > 0) {
        $herotwo.slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            prevArrow: '<button class="slider-arrow-prev"><i class="fas fa-arrow-left"></i></button>',
			nextArrow: '<button class="slider-arrow-next"><i class="fas fa-arrow-right"></i></button>',
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
     /*------------------
        back to top
    ------------------*/
        var $baner = $('.baner-wrapper');
        if ($baner.length > 0) {
            $baner.slick({
                dots: true,
                arrows: false,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }

     /*------------------
        quoate slider
    ------------------*/
    var $quote = $('.quote-slider');
    if ($quote.length > 0) {
        $quote.slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    /*------------------
        team slider
    ------------------*/
    var $quote = $('.team-active');
    if ($quote.length > 0) {
        $quote.slick({
			dots: false,
			arrows: true,
			infinite: true,
			prevArrow: '<button class="team-arrow-prev"><i class="fas fa-arrow-left"></i></button>',
			nextArrow: '<button class="team-arrow-next"><i class="fas fa-arrow-right"></i></button>',
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }
    /*------------------
        team slider
    ------------------*/
    var $quote = $('.team-active-2');
    if ($quote.length > 0) {
        $quote.slick({
			dots: false,
			arrows: true,
			infinite: true,
			prevArrow: '<button class="team-arrow-prev"><i class="fas fa-arrow-left"></i></button>',
			nextArrow: '<button class="team-arrow-next"><i class="fas fa-arrow-right"></i></button>',
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }
    var $scprogressBar = $('.slider-controlprogress');
    var $progressBarLabel = $( '.slider__label_Progress' );
    $('.team-active-2').on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
        var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
        $scprogressBar
        .css('background-size', calc + '% 100%')
        .attr('aria-valuenow', calc );

        $progressBarLabel.text( calc + '% completed' );
    });

    /*------------------
    testimonial-carousel-activition-03
    ------------------*/
    var $quote = $('.testimonial-carousel-activition-03');
    if ($quote.length > 0) {
        $quote.slick({
			dots: false,
			arrows: true,
			infinite: true,
			prevArrow: '<button class="team-arrow-prev tesitmonial-03"><i class="fas fa-arrow-left"></i></button>',
			nextArrow: '<button class="team-arrow-next tesitmonial-03"><i class="fas fa-arrow-right"></i></button>',
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }
    var $scprogressBar = $('.slider-controlprogress');
    var $progressBarLabel = $( '.slider__label_Progress' );
    $('.testimonial-carousel-activition-03').on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
        var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
        $scprogressBar
        .css('background-size', calc + '% 100%')
        .attr('aria-valuenow', calc );

        $progressBarLabel.text( calc + '% completed' );
    });

    /*------------------
        brand slider
    ------------------*/
    var $brand = $('.brand-active');
    if ($brand.length > 0) {
        $brand.slick({
			dots: false,
			arrows: false,
			infinite: true,
			prevArrow: '<button class="team-arrow-prev"><i class="fas fa-arrow-left"></i</button>',
			nextArrow: '<button class="team-arrow-next"><i class="fas fa-arrow-right"></i</button>',
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true
                    }
                }
            ]
        });
    }

    /*------------------
        brand slider
    ------------------*/
    var $brandtwo = $('.brand-activtion-wrapper-two');
    if ($brandtwo.length > 0) {
        $brandtwo.slick({
			dots: false,
			arrows: false,
			infinite: true,
			prevArrow: '<button class="team-arrow-prev"><i class="fa fa-chevron-left"></i></button>',
			nextArrow: '<button class="team-arrow-next"><i class="fa fa-chevron-right"></i></button>',
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            centerMode: false,
            centerPadding:'50px',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    /*------------------
        case slider
    ------------------*/
    var $caseslider = $('.case-study-activition');
    if ($caseslider.length > 0) {
        $caseslider.slick({
			dots: false,
			arrows: true,
			infinite: true,
			prevArrow: '<button class="team-arrow-prev"><i class="fas fa-arrow-left"></i></button>',
			nextArrow: '<button class="team-arrow-next"><i class="fas fa-arrow-right"></i></button>',
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    /*------------------
        brand slider
    ------------------*/
    var $test = $('.testimonial-active');
    if ($test.length > 0) {
        $test.slick({
			dots: false,
			arrows: true,
			infinite: true,
			prevArrow: '<button class="test-arrow-prev"><i class="fas fa-arrow-left"></i</button>',
			nextArrow: '<button class="test-arrow-next"><i class="fas fa-arrow-right"></i</button>',
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    var $scprogressBar = $('.slider-controlprogress');
    var $progressBarLabel = $( '.slider__label_Progress' );
    $('.testimonial-active').on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
        var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
        $scprogressBar
        .css('background-size', calc + '% 100%')
        .attr('aria-valuenow', calc );

        $progressBarLabel.text( calc + '% completed' );
    });
    /*------------------
        service details active
    ------------------*/
    var $test = $('.testimonial-active-service-details');
    if ($test.length > 0) {
        $test.slick({
			dots: false,
			arrows: true,
			infinite: true,
			prevArrow: '<button class="test-arrow-prev"><i class="fas fa-arrow-left"></i</button>',
			nextArrow: '<button class="test-arrow-next"><i class="fas fa-arrow-right"></i</button>',
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

        /*---------------------------
            BLog Grid carousel
        ---------------------------*/
        var $TestimonialCarousel = $('.blog-grid-carousel');
        if ($TestimonialCarousel.length > 0) {
            $TestimonialCarousel.owlCarousel({
                loop: true,
                autoplay: true, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                margin: 30,
                dots: true,
                nav: true,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                responsive: {
                    0: {
                        items: 1
                    },
                    460: {
                        items: 1
                    },
                    599: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    960: {
                        items: 2
                    },
                    1200: {
                        items: 3
                    },
                    1920: {
                        items: 3
                    }
                }
            });
        }
        /*---------------------------
            header carousel
        ---------------------------*/
        var $headerCarousel = $('.header-slider-one');
        if ($headerCarousel.length > 0) {
            $headerCarousel.owlCarousel({
                loop: true,
                autoplay: true, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                margin: 30,
                dots: true,
                nav: true,
                navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                responsive: {
                    0: {
                        items: 1,
                        nav: false,
                    },
                    460: {
                        items: 1,
                        nav: false,
                    },
                    599: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    960: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    },
                    1920: {
                        items: 1
                    }
                }
            });
        }

        /*----------------------
            Search Popup
        -----------------------*/
        var bodyOvrelay = $('#body-overlay');
        var searchPopup = $('#search-popup');
        var sidebarMenu = $('#sidebar-menu');

        $(document).on('click', '#body-overlay', function(e) {
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
        });
        $(document).on('click', '.border-none', function(e) {
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
        });
        $(document).on('click', '#search', function(e) {
            e.preventDefault();
            searchPopup.addClass('active');
            bodyOvrelay.addClass('active');
        });

        
        // sidebar menu 
        $(document).on('click', '.sidebar-menu-close', function (e) {
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            sidebarMenu.removeClass('active');
        });
        $(document).on('click', '.body-overlay', function (e) {
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            sidebarMenu.removeClass('active');
        });
        $(document).on('click', '#navigation-button', function (e) {
            e.preventDefault();
            sidebarMenu.addClass('active');
            bodyOvrelay.addClass('active');
        });


    });


    //define variable for store last scrolltop
    var lastScrollTop = '';

    $(window).on('scroll', function() {

        //back to top show/hide
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }

        // Sticky-Memu
        if ($(window).width() > 991) {
            StickyMenu();
        }



    });


    $(window).on('resize', function() {
        /*-------------------------------
            Navbar Fix
        ------------------------------*/
        if ($(window).width() < 991) {
            navbarFix()
        }
    });


    $(window).on('load', function() {

        /*-----------------
            preloader
        ------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(1000);

        /*-----------------
            back to top
        ------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut();

    });

    function navbarFix() {
        $(document).on('click', '.navbar-area .navbar-nav li.menu-item-has-children>a, .navbar-area .navbar-nav li.appside-megamenu>a', function(e) {
            e.preventDefault();
        })
    }

    function StickyMenu() {
        /*--------------------------
                 sticky menu activation
        ---------------------------*/
        var st = $(this).scrollTop();
        var mainMenuTop = $('.navbar-area');
        if ($(window).scrollTop() > 1000) {
            mainMenuTop.addClass('nav-fixed');
        } else {
            mainMenuTop.removeClass('nav-fixed ');
        }
        lastScrollTop = st;
    }
    	// init Isotope
        $('.gallery-item-wrap').isotope(function(){
            itemSelector:'.item'
          });
          $('.gallery-menu ul li').click(function(){
              $('.gallery-menu ul li').removeClass('active');
              $(this).addClass('active');
      
      
              var selector = $(this).attr('data-filter');
              $('.gallery-item-wrap').isotope({
                  filter: selector
              })
              return false;
          });

    /*------------------------------
    *    Progressbar init
    * ------------------------------*/
    $(".progress-bar").ProgressBar();

    
 $('.history-slider-two').slick({
    slidesToShow: 11,
    slidesToScroll: 1,
    arrows: false,
    loop: true,
    asNavFor: '.history-slider-one',
    centerMode: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
  });
  $('.history-slider-one').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.history-slider-two',
    dots: false,
    centerMode: false,
    prevArrow: '<button class="test-arrow-prev history-prev"><i class="fas fa-arrow-left"></i</button>',
	nextArrow: '<button class="test-arrow-next history-next"><i class="fas fa-arrow-right"></i</button>',
    focusOnSelect: true,
  });

  var $scprogressBar = $('.slider-controlprogress');
  var $progressBarLabel = $( '.slider__label_Progress' );
  $('.history-slider-one').on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
      var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
      $scprogressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc );

      $progressBarLabel.text( calc + '% completed' );
  });

})(jQuery);

