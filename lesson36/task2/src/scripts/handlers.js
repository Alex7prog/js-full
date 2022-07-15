import { cleanRepoListHTML, renderUserData, renderUserRepos } from './renderUser.js';
import { requestUserData, requestUserRepos } from './requestsUser.js';
import { hideSpinner, showSpinner } from './spinner.js';

export const onUserSearch = async () => {
  const userNameInputElem = document.querySelector('.name-form__input');

  if (userNameInputElem.value === '') {
    return;
  }

  cleanRepoListHTML();
  showSpinner();

  const userName = userNameInputElem.value;

  try {
    const userData = await requestUserData(userName);
    renderUserData(userData);
    const userReposList = await requestUserRepos(userData.repos_url);
    renderUserRepos(userReposList);
    userNameInputElem.value = '';
  } catch (error) {
    alert(error.message);
  } finally {
    hideSpinner();
  }
};

export const initHandlers = () => {
  const showUserBtnElem = document.querySelector('.name-form__btn');

  showUserBtnElem.addEventListener('click', onUserSearch);
};
