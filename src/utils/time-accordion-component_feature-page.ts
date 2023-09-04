/* eslint-disable no-console */

export const timeSection_featurePage = () => {
  const timeSection_featurePage_el = document.querySelector(
    '[time-accordion-component-feature-page] .pc'
  );
  if (timeSection_featurePage_el) {
    const allRows = timeSection_featurePage_el.querySelectorAll(
      '.time-accordion_widget-content-row'
    );
    const rowsWrapper = timeSection_featurePage_el.querySelector(
      '.time-accordion_widget-content-rows-wrapper'
    );

    const rowsArray = Array.from(allRows);

    rowsArray.sort((a, b) => {
      const orderA = parseInt(a.getAttribute('order'));
      const orderB = parseInt(b.getAttribute('order'));
      return orderA - orderB;
    });

    while (rowsWrapper.firstChild) {
      rowsWrapper.removeChild(rowsWrapper.firstChild);
    }

    rowsArray.forEach((row) => {
      rowsWrapper.appendChild(row);
    });

    for (let i = 0; i < 5; i++) {
      // Ваш код выполняется здесь
    }
  }
};
