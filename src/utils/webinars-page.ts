/* eslint-disable no-console */

export const webinarPageStart = () => {
  const webinarPageStart_el = document.querySelector('#bigmarker-channel-widget-containerheyorca');
  if (webinarPageStart_el) {
    const webinarChecker = setInterval(webinarCardsMagic, 300);
    function webinarCardsMagic() {
      const winbinarsWidget_el = document.querySelector('.bigmarker-widget-out-box');
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
            '.card_read-more-button.is-webinar'
          );
          const cloneAbleCard_image = cloneAbleCard.querySelector('img');

          cloneAbleCard_name.textContent = currentName;
          cloneAbleCard_time.textContent = currentTime;
          cloneAbleCard_image.src = currentImageUrl;
          cloneAbleCard_button.setAttribute('click-id-fake', id);
          cloneAbleCard_button.addEventListener('click', function () {
            currentButton.click();
            console.log(currentButton);
          });

          cloneAbleCard_waiter.append(cloneAbleCard);
        });

        //–––––––
        //у элемента webinarPageStart_el все дочерние и вложенные элементы кроме тех у которых есть класс register_form_in_modal удалить классы
      }
    }
  }
};
