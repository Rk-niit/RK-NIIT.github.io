/*
function slimscroll(){
	$('.mainrefScroll').slimscroll({
		color: '#11BFD8',
        size: '6px',
		opacity:1,
		alwaysVisible: true,
        railVisible: true,
		railBorderRadius: 4,
		railOpacity: 1,
		allowPageScroll: false,
		railColor: '#e4e4e4',
		wheelStep: 20,
		distance: '-15px',
		height: 'auto'
	});
}
*/

$(document).ready(function() {
	
	/* 
	
	var winHeight = $(window).height();
	var HeaderHeight = $('header').height();
	var tophead = $('.innerMain h1').height();
	var footerHeight = $('footer').height();
	$('.navHeight').css({'height' : winHeight - HeaderHeight - tophead - 120 + 'px'});

	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
		if (scroll >= 150) {
			$(".reflection_leftnav").addClass("fixedlefNav");
			$('.navHeight').css({'height' : winHeight - HeaderHeight - tophead - footerHeight -  0 + 'px'});
			slimscroll();
			} else {
				slimscroll();
				$(".reflection_leftnav").removeClass("fixedlefNav");
				$('.navHeight').css({'height' : winHeight - HeaderHeight - tophead -  120 + 'px'});
			}
 });
 */

 /* slimscroll(); */
	
	$(function(){
		$('.nmTubeShareNew1').mouseenter(function(){
			
		$(this).find('.shareTubeHover').fadeIn("fast");
		}).mouseleave(function(){
		$(this).find('.shareTubeHover').fadeOut("fast");
		});
	});
	
	$(function(){
		$('.nmTubeShareNew1').mouseenter(function(){
			
		$(this).find('.shareTubeHover').fadeIn("fast");
		}).mouseleave(function(){
		$(this).find('.shareTubeHover').fadeOut("fast");
		});
	});
	
	
	$(function(){
		$('.nmTubeShareNew1').mouseenter(function(){
			
		$(this).find('.shareTubeHover2').fadeIn("fast");
		}).mouseleave(function(){
		$(this).find('.shareTubeHover2').fadeOut("fast");
		});
	});
	
	
    setTimeout(function () {
        $(".Newscaption").animate({bottom: '-56px'});
    }, 6000);

    $(".Newscaption").hover(
            function () {
                $(this).css('bottom', '0px');
            },
            function () {
                $(this).css('bottom', '-56px');
            }
    );

    /*for article page no banner script*/

    $(".fullColumn").each(function () {
        if ($(this).find(".banner").length == 0) {
            $(this).find(".newsUpCaptionDetail").addClass("no-thumb");
            $(this).find(".newsUpdateBanner").addClass("no-thumb2");
        }
    });

    /*Scroll Top Function*/

    $(".imgLiquidFill").imgLiquid({fill: true});
    $(".imgLiquidNoFill").imgLiquid({fill: false});

    $(window).scroll(function () {
        //alert('ok');
        if ($(this).scrollTop() > 400) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    $('.scrollToTop').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    /*Scroll Top Function*/


    $('.tymline').owlCarousel({
        rtl: false,
        loop: false,
        margin: 0,
        navText: false,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 15
            }
        }
    });

    $('.bxslider').bxSlider({
        auto: ($(".bxslider li").length > 1) ? true : false,
        minSlides: 1,
        autoControls: true
    });
    $("a[rel^='prettyPhoto']").prettyPhoto({
        theme: 'pp_default',
        social_tools: false,
        deeplinking: false,
    });

    (function () {
        $('.popular_post_slider').owlCarousel({
            navigation: false,
            pagination: true,
            singleItem: true,
            transitionStyle: "fade",
            items: 1
        });
    })();
    //international
    (function () {
        $('.visitgallery').flipping_gallery({
            direction: "forward",
            selector: "> div",
            spacing: 40,
            showMaximum: 3,
            flipDirection: "bottom",
            autoplay: false
        });

        $(".next").click(function () {
            $(".gallery").flipForward();
            return false;
        });

        $(".prev").click(function () {
            $(".gallery").flipBackward();
            return false;
        });
    })();
    // Language option dropdown toggle

    $('#nmlang').on('click', function (e) {
        e.preventDefault();

        $('#access_lang_items').slideToggle({
            duration: 200,
            easing: 'easeOutCirc',
            complete: function () {
                $('#nmlang').addClass('lang_items_items');
            }
        });

        $('#access_searchbox').slideUp(200, 'easeInCirc');

        e.stopPropagation();
    });

    $(document).click(function (e) {
        var container = $("#access_lang_items");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.slideUp(200, 'easeOutCirc');
        }
    });

    //Language option dropdown toggle




    //Search dropdown toggle
    $('#searchbox').on('click', function (e) {
        e.preventDefault();

        $('#access_searchbox').slideToggle(200, 'easeInCirc');

        $('#access_lang_items').slideUp(200, 'easeOutCirc');

        e.stopPropagation();
    });


    $(document).click(function (e) {
        var container = $("#access_searchbox");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            if ($("#globalkeyword").val() == "") {
                container.slideUp(200, 'easeOutCirc');
            }
        }
    });

    /* timeline window scroll*/


//    $(window).scroll(function () {
//        var window_top = $(window).scrollTop() + 12;
//        var timeline_Divs = $('#timeline').offset().top;
//        if (window_top >= timeline_Divs) {
//            $('.timelineYear').addClass('fixedTymline');
//        } else {
//            $('.timelineYear').removeClass('fixedTymline');
//        }
//    });


    /* timeline window scroll*/


    /* Image hover Effects*/
    if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        $(".img").click(function (e) {
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".close-overlay").click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".img").hasClass("hover")) {
                $(this).closest(".img").removeClass("hover");
            }
        });
    } else {
        // handle the mouseenter functionality
        $(".img").mouseenter(function () {
            $(this).addClass("hover");
        })
                // handle the mouseleave functionality
                .mouseleave(function () {
                    $(this).removeClass("hover");
                });
    }



    /* Image hover Effects*/

    /*blog share jQuery*/

    $(function () {
        $('.shareblog').hover(function () {
            $('.shareIconBlog').stop().fadeIn("fast");
        }, function () {
            $('.shareIconBlog').stop().fadeOut("fast");
        });
    });
    $(function () {
        $('.galleryLeft').mouseenter(function () {
            $(this).find('.galleryHover').stop().slideToggle(600);
        }).mouseleave(function () {
            $(this).find('.galleryHover').stop().slideToggle(600);
        });
    });
    /*blog share jQuery*/

    $(function () {
        $('.shareRight ul li.share').mouseenter(function () {
            $(this).find('.shareNewsHover').fadeIn("fast");
        }).mouseleave(function () {
            $(this).find('.shareNewsHover').fadeOut("fast");
        });
    });

    $(function () {
        $('.shareRight2 ul li.share').mouseenter(function () {
            $(this).find('.shareNewsHover2').fadeIn("fast");
        }).mouseleave(function () {
            $(this).find('.shareNewsHover2').fadeOut("fast");
        });
    });

    $(function () {
        $('.shareRight3 ul li.share').mouseenter(function () {
            $(this).find('.shareNewsHover3').fadeIn("fast");
        }).mouseleave(function () {
            $(this).find('.shareNewsHover3').fadeOut("fast");
        });
    });

    $(function () {

        $('.shareRightStalwarts ul li.share').mouseenter(function () {
            //alert('ok')
            $(this).find('.StalwartshareNewsHover2').fadeIn("fast");
        }).mouseleave(function () {
            $(this).find('.StalwartshareNewsHover2').fadeOut("fast");
        });
    });




    /*blog share jQuery*/


    function cmntShare() {
        $('.shareRight4 ul li.share').mouseenter(function () {
            $(this).find('.shareNewsHover4').fadeIn("fast");
        }).mouseleave(function () {
            $(this).find('.shareNewsHover4').fadeOut("fast");
        });
    }
    ;

    $(".tabMenuPost a").click(function (event) {
        //alert('oskdsd');
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tabContent").not(tab).css("display", "none");
        $(tab).fadeIn();
    });

    $(".tabs_mannNew a.tuneC").click(function (event) {
        //alert('oskdsd');
        event.preventDefault();
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
        var tab = $(this).attr("href");
        $(".tabContentHome").not(tab).css("display", "none");
        $(tab).fadeIn();
    });



    $(".downloadTabs a").click(function (event) {
        //alert('oskdsd');
        event.preventDefault();
        $(this).parent().addClass("dwnloadCurrent");
        $(this).parent().siblings().removeClass("dwnloadCurrent");
        var tab = $(this).attr("href");
        $(".downloadTabsContent").not(tab).css("display", "none");
        $(tab).fadeIn();
    });

    $(function () {
        $('.shareRight2 ul li.share').mouseenter(function () {
            $(this).find('.shareNewsHover2').fadeIn("fast");
        }).mouseleave(function () {
            $(this).find('.shareNewsHover2').fadeOut("fast");
        });
    });


    $('.internationalVisit').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true
    })

    /*$(".rippler33333333333").rippler({
     effectClass: 'rippler-effect',
     effectSize: 16 // Default size (width & height)
     ,
     addElement: 'div' // e.g. 'svg'(feature)
     ,
     duration: 400
     });*/

    $("#aBanner").owlCarousel({
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        smartSpeed: 1000,
        items: 1,
        loop: true,
        center: true,
        mouseDrag: true,
        margin: 0,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true

    });

    $("#blogbanner").owlCarousel({
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        smartSpeed: 1000,
        items: 1,
        loop: true,
        center: true,
        mouseDrag: true,
        margin: 0,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true

    });




    $("#aGovernance").owlCarousel({
        smartSpeed: 1000,
        items: 1,
        loop: true,
        center: true,
        mouseDrag: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true

    });
	
	
	 $("#sliderWe1").owlCarousel({
		navigation : true, // Show next and prev buttons
		slideSpeed : 1000,
		paginationSpeed : 400,
		loop:true,
		singleItem:true,
		autoplay:true,
		autoplayTimeout:4000,
		items: 1,
     });
	
	
    
	  $(".infoslide").owlCarousel({
		nav : true, // Show next and prev buttons
		slideSpeed : 600,
		paginationSpeed : 400,
		singleItem:true,
		items: 1,
                dots:false
	 });


    $("#mediaCoverageHome").owlCarousel({
        smartSpeed: 1000,
        items: 1,
        loop: true,
        center: true,
        mouseDrag: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true

    });




    (function () {
        $("#aGovernance2").owlCarousel({
            smartSpeed: 1000,
            items: 1,
            loop: true,
            center: true,
            mouseDrag: true,
            margin: 0,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true
        });
    })();


    // Applying Dots And arrows Styles
    var $carousel = $(".carousel"),
            $carouselDots = $carousel.find(".owl-dots"),
            $carouselPrev = $carousel.find(".owl-prev"),
            $carouselNext = $carousel.find(".owl-next");
    $carouselPrev.addClass("left carousel-control").empty().append("<i class='arrow-left1'></i>");
    $carouselNext.addClass("right carousel-control").empty().append("<i class='arrow-right1'></i>");


    // Governance slide mouseover
    $('#aGovernance li, #aGovernance2 li, #mediaCoverageHome li, .right').hover(
            function () {
                $(this).children('.aCaption').stop().animate({
                    bottom: '0'
                }, 500);
            },
            function () {
                $(this).children('.aCaption').stop().animate({
                    bottom: '-70'
                }, 500);
            }
    );


    $('#aGovernance li, #aGovernance2 li, .right').hover(
            function () {
                $(this).children('.aCaption2').stop().animate({
                    bottom: '0'
                }, 500);
            },
            function () {
                $(this).children('.aCaption2').stop().animate({
                    bottom: '-60'
                }, 500);
            }
    );

    // Watch live mouseover
    $('#watch-live').hover(
            function () {

                $('.aTuneCaption').stop().animate({
                    bottom: '0'
                }, 500);
            },
            function () {
                $('.aTuneCaption').stop().animate({
                    bottom: '-60'
                }, 500);
            }


    );

    // Tune In tabs
    $('#tabs').tabulous({
        effect: 'scale'
    });

    /* custom selectbox js */
    $(".custom-select").each(function () {
        $(this).wrap("<span class='select-wrapper'></span>");
        $(this).after("<span class='holder'></span>");
    });
    $(".custom-select").change(function () {
        var selectedOption = $(this).find(":selected").text();
        $(this).next(".holder").text(selectedOption);
    }).trigger('change');

    // skrollr
    skrollr.init({
        smoothScrolling: true,
        forceHeight: false
    });



    /*Code for timeline page*/

    /*        $('.tymline a[href*=#]:not([href=#])').click(function () {
     
     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
     var target = $(this.hash);
     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
     if (target.length) {
     $('html,body').animate({
     scrollTop: target.offset().top
     
     }, 1200);
     $(".item").removeClass('current');
     $(this).parent($(".item")).addClass('current');
     return false;
     }
     }
     });
     */
    /*on scroll event timeline page*/
    $(document).on("scroll", onScroll);
    $('.tymline a[href^="#"]').on('click', function (e) {
        //	alert('ok')
        e.preventDefault();
        $(document).off("scroll");

        $('.tymline a').each(function () {
            $(this).removeClass('current');
        })
        $(this).addClass('current');



        var target = this.hash,
                menu = target;
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 600, 'swing', function () {
            window.location.hash = '';
            $(document).on("scroll", onScroll);
        });
    });

    /*on scroll event timeline page*/

    /*Code for timeline page*/


    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 2000,
        outDuration: 800,
        linkElement: '.animsition-link',
        // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        unSupportCss: ['animation-duration',
            '-webkit-animation-duration',
            '-o-animation-duration'
        ],
        overlay: false,
        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'body'
    });

    $(".speeches").vgrid({
        easing: "easeOutQuint",
        time: 500,
        delay: 20,
    });



//nmTube 

    var windowH = $(".nmTubeCategoryLeft").height() - 35;
    $('.nmTubeCategoryMidBorder').css({'height': windowH + 'px'});

    $("ul.tabItemNmtube li.item").on('click', function (event) {
        event.preventDefault();
        var obj = $(this);

        $('ul.tabItemNmtube li.item').removeClass('activeTab');
        $(this).addClass('activeTab');
       // $(".tablist-content").removeClass('tablist-contentAct');
        //$("div#" + obj.attr('id')).addClass('tablist-contentAct');

    });




    $('.tabItemNmtube').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false,
                margin: 0,
                pagination: false,
                navText: false,
            }
        }
    })

    var tabWidth = $(".tabItemNmtube .owl-item").width() - 5;
    $('.tabItm').css({'width': tabWidth + 'px'});

    $('.exploreItem').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false,
                margin: 20,
                pagination: false,
                navText: false,
            }
        }
    })

});


wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
})
wow.init();


/*on scroll event timeline page*/
function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('.tymline a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.tymline a').removeClass("current");
            currLink.addClass("current");
        } else {
            currLink.removeClass("current");
        }
    });
}
/*on scroll event timeline page*/

function bloghover() {
    if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        $(".img").click(function (e) {
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".close-overlay").click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".img").hasClass("hover")) {
                $(this).closest(".img").removeClass("hover");
            }
        });
    } else {
        // handle the mouseenter functionality
        $(".img").mouseenter(function () {
            $(this).addClass("hover");
        })
                // handle the mouseleave functionality
                .mouseleave(function () {
                    $(this).removeClass("hover");
                });
    }

}
