/* eslint-disable no-console */

// This function represents a time accordion component.
export const timeAccordionComponent = () => {
  // Get the HTML element with the attribute [time-accordion-component].
  const tabComponent = document.querySelector('[time-accordion-component]');

  if (tabComponent) {
    // Load some attributes from a Content Management System.
    fsAttributes.cmsnest.loading
      .then(() => {
        setTimeout(function () {
          setTimeout(function () {
            const sectionAccordionComponent_elOp =
              document.querySelector('.section_time-accordion');
            sectionAccordionComponent_elOp.classList.remove('hide-opacity');
          }, 1500);
          //empty var of the interval
          let rowInterval;

          // Get all rows of the time accordion.
          const allRows = document.querySelectorAll(
            '.time-accordion_inner .cl-i_time-accordion_widget-content-row'
          );

          // Set the first row as active.
          allRows[0].classList.add('active');

          // Add click event listeners to each row.
          allRows.forEach((row) => {
            row.addEventListener('click', () => {
              clearInterval(rowInterval);
              // Remove active class from all rows.
              allRows.forEach((row) => {
                row.classList.remove('active');
              });
              // Add active class to the clicked row.
              row.classList.add('active');
              rowsOrderFromActive();
            });
          });

          // Function to animate a row's elements.
          function animateRow(el) {
            // Get elements within the row.
            const currentProgressBar = el.querySelector(
              '.time-accordion_widget-content-row-progress'
            );
            const currentArrowIcon = el.querySelector('.arrow-icon');
            const currentContentP = el.querySelector('.is-time-accordion_widget-content-row-col');
            const currentId = el.getAttribute('data-id');
            const currentImage = document.querySelector(
              `.visual-with-shadow_visual[data-id="${currentId}"]`
            );

            // Get similar elements from all rows.
            const allImages = document.querySelectorAll('.visual-with-shadow_visual');
            const allProgressBar = document.querySelectorAll(
              '.time-accordion_widget-content-row-progress'
            );
            const allArrowIcon = document.querySelectorAll('.arrow-icon');
            const allContentP = document.querySelectorAll(
              '.is-time-accordion_widget-content-row-col'
            );

            // Remove 'animated' class from all similar elements.
            allProgressBar.forEach((progressBar) => {
              progressBar.classList.remove('animated');
            });
            allArrowIcon.forEach((arrowIcon) => {
              arrowIcon.classList.remove('animated');
            });
            allContentP.forEach((contentP) => {
              contentP.classList.remove('animated');
            });
            allImages.forEach((image) => {
              image.classList.add('hide');
            });

            // Add 'animated' class to the current row's elements.
            currentProgressBar.classList.add('animated');
            currentArrowIcon.classList.add('animated');
            currentContentP.classList.add('animated');
            currentImage.classList.remove('hide');
          }

          // Function to handle the order of rows when active.
          function rowsOrderFromActive() {
            clearInterval(rowInterval);
            // Get the currently active row.
            let activeRow = document.querySelector(
              '.cl-i_time-accordion_widget-content-row.active'
            );
            animateRow(activeRow);
            rowInterval = setInterval(() => {
              if (activeRow.nextElementSibling) {
                // Move to the next row if available.
                activeRow.classList.remove('active');
                activeRow = activeRow.nextElementSibling;
                activeRow.classList.add('active');
                animateRow(activeRow);
              } else {
                // Start from the first row if the end is reached.
                const firstRow = activeRow.parentNode.firstChild;
                activeRow.classList.remove('active');
                activeRow = firstRow;
                activeRow.classList.add('active');
                rowsOrderFromActive();
              }
            }, 3500); // Interval duration in milliseconds.
          }

          // Function to find the active tab and set its rows as active.
          function findActiveTab() {
            clearInterval(rowInterval);
            allRows.forEach((row) => {
              row.classList.remove('active');
            });

            // Find the active tab element.
            const activeTab = document.querySelector('.time-accordion_inner .w--tab-active');

            const activeTab_ctaAppendWaiter = activeTab.querySelector('.button-append-waiter');
            const activeTab_ctaAppendSrc = activeTab.querySelector('.button-append-src');
            activeTab_ctaAppendWaiter.appendChild(activeTab_ctaAppendSrc);

            // Get rows within the active tab.
            const tabsRows = activeTab.querySelectorAll('.cl-i_time-accordion_widget-content-row');
            tabsRows[0].classList.add('active');
            rowsOrderFromActive();
          }

          const allCtaAppendSrc = document.querySelectorAll('.button-append-src a');
          allCtaAppendSrc.forEach((a) => {
            a.addEventListener('click', () => {
              a.getAttribute('href');
              window.location.href = a.getAttribute('href');
            });
          });

          let lastExecutionTime = 0;

          // Throttle function to limit execution frequency.
          function throttle(func, delay) {
            return function (...args) {
              const currentTime = Date.now();
              if (currentTime - lastExecutionTime >= delay) {
                func.apply(this, args);
                lastExecutionTime = currentTime;
              }
            };
          }

          // Function to handle class changes using a MutationObserver.
          function handleClassChanges(mutationsList, observer) {
            for (const mutation of mutationsList) {
              if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                throttledFindActiveTab();
              }
            }
          }

          // Get all tab pane elements.
          const tabPanes = document.querySelectorAll('.w-tab-pane');
          const observer = new MutationObserver(handleClassChanges);
          const config = { attributes: true, attributeFilter: ['class'] };

          // Observe class changes in tab panes.
          tabPanes.forEach((tabPane) => {
            observer.observe(tabPane, config);

            const componentParent = tabPane.closest('[time-accordion-component]');
            const componentParent_allRows = componentParent.querySelectorAll(
              '.cl-i_time-accordion_widget-content-row'
            );
            componentParent_allRows.forEach((row, id) => {
              const rowImage = row.querySelector('.visual-with-shadow_visual');
              row.setAttribute('data-id', id);
              if (rowImage) {
                rowImage.setAttribute('data-id', id);
              }

              const currentTabParent = row.closest('.w-tab-pane');

              const currentTabImagePlaceholder = currentTabParent.querySelector(
                '[rows-image-placeholder]'
              );

              if (rowImage) {
                currentTabImagePlaceholder.appendChild(rowImage);
              }
            });
          });

          // Apply throttle to the findActiveTab function.
          const throttledFindActiveTab = throttle(findActiveTab, 200);

          // Call findActiveTab after a delay.
          setTimeout(() => {
            findActiveTab();
          }, 500);

          function handleTabsInViewport(entries) {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                findActiveTab();
              }
            });
          }

          function handleTabsOutOfViewport(entries) {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) {
                clearInterval(rowInterval);
              }
            });
          }

          const options = {
            root: null,
            threshold: 0.5,
          };

          const observer_2 = new IntersectionObserver(handleTabsInViewport, options);
          const outOfViewportObserver = new IntersectionObserver(handleTabsOutOfViewport, options);

          const tabsElement = document.querySelector('.tabs');
          if (tabsElement) {
            observer_2.observe(tabsElement);
            outOfViewportObserver.observe(tabsElement);
          }
        }, 1500);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
};
