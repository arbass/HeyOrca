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

        const pageId = 'f421d896-244e-4637-9bc8-17edaebe4644';
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

        const uri = `https://app.localhost/signup?email=${encodedEmail}&industryType=${encodedIndustryType}&numberOfSocialProfiles=${encodedNumberOfSocialProfiles}&source=${encodedSource}&pageId=${encodedPageId}`;

        try {
          const response = await fetch(uri, {
            method: 'POST',
            body: new URLSearchParams({
              pageId,
              email,
              industryType,
              numberOfSocialProfiles,
              source,
              anonymousId: segmentAnonymousId,
              ...(utm_campaign && { utm_campaign }),
              ...(utm_content && { utm_content }),
              ...(utm_device && { utm_device }),
              ...(utm_medium && { utm_medium }),
              ...(utm_placement && { utm_placement }),
              ...(utm_source && { utm_source }),
              ...(utm_term && { utm_term }),
            }),
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Accept: 'text/html',
            },
          });

          console.log(response);

          const result = await response.json();

          if (result.success && result.redirect && result.redirectPath) {
            // Handle navigating to app
            window.location.assign(result.redirectPath);
            return false;
          }
        } catch (error) {
          console.error(error);
          return false;
        }

        return false;
      });
    }
  }
};
