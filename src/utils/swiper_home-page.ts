/* eslint-disable no-console */
// import Swiper JS
// import Swiper styles
import 'swiper/css';

import Swiper from 'swiper';

export const swiper_homePageInit = () => {
  const currentSwiperSection = document.querySelector('.section_swiper-1');
  if (currentSwiperSection) {
    const swiper = new Swiper('.swiper.swiper-1_wrapper', {
      direction: 'horizontal',
      loop: true,
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

    const allSlides = document.querySelectorAll('.swiper-slide.card_item');
    const allSlidesTotal = allSlides.length;
    const allShadows = currentSwiperSection.querySelectorAll('.card_item.is-background.is-swiper');
    allShadows[0].classList.add('is-active');

    allSlides.forEach((slide, id) => {
      slide.setAttribute('current-slide-id', id + 1);
    });
    // document.querySelector('.is-swiper-1-count').textContent = '1' + '/' + allSlidesTotal;
    const slidesCounter = document.querySelector('.is-swiper-1-count');
    if (slidesCounter) {
      slidesCounter.textContent = '1' + '/' + allSlidesTotal;

      swiper.on('slideChange', function () {
        setTimeout(function () {
          const currentAciveSlide = currentSwiperSection.querySelector('.swiper-slide-active');
          const currentAciveSlide_id = currentAciveSlide.getAttribute('current-slide-id');
          slidesCounter.textContent = currentAciveSlide_id + '/' + allSlidesTotal;
          allShadows.forEach((shadow) => {
            shadow.classList.remove('is-active');
          });
          const currentShadow = currentAciveSlide.querySelector(
            '.card_item.is-background.is-swiper'
          );
          currentShadow.classList.add('is-active');
        }, 200);
      });
    }

    const arrowLeft = currentSwiperSection.querySelector('.arrow-icon.is-swiper.is-left');
    const arrowRight = currentSwiperSection.querySelector('.arrow-icon.is-swiper.is-right');

    if (arrowLeft) {
      arrowLeft.addEventListener('click', function () {
        swiper.slidePrev();
      });
    }

    if (arrowRight) {
      arrowRight.addEventListener('click', function () {
        swiper.slideNext();
      });
    }
  }
};
