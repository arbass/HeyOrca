/* eslint-disable no-console */
// import Swiper JS
// import Swiper styles
import 'swiper/css';

import Swiper from 'swiper';

export const swiper_homePageInit = () => {
  const currentSwiperSection = document.querySelector('.section_swiper-1');
  if (currentSwiperSection) {
    const swiper = new Swiper('.swiper.swiper-1_wrapper', {
      // Optional parameters
      direction: 'horizontal',
      loop: false,

      // If we need pagination
      // pagination: {
      //   el: '.swiper-pagination',
      // },

      // Navigation arrows
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },

      // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
      breakpoints: {
        0: {
          slidesPerView: 1.3,
        },
        768: {
          slidesPerView: 2.3,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      },
    });
  }
};
