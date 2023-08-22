import { nestLinkPervent } from '$utils/nest-links-pervent';
import { swiper_homePageInit } from '$utils/swiper_home-page';
import { timeAccordionComponent } from '$utils/time-accordion-component';

window.Webflow ||= [];
window.Webflow.push(() => {
  nestLinkPervent();
  timeAccordionComponent();
  swiper_homePageInit();
});
