/* eslint-disable no-console */

export const categoriesSlider = () => {
  const categoriesSlider_el = document.querySelector('.form-filter');
  if (categoriesSlider_el) {
    const container = document.querySelector('.time-accordion_nav.is-webinars.is-blog');
    const arrowRight = document.querySelector('.cat-arrow-right');
    const arrowLeft = document.querySelector('.cat-arrow-left');
    const gradientLeft = document.querySelector('.category-gradient.is-left');
    const gradientRight = document.querySelector('.category-gradient.is-right');
    let isDragging = false;
    let startX;
    let scrollLeft;
    let isScrolledRight = false;

    container.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
      container.style.scrollBehavior = 'auto';
    });

    container.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;

      if (walk > 0) {
        isScrolledRight = true;
      }
    });

    container.addEventListener('mouseup', () => {
      isDragging = false;
      container.style.scrollBehavior = 'smooth';
      updateArrowVisibility();
    });

    container.addEventListener('mouseleave', () => {
      isDragging = false;
      container.style.scrollBehavior = 'smooth';
      updateArrowVisibility();
    });

    container.addEventListener('scroll', () => {
      updateArrowVisibility();
    });

    function updateArrowVisibility() {
      if (container.scrollLeft === 0 && !isScrolledRight) {
        arrowLeft.classList.add('hide');
        gradientLeft.classList.add('hide');
        arrowRight.classList.remove('hide');
        gradientRight.classList.remove('hide');
      } else if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        arrowLeft.classList.remove('hide');
        gradientLeft.classList.remove('hide');
        arrowRight.classList.add('hide');
        gradientRight.classList.add('hide');
      } else {
        arrowLeft.classList.remove('hide');
        arrowRight.classList.remove('hide');
      }
    }

    document.querySelector('.cat-arrow-right').addEventListener('click', function () {
      const scrollAmount = 150;
      const scrollStep = 100;
      let currentScroll = container.scrollLeft;
      const targetScroll = currentScroll + scrollAmount;

      const scrollInterval = setInterval(function () {
        if (currentScroll < targetScroll) {
          currentScroll += scrollStep;
          if (currentScroll > targetScroll) {
            currentScroll = targetScroll;
          }
          container.scrollLeft = currentScroll;
        } else {
          clearInterval(scrollInterval);
        }
      }, 10);
    });

    document.querySelector('.cat-arrow-left').addEventListener('click', function () {
      const scrollAmount = 150;
      const scrollStep = 100;
      let currentScroll = container.scrollLeft;
      const targetScroll = currentScroll - scrollAmount;

      const scrollInterval = setInterval(function () {
        if (currentScroll > targetScroll) {
          currentScroll -= scrollStep;
          if (currentScroll < targetScroll) {
            currentScroll = targetScroll;
          }
          container.scrollLeft = currentScroll;
        } else {
          clearInterval(scrollInterval);
        }
      }, 10);
    });
  }
};
