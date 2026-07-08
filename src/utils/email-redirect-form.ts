export const emailRedirectForm = () => {
  const homePage = document.getElementById('home');

  if (homePage) {
    const emailRedirectForm = document.getElementById('email-redirect-form');

    if (emailRedirectForm) {
      const SIGNUP_URL = 'https://app.heyorca.com/signup';
      const pageId = '9366b56d-11b8-4f9f-bcbe-797bca4fe540';

      const UTM_KEYS = [
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'utm_content',
        'utm_term',
        'utm_placement',
        'utm_device',
      ] as const;

      emailRedirectForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const incoming = new URLSearchParams(window.location.search);
        const outgoing = new URLSearchParams();

        const emailInput = emailRedirectForm.querySelector<HTMLInputElement>('[name="email"]');
        if (emailInput?.value) {
          outgoing.set('email', emailInput.value.trim());
        }

        outgoing.set('pageId', pageId);

        UTM_KEYS.forEach((key) => {
          const value = incoming.get(key);
          if (value) outgoing.set(key, value);
        });

        window.location.assign(`${SIGNUP_URL}?${outgoing.toString()}`);
      });
    } else {
      console.error('Email redirect form not found!');
    }
  }
};
