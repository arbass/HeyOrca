/* eslint-disable no-console */

export const articlesNotNull = () => {
  const articlesNotNull_el = document.querySelector('.section_blog-grid');
  if (articlesNotNull_el) {
    const allGrigItems = articlesNotNull_el.querySelectorAll('.cl-i_blog-grid_wrapper');
    if (allGrigItems.length) {
    } else {
      articlesNotNull_el.classList.add('hide');
    }
  }
};
