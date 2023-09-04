/* eslint-disable no-console */

export const timeSection_featurePage = () => {
  const timeSection_featurePage_el = document.querySelector(
    '[time-accordion-component-feature-page] .pc'
  );
  if (timeSection_featurePage_el) {
    let startShowAcordion_interval;
    const startShowAcordion_interval_duration = 3500;
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

    const allRowsNew = timeSection_featurePage_el.querySelectorAll(
      '.time-accordion_widget-content-row'
    );
    const rowStarter = allRowsNew[0];
    rowStarter.classList.add('is-active');
    let rowPointer = rowStarter;
    function clearAllAnimation() {
      const currentLoader_all = timeSection_featurePage_el.querySelectorAll(
        '.time-accordion_widget-content-row-progress'
      );
      const currentTextContent_all = timeSection_featurePage_el.querySelectorAll(
        '.is-time-accordion_widget-content-row-col'
      );
      currentLoader_all.forEach((el) => {
        el.classList.remove('animated');
      });
      currentTextContent_all.forEach((el) => {
        el.classList.remove('animated');
      });
    }
    function startShowAcordion() {
      clearAllAnimation();
      const currentLoader = rowPointer.querySelector('.time-accordion_widget-content-row-progress');
      const currentTextContent = rowPointer.querySelector(
        '.is-time-accordion_widget-content-row-col'
      );
      currentLoader.classList.add('animated');
      currentTextContent.classList.add('animated');
      if (rowPointer.nextElementSibling) {
        rowPointer = rowPointer.nextElementSibling;
      } else {
        rowPointer = rowStarter;
      }
    }

    startShowAcordion_interval = setInterval(
      startShowAcordion,
      startShowAcordion_interval_duration
    );
    allRows.forEach((row) => {
      row.addEventListener('click', function () {
        rowPointer = row;
        clearAllAnimation();
        startShowAcordion();
        clearInterval(startShowAcordion_interval);

        startShowAcordion_interval = setInterval(
          startShowAcordion,
          startShowAcordion_interval_duration
        );
      });
    });
  }
};
