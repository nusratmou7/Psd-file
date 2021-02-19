(function($){
	"use strict";


	$(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 15) {
            $(".navbar").addClass("nav2");
        } else {
            $(".navbar").removeClass("nav2");
        }
    });

	/**
     * ----------------------------------------------
     * Name of section
     * ----------------------------------------------
     */

    $('.testimonials-carousel').owlCarousel({
	     center: true,
	    items:3,
	    loop:true,
	    margin:10,
	    animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
	    responsiveClass:true,
	    autoplay: true,
	    responsive:{
	        0:{
	            items:1,
	            nav:false
	        },
	        767:{
	            items:2,
	            nav:false
	        },
	        1000:{
	            items:3,
	            nav:false,
	            loop:true
	        }
	    }
	})

	  $('.sponsor-slider').owlCarousel({
            loop:true,
            margin:0,
            mouseDrag:true,
            autoplay:true,
            responsiveClass:true,
            nav:false,
            items:5,
            responsive:{
	        0:{
	            items:2,
	            nav:false
	        },
	        600:{
	            items:3,
	            nav:false
	        },
	        1000:{
	            items:5,
	            nav:false,
	            loop:true
	        }
	    	}  
       })

})(jQuery); 