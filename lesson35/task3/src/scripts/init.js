export const init = () => {
  const userAvatarElem = document.querySelector('.user__avatar');
  const defaultAvatarUrl = 'https://avatars.githubusercontent.com/u/0?v=4';

  userAvatarElem.src = defaultAvatarUrl;
};
