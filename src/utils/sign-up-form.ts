export const signUpForm = () => {
  const homePage = document.getElementById('home');

  if (homePage) {
    const signUpForm = document.forms[0];

    if (signUpForm.id === 'wf-form-signup-form') {
      signUpForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const UTM_CAMPAIGN = 'utm_campaign';
        const UTM_CONTENT = 'utm_content';
        const UTM_DEVICE = 'utm_device';
        const UTM_MEDIUM = 'utm_medium';
        const UTM_PLACEMENT = 'utm_placement';
        const UTM_SOURCE = 'utm_source';
        const UTM_TERM = 'utm_term';

        const formData = new FormData(signUpForm);
        const reqData = Object.fromEntries(formData.entries());

        const pageId = '47bda884-16b9-4474-a755-ef08d0858aba';
        const segmentAnonymousId = window.analytics?.user && analytics.user().anonymousId();
        const utmParams = new URLSearchParams(window.location.search);

        const utm_campaign = utmParams.get(UTM_CAMPAIGN);
        const utm_content = utmParams.get(UTM_CONTENT);
        const utm_device = utmParams.get(UTM_DEVICE);
        const utm_medium = utmParams.get(UTM_MEDIUM);
        const utm_placement = utmParams.get(UTM_PLACEMENT);
        const utm_source = utmParams.get(UTM_SOURCE);
        const utm_term = utmParams.get(UTM_TERM);

        const email = `${reqData.email}`;
        const industryType = `${reqData.industryType}`;
        const numberOfSocialProfiles = `${reqData.numberOfSocialProfiles}`;
        const source = `${reqData.source}`;

        const encodedEmail = encodeURIComponent(email);
        const encodedIndustryType = encodeURIComponent(industryType);
        const encodedNumberOfSocialProfiles = encodeURIComponent(numberOfSocialProfiles);
        const encodedSource = encodeURIComponent(source);
        const encodedPageId = encodeURIComponent(pageId);

        let uri = `https://app.heyorca.com/signup?email=${encodedEmail}&industryType=${encodedIndustryType}&numberOfSocialProfiles=${encodedNumberOfSocialProfiles}&source=${encodedSource}&pageId=${encodedPageId}`;

        if (segmentAnonymousId) uri += `&anonymousId=${encodeURIComponent(segmentAnonymousId)}`;
        if (utm_campaign) uri += `&${UTM_CAMPAIGN}=${encodeURIComponent(utm_campaign)}`;
        if (utm_content) uri += `&${UTM_CONTENT}=${encodeURIComponent(utm_content)}`;
        if (utm_device) uri += `&${UTM_DEVICE}=${encodeURIComponent(utm_device)}`;
        if (utm_medium) uri += `&${UTM_MEDIUM}=${encodeURIComponent(utm_medium)}`;
        if (utm_placement) uri += `&${UTM_PLACEMENT}=${encodeURIComponent(utm_placement)}`;
        if (utm_source) uri += `&${UTM_SOURCE}=${encodeURIComponent(utm_source)}`;
        if (utm_term) uri += `&${UTM_TERM}=${encodeURIComponent(utm_term)}`;

        try {
          const response = await fetch(uri, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          });

          if (response.redirected) {
            window.location.href = response.url;
          } else {
            throw new Error('No redirect!');
          }

          return false;
        } catch (error) {
          console.error(error);
          return false;
        }
      });
    }
  }
};
