/* eslint-disable no-console */

export const filterFirstButtonClick = () => {
  const filterFirstButtonClick_element = document.querySelector('.form-filter');
  if (filterFirstButtonClick_element) {
    const isBlogPage = !!document.getElementById('blog-page');
    const categoryParam = new URLSearchParams(window.location.search).get('category');
    if (isBlogPage && categoryParam) return;

    setTimeout(function () {
      const firstFilterButton = filterFirstButtonClick_element.querySelector<HTMLElement>(
        '.time-accordion_nav .button'
      );
      firstFilterButton?.click();
    }, 2000);
  }
};
