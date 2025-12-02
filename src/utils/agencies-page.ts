export const agenciesPage = () => {
  const isAgenciesPage = Boolean(document.querySelector('[page-name=agencies]'));

  if (isAgenciesPage) {
    const basicPriceEl = document.getElementById('basic-price');
    const proPriceEl = document.getElementById('pro-price');

    const pricingToggle = document.getElementById('pricing-toggle') as HTMLInputElement;
    const pricingToggleLabelMonthly = document.getElementById('pricing-toggle-label-monthly');
    const pricingToggleLabelAnnually = document.getElementById('pricing-toggle-label-annually');

    const handleChangePricing = () => {
      const pricingPeriod = pricingToggle?.checked ? 'annually' : 'monthly';

      // Handle toggle label color
      if (pricingToggle?.checked) {
        pricingToggleLabelAnnually?.classList.contains('grey-text') &&
          pricingToggleLabelAnnually?.classList.remove('grey-text');

        !pricingToggleLabelMonthly?.classList.contains('grey-text') &&
          pricingToggleLabelMonthly?.classList.add('grey-text');
      } else {
        !pricingToggleLabelAnnually?.classList.contains('grey-text') &&
          pricingToggleLabelAnnually?.classList.add('grey-text');

        pricingToggleLabelMonthly?.classList.contains('grey-text') &&
          pricingToggleLabelMonthly?.classList.remove('grey-text');
      }

      if (basicPriceEl) {
        basicPriceEl.innerText = basicPriceEl.getAttribute(`agencies-${pricingPeriod}`) ?? '';
      }
      if (proPriceEl) {
        proPriceEl.innerText = proPriceEl.getAttribute(`agencies-${pricingPeriod}`) ?? '';
      }
    };

    pricingToggle?.addEventListener('change', handleChangePricing);
  }
};
