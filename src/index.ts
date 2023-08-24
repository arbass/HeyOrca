import { featureCardsTunnel } from '$utils/feature-cards-tunnel';
import { featuresCardsList } from '$utils/features-cards_list';
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
});
