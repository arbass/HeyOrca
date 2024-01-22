import { articlesNotNull } from '$utils/blog-article-not-null';
import { categoriesSlider } from '$utils/categories-slider';
import { featureCardsTunnel } from '$utils/feature-cards-tunnel';
import { sectionColFeature_2 } from '$utils/feature-cards-tunnel_2';
import { featuresCardsList } from '$utils/features-cards_list';
import { filterFirstButtonClick } from '$utils/filter-first-button-click';
import { footerForm } from '$utils/footer-form';
import { floatingInput } from '$utils/form_floatin-inputs';
import { formDropdown } from '$utils/forms-dropdown';
import { globalVariables } from '$utils/global-variables';
import { masonryGrid } from '$utils/masonry';
import { nestLinkPervent } from '$utils/nest-links-pervent';
import { popupCloseHelper } from '$utils/popup-close-helper';
import { pricingPage } from '$utils/pricing-page';
import { swiper_homePageInit } from '$utils/swiper_home-page';
import { swiper_storiesInit } from '$utils/swiper_stories';
import { timeAccordionComponent } from '$utils/time-accordion-component';
import { timeSection_featurePage } from '$utils/time-accordion-component_feature-page';
import { webinarForm } from '$utils/webinar-forms';
import { webinarPageStart } from '$utils/webinars-page';

window.Webflow ||= [];
window.Webflow.push(() => {
  nestLinkPervent();
  timeAccordionComponent();
  swiper_homePageInit();
  swiper_storiesInit();
  featureCardsTunnel();
  featuresCardsList();
  sectionColFeature_2();
  filterFirstButtonClick();
  articlesNotNull();
  footerForm();
  webinarForm();
  pricingPage();
  timeSection_featurePage();
  masonryGrid();
  popupCloseHelper();
  formDropdown();
  floatingInput();
  categoriesSlider();
  webinarPageStart();
  globalVariables();
});
