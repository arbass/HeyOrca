/* eslint-disable no-console */

export const masonryGrid = () => {
  const masonryGrid_el = document.querySelector('.section_testimonials-grid');
  if (masonryGrid_el) {
    const allColums = masonryGrid_el.querySelectorAll('.testimonials-grid_column');
    const allElements = masonryGrid_el.querySelectorAll('.testimonials-grid_item');
    let pointer = 0;
    allElements.forEach((el) => {
      allColums[pointer].appendChild(el);
      if (pointer !== 2) {
        pointer++;
      } else {
        pointer = 0;
      }
    });
  }
};
