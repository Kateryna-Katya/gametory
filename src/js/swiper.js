import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const gallerySwiper = new Swiper('.gallery-swiper', {
  modules: [Autoplay],

  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  speed: 800,
  centeredSlides: false,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    1440: {
    slidesPerView: 'auto',
    centeredSlides: true,
      spaceBetween: 40,
    },
  },
});


const whySwiper = new Swiper('.why-swiper', {
  modules: [Autoplay],

  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 24,

  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    1440: {
      enabled: false,
      loop: false,
      autoplay: false,
    },
  },
});
