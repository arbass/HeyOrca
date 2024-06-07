import 'swiper/css';

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export const earlyAgenciesPage = () => {
  const isEarlyAgenciesPage = document.querySelector('[page-name=early-agencies]');

  if (isEarlyAgenciesPage) {
    const earlyAgenciesPricingTable = document.getElementById('ea-pricing-table-swiper');

    if (earlyAgenciesPricingTable) {
      // Pricing Table Swiper
      const swiper = new Swiper('#ea-pricing-table-swiper', {
        modules: [Navigation],
        spaceBetween: 0,
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 4,
          },
        },
        navigation: {
          prevEl: '#ea-pricing-table-prev',
          nextEl: '#ea-pricing-table-next',
        },
      });

      // Pricing Table Amounts
      const originalBasic = document.getElementById('original-basic');
      const originalStandard = document.getElementById('original-standard');
      const originalPro = document.getElementById('original-pro');

      const year1Basic = document.getElementById('year1-basic');
      const year1Standard = document.getElementById('year1-standard');
      const year1Pro = document.getElementById('year1-pro');

      const year2Basic = document.getElementById('year2-basic');
      const year2Standard = document.getElementById('year2-standard');
      const year2Pro = document.getElementById('year2-pro');

      const year3Basic = document.getElementById('year3-basic');
      const year3Standard = document.getElementById('year3-standard');
      const year3Pro = document.getElementById('year3-pro');

      const pricingToggle = document.getElementById('pricing-toggle') as HTMLInputElement;
      const pricingToggleLabelMonthly = document.getElementById('pricing-toggle-label-monthly');
      const pricingToggleLabelAnnually = document.getElementById('pricing-toggle-label-annually');

      const handleChangePricing = () => {
        const pricingPeriod = pricingToggle?.checked ? 'monthly' : 'annually';

        // Handle toggle of label color
        if (pricingToggle?.checked) {
          !pricingToggleLabelAnnually.classList.contains('grey-text') &&
            pricingToggleLabelAnnually.classList.add('grey-text');

          pricingToggleLabelMonthly.classList.contains('grey-text') &&
            pricingToggleLabelMonthly.classList.remove('grey-text');
        } else {
          pricingToggleLabelAnnually.classList.contains('grey-text') &&
            pricingToggleLabelAnnually.classList.remove('grey-text');

          !pricingToggleLabelMonthly.classList.contains('grey-text') &&
            pricingToggleLabelMonthly.classList.add('grey-text');
        }

        originalBasic.innerText = originalBasic.getAttribute(`${pricingPeriod}`);
        originalStandard.innerText = originalStandard.getAttribute(`${pricingPeriod}`);
        originalPro.innerText = originalPro.getAttribute(`${pricingPeriod}`);

        year1Basic.innerText = year1Basic.getAttribute(`${pricingPeriod}`);
        year1Standard.innerText = year1Standard.getAttribute(`${pricingPeriod}`);
        year1Pro.innerText = year1Pro.getAttribute(`${pricingPeriod}`);

        year2Basic.innerText = year2Basic.getAttribute(`${pricingPeriod}`);
        year2Standard.innerText = year2Standard.getAttribute(`${pricingPeriod}`);
        year2Pro.innerText = year2Pro.getAttribute(`${pricingPeriod}`);

        year3Basic.innerText = year3Basic.getAttribute(`${pricingPeriod}`);
        year3Standard.innerText = year3Standard.getAttribute(`${pricingPeriod}`);
        year3Pro.innerText = year3Pro.getAttribute(`${pricingPeriod}`);
      };

      pricingToggle?.addEventListener('change', handleChangePricing);
    }
  }
};
