/* eslint-disable no-console */

export const func_utmChecker = () => {
  const array_forms = document.querySelectorAll('form');
  if (array_forms.length) {
    function setUTMParameters() {
      const params = new URLSearchParams(window.location.search);
      const utmKeys = [
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'utm_content',
        'utm_term',
        'utm_placement',
        'utm_device',
      ];

      utmKeys.forEach((key) => {
        const value = params.get(key);
        if (value) {
          const inputFields = document.querySelectorAll('.' + key);
          if (inputFields.length) {
            inputFields.forEach((field) => {
              field.value = value;
            });
          }
        }
      });
    }

    window.onload = setUTMParameters;
  }
};
