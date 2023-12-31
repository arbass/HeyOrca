export const timeAccordionComponent = () => {
  const tabComponent = document.querySelector('[time-accordion-component]');

  if (tabComponent) {
    window.fsAttributes = window.fsAttributes || [];
    window.fsAttributes.push([
      'cmsnest',
      (listInstances) => {
        // console.log('cmsnest Successfully loaded!');
        window.fsAttributes.cmstabs.init();
      },
    ]);
    window.fsAttributes.push([
      'cmstabs',
      (listInstances) => {
        // console.log('cmstabs Successfully loaded!');
        const tabsReadyInterval = setInterval(function () {
          const activeTabCheck = document.querySelector('.time-accordion_inner .w--tab-active');

          const tabsRowsCheck = activeTabCheck.querySelectorAll(
            '.cl-i_time-accordion_widget-content-row'
          );

          if (tabsRowsCheck.length) {
            clearInterval(tabsReadyInterval);

            setTimeout(function () {
              setTimeout(function () {
                const sectionAccordionComponent_elOp =
                  document.querySelector('.section_time-accordion');
                sectionAccordionComponent_elOp.classList.remove('hide-opacity');
              }, 300);

              let rowInterval;

              const allRows = document.querySelectorAll(
                '.time-accordion_inner .cl-i_time-accordion_widget-content-row'
              );
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
                const currentContentP = el.querySelector(
                  '.is-time-accordion_widget-content-row-col'
                );
                const currentId = el.getAttribute('data-id');
                const currentImage = document.querySelector(
                  `.visual-with-shadow_visual[data-id="${currentId}"]`
                );
                const allImages = document.querySelectorAll('.visual-with-shadow_visual');
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
                allImages.forEach((image) => {
                  image.classList.add('hide');
                });
                currentProgressBar.classList.add('animated');
                currentArrowIcon.classList.add('animated');
                currentContentP.classList.add('animated');
                currentImage.classList.remove('hide');
              }

              function rowsOrderFromActive() {
                clearInterval(rowInterval);
                let activeRow = document.querySelector(
                  '.cl-i_time-accordion_widget-content-row.active'
                );
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

                if (activeTab) {
                  const activeTab_ctaAppendWaiter =
                    activeTab.querySelector('.button-append-waiter');
                  const activeTab_ctaAppendSrc = activeTab.querySelector('.button-append-src');
                  activeTab_ctaAppendWaiter.appendChild(activeTab_ctaAppendSrc);
                  const tabsRows = activeTab.querySelectorAll(
                    '.cl-i_time-accordion_widget-content-row'
                  );

                  tabsRows[0].classList.add('active');
                  rowsOrderFromActive();
                } else {
                  // console.log('we cant find active tab');
                }
              }

              const allCtaAppendSrc = document.querySelectorAll('.button-append-src a');
              allCtaAppendSrc.forEach((a) => {
                a.addEventListener('click', () => {
                  a.getAttribute('href');
                  window.location.href = a.getAttribute('href');
                });
              });

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

              const throttledFindActiveTab = throttle(findActiveTab, 200);

              setTimeout(() => {
                findActiveTab();
              }, 300);

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
              const outOfViewportObserver = new IntersectionObserver(
                handleTabsOutOfViewport,
                options
              );

              const tabsElement = document.querySelector('.tabs');
              if (tabsElement) {
                observer_2.observe(tabsElement);
                outOfViewportObserver.observe(tabsElement);
              }
            }, 300);
          }
        }, 300);

        //–––––

        const dropDownLinks_waiter = document.querySelector('.select-sticky_dropdown-list');
        const rendered_allTabs = document.querySelectorAll('.w-tab-link');

        rendered_allTabs.forEach((rendered_tab) => {
          const currentTabTitle = rendered_tab.querySelector('.button').textContent;
          rendered_tab.setAttribute('current-tab-name', currentTabTitle);
          const cloneAbleDropDownLink = document
            .querySelector('.select-sticky_dropdown-list-item')
            .cloneNode(true);
          cloneAbleDropDownLink.setAttribute('current-dropdownlink-name', currentTabTitle);
          cloneAbleDropDownLink.classList.remove('hide');
          cloneAbleDropDownLink.textContent = currentTabTitle;
          dropDownLinks_waiter.append(cloneAbleDropDownLink);
        });

        const allClonedDropdownLinks = document.querySelectorAll(
          '.select-sticky_dropdown-list-item'
        );
        allClonedDropdownLinks.forEach((link) => {
          link.addEventListener('click', function () {
            document.querySelector('.select-sticky_dropdown-toggle').click();
            const currentName = link.getAttribute('current-dropdownlink-name');
            document.querySelector('[current-tab-name="' + currentName + '"]').click();
            document.querySelector('.anc-click').click();
          });
        });

        function callback(mutationsList, observer) {
          for (const mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
              get_rendered_activeTab();
            }
          }
        }

        const observer = new MutationObserver(callback);

        rendered_allTabs.forEach((element) => {
          observer.observe(element, { attributes: true });
        });

        function get_rendered_activeTab() {
          const currentActiveTab = document.querySelector('.w-tab-link.w--current');
          const currentActiveTabName = currentActiveTab.textContent;
          const currentActiveDropDownName = document.querySelector(
            '.select-sticky_dropdown-toggle-text'
          );
          currentActiveDropDownName.textContent = currentActiveTabName;
          const currentAtributeName = currentActiveTab.getAttribute('current-tab-name');
          allClonedDropdownLinks.forEach((link) => {
            link.classList.remove('is-active');
          });
          document
            .querySelector('[current-dropdownlink-name="' + currentAtributeName + '"]')
            .classList.add('is-active');
        }

        get_rendered_activeTab();
      },
    ]);
  }
};
