/* eslint-disable no-console */

export const pricingPage = () => {
  const pricingPage_el = document.querySelector('.range-slider-sticky-parent');
  if (pricingPage_el) {
    fsAttributes.rangeslider.loading
      .then((result) => {
        if (fsAttributes.rangeslider.loading instanceof Promise) {
          const el_slider = pricingPage_el.querySelector('.fs-rangeslider_handle');
          const el_sliderInput = pricingPage_el.querySelector('[fs-cmsfilter-field="price"]');

          function changePrice() {
            const allPlaceholders = document.querySelectorAll('[range-price-value-m-1]');
            allPlaceholders.forEach((placeholder) => {
              const currentCount = placeholder.getAttribute(
                'range-price-value-m-' + el_slider.getAttribute('aria-valuenow')
              );
              const currentParent = placeholder.closest('[price-card-header]');
              const currentCta = currentParent.querySelector('[price-card-header-cta]');
              const currentPrice = currentParent.querySelector('[price-card-header-price]');

              placeholder.textContent = currentCount;

              if (el_slider.getAttribute('aria-valuenow') == '10') {
                currentCta.classList.remove('hide');
                currentPrice.classList.add('hide');
              } else {
                currentCta.classList.add('hide');
                currentPrice.classList.remove('hide');
              }
            });
          }

          el_sliderInput.addEventListener('input', function () {
            changePrice();
          });
        }
        changePrice();
      })
      .catch((error) => {
        console.error('Error when executing a promis for range slider:', error);
      });
  }
};
