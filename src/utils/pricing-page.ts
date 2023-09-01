/* eslint-disable no-console */

export const pricingPage = () => {
  const pricingPage_el = document.querySelector('.range-slider-sticky-parent');
  if (pricingPage_el) {
    fsAttributes.rangeslider.loading
      .then((result) => {
        if (fsAttributes.rangeslider.loading instanceof Promise) {
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
              const currentCta = currentParent.querySelector('[price-card-header-cta]');
              const currentPrice = currentParent.querySelector('[price-card-header-price]');

              //--
              // Если есть "*", то найти первую и заменить <s>, а вторую заменить </s>
              const starCount = (currentCount.match(/\*/g) || []).length;
              if (starCount === 1) {
                placeholder.innerHTML = currentCount.replace('*', '<s>');
              } else if (starCount === 2) {
                placeholder.innerHTML = currentCount.replace('*', '<s>').replace('*', '</s>');
              } else {
                placeholder.textContent = currentCount; // Если звездочек нет или их больше двух, просто устанавливаем текст
              }

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
        console.error('Ошибка при выполнении обещания для ползунка:', error);
      });
  }
};
