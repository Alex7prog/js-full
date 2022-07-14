export const init = () => {
  const userAvatarElem = document.querySelector('.user__avatar');
  // const defaultAvatarUrl = 'https://avatars.githubusercontent.com/u/0?v=4';
  const defaultAvatarUrl = 'https://avatars3.githubusercontent.com/u10001';

  userAvatarElem.src = defaultAvatarUrl;
};
