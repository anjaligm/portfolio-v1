
		$('a').bind("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});

		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}
		});
		(function ($) {

	/*----- PRELOADER -----*/
	$(window).load(function () {
		$('.loader').fadeOut();
		$('.page-loader').delay(100).fadeOut('slow');
	});

})(jQuery);
/*!
 * Start Bootstrap - Grayscale v1.1.0 (http://startbootstrap.com/template-overviews/grayscale)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */

function collapseNavbar() {
    $(".navbar").offset().top>50?$(".navbar-fixed-top").addClass("top-nav-collapse"): $(".navbar-fixed-top").removeClass("top-nav-collapse")
}


$(window).scroll(collapseNavbar),
$(document).ready(collapseNavbar),
$(function() {
    $("a.page-scroll").bind("click", function(e) {
        var t=$(this);
        $("html, body").stop().animate( {
            scrollTop: $(t.attr("href")).offset().top
        }
        , 1500, "easeInOutExpo"), e.preventDefault()
    })
});

