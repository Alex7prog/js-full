import { renderUserData } from './renderUser.js';

export const initDefaultUser = () => {
  const defaultAvatarUrl = 'https://avatars.githubusercontent.com/u/0?v=4';
  // const defaultAvatarUrl = 'https://avatars3.githubusercontent.com/u10001';

  const defaultUser = {
    avatar_url: defaultAvatarUrl,
    name: '',
    location: '',
  };

  renderUserData(defaultUser);
};
