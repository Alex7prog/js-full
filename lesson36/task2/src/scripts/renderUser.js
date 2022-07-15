/* eslint-disable camelcase */
export const renderUserData = ({ avatar_url, name, location }) => {
  const userAvatarElem = document.querySelector('.user__avatar');
  const userNameElem = document.querySelector('.user__name');
  const userLocationElem = document.querySelector('.user__location');

  if (avatar_url) {
    userAvatarElem.src = avatar_url;
  }
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : '';
};

export const createRepoListItem = name => {
  const repoListItem = document.createElement('li');
  repoListItem.classList.add('repo-list__item');
  repoListItem.textContent = name;

  return repoListItem;
};

const userRepoListElem = document.querySelector('.repo-list');

export const cleanRepoListHTML = () => {
  userRepoListElem.innerHTML = '';
};

export const renderUserRepos = userReposArr => {
  const repoListItemsElems = userReposArr.map(({ name }) => createRepoListItem(name));

  cleanRepoListHTML();
  userRepoListElem.append(...repoListItemsElems);
};
