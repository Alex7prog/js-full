import { onUserSearch } from './onActions.js';

export const initHandlers = () => {
  const showUserBtnElem = document.querySelector('.name-form__btn');

  showUserBtnElem.addEventListener('click', onUserSearch);
};
