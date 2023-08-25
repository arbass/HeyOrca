/* eslint-disable no-console */

export const sectionColFeature_2 = () => {
  const sectionColFeature_2_element = document.querySelector('.cl-i_section_2col-feature');
  if (sectionColFeature_2_element) {
    const allInnerElements = sectionColFeature_2_element.querySelectorAll('.section_2col-feature');

    const elementsArray = Array.from(allInnerElements);

    elementsArray.sort((a, b) => {
      const orderA = parseInt(a.getAttribute('order'));
      const orderB = parseInt(b.getAttribute('order'));
      return orderA - orderB;
    });

    elementsArray.forEach((element) => {
      sectionColFeature_2_element.appendChild(element);
    });

    elementsArray.forEach((collectionItem) => {
      const collectionItemView_card_1 = collectionItem.querySelector(
        '.container-large:first-child'
      );
      const collectionItemView_card_2 = collectionItem.querySelector('.container-large:last-child');

      if (getComputedStyle(collectionItem).display === 'block') {
        collectionItemView_card_2.classList.add('hide');
      } else {
        collectionItemView_card_1.classList.add('hide');
      }
    });
  }
};
