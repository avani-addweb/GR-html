jQuery(document).ready(function(){

	// verticale slider
	jQuery(".slider-main").slick({
		slidesToShow: 2,
		row: 2,
		slidesPerRow: 3,
		arrows: false,
		vertical: true,
		autoplay: true,
		verticalSwiping: true,
		centerMode: false,
		centerPadding: '30px'
	});

	// testimonial slider
	jQuery('.entrepreneurs-slider').slick({
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
});