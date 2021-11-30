
//Gulp plugin functions

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});


//My Functions
function removeClass(elems, cssClass) {
    elems.forEach((elem) => {
        elem.classList.remove(cssClass);
    })
};;
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
;
const findUserLocation = () => {
  const location = document.querySelector('#userLocation');

  const success = (position) => {
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

    fetch(geoApiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        location.textContent = data.city;
      });
  };
  // geoip php

  const error = () => {
    location.textContent = 'Unable to retrieve your location.';
  };

  navigator.geolocation.getCurrentPosition(success, error);
};

document
  .querySelector('#findLocation')
  .addEventListener('click', findUserLocation);
;
const toTop = document.querySelector('.to-top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 1200) {
    toTop.classList.add('active');
  } else {
    toTop.classList.remove('active');
  }
});
;




