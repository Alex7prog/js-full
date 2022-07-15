import { cleanRepoListHTML, renderUserData, renderUserRepos } from './renderUser.js';
import { requestUserData, requestUserRepos } from './requestsUser.js';
import { hideSpinner, showSpinner } from './spinner.js';

export const onUserSearch = () => {
  const userNameInputElem = document.querySelector('.name-form__input');

  if (userNameInputElem.value === '') {
    return;
  }

  cleanRepoListHTML();
  showSpinner();

  const userName = userNameInputElem.value;
  userNameInputElem.value = '';

  requestUserData(userName)
    .then(userData => {
      renderUserData(userData);
      return userData.repos_url;
    })
    .then(userReposUrl => requestUserRepos(userReposUrl))
    .then(userReposList => {
      renderUserRepos(userReposList);
    })
    .catch(error => {
      alert(error.message);
    })
    .finally(() => hideSpinner());
};

export const initHandlers = () => {
  const showUserBtnElem = document.querySelector('.name-form__btn');

  showUserBtnElem.addEventListener('click', onUserSearch);
};
