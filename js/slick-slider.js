$(document).ready(function () {
  $(".latest-news-slick-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    prevArrow:
      '<button class="slick-prev" aria-label="Previous" type="button"><i class="fa-solid fa-circle-arrow-left"></i></button>',
    nextArrow:
      '<button class="slick-next" aria-label="Next" type="button"><i class="fa-solid fa-circle-arrow-right"></i></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
