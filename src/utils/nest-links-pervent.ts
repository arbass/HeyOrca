/* eslint-disable no-console */

export const nestLinkPervent = () => {
  const links = document.querySelectorAll('[nest-links-pervent]');
  if (links.length) {
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
      });
    });
  }
};
