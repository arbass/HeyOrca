export const agenciesPage = () => {
  const isAgenciesPage = Boolean(document.querySelector('[page-name=agencies]'));

  if (isAgenciesPage) {
    const basicPrice = document.getElementById('basic-price');
    const standardPrice = document.getElementById('standard-price');
    const proPrice = document.getElementById('pro-price');

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

      basicPrice.innerText = basicPrice.getAttribute(`agencies-${pricingPeriod}`);
      standardPrice.innerText = standardPrice.getAttribute(`agencies-${pricingPeriod}`);
      proPrice.innerText = proPrice.getAttribute(`agencies-${pricingPeriod}`);
    };

    pricingToggle?.addEventListener('change', handleChangePricing);
  }
};
