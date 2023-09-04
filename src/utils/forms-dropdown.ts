/* eslint-disable no-console */

export const formDropdown = () => {
  const formDropdown_el = document.querySelector('.input-wrapper.is-dropdown');
  if (formDropdown_el) {
    const allDropdownItems = document.querySelectorAll('.form-dropdown_item');
    allDropdownItems.forEach((el) => {
      el.addEventListener('mousedown', function () {
        document.querySelector('.form-ind-type-name').textContent = el
          .querySelector('input')
          .getAttribute('value');
        console.log(el.querySelector('input'));
        document.querySelector('.form-ind-type-name').classList.add('text-color-gray-900');
      });
    });
  }
};
