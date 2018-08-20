/*Nav logic*/
/*$(function(){
	"use strict";

	$(".navigate").onePageNav({
		   currentClass: 'current',
        changeHash: false,
        scrollSpeed: 700,
        scrollThreshold: 0.5,
        easing: 'easeInOutCubic'
	});

scroll motion navigator
    $(".hamburger-menu, .main-nav ul li a").on( 'click', function() {
        $(".header").toggleClass("pushed");
        $(".main-content").toggleClass("main-pushed");
        $('.bar').toggleClass('animate');
    });

 });
*/

$(document).ready(function() {

	$('a.scrollto').click(function(e){
		$('html,body').scrollTo(this.hash, this.hash, {gap:{y:-120}});
		e.preventDefault();

		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
	});

/*hamburger menu*/
