/* eslint-disable no-console */

export const webinarForm = () => {
  const webinarForm_el = document.querySelector('.section_webinars');
  if (webinarForm_el) {
    const allWebinarInputs = webinarForm_el.querySelectorAll('[current-webinar-value]');
    allWebinarInputs.forEach((input) => {
      input.value = input.getAttribute('current-webinar-value');
    });
  }
};
