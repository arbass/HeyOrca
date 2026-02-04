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
  const isPricingPage2026 = Boolean(document.querySelector('[page-name=pricing-2026]'));

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

    const basicPriceEl = document.getElementById('basic-price');
    const proPriceEl = document.getElementById('pro-price');

    const pricingToggle = document.getElementById('pricing-toggle') as HTMLInputElement;
    const pricingToggleLabelMonthly = document.getElementById('pricing-toggle-label-monthly');
    const pricingToggleLabelAnnually = document.getElementById('pricing-toggle-label-annually');

    const pricingCardFree = document.getElementById('pricing-card-free');
    const pricingSlideFree = document.getElementById('pricing-slide-free');
    const pricingCardCustom = document.getElementById('pricing-card-custom');

    const pricingTableHeaders = document.querySelectorAll('.pricing-table-header');
    const pricingTableSectionRows = document.querySelectorAll('.pricing-table-section-row');
    const pricingTableRows = document.querySelectorAll('.pricing-table-row');
    const freePlanColCells = document.querySelectorAll('.is-free-col');

    const handleChangePricing = () => {
      const pricingCategory = agenciesRadioButton?.checked ? 'agencies' : 'teams';
      const pricingPeriod = pricingToggle?.checked ? 'annually' : 'monthly';

      // Handle agencies selected
      if (
        agenciesRadioButton?.checked &&
        !agenciesRadio?.classList.contains('pricing-radio-selected')
      ) {
        agenciesRadio?.classList.add('pricing-radio-selected');
        teamsRadio?.classList.remove('pricing-radio-selected');
        pricingCardFree?.classList.add('hide');
        pricingSlideFree?.classList.add('hide');
        pricingCardCustom?.classList.remove('hide');

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

      // Handle teams selected
      if (teamsRadioButton?.checked && !teamsRadio?.classList.contains('pricing-radio-selected')) {
        teamsRadio?.classList.add('pricing-radio-selected');
        agenciesRadio?.classList.remove('pricing-radio-selected');
        pricingCardFree?.classList.remove('hide');
        pricingSlideFree?.classList.remove('hide');
        pricingCardCustom?.classList.add('hide');

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
        pricingToggleLabelAnnually?.classList.contains('grey-text') &&
          pricingToggleLabelAnnually?.classList.remove('grey-text');

        !pricingToggleLabelMonthly?.classList.contains('grey-text') &&
          pricingToggleLabelMonthly?.classList.add('grey-text');
      } else {
        !pricingToggleLabelAnnually?.classList.contains('grey-text') &&
          pricingToggleLabelAnnually?.classList.add('grey-text');

        pricingToggleLabelMonthly?.classList.contains('grey-text') &&
          pricingToggleLabelMonthly?.classList.remove('grey-text');
      }

      if (basicPriceEl) {
        basicPriceEl.innerText =
          basicPriceEl.getAttribute(`${pricingCategory}-${pricingPeriod}`) ?? '';
      }

      if (proPriceEl) {
        proPriceEl.innerText = proPriceEl.getAttribute(`${pricingCategory}-${pricingPeriod}`) ?? '';
      }
    };

    pricingRadioGroup[0]?.addEventListener('change', handleChangePricing);
    pricingRadioGroup[1]?.addEventListener('change', handleChangePricing);
    pricingToggle?.addEventListener('change', handleChangePricing);
  }

  // Pricing Calculator ------------------------------------------------------------

  if (isPricingPage) {
    const pricingCalculator = document.getElementById('pricing-calculator');

    if (!pricingCalculator) {
      console.error('Pricing calculator not found!');
      return;
    }

    const planTypeProButton = document.getElementById('pctb-pro');
    const planTypeBasicButton = document.getElementById('pctb-basic');
    const billingCycleAnnualButton = document.getElementById('pctb-annual');
    const billingCycleMonthlyButton = document.getElementById('pctb-monthly');
    const numCalendarsInput = document.getElementById(
      'num-calendars-input'
    ) as HTMLInputElement | null;
    const nonProfitCheckbox = document.getElementById(
      'non-profit-checkbox'
    ) as HTMLInputElement | null;

    if (numCalendarsInput) {
      numCalendarsInput.value = '1';
    }

    const basicPriceAttr = pricingCalculator?.getAttribute('basic-price');
    const proPriceAttr = pricingCalculator?.getAttribute('pro-price');
    const basicPriceDiscountedAttr = pricingCalculator?.getAttribute('basic-price-discounted');
    const proPriceDiscountedAttr = pricingCalculator?.getAttribute('pro-price-discounted');
    const annualDiscountAttr = pricingCalculator?.getAttribute('annual-discount');
    const nonProfitDiscountAttr = pricingCalculator?.getAttribute('non-profit-discount');

    const planTypeEl = document.getElementById('plan-type');
    const numCalendarsEl = document.getElementById('num-calendars');
    const pricePerCalendarEl = document.getElementById('price-per-calendar');
    const discountedPricePerCalendarEl = document.getElementById('discounted-price-per-calendar');
    const afterDiscountsEl = document.getElementById('after-discounts');
    const subtotalAmountEl = document.getElementById('subtotal-amount');
    const bulkDiscountAmountEl = document.getElementById('bulk-discount-amount');
    const annualDiscountAmountEl = document.getElementById('annual-discount-amount');
    const nonProfitDiscountAmountEl = document.getElementById('non-profit-discount-amount');
    const totalAmountEl = document.getElementById('total-amount');
    const annualTotalAmountEl = document.getElementById('annual-total-amount');

    const bulkDiscountRowEl = document.getElementById('bulk-discount-row');
    const annualDiscountRowEl = document.getElementById('annual-discount-row');
    const nonProfitDiscountRowEl = document.getElementById('non-profit-discount-row');
    const annualTotalRowEl = document.getElementById('annual-total-row');

    const bulkDiscountMessageEl = document.getElementById('bulk-discount-message');
    const annualDiscountMessageEl = document.getElementById('annual-discount-message');
    const calendarsToAddEl = document.getElementById('calendars-to-add');

    const proBenefitEls = document.querySelectorAll('.pcb-pro');
    const costBreakdownBodyEl = document.getElementById('cost-breakdown-body');
    const customRate20PopupEl = document.getElementById('custom-rate-20-popup');
    const customRate10PopupEl = document.getElementById('custom-rate-10-popup');

    const basicPrice = basicPriceAttr ? parseInt(basicPriceAttr) : 0;
    const proPrice = proPriceAttr ? parseInt(proPriceAttr) : 0;
    const basicPriceDiscounted = basicPriceDiscountedAttr ? parseInt(basicPriceDiscountedAttr) : 0;
    const proPriceDiscounted = proPriceDiscountedAttr ? parseInt(proPriceDiscountedAttr) : 0;

    const annualDiscountPercentage = annualDiscountAttr ? parseFloat(annualDiscountAttr) : 0;
    const nonProfitDiscountPercentage = nonProfitDiscountAttr
      ? parseFloat(nonProfitDiscountAttr)
      : 0;

    const MAX_CALENDARS = 20;

    const calculatePricing = () => {
      const numCalendars = numCalendarsInput?.value ? parseInt(numCalendarsInput.value) : 0;
      const effectiveCalendars = Math.max(0, Math.min(numCalendars, MAX_CALENDARS));
      const applyBulkDiscount = effectiveCalendars >= 5;
      const isProPlan = planTypeProButton?.classList.contains('pctb-selected');

      const undiscountedPricePerCalendar = isProPlan ? proPrice : basicPrice;

      let pricePerCalendar = isProPlan ? proPrice : basicPrice;

      if (applyBulkDiscount) {
        pricePerCalendar = isProPlan ? proPriceDiscounted : basicPriceDiscounted;
      }

      const applyAnnualDiscount = billingCycleAnnualButton?.classList.contains('pctb-selected');
      const applyNonProfitDiscount = nonProfitCheckbox?.checked;

      const subtotal = undiscountedPricePerCalendar * effectiveCalendars;
      const totalBulkDiscount =
        (undiscountedPricePerCalendar - pricePerCalendar) * effectiveCalendars;

      const annualDiscountPerCalendar = Math.ceil(
        applyAnnualDiscount ? pricePerCalendar * annualDiscountPercentage : 0
      );
      const totalAnnualDiscount = annualDiscountPerCalendar * effectiveCalendars;

      const nonProfitDiscountPerCalendar = Math.ceil(
        applyNonProfitDiscount ? pricePerCalendar * nonProfitDiscountPercentage : 0
      );
      const totalNonProfitDiscount = nonProfitDiscountPerCalendar * effectiveCalendars;

      const total = subtotal - totalBulkDiscount - totalAnnualDiscount - totalNonProfitDiscount;
      const annualTotal = total * 12;

      const discountedPricePerCalendar =
        pricePerCalendar -
        (applyAnnualDiscount ? annualDiscountPerCalendar : 0) -
        (applyNonProfitDiscount ? nonProfitDiscountPerCalendar : 0);

      if (pricePerCalendarEl) {
        pricePerCalendarEl.textContent = undiscountedPricePerCalendar.toLocaleString();
      }
      if (discountedPricePerCalendarEl) {
        discountedPricePerCalendarEl.textContent = discountedPricePerCalendar.toLocaleString();
      }
      if (afterDiscountsEl) {
        afterDiscountsEl?.classList.toggle(
          'hide',
          !(applyBulkDiscount || applyAnnualDiscount || applyNonProfitDiscount)
        );
      }
      if (subtotalAmountEl) {
        subtotalAmountEl.textContent = subtotal.toLocaleString();
      }
      if (bulkDiscountAmountEl) {
        bulkDiscountAmountEl.textContent = totalBulkDiscount.toLocaleString();
      }
      if (annualDiscountAmountEl) {
        annualDiscountAmountEl.textContent = totalAnnualDiscount.toLocaleString();
      }
      if (nonProfitDiscountAmountEl) {
        nonProfitDiscountAmountEl.textContent = totalNonProfitDiscount.toLocaleString();
      }
      if (totalAmountEl) {
        totalAmountEl.textContent = total.toLocaleString();
      }
      if (annualTotalAmountEl) {
        annualTotalAmountEl.textContent = annualTotal.toLocaleString();
      }
      if (bulkDiscountRowEl) {
        bulkDiscountRowEl.classList.toggle('hide', !applyBulkDiscount);
      }
      if (annualDiscountRowEl) {
        annualDiscountRowEl.classList.toggle('hide', !applyAnnualDiscount);
      }
      if (nonProfitDiscountRowEl) {
        nonProfitDiscountRowEl.classList.toggle('hide', !applyNonProfitDiscount);
      }
      if (annualTotalRowEl) {
        annualTotalRowEl.classList.toggle('hide', !applyAnnualDiscount);
      }
      if (bulkDiscountMessageEl) {
        bulkDiscountMessageEl.classList.toggle(
          'hide',
          effectiveCalendars < 3 || effectiveCalendars > 4
        );
        if (calendarsToAddEl) {
          const calendarsToAdd = 5 - effectiveCalendars;
          const calendarsToAddText = calendarsToAdd.toLocaleString();
          calendarsToAddEl.textContent = `${calendarsToAddText} more calendar${
            calendarsToAdd > 1 ? 's' : ''
          }`;
        }
      }
      if (annualDiscountMessageEl) {
        annualDiscountMessageEl.classList.toggle('hide', applyAnnualDiscount);
      }
      if (costBreakdownBodyEl) {
        costBreakdownBodyEl.classList.toggle('section-blur', effectiveCalendars >= MAX_CALENDARS);
      }
      if (customRate20PopupEl) {
        customRate20PopupEl.classList.toggle('hide', !(effectiveCalendars >= MAX_CALENDARS));
      }
      if (customRate10PopupEl) {
        customRate10PopupEl.classList.toggle(
          'hide',
          !(effectiveCalendars >= 10 && effectiveCalendars < MAX_CALENDARS)
        );
      }
    };

    const handleClickBasic = () => {
      planTypeBasicButton?.classList.add('pctb-selected');
      planTypeProButton?.classList.remove('pctb-selected');
      if (planTypeEl) planTypeEl.textContent = 'Basic';
      proBenefitEls.forEach((el) => {
        el.classList.add('pcb-not-included');
      });
      calculatePricing();
    };

    const handleClickPro = () => {
      planTypeProButton?.classList.add('pctb-selected');
      planTypeBasicButton?.classList.remove('pctb-selected');
      if (planTypeEl) planTypeEl.textContent = 'Pro';
      proBenefitEls.forEach((el) => {
        el.classList.remove('pcb-not-included');
      });
      calculatePricing();
    };

    const handleClickAnnual = () => {
      billingCycleAnnualButton?.classList.add('pctb-selected');
      billingCycleMonthlyButton?.classList.remove('pctb-selected');
      calculatePricing();
    };

    const handleClickMonthly = () => {
      billingCycleMonthlyButton?.classList.add('pctb-selected');
      billingCycleAnnualButton?.classList.remove('pctb-selected');
      calculatePricing();
    };

    const handleNumCalendarsChange = () => {
      if (numCalendarsEl && numCalendarsInput) {
        const newValue = numCalendarsInput.value;

        if (newValue === '') {
          numCalendarsEl.textContent = '0 Calendars';
          return;
        }

        const numericValue = parseInt(newValue);

        if (isNaN(numericValue)) {
          numCalendarsInput.value = '0';
          numCalendarsEl.textContent = '0 Calendars';
        } else {
          const numText =
            numericValue > MAX_CALENDARS
              ? MAX_CALENDARS.toString()
              : numericValue < 0
              ? '0'
              : numericValue.toString();
          numCalendarsEl.textContent = `${numText} Calendar${numericValue !== 1 ? 's' : ''}`;
        }
      }
      calculatePricing();
    };

    const handleNonProfitChange = () => {
      calculatePricing();
    };

    planTypeBasicButton?.addEventListener('click', handleClickBasic);
    planTypeProButton?.addEventListener('click', handleClickPro);
    billingCycleAnnualButton?.addEventListener('click', handleClickAnnual);
    billingCycleMonthlyButton?.addEventListener('click', handleClickMonthly);
    numCalendarsInput?.addEventListener('input', handleNumCalendarsChange);
    nonProfitCheckbox?.addEventListener('change', handleNonProfitChange);

    calculatePricing();
  }

  // Add-on Calculator ------------------------------------------------------------

  if (isPricingPage2026) {
    const addOnCalculator = document.getElementById('addon-calculator');

    if (!addOnCalculator) {
      console.error('Add-on calculator not found!');
      return;
    }

    const pricingToggle = document.getElementById('pricing-toggle') as HTMLInputElement;
    const pricingToggleLabelMonthly = document.getElementById('pricing-toggle-label-monthly');
    const pricingToggleLabelAnnually = document.getElementById('pricing-toggle-label-annually');

    const pricingCardSavingsTextEls = document.querySelectorAll('.price-card-savings-text');
    const basicSavingsEl = document.getElementById('basic-savings');
    const proSavingsEl = document.getElementById('pro-savings');

    const basicPriceEl = document.getElementById('basic-price');
    const proPriceEl = document.getElementById('pro-price');

    const socialReportsAddButtonEl = document.getElementById('social-reports-add-button');
    const socialInboxAddButtonEl = document.getElementById('social-inbox-add-button');
    const socialListeningAddButtonEl = document.getElementById('social-listening-add-button');

    const socialReportsCardEl = document.getElementById('social-reports-card') as HTMLElement;
    const socialInboxCardEl = document.getElementById('social-inbox-card') as HTMLElement;
    const socialListeningCardEl = document.getElementById('social-listening-card') as HTMLElement;

    const addonPrevPriceEls = document.querySelectorAll('.addon-prev-price');
    const addonTotalSummaryEl = document.getElementById('addon-total-summary');
    const addonTotalEl = document.getElementById('addon-total');
    const addonRecommendProTextEl = document.getElementById('addon-recommend-pro-text');

    const getSelectedCalendarPrices = () => {
      const pricingPeriod = pricingToggle?.checked ? 'annually' : 'monthly';
      const basicCalendarPrice = basicPriceEl
        ? parseInt(basicPriceEl.getAttribute(`${pricingPeriod}`) ?? '0')
        : 0;
      const proCalendarPrice = proPriceEl
        ? parseInt(proPriceEl.getAttribute(`${pricingPeriod}`) ?? '0')
        : 0;
      return { basicCalendarPrice, proCalendarPrice };
    };

    const calculateSelectedAddonTotalPrice = (pricingPeriod: 'monthly' | 'annually') => {
      let addonTotalPrice = 0;

      [socialReportsCardEl, socialInboxCardEl, socialListeningCardEl].forEach((card) => {
        const addonPriceEl = card?.querySelector('.addon-price');
        if (addonPriceEl) {
          const isSelected = card?.classList.contains('addon-card-selected');
          const addonPrice = addonPriceEl
            ? parseInt(addonPriceEl.getAttribute(`${pricingPeriod}`) ?? '0')
            : 0;
          if (isSelected) {
            addonTotalPrice += addonPrice;
          }
        }
      });

      return addonTotalPrice > 0 ? addonTotalPrice : 0;
    };

    const handleUpdateAddonTotal = (
      basicCalendarPrice: number,
      proCalendarPrice: number,
      selectedAddonTotalPrice: number
    ) => {
      if (proPriceEl) {
        proPriceEl.innerText = proCalendarPrice.toLocaleString();
      }

      if (addonTotalEl) {
        addonTotalEl.textContent = selectedAddonTotalPrice.toLocaleString();
      }

      if (addonTotalSummaryEl && selectedAddonTotalPrice > 0) {
        addonTotalSummaryEl?.classList.remove('hide');
      } else {
        addonTotalSummaryEl?.classList.add('hide');
      }

      if (
        addonRecommendProTextEl &&
        basicCalendarPrice + selectedAddonTotalPrice > proCalendarPrice
      ) {
        addonRecommendProTextEl?.classList.remove('hide');
      } else {
        addonRecommendProTextEl?.classList.add('hide');
      }
    };

    const handleUpdateTotalSavings = (pricingPeriod: 'monthly' | 'annually') => {
      if (pricingPeriod !== 'annually') {
        pricingCardSavingsTextEls.forEach((el) => {
          el?.classList.add('hide');
        });
        if (basicSavingsEl) {
          basicSavingsEl.textContent = '0';
        }
        if (proSavingsEl) {
          proSavingsEl.textContent = '0';
        }
        return { basicSavings: 0, proSavings: 0 };
      }

      // Get monthly (non-discounted) base prices
      const basicMonthlyPrice = basicPriceEl
        ? parseInt(basicPriceEl.getAttribute('monthly') ?? '0')
        : 0;
      const proMonthlyPrice = proPriceEl ? parseInt(proPriceEl.getAttribute('monthly') ?? '0') : 0;

      // Calculate non-discounted totals (multiply by 12 for annual)
      const basicBase = basicMonthlyPrice * 12;
      const proBase = proMonthlyPrice * 12;
      const addonTotalBase = calculateSelectedAddonTotalPrice('monthly') * 12;

      const basicTotal = basicBase + addonTotalBase;
      const basicTotalDiscounted = (basicBase + addonTotalBase) * 0.85;
      const proDiscounted = proBase * 0.85;

      // Calculate savings: (non-discounted total) - (discounted total)
      const basicSavings = basicTotal - basicTotalDiscounted;
      const proSavings = proBase - proDiscounted;

      pricingCardSavingsTextEls.forEach((el) => {
        el?.classList.remove('hide');
      });

      if (basicSavingsEl) {
        basicSavingsEl.textContent = Math.floor(basicSavings).toLocaleString();
      }
      if (proSavingsEl) {
        proSavingsEl.textContent = Math.floor(proSavings).toLocaleString();
      }
    };

    const handleFrequencyChange = () => {
      const pricingPeriod = pricingToggle?.checked ? 'annually' : 'monthly';

      // Handle toggle label color
      if (pricingToggle?.checked) {
        pricingToggleLabelAnnually?.classList.contains('grey-text') &&
          pricingToggleLabelAnnually?.classList.remove('grey-text');

        !pricingToggleLabelMonthly?.classList.contains('grey-text') &&
          pricingToggleLabelMonthly?.classList.add('grey-text');
      } else {
        !pricingToggleLabelAnnually?.classList.contains('grey-text') &&
          pricingToggleLabelAnnually?.classList.add('grey-text');

        pricingToggleLabelMonthly?.classList.contains('grey-text') &&
          pricingToggleLabelMonthly?.classList.remove('grey-text');
      }

      const { basicCalendarPrice, proCalendarPrice } = getSelectedCalendarPrices();
      const selectedAddonTotalPrice = calculateSelectedAddonTotalPrice(pricingPeriod);

      if (basicPriceEl) {
        basicPriceEl.innerText = (basicCalendarPrice + selectedAddonTotalPrice).toLocaleString();
      }

      addonPrevPriceEls.forEach((prevPriceEl) => {
        prevPriceEl?.classList.toggle('hide', !pricingToggle?.checked);
      });

      [socialReportsCardEl, socialInboxCardEl, socialListeningCardEl].forEach((card) => {
        const addonPriceEl = card?.querySelector('.addon-price') as HTMLElement;
        if (addonPriceEl) {
          addonPriceEl.innerText = addonPriceEl.getAttribute(`${pricingPeriod}`) ?? '0';
        }
      });

      handleUpdateTotalSavings(pricingPeriod);
      handleUpdateAddonTotal(basicCalendarPrice, proCalendarPrice, selectedAddonTotalPrice);
    };

    const handleAddonCardClick = (card: Element) => {
      const pricingPeriod = pricingToggle?.checked ? 'annually' : 'monthly';
      const actionIconEl = card?.querySelector('.addon-action-icon');
      if (actionIconEl) {
        const checkSvgEl = actionIconEl.querySelector('.check-svg');
        checkSvgEl?.classList.toggle('hide');
        const plusSvgEl = actionIconEl.querySelector('.plus-svg');
        plusSvgEl?.classList.toggle('hide');
        actionIconEl.classList.toggle('addon-action-icon-selected');
      }
      card?.classList.toggle('addon-card-selected');

      const { basicCalendarPrice, proCalendarPrice } = getSelectedCalendarPrices();
      const selectedAddonTotalPrice = calculateSelectedAddonTotalPrice(pricingPeriod);

      if (basicPriceEl) {
        basicPriceEl.textContent = (basicCalendarPrice + selectedAddonTotalPrice).toLocaleString();
      }

      handleUpdateTotalSavings(pricingPeriod);
      handleUpdateAddonTotal(basicCalendarPrice, proCalendarPrice, selectedAddonTotalPrice);
    };

    const handleAddonButtonClick = (buttonEl: HTMLElement) => {
      const plusSvgEl = buttonEl.querySelector('.plus-svg');
      const checkSvgEl = buttonEl.querySelector('.check-svg');
      const addonButtonTextEl = buttonEl.querySelector('.addon-button-text') as HTMLElement;

      if (buttonEl.classList.contains('addon-button-selected')) {
        buttonEl.classList.remove('addon-button-selected');
        plusSvgEl?.classList.remove('hide');
        checkSvgEl?.classList.add('hide');
        if (addonButtonTextEl) {
          addonButtonTextEl.innerText = 'Add-on';
        }
      } else {
        buttonEl.classList.add('addon-button-selected');
        plusSvgEl?.classList.add('hide');
        checkSvgEl?.classList.remove('hide');
        if (addonButtonTextEl) {
          addonButtonTextEl.innerText = 'Added';
        }
      }
    };

    pricingToggle?.addEventListener('change', handleFrequencyChange);
    socialReportsAddButtonEl?.addEventListener('click', () => {
      handleAddonButtonClick(socialReportsAddButtonEl);
      handleAddonCardClick(socialReportsCardEl);
    });
    socialInboxAddButtonEl?.addEventListener('click', () => {
      handleAddonButtonClick(socialInboxAddButtonEl);
      handleAddonCardClick(socialInboxCardEl);
    });
    socialListeningAddButtonEl?.addEventListener('click', () => {
      handleAddonButtonClick(socialListeningAddButtonEl);
      handleAddonCardClick(socialListeningCardEl);
    });
    socialReportsCardEl?.addEventListener('click', () => {
      handleAddonButtonClick(socialReportsAddButtonEl as HTMLElement);
      handleAddonCardClick(socialReportsCardEl);
    });
    socialInboxCardEl?.addEventListener('click', () => {
      handleAddonButtonClick(socialInboxAddButtonEl as HTMLElement);
      handleAddonCardClick(socialInboxCardEl);
    });
    socialListeningCardEl?.addEventListener('click', () => {
      handleAddonButtonClick(socialListeningAddButtonEl as HTMLElement);
      handleAddonCardClick(socialListeningCardEl);
    });
  } else {
    console.error('Pricing page 2026 not found!');
  }
};
