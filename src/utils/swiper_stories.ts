/* eslint-disable no-console */
// import Swiper JS
// import Swiper styles
import 'swiper/css';

import Swiper from 'swiper';
export const swiper_storiesInit = () => {
  const currentSwiperSection_stories = document.querySelector('.section_insta-stories');
  if (currentSwiperSection_stories) {
    const swiper_soc = new Swiper('.swiper.is-soc-media', {
      slidesPerView: 1.5,
      centeredSlides: true,
      spaceBetween: 24,
      initialSlide: 2,
      freeMode: { enabled: true },
    });
  }
};
