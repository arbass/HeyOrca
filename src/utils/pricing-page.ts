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
              placeholder.textContent = placeholder.getAttribute(
                'range-price-value-m-' + el_slider.getAttribute('aria-valuenow')
              );
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
