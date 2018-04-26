 $('.sl').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  autoplay: true,
  autoplaySpeed: 3000,
  swipeToSlide: true,
  asNavFor: '.sl2'
});
$('.sl2').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.sl',
  centerMode: true,
  focusOnSelect: true
});
				