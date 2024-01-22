/* eslint-disable no-console */

export const footerForm = () => {
  const footerForm_el = document.querySelector<HTMLElement>('.footer_form-block');
  if (footerForm_el) {
    const footerPageInfo = footerForm_el.querySelector<HTMLInputElement>('#footer-page-info');
    if (footerPageInfo !== null) footerPageInfo.value = window.location.href;

    const currentFakeButton =
      footerForm_el.querySelector<HTMLAnchorElement>('.button.is-form-footer');
    currentFakeButton?.addEventListener('click', function () {
      const currentRealButton = footerForm_el.querySelector<HTMLInputElement>(
        '.footer_real-form-button'
      );
      currentRealButton?.click();
    });
  }
};
