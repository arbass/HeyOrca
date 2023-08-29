/* eslint-disable no-console */

export const footerForm = () => {
  const footerForm_el = document.querySelector('.footer_form-block');
  if (footerForm_el) {
    const footerPageInfo = document.getElementById('footer-page-info');
    footerPageInfo.value = window.location.href;

    const currentFakeButton = footerForm_el.querySelector('.button.is-form-footer');
    currentFakeButton.addEventListener('click', function () {
      const currentRealButton = footerForm_el.querySelector('.footer_real-form-button');
      currentRealButton.click();
    });
  }
};
