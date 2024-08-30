import 'swiper/css';
import 'swiper/css/pagination';

import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

export const mobilePricingSwiper = () => {
  const isPricingPage = Boolean(document.querySelector('[page-name=price-2024]'));

  if (isPricingPage) {
    const mobilePricingSwiper = document.querySelector(
      '.swiper.mobile-pricing-swiper'
    ) as HTMLElement;

    if (mobilePricingSwiper) {
      new Swiper(mobilePricingSwiper, {
        modules: [Pagination],
        direction: 'horizontal',
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
        },
      });

      const toggleAccordionWithClass = (className: string) => {
        const headers = document.querySelectorAll(
          `.accordion-header.${className}`
        ) as NodeListOf<HTMLElement>;

        let largestHeight = 0;

        headers.forEach((header) => {
          const accordionContent = header.nextElementSibling as HTMLElement;
          const contentHeight = accordionContent?.scrollHeight;
          if (contentHeight > largestHeight) largestHeight = contentHeight;
        });

        headers.forEach((header) => {
          const accordionContent = header.nextElementSibling as HTMLElement;
          const accordionArrow = header.querySelector('.accordion-arrow') as HTMLElement;

          if (accordionContent && accordionContent.classList.contains('open')) {
            accordionContent.style.height = '0px';
            accordionContent.classList.remove('open');
            if (accordionArrow) accordionArrow.style.transform = 'rotate(0deg)';
          } else {
            accordionContent.style.height = `${largestHeight}px`;
            accordionContent.classList.add('open');
            if (accordionArrow) accordionArrow.style.transform = 'rotate(-180deg)';
          }
        });
      };

      const accordionHeaders = document.querySelectorAll(
        '.accordion-header'
      ) as NodeListOf<HTMLElement>;

      accordionHeaders.forEach((header) => {
        header.addEventListener('click', () => {
          if (header.classList.contains('features')) {
            toggleAccordionWithClass('features');
          }
          if (header.classList.contains('publishing')) {
            toggleAccordionWithClass('publishing');
          }
          if (header.classList.contains('reporting')) {
            toggleAccordionWithClass('reporting');
          }
          if (header.classList.contains('community-management')) {
            toggleAccordionWithClass('community-management');
          }
        });
      });

      window.addEventListener('resize', () => {
        const accordionContent = document.querySelectorAll(
          '.accordion-content.open'
        ) as NodeListOf<HTMLElement>;

        accordionContent.forEach((content) => {
          content.style.height = 'auto';
          const contentHeight = content.scrollHeight;
          content.style.height = `${contentHeight}px`;
        });
      });
    }
  }
};
