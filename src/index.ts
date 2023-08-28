import { articlesNotNull } from '$utils/blog-article-not-null';
import { featureCardsTunnel } from '$utils/feature-cards-tunnel';
import { sectionColFeature_2 } from '$utils/feature-cards-tunnel_2';
import { featuresCardsList } from '$utils/features-cards_list';
import { filterFirstButtonClick } from '$utils/filter-first-button-click';
import { nestLinkPervent } from '$utils/nest-links-pervent';
import { swiper_homePageInit } from '$utils/swiper_home-page';
import { swiper_storiesInit } from '$utils/swiper_stories';
import { timeAccordionComponent } from '$utils/time-accordion-component';

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
});
