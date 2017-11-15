 // slick slider custimization
 $('.main-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  dots: true
});

 $('.product-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  prevArrow: '<button class="slick-arrow slick-prev"><i class="icon ico-slider-arrow" aria-hidden="true"></i></button>',
  nextArrow: '<button class="slick-arrow slick-next"><i class="icon ico-slider-arrow" aria-hidden="true"></i></button>',
  responsive: [
    {
        breakpoint: 980,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
        }
    }
]
});

$('.more-product_slider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: true,
	autoplay: false,
	prevArrow: '<button class="slick-arrow slick-prev"><i class="icon ico-slider-arrow" aria-hidden="true"></i></button>',
	nextArrow: '<button class="slick-arrow slick-next"><i class="icon ico-slider-arrow" aria-hidden="true"></i></button>',
	responsive: [
		{
			breakpoint: 980,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true
			}
		}
	]
});

// toggling class to drop-down nav

document.getElementById('footer-nav-1').onclick = function() {
    document.getElementById('footer-nav-drop-1').classList.toggle('active-drop');
}

document.getElementById('footer-nav-2').onclick = function() {
    document.getElementById('footer-nav-drop-2').classList.toggle('active-drop');
}

document.getElementById('footer-nav-3').onclick = function() {
    document.getElementById('footer-nav-drop-3').classList.toggle('active-drop');
}

document.getElementById('footer-nav-4').onclick = function() {
    document.getElementById('footer-nav-drop-4').classList.toggle('active-drop');
}

$('.carello, .prod-count').click(function() {
	$('.cart-block_drop').toggleClass('active');
})
$('.btn-mobile-nav').click(function() {
	$(this).toggleClass('active');
	$('.main-nav_hide').toggleClass('active');
})

$('.btn-log-reg.btn-user').click(function() {
	$(this).toggleClass('active');
	$('.area-client_drop').toggleClass('active');
})



