export const signUpForm = () => {
  const homePage = document.getElementById('home');

  if (homePage) {
    const signUpForm = document.forms[0];

    if (signUpForm.id === 'wf-form-signup-form') {
      signUpForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(signUpForm);
        const reqData = Object.fromEntries(formData.entries());
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
            // Handle navigating to app
            window.location.assign(result.redirectPath);
            return false;
          }
        } catch (error) {
          console.log(error);
          return false;
        }

        return false;
      });
    }
  }
};
