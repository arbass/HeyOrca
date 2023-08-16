import { nestLinkPervent } from '$utils/nest-links-pervent';
import { timeAccordionComponent } from '$utils/time-accordion-component';

window.Webflow ||= [];
window.Webflow.push(() => {
  nestLinkPervent();
  timeAccordionComponent();
});
