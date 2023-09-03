/* eslint-disable no-console */
// import Swiper JS
// import Swiper styles
import 'swiper/css';

import Swiper from 'swiper';

export const pricingPage = () => {
  const pricingPage_el = document.querySelector('.range-slider-sticky-parent');
  if (pricingPage_el) {
    fsAttributes.rangeslider.loading
      .then((result) => {
        if (fsAttributes.rangeslider.loading instanceof Promise) {
          //-––
          //––––––––
          //–––––––– table fill
          const allPricingTableCategory = document.querySelectorAll('[pricing-table-category]');
          const allPricingTableCategoryName = document.querySelectorAll(
            '[pricing-table-category-name]'
          );
          const allPrcingGeaderClonable = document.querySelectorAll('[prcing-header-clonable]');
          allPricingTableCategory.forEach((category, category_id) => {
            category.setAttribute('pricing-table-category', category.firstElementChild.textContent);
          });
          allPricingTableCategoryName.forEach((categoryName, categoryName_id) => {
            categoryName.setAttribute(
              'pricing-table-category-name',
              categoryName.firstElementChild.textContent
            );
          });
          allPrcingGeaderClonable.forEach((plan, plan_id) => {
            console.log(plan_id + 1);

            const columnWaiter = document.querySelector('.price-swiper-table-wrapper');
            const newColumn = document.createElement('div');
            newColumn.classList.add('price-swiper-table-column');
            columnWaiter.append(newColumn);
            //---
            const currentCategoryHeaders_array = [];
            let categoryPointer = allPricingTableCategory[0];
            currentCategoryHeaders_array.push(categoryPointer);
            while (categoryPointer.nextSibling) {
              categoryPointer = categoryPointer.nextSibling;
              if (categoryPointer.hasAttribute('pricing-table-category')) {
                currentCategoryHeaders_array.push(categoryPointer);
              }
            }

            console.log(currentCategoryHeaders_array);
          });
          //-–– fill
          //–––––––– swiper fill
          const swiperPriceAppendWaiter = document.querySelector('.swiper-wrapper.is-pricing-page');
          allPrcingGeaderClonable.forEach((clonableElement) => {
            const newSlide_pricing = document.createElement('div');
            newSlide_pricing.classList.add('swiper-slide');
            newSlide_pricing.classList.add('is-pricing-page');
            const itsClonable = clonableElement.cloneNode(true);
            newSlide_pricing.appendChild(itsClonable);
            swiperPriceAppendWaiter.appendChild(newSlide_pricing);
          });

          //-––
          const el_slider = pricingPage_el.querySelector('.fs-rangeslider_handle');
          const el_sliderInput = pricingPage_el.querySelector('[fs-cmsfilter-field="price"]');
          let currentPeriod = 'm';
          const periodButtons = document.querySelectorAll('.time-accordion_nav.is-pricing .button');
          periodButtons.forEach((button) => {
            button.addEventListener('mousedown', function () {
              periodButtons.forEach((el) => {
                el.classList.remove('_w--current');
              });
              button.classList.add('_w--current');
              currentPeriod = button.querySelector('input').getAttribute('value');
              changePrice();
            });
          });

          function changePrice() {
            const allPlaceholders = document.querySelectorAll(
              '[range-price-value-' +
                currentPeriod +
                '-' +
                el_slider.getAttribute('aria-valuenow') +
                ']'
            );
            allPlaceholders.forEach((placeholder) => {
              const currentCount = placeholder.getAttribute(
                'range-price-value-' + currentPeriod + '-' + el_slider.getAttribute('aria-valuenow')
              );

              const currentParent = placeholder.closest('[price-card-header]');
              if (currentParent) {
                const currentCta = currentParent.querySelector('[price-card-header-cta]');
                const currentPrice = currentParent.querySelector('[price-card-header-price]');

                if (el_slider.getAttribute('aria-valuenow') == '10') {
                  currentCta.classList.remove('hide');
                  currentPrice.classList.add('hide');
                } else {
                  currentCta.classList.add('hide');
                  currentPrice.classList.remove('hide');
                }
              }

              const starCount = (currentCount.match(/\*/g) || []).length;
              if (starCount === 1) {
                placeholder.innerHTML = currentCount.replace('*', '<s>');
              } else if (starCount === 2) {
                placeholder.innerHTML = currentCount.replace('*', '<s>').replace('*', '</s>');
              } else {
                placeholder.textContent = currentCount;
              }
            });
          }

          el_sliderInput.addEventListener('input', function () {
            changePrice();
          });

          // –––––––– swiper go
          const swiper_soc = new Swiper('.swiper.is-pricing-page', {
            slidesPerView: 1.2,
            centeredSlides: true,
            spaceBetween: 0,
            initialSlide: 2,
          });
          // ––––––––
        }
        changePrice();
      })
      .catch((error) => {
        // console.error('Ошибка', error);
      });
  }
};
