export const createRepoListItem = ({ name }) => {
  const repoListItem = document.createElement('li');
  repoListItem.classList.add('repo-list__item');
  repoListItem.textContent = name;

  return repoListItem;
};
