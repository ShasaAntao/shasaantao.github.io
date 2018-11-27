// JavaScript Document
jQuery(function($) {
	"use strict";

	$(window).bind('scroll', function() {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

	

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    })

	$(document).ready(function() {

		
	     $( "#bs-example-navbar-collapse-1 .nav li a" ).on("click", function(){
	        $('.navbar-collapse').removeClass('in');
	     });

	     $('.owl-carousel').owlCarousel({
		    loop:true,
		    margin:10,
		    responsiveClass:true,
		    nav:true,
		    stagePadding: 200,
		    responsive:{
		        0:{
		            items:1,
		            stagePadding: 50,
		       },
		        600:{
		            items:2,
		            stagePadding: 100,
		        },
		        1000:{
		            items:3,
		            stagePadding: 200,
		        }
		    }
		})
			
	});

	$('a.page-scroll').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
		  	if($(window).width() > 768)
		  	{
		  		$('html,body').animate({
			      scrollTop: target.offset().top - $('.navbar').height()
			    }, 900);
			    return false;

		  	}
		  	else
		  	{
		  		$('html,body').animate({
			      scrollTop: target.offset().top - $('.navbar').height()
			    }, 900);
			    return false;

		  	}
		    
		  }
		}
	});


	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInUp');
		}, {
			offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
		}, {
			offset: '60%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInUp');
		}, {
			offset: '70%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInUp');
		}, {
			offset: '75%'
	});

	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInUp');
		}, {
			offset: '75%'
	});
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated fadeInUp');
		}, {
			offset: '75%'
	});

});