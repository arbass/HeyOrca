/* eslint-disable no-console */

export const webinarPageStart = () => {
  const webinarPageStart_el = document.querySelector('#bigmarker-channel-widget-containerheyorca');
  if (webinarPageStart_el) {
    const webinarChecker = setInterval(webinarCardsMagic, 300);
    function webinarCardsMagic() {
      const winbinarsWidget_el = document.querySelector('.bigmarker-widget-out-box');
      winbinarsWidget_el?.removeAttribute('style');

      if (winbinarsWidget_el) {
        clearInterval(webinarChecker);
        const sectionWebinarGrid = document.querySelector('.webinars_list.is-clonable-parent');
        sectionWebinarGrid.classList.remove('hide');
        const embedListParent = document.querySelector('.bigmarker-widget-box-webinars-list');
        const embedList_childs = embedListParent.children;
        const embedList_childsArray = Array.from(embedList_childs);

        embedList_childsArray.forEach((embedCard, id) => {
          const currentName = embedCard.querySelector(
            '.bigmarker-widget-box-webinars-list-title a'
          ).textContent;
          const currentTime = embedCard.querySelector(
            '.bigmarker-widget-box-webinars-list-date'
          ).textContent;
          const currentButton = embedCard.querySelector(
            '.bigmarker-widget-box-webinars-list-link a'
          );
          const currentImageUrl = embedCard.querySelector('img').src;
          //–––
          const cloneAbleCard = document
            .querySelector('.card_item.is-webinar-card.is-cloneable')
            .cloneNode(true);
          cloneAbleCard.classList.remove('hide');
          const cloneAbleCard_waiter = document.querySelector('.webinars_list.is-clonable-parent');
          const cloneAbleCard_name = cloneAbleCard.querySelector('h3');
          const cloneAbleCard_time = cloneAbleCard.querySelector('.webinar-date-text');
          const cloneAbleCard_button = cloneAbleCard.querySelector(
            '.card_read-more-button_absolute'
          );
          const cloneAbleCard_image = cloneAbleCard.querySelector('img');

          cloneAbleCard_name.textContent = currentName;
          cloneAbleCard_time.textContent = currentTime;
          cloneAbleCard_image.src = currentImageUrl;
          cloneAbleCard_button.setAttribute('click-id-fake', id);
          cloneAbleCard_button.addEventListener('click', function () {
            currentButton.click();
          });

          cloneAbleCard_waiter.append(cloneAbleCard);
        });

        //–––––––
        winbinarsWidget_el.querySelector('.bigmarker-widget-title').textContent = '';
        winbinarsWidget_el.querySelector('.bigmarker-widget-box').removeAttribute('style');
        const webinarEmbed_cards = winbinarsWidget_el.querySelectorAll('li');
        webinarEmbed_cards.forEach((el) => {
          el.classList.add('hide');
        });
      }
    }
  }
};
