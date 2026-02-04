import 'swiper/css';
import 'swiper/css/pagination';

import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

export const mobilePricingSwiper = () => {
  const isPricingPage = Boolean(document.querySelector('[page-name=price-2024]'));
  const isPricingPage2026 = Boolean(document.querySelector('[page-name=pricing-2026]'));

  if (isPricingPage || isPricingPage2026) {
    const mobilePricingSwiper = document.querySelector(
      '.swiper.mobile-pricing-swiper'
    ) as HTMLElement;

    if (mobilePricingSwiper) {
      const swiper = new Swiper(mobilePricingSwiper, {
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
            slidesPerView: 4,
            spaceBetween: 16,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
        },
      });

      const updateSlides = () => {
        swiper.updateSlides();
        swiper.slideTo(0);
      };

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

      const pricingRadioGroup = document.getElementsByName('pricing-category');

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
          if (header.classList.contains('social-listening')) {
            toggleAccordionWithClass('social-listening');
          }
          if (header.classList.contains('social-inbox')) {
            toggleAccordionWithClass('social-inbox');
          }
        });
      });

      window.addEventListener('resize', () => {
        ['features', 'publishing', 'reporting', 'social-listening', 'social-inbox'].forEach(
          (className) => {
            const headers = document.querySelectorAll(
              `.accordion-header.${className}`
            ) as NodeListOf<HTMLElement>;

            let largestHeight = 0;

            headers.forEach((header) => {
              const accordionContent = header.nextElementSibling as HTMLElement;

              if (accordionContent.classList.contains('open')) {
                accordionContent.style.height = 'auto';
                const contentHeight = accordionContent.scrollHeight;
                if (contentHeight > largestHeight) largestHeight = contentHeight;
              }
            });

            headers.forEach((header) => {
              const accordionContent = header.nextElementSibling as HTMLElement;
              accordionContent.style.height = `${largestHeight}px`;
            });
          }
        );
      });

      pricingRadioGroup[0]?.addEventListener('change', updateSlides);
      pricingRadioGroup[1]?.addEventListener('change', updateSlides);
    }
  }
};
