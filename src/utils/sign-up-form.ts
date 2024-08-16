export const signUpForm = () => {
  const homePage = document.getElementById('home');

  if (homePage) {
    const signUpForm = document.forms[0];

    if (signUpForm.id === 'wf-form-signup-form') {
      signUpForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(signUpForm);
        const reqData = Object.fromEntries(formData.entries());
        reqData.ho_medium = 'cpc';
        reqData.pageId = 'some-uuid';

        try {
          const response = await fetch('https://app.heyorca.com/signup', {
            method: 'POST',
            body: JSON.stringify(reqData),
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          const result = await response.json();

          if (result.success && result.redirect && result.redirectPath) {
            // Handle sending data to HubSpot
            await fetch(
              `https://api.hsforms.com/submissions/v3/integration/submit/596637/497517de-b0f2-4351-b3ba-cf9109c4611a`,
              {
                keepalive: true,
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  submittedAt: Date.now(),
                  context: {
                    pageUri: 'heyorca.com',
                    pageName: document.title,
                  },
                  fields: [
                    {
                      objectTypeId: '0-1',
                      name: 'email',
                      value: reqData.email,
                    },
                    {
                      objectTypeId: '0-1',
                      name: 'industry_type',
                      value: reqData.industryType,
                    },
                    {
                      objectTypeId: '0-1',
                      name: 'self_reported_attribution',
                      value: reqData.source,
                    },
                  ],
                }),
              }
            );

            // Handle navigating to app
            window.location.assign(result.redirectPath);
          }
        } catch (error) {
          console.log(error);
        }

        return false;
      });
    }
  }
};
