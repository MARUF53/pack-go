$('.slick_sec').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: true,
  centerMode: true,
  centerPadding: "0",
});

$('.tab_slick').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  centerMode: true,
  centerPadding: "0",
  arrows: false,
});
$('.test_slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  arrows: false,
});

$('.counter').counterUp({
    delay: 10,
    time: 1000
});
