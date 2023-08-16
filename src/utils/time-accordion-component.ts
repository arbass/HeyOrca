/* eslint-disable no-console */

export const timeAccordionComponent = () => {
  const tabComponent = document.querySelector('[time-accordion-component]');
  if (tabComponent) {
    fsAttributes.cmsnest.loading
      .then(() => {
        const allRows = document.querySelectorAll('.cl-i_time-accordion_widget-content-row');
        allRows.forEach((row) => {
          row.addEventListener('click', () => {
            const currentProgressBar = row.querySelector(
              '.time-accordion_widget-content-row-progress'
            );
            const currentArrowIcon = row.querySelector('.arrow-icon');
            const currentContentP = row.querySelector('.is-time-accordion_widget-content-row-col');
            console.log(currentContentP);

            const allProgressBar = document.querySelectorAll(
              '.time-accordion_widget-content-row-progress'
            );
            const allArrowIcon = document.querySelectorAll('.arrow-icon');
            const allContentP = document.querySelectorAll(
              '.is-time-accordion_widget-content-row-col'
            );
            allProgressBar.forEach((progressBar) => {
              progressBar.classList.remove('animated');
            });
            allArrowIcon.forEach((arrowIcon) => {
              arrowIcon.classList.remove('animated');
            });
            allContentP.forEach((contentP) => {
              contentP.classList.remove('animated');
            });
            currentProgressBar.classList.add('animated');
            currentArrowIcon.classList.add('animated');
            currentContentP.classList.add('animated');
          });
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
};
