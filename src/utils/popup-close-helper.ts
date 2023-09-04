/* eslint-disable no-console */

export const popupCloseHelper = () => {
  const popupCloseHelper_el = document.querySelectorAll('[popup-bg-close-trigger]');
  if (popupCloseHelper_el.length) {
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        const allCloseButtons = document.querySelectorAll('[popup-bg-close-button]');

        allCloseButtons.forEach((el) => {
          el.click();
        });
      }
    });

    popupCloseHelper_el.forEach((trigger) => {
      trigger.addEventListener('click', function () {
        trigger.nextElementSibling.querySelector('[popup-bg-close-button]').click();
      });
    });
  }
};
