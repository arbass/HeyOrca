export const competitorPage = () => {
  if (document.getElementById('competitor-page')) {
    const competitorPrice = document.getElementById('competitor-price');
    const selector = document.getElementById('competitor-selector') as HTMLSelectElement;
    const allOptions = document.querySelectorAll(
      '[competitor-select-option]'
    ) as NodeListOf<HTMLElement>;

    function onSelectChange(selectedValue: string) {
      allOptions.forEach((el) => {
        const competitor = el.getAttribute('competitor-select-option');
        el.style.display = competitor === selectedValue ? 'block' : 'none';
      });

      if (competitorPrice) {
        const price = competitorPrice.getAttribute(selectedValue);
        competitorPrice.textContent = price;
      } else {
        console.error('Competitor price not found!');
      }
    }

    if (selector) {
      onSelectChange(selector.value);
      selector.addEventListener('change', function () {
        onSelectChange(this.value);
      });
    } else {
      console.error('Competitor selector not found!');
    }
  }
};
