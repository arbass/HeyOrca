/* eslint-disable no-console */
// import Swiper JS
// import Swiper styles
import 'swiper/css';

import Swiper from 'swiper';

export const pricingPage = () => {
  const pricingPage_el = document.querySelector('.range-slider-sticky-parent');
  if (pricingPage_el) {
    fsAttributes.rangeslider.loading
      .then((result) => {
        if (fsAttributes.rangeslider.loading instanceof Promise) {
          //-––
          //––––––––
          //–––––––– table fill
          const allPricingTableCategory = document.querySelectorAll('[pricing-table-category]');
          const allPricingTableCategoryName = document.querySelectorAll(
            '[pricing-table-category-name]'
          );
          const allPrcingGeaderClonable = document.querySelectorAll('[prcing-header-clonable]');
          allPricingTableCategory.forEach((category, category_id) => {
            category.setAttribute('pricing-table-category', category.firstElementChild.textContent);
          });
          allPricingTableCategoryName.forEach((categoryName, categoryName_id) => {
            categoryName.setAttribute(
              'pricing-table-category-name',
              categoryName.firstElementChild.textContent
            );
          });
          allPrcingGeaderClonable.forEach((plan, plan_id) => {
            //---
            const currentCategoryHeaders_array = [];
            const currentCategoryNames_arrayParent = [];
            let categoryPointer = allPricingTableCategory[0];
            currentCategoryHeaders_array.push(categoryPointer);
            while (categoryPointer.nextElementSibling) {
              categoryPointer = categoryPointer.nextElementSibling;
              if (categoryPointer.hasAttribute('pricing-table-category')) {
                currentCategoryHeaders_array.push(categoryPointer);
              }
            }

            currentCategoryHeaders_array.forEach((categoryHeader) => {
              const currentCategoryNames_array = [];
              let categoryPointerName = categoryHeader;

              while (
                categoryPointerName.nextElementSibling &&
                categoryPointerName.nextElementSibling.hasAttribute('pricing-table-category') ===
                  false
              ) {
                categoryPointerName = categoryPointerName.nextElementSibling;

                if (categoryPointerName.hasAttribute('pricing-table-category-name')) {
                  currentCategoryNames_array.push(categoryPointerName);
                }
              }

              currentCategoryNames_arrayParent.push(currentCategoryNames_array);
            });
            //create elements
            const columnWaiter = document.querySelector('.price-swiper-table-wrapper');
            const newColumn = document.createElement('div');
            newColumn.classList.add('price-swiper-table-column');
            newColumn.setAttribute('column-number', plan_id);
            columnWaiter.appendChild(newColumn);

            currentCategoryHeaders_array.forEach((categoryHeader, categoryHeader_id) => {
              const newCategoryHeader = document.createElement('div');
              newCategoryHeader.classList.add(
                'price-swiper-table_clonable-elemts_category-row-header'
              );
              const newCategoryHeader_title = document.createElement('div');
              newCategoryHeader_title.classList.add('text-size-link', 'text-weight-medium');
              newCategoryHeader_title.textContent =
                categoryHeader.getAttribute('pricing-table-category');

              newCategoryHeader.appendChild(newCategoryHeader_title);
              newColumn.appendChild(newCategoryHeader);

              let oddStatus_odd = true;

              currentCategoryNames_arrayParent[categoryHeader_id].forEach((categoryName, id) => {
                const currentCategoryName = categoryName.getAttribute(
                  'pricing-table-category-name'
                );
                const newRowParent = document.createElement('div');
                newRowParent.classList.add('price-swiper-table_clonable-elemts_category-row');
                if (oddStatus_odd) {
                  newRowParent.classList.add('is-odd');
                  oddStatus_odd = false;
                } else {
                  oddStatus_odd = true;
                }
                //---
                const newRowEl_1 = document.createElement('div');
                newRowEl_1.classList.add('price-swiper-table_clonable-elemts_category-row-line');
                //---
                const newRowEl_1_text = document.createElement('div');
                newRowEl_1.classList.add('text-size-link', 'text-weight-medium');
                newRowEl_1_text.textContent = currentCategoryName;
                //---
                //-----––––––––
                newColumn.appendChild(newRowParent);
                newRowParent.appendChild(newRowEl_1);
                newRowEl_1.appendChild(newRowEl_1_text);
                //---
                const currentDescriptionItem_text =
                  categoryName.nextElementSibling.nextElementSibling.nextElementSibling
                    .nextElementSibling.nextElementSibling.firstElementChild;
                if (currentDescriptionItem_text.textContent.length > 1) {
                  const newRowEl_1_description = document
                    .querySelector('.price-swiper-table_clonable-elemts_category-row_2')
                    .cloneNode(true);
                  newRowEl_1_description.classList.remove('is-active');
                  newRowEl_1_description.querySelector('.description-content').textContent =
                    currentDescriptionItem_text.textContent;
                  //–––
                  const newRowEl_1_svg = document
                    .querySelector('.price-swiper-table_clonable-elemts_category-row-line-arrow')
                    .cloneNode(true);
                  //–––
                  newRowParent.appendChild(newRowEl_1_description);
                  newRowEl_1.appendChild(newRowEl_1_svg);
                }
                //---
                const contentRowsItems = [];
                contentRowsItems.push(categoryName.nextElementSibling.firstElementChild);
                contentRowsItems.push(
                  categoryName.nextElementSibling.nextElementSibling.firstElementChild
                );
                contentRowsItems.push(
                  categoryName.nextElementSibling.nextElementSibling.nextElementSibling
                    .firstElementChild
                );
                contentRowsItems.push(
                  categoryName.nextElementSibling.nextElementSibling.nextElementSibling
                    .nextElementSibling.firstElementChild
                );
                //----
                const clonable_contentRowsItems = contentRowsItems[plan_id].cloneNode(true);
                newRowParent.appendChild(clonable_contentRowsItems);
              });
            });
          });
          //-–– fill
          //–––––––– swiper fill
          const swiperPriceAppendWaiter = document.querySelector('.swiper-wrapper.is-pricing-page');
          allPrcingGeaderClonable.forEach((clonableElement, clonableElement_id) => {
            const newSlide_pricing = document.createElement('div');
            newSlide_pricing.setAttribute('swiper-number', clonableElement_id);
            newSlide_pricing.classList.add('swiper-slide');
            newSlide_pricing.classList.add('is-pricing-page');
            const itsClonable = clonableElement.cloneNode(true);
            newSlide_pricing.appendChild(itsClonable);
            swiperPriceAppendWaiter.appendChild(newSlide_pricing);
          });

          //-––
          const el_slider = pricingPage_el.querySelector('.fs-rangeslider_handle');
          const el_sliderInput = pricingPage_el.querySelector('[fs-cmsfilter-field="price"]');
          let currentPeriod = 'm';
          const periodButtons = document.querySelectorAll('.time-accordion_nav.is-pricing .button');
          periodButtons.forEach((button) => {
            button.addEventListener('mousedown', function () {
              periodButtons.forEach((el) => {
                el.classList.remove('_w--current');
              });
              button.classList.add('_w--current');
              currentPeriod = button.querySelector('input').getAttribute('value');
              changePrice();
            });
          });

          function changePrice() {
            const allPlaceholders = document.querySelectorAll(
              '[range-price-value-' +
                currentPeriod +
                '-' +
                el_slider.getAttribute('aria-valuenow') +
                ']'
            );
            allPlaceholders.forEach((placeholder) => {
              const currentCount = placeholder.getAttribute(
                'range-price-value-' + currentPeriod + '-' + el_slider.getAttribute('aria-valuenow')
              );

              const currentParent = placeholder.closest('[price-card-header]');
              if (currentParent) {
                const currentCta = currentParent.querySelector('[price-card-header-cta]');
                const currentPrice = currentParent.querySelector('[price-card-header-price]');

                if (el_slider.getAttribute('aria-valuenow') == '10') {
                  currentCta.classList.remove('hide');
                  currentPrice.classList.add('hide');
                } else {
                  currentCta.classList.add('hide');
                  currentPrice.classList.remove('hide');
                }
              }

              const starCount = (currentCount.match(/\*/g) || []).length;
              if (starCount === 1) {
                placeholder.innerHTML = currentCount.replace('*', '<s>');
              } else if (starCount === 2) {
                placeholder.innerHTML = currentCount.replace('*', '<s>').replace('*', '</s>');
              } else {
                placeholder.textContent = currentCount;
              }
            });
          }

          el_sliderInput.addEventListener('input', function () {
            changePrice();
          });

          // –––––––– swiper go
          const swiper_soc = new Swiper('.swiper.is-pricing-page', {
            slidesPerView: 1.2,
            centeredSlides: true,
            spaceBetween: 0,
            initialSlide: 2,
          });
          // ––––––––
          swiper_soc.slideTo(0);
          setTimeout(function () {
            swiper_soc.slideTo(1);
          }, 500);

          function showColumn() {
            setTimeout(function () {
              const allSlides_price = document.querySelectorAll('.swiper-slide');
              allSlides_price.forEach((slide, slide_id) => {
                if (slide.classList.contains('swiper-slide-active')) {
                  const allRenderedColumns = document.querySelectorAll('[column-number]');
                  allRenderedColumns.forEach((col) => {
                    col.classList.add('hide');
                  });
                  document
                    .querySelector('[column-number="' + slide.getAttribute('swiper-number') + '"]')
                    .classList.remove('hide');
                }
              });
            }, 150);
          }

          // Добавляем обработчик события на смену слайда
          swiper_soc.on('slideChange', function () {
            showColumn();
          });
          //-–––
          const allRenderedDescriptionItems = document.querySelectorAll(
            '.price-swiper-table_clonable-elemts_category-row_2'
          );
          allRenderedDescriptionItems.forEach((description) => {
            const clickableArea = description.closest(
              '.price-swiper-table_clonable-elemts_category-row'
            );

            clickableArea.addEventListener('click', function () {
              const current_hiddenContent = clickableArea.querySelector(
                '.price-swiper-table_clonable-elemts_category-row_2'
              );

              const current_arrow = clickableArea.querySelector(
                '.price-swiper-table_clonable-elemts_category-row-line-arrow'
              );

              current_hiddenContent.classList.toggle('is-active');

              current_arrow.classList.toggle('is-active');
            });
          });
        }
        changePrice();
        showColumn();
        setTimeout(showColumn, 3000);
        window.addEventListener('resize', function () {
          showColumn();
        });
      })
      .catch((error) => {
        // console.error('Ошибка', error);
      });

    setTimeout(function () {
      if (document.querySelector('[page-name="price-2024"]')) {
        const targetElement = document.querySelector('[fs-rangeslider-element="display-value"]');

        const handleChange = function (mutationsList, observer) {
          for (const mutation of mutationsList) {
            if (mutation.type === 'childList' || mutation.type === 'characterData') {
              const newValue = targetElement.textContent || targetElement.innerText;

              const AllCtaButtons = document.querySelectorAll('[price-cta-button]');
              const AllCtaButtons_dynamic = document.querySelectorAll(
                '[price-cta-button="dynamic-links"]'
              );

              targetElement.textContent = newValue;

              // if (newValue >= '6') {
              //   targetElement.textContent = '6+';
              //   AllCtaButtons.forEach((button) => {
              //     button.classList.remove('is-secondary');
              //   });
              //   AllCtaButtons_dynamic.forEach((button) => {
              //     button.setAttribute(
              //       'href',
              //       document.querySelector('[dynamic-link-book]').getAttribute('dynamic-link-book')
              //     );
              //   });
              // } else {
              //   AllCtaButtons.forEach((button) => {
              //     button.classList.add('is-secondary');
              //   });
              //   AllCtaButtons_dynamic.forEach((button) => {
              //     button.setAttribute(
              //       'href',
              //       document
              //         .querySelector('[dynamic-link-free-trial]')
              //         .getAttribute('dynamic-link-free-trial')
              //     );
              //   });
              // }
            }
          }
        };

        const observer = new MutationObserver(handleChange);

        const config = { childList: true, characterData: true, subtree: true };

        observer.observe(targetElement, config);
      }
    }, 500);
  }

  const isPricingPage = Boolean(document.querySelector('[page-name=price-2024]'));

  if (isPricingPage) {
    const agenciesRadio = document.getElementById('pricing-radio-agencies');
    const teamsRadio = document.getElementById('pricing-radio-teams');

    const pricingRadioGroup = document.getElementsByName('pricing-category');

    const agenciesRadioButton = document.getElementById(
      'pricing-radio-button-agencies'
    ) as HTMLInputElement;
    const teamsRadioButton = document.getElementById(
      'pricing-radio-button-teams'
    ) as HTMLInputElement;

    const agenciesIcon = document.getElementById('agencies-icon');
    const teamsIcon = document.getElementById('teams-icon');

    const basicPrice = document.getElementById('basic-price');
    const standardPrice = document.getElementById('standard-price');
    const proPrice = document.getElementById('pro-price');

    const pricingToggle = document.getElementById('pricing-toggle') as HTMLInputElement;
    const pricingToggleLabelMonthly = document.getElementById('pricing-toggle-label-monthly');
    const pricingToggleLabelAnnually = document.getElementById('pricing-toggle-label-annually');

    const freeDemoLink = document.getElementById('free-demo-link');
    const basicDemoLink = document.getElementById('basic-demo-link');
    const standardDemoLink = document.getElementById('standard-demo-link');

    const pricingButtonLinks = document.querySelectorAll('.pricing-button-link');
    const secondaryCtaLinks = document.querySelectorAll('.pricing-demo-link');

    const pricingCardFree = document.getElementById('pricing-card-free');
    const pricingSlideFree = document.getElementById('pricing-slide-free');
    const pricingCardGrid = document.getElementById('pricing-card-grid');

    const pricingTableHeaders = document.querySelectorAll('.pricing-table-header');
    const pricingTableSectionRows = document.querySelectorAll('.pricing-table-section-row');
    const pricingTableRows = document.querySelectorAll('.pricing-table-row');
    const freePlanColCells = document.querySelectorAll('.is-free-col');

    const handleChangePricing = () => {
      const pricingCategory = agenciesRadioButton?.checked ? 'agencies' : 'teams';
      const pricingPeriod = pricingToggle?.checked ? 'monthly' : 'annually';

      // Handle agencies Selected
      if (
        agenciesRadioButton?.checked &&
        !agenciesRadio?.classList.contains('pricing-radio-selected')
      ) {
        agenciesRadio?.classList.add('pricing-radio-selected');
        teamsRadio?.classList.remove('pricing-radio-selected');
        agenciesIcon?.classList.remove('grey-icon');
        teamsIcon?.classList.add('grey-icon');

        freeDemoLink?.classList.remove('hide');
        basicDemoLink?.classList.remove('hide');
        standardDemoLink?.classList.remove('hide');

        pricingCardFree?.classList.add('hide');
        pricingSlideFree?.classList.add('hide');
        pricingCardGrid?.classList.remove('with-free-plan');

        pricingTableHeaders?.forEach((header) => {
          header.classList.remove('with-free-plan');
        });

        pricingTableSectionRows?.forEach((sectionRow) => {
          sectionRow.classList.remove('with-free-plan');
        });

        pricingTableRows?.forEach((row) => {
          row.classList.remove('with-free-plan');
        });

        freePlanColCells?.forEach((cell) => {
          !cell.classList.contains('hide') && cell.classList.add('hide');
        });
      }

      // Handle teams Selected
      if (teamsRadioButton?.checked && !teamsRadio?.classList.contains('pricing-radio-selected')) {
        teamsRadio?.classList.add('pricing-radio-selected');
        agenciesRadio?.classList.remove('pricing-radio-selected');
        teamsIcon?.classList.remove('grey-icon');
        agenciesIcon?.classList.add('grey-icon');

        !freeDemoLink?.classList.contains('hide') && freeDemoLink?.classList.add('hide');
        !basicDemoLink?.classList.contains('hide') && basicDemoLink?.classList.add('hide');

        pricingCardFree?.classList.remove('hide');
        pricingSlideFree?.classList.remove('hide');
        pricingCardGrid?.classList.add('with-free-plan');

        pricingTableHeaders?.forEach((header) => {
          !header.classList.contains('with-free-plan') && header.classList.add('with-free-plan');
        });

        pricingTableSectionRows?.forEach((sectionRow) => {
          !sectionRow.classList.contains('with-free-plan') &&
            sectionRow.classList.add('with-free-plan');
        });

        pricingTableRows?.forEach((row) => {
          !row.classList.contains('with-free-plan') && row.classList.add('with-free-plan');
        });

        freePlanColCells?.forEach((cell) => {
          cell.classList.remove('hide');
        });
      }

      // Handle toggle label color
      if (pricingToggle?.checked) {
        !pricingToggleLabelAnnually?.classList.contains('grey-text') &&
          pricingToggleLabelAnnually?.classList.add('grey-text');

        pricingToggleLabelMonthly?.classList.contains('grey-text') &&
          pricingToggleLabelMonthly?.classList.remove('grey-text');
      } else {
        pricingToggleLabelAnnually?.classList.contains('grey-text') &&
          pricingToggleLabelAnnually?.classList.remove('grey-text');

        !pricingToggleLabelMonthly?.classList.contains('grey-text') &&
          pricingToggleLabelMonthly?.classList.add('grey-text');
      }

      pricingButtonLinks.forEach((link) => {
        const href = link.getAttribute(`${pricingCategory}-button-link`);
        const text = link.getAttribute(`${pricingCategory}-button-text`);
        const spanText = link.querySelector('div span');
        if (href) {
          link.setAttribute('href', href);
        }
        if (spanText) {
          spanText.textContent = text;
        }
      });

      secondaryCtaLinks.forEach((link) => {
        const href = link.getAttribute(`${pricingCategory}-button-link`);
        const text = link.getAttribute(`${pricingCategory}-button-text`);
        link.textContent = text;
        if (href) {
          link.setAttribute('href', href);
        }
      });

      if (basicPrice) {
        basicPrice.innerText = basicPrice.getAttribute(`${pricingCategory}-${pricingPeriod}`) ?? '';
      }

      if (standardPrice) {
        standardPrice.innerText =
          standardPrice.getAttribute(`${pricingCategory}-${pricingPeriod}`) ?? '';
      }

      if (proPrice) {
        proPrice.innerText = proPrice.getAttribute(`${pricingCategory}-${pricingPeriod}`) ?? '';
      }
    };

    pricingRadioGroup[0]?.addEventListener('change', handleChangePricing);
    pricingRadioGroup[1]?.addEventListener('change', handleChangePricing);
    pricingToggle?.addEventListener('change', handleChangePricing);
  }
};
