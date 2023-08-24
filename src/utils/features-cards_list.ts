/* eslint-disable no-console */

export const featuresCardsList = () => {
  const featuresCardsList_element = document.querySelector('.features-cards_list');
  if (featuresCardsList_element) {
    const currentCards = featuresCardsList_element.querySelectorAll('.card_item');
    currentCards.forEach((cardItem) => {
      const currentOrder = cardItem.getAttribute('order');
      cardItem.style.order = currentOrder;
    });
  }
};
