import { createRepoListItem } from './createRepoList.js';

export const renderUserData = ({ avatar_url, name, location }) => {
  const userNameElem = document.querySelector('.user__name');
  const userLocationElem = document.querySelector('.user__location');
  const userAvatarElem = document.querySelector('.user__avatar');

  // eslint-disable-next-line camelcase
  if (avatar_url) {
    // eslint-disable-next-line camelcase
    userAvatarElem.src = avatar_url;
  }
  userNameElem.textContent = name;
  userLocationElem.textContent = `from ${location}`;
};

export const renderUserRepos = userRepos => {
  const userRepoList = document.querySelector('.repo-list');
  userRepoList.innerHTML = '';

  const repoList = userRepos.map(createRepoListItem);

  userRepoList.append(...repoList);
};
