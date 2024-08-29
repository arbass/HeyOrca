export const signUpForm = () => {
  const homePage = document.getElementById('home');

  if (homePage) {
    const signUpForm = document.forms[0];

    if (signUpForm.id === 'signup-form') {
      const pageId = '9366b56d-11b8-4f9f-bcbe-797bca4fe540';

      const UTM_CAMPAIGN = 'utm_campaign';
      const UTM_CONTENT = 'utm_content';
      const UTM_DEVICE = 'utm_device';
      const UTM_MEDIUM = 'utm_medium';
      const UTM_PLACEMENT = 'utm_placement';
      const UTM_SOURCE = 'utm_source';
      const UTM_TERM = 'utm_term';

      const utmParams = new URLSearchParams(window.location.search);

      const utm_campaign = utmParams.get(UTM_CAMPAIGN);
      const utm_content = utmParams.get(UTM_CONTENT);
      const utm_device = utmParams.get(UTM_DEVICE);
      const utm_medium = utmParams.get(UTM_MEDIUM);
      const utm_placement = utmParams.get(UTM_PLACEMENT);
      const utm_source = utmParams.get(UTM_SOURCE);
      const utm_term = utmParams.get(UTM_TERM);

      const pageId_input = document.createElement('input');
      pageId_input.type = 'hidden';
      pageId_input.name = 'pageId';
      pageId_input.value = pageId;
      signUpForm.appendChild(pageId_input);

      if (utm_campaign) {
        const utm_campaign_input = document.createElement('input');
        utm_campaign_input.type = 'hidden';
        utm_campaign_input.name = UTM_CAMPAIGN;
        utm_campaign_input.value = utm_campaign;
        signUpForm.appendChild(utm_campaign_input);
      }

      if (utm_content) {
        const utm_content_input = document.createElement('input');
        utm_content_input.type = 'hidden';
        utm_content_input.name = UTM_CONTENT;
        utm_content_input.value = utm_content;
        signUpForm.appendChild(utm_content_input);
      }

      if (utm_device) {
        const utm_device_input = document.createElement('input');
        utm_device_input.type = 'hidden';
        utm_device_input.name = UTM_DEVICE;
        utm_device_input.value = utm_device;
        signUpForm.appendChild(utm_device_input);
      }

      if (utm_medium) {
        const utm_medium_input = document.createElement('input');
        utm_medium_input.type = 'hidden';
        utm_medium_input.name = UTM_MEDIUM;
        utm_medium_input.value = utm_medium;
        signUpForm.appendChild(utm_medium_input);
      }

      if (utm_placement) {
        const utm_placement_input = document.createElement('input');
        utm_placement_input.type = 'hidden';
        utm_placement_input.name = UTM_PLACEMENT;
        utm_placement_input.value = utm_placement;
        signUpForm.appendChild(utm_placement_input);
      }

      if (utm_source) {
        const utm_source_input = document.createElement('input');
        utm_source_input.type = 'hidden';
        utm_source_input.name = UTM_SOURCE;
        utm_source_input.value = utm_source;
        signUpForm.appendChild(utm_source_input);
      }

      if (utm_term) {
        const utm_term_input = document.createElement('input');
        utm_term_input.type = 'hidden';
        utm_term_input.name = UTM_TERM;
        utm_term_input.value = utm_term;
        signUpForm.appendChild(utm_term_input);
      }

      setTimeout(() => {
        const segmentAnonymousId = window.analytics?.user && window.analytics.user().anonymousId();

        if (segmentAnonymousId) {
          const segmentAnonymousId_input = document.createElement('input');
          segmentAnonymousId_input.type = 'hidden';
          segmentAnonymousId_input.name = 'anonymousId';
          segmentAnonymousId_input.value = segmentAnonymousId;
          signUpForm.appendChild(segmentAnonymousId_input);
        }
      }, 2000);
    } else {
      console.error('Signup form not found!');
    }
  }
};
