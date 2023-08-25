/* eslint-disable no-console */

export const filterFirstButtonClick = () => {
  const filterFirstButtonClick_element = document.querySelector('.form-filter');
  if (filterFirstButtonClick_element) {
    setTimeout(function () {
      const firstFilterButton = filterFirstButtonClick_element.querySelector(
        '.time-accordion_nav .button'
      );
      firstFilterButton.click();
    }, 2000);
  }
};
