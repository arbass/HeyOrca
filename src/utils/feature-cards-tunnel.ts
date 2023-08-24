/* eslint-disable no-console */

export const featureCardsTunnel = () => {
  const featureCardsTunnel_el = document.querySelector('.feature-cards-tunnel');
  if (featureCardsTunnel_el) {
    const allInnerElements = featureCardsTunnel_el.querySelectorAll('.section_2col-feature-v-2');

    const elementsArray = Array.from(allInnerElements);

    elementsArray.sort((a, b) => {
      const orderA = parseInt(a.getAttribute('order'));
      const orderB = parseInt(b.getAttribute('order'));
      return orderA - orderB;
    });

    elementsArray.forEach((element) => {
      featureCardsTunnel_el.appendChild(element);
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
