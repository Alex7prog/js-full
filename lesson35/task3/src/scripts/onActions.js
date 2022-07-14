import { renderUserData, renderUserRepos } from './renderUser.js';
import { requestUserData, requestUserRepos } from './requestsUser.js';

export const showSpinner = visible => {
  const spinnerElem = document.querySelector('.spinner');

  if (visible) {
    spinnerElem.classList.remove('spinner_hidden');
    return;
  }

  spinnerElem.classList.add('spinner_hidden');
};

export const onUserSearch = () => {
  const userNameInputElem = document.querySelector('.name-form__input');

  if (userNameInputElem.value === '') {
    return;
  }

  const userName = userNameInputElem.value;
  userNameInputElem.value = '';

  showSpinner(true);
  requestUserData(userName)
    .then(userData => {
      showSpinner(false);
      renderUserData(userData);
      return userData;
    })
    .then(userData => requestUserRepos(userData))
    .then(userRepos => {
      renderUserRepos(userRepos);
    })
    .catch(() => {
      showSpinner(false);
      alert('failed to load data');
    });
};
