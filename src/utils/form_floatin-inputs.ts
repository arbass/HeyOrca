/* eslint-disable no-console */

export const floatingInput = () => {
  const floatingInput_el = document.querySelector('form');
  if (floatingInput_el) {
    const allFloatingElements = document.querySelectorAll('.floating-label');
    allFloatingElements.forEach((floatLabel) => {
      function floatMagic() {
        currentInput.addEventListener('focus', function () {
          floatLabel.classList.add('is-active');
        });
        currentInput.addEventListener('blur', function () {
          if (currentInput.value == '') {
            floatLabel.classList.remove('is-active');
          }
        });
      }
      let currentInput = floatLabel.previousElementSibling;
      if (currentInput) {
        floatMagic();
      } else {
        currentInput = floatLabel.nextElementSibling;
        floatMagic();
      }
    });
  }
};
