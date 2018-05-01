 $('.sl').slick({ asNavFor: '.sl2, .sl3'});
$('.sl2').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.sl, .sl3',
  centerMode: true,
  focusOnSelect: true
});
$('.sl3').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.sl, .sl2',
  centerMode: true,
  focusOnSelect: true
});