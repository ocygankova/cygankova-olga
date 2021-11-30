const popularSlider = new Swiper('.popular-slider', {
  navigation: {
    nextEl: '.popular__slide-arrow__next',
    prevEl: '.popular__slide-arrow__prev',
  },
  speed: 800,
  freeMode: true,

  slidesPerView: 1.8,
  slidesPerGroup: 1,
  spaceBetween: 10,

  breakpoints: {
    425: {
      slidesPerView: 2.4,
    },
    576: {
      slidesPerView: 2.8,
    },
    768: {
      slidesPerView: 3.2,
      slidesPerGroup: 3,
    },
    992: {
      slidesPerView: 4,
      slidesPerGroup: 3,
    },
    1200: {
      slidesPerView: 5,
      slidesPerGroup: 4,
    },
  },
  simulateTouch: true,
  //   mousewheel: {
  //     sensitivity: 1,
  //   },

  // loop: true,
  // autoplay: {
  //   delay: 10000,
  //   stopOnLastSlide: true,
  //   disableOnInteraction: true,
  //   pauseOnMouseEnter: true,
  // },
  a11y: {
    enabled: true,
  },
});

const restaurantsSlider = new Swiper('.restaurants-slider', {
  navigation: {
    nextEl: '.restaurants__slide-arrow__next',
    prevEl: '.restaurants__slide-arrow__prev',
  },
  speed: 800,
  freeMode: true,

  slidesPerView: 1.4,
  slidesPerGroup: 1,
  spaceBetween: 10,

  breakpoints: {
    425: {
      slidesPerView: 1.8,
    },
    576: {
      slidesPerView: 2.2,
    },
    768: {
      slidesPerView: 2.4,
      slidesPerGroup: 2,
    },
    992: {
      slidesPerView: 3.2,
      slidesPerGroup: 3,
    },
    1200: {
      slidesPerView: 4,
      slidesPerGroup: 3,
    },
  },

  simulateTouch: true,
  //   mousewheel: {
  //     sensitivity: 1,
  //   },

  // loop: true,
  // autoplay: {
  //   delay: 10000,
  //   stopOnLastSlide: true,
  //   disableOnInteraction: true,
  //   pauseOnMouseEnter: true,
  // },
  a11y: {
    enabled: true,
  },
});
