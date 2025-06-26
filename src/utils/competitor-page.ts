export const competitorPage = () => {
  if (document.getElementById('competitor-page')) {
    const priceCollection = document.getElementById('price-collection');
    const selector = document.getElementById('competitor-selector') as HTMLSelectElement;
    const allOptions = document.querySelectorAll(
      '[competitor-select-option]'
    ) as NodeListOf<HTMLElement>;

    function onSelectChange(selectedValue: string) {
      allOptions.forEach((el) => {
        const competitor = el.getAttribute('competitor-select-option');
        el.style.display = competitor === selectedValue ? 'block' : 'none';
      });
    }

    if (selector) {
      onSelectChange(selector.value);

      selector.value = 'cloud-campaign';
      selector.dispatchEvent(new Event('input', { bubbles: true }));
      selector.dispatchEvent(new Event('change', { bubbles: true }));

      if (priceCollection) {
        priceCollection.classList.remove('hide');
      } else {
        console.error('Competitor price collection not found!');
      }

      selector.addEventListener('change', function () {
        onSelectChange(this.value);
      });
    } else {
      console.error('Competitor selector not found!');
    }
  }
};
