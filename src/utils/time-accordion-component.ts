/* eslint-disable no-console */

export const timeAccordionComponent = () => {
  const tabComponent = document.querySelector('[time-accordion-component]');
  if (tabComponent) {
    fsAttributes.cmsnest.loading
      .then(() => {
        let rowInterval;
        const allRows = document.querySelectorAll('.cl-i_time-accordion_widget-content-row');
        allRows[0].classList.add('active');
        allRows.forEach((row) => {
          row.addEventListener('click', () => {
            clearInterval(rowInterval);
            allRows.forEach((row) => {
              row.classList.remove('active');
            });
            row.classList.add('active');
            rowsOrderFromActive();
          });
        });

        function animateRow(el) {
          const currentProgressBar = el.querySelector(
            '.time-accordion_widget-content-row-progress'
          );
          const currentArrowIcon = el.querySelector('.arrow-icon');
          const currentContentP = el.querySelector('.is-time-accordion_widget-content-row-col');

          const allProgressBar = document.querySelectorAll(
            '.time-accordion_widget-content-row-progress'
          );
          const allArrowIcon = document.querySelectorAll('.arrow-icon');
          const allContentP = document.querySelectorAll(
            '.is-time-accordion_widget-content-row-col'
          );
          allProgressBar.forEach((progressBar) => {
            progressBar.classList.remove('animated');
          });
          allArrowIcon.forEach((arrowIcon) => {
            arrowIcon.classList.remove('animated');
          });
          allContentP.forEach((contentP) => {
            contentP.classList.remove('animated');
          });
          currentProgressBar.classList.add('animated');
          currentArrowIcon.classList.add('animated');
          currentContentP.classList.add('animated');
        }

        function rowsOrderFromActive() {
          clearInterval(rowInterval);
          let activeRow = document.querySelector('.cl-i_time-accordion_widget-content-row.active');
          animateRow(activeRow);
          rowInterval = setInterval(() => {
            if (activeRow.nextElementSibling) {
              activeRow.classList.remove('active');
              activeRow = activeRow.nextElementSibling;
              activeRow.classList.add('active');
              animateRow(activeRow);
            } else {
              const firstRow = activeRow.parentNode.firstChild;
              activeRow.classList.remove('active');
              activeRow = firstRow;
              activeRow.classList.add('active');
              rowsOrderFromActive();
            }
          }, 3500);
        }

        function findActiveTab() {
          clearInterval(rowInterval);
          allRows.forEach((row) => {
            row.classList.remove('active');
          });
          const activeTab = document.querySelector('.time-accordion_inner .w--tab-active');
          const tabsRows = activeTab.querySelectorAll('.cl-i_time-accordion_widget-content-row');
          tabsRows[0].classList.add('active');
          rowsOrderFromActive();
        }

        let lastExecutionTime = 0;

        function throttle(func, delay) {
          return function (...args) {
            const currentTime = Date.now();
            if (currentTime - lastExecutionTime >= delay) {
              func.apply(this, args);
              lastExecutionTime = currentTime;
            }
          };
        }

        function handleClassChanges(mutationsList, observer) {
          for (const mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
              throttledFindActiveTab();
            }
          }
        }

        const tabPanes = document.querySelectorAll('.w-tab-pane');
        const observer = new MutationObserver(handleClassChanges);
        const config = { attributes: true, attributeFilter: ['class'] };

        tabPanes.forEach((tabPane) => {
          observer.observe(tabPane, config);
        });

        const throttledFindActiveTab = throttle(findActiveTab, 200);
        setTimeout(() => {
          findActiveTab();
        }, 500);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
};
