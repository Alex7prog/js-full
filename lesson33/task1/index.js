// GET request with fetch

// Algo:
// get the necessary page elements
// event click on Show button => get input userName => fetch(userName) => render user data on page
// https://api.github.com/users/USERNAME

const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

const userNameInputElem = document.querySelector('.name-form__input');
const showUserButtonElem = document.querySelector('.name-form__btn');

const defaultAvatar = 'https://avatars.githubusercontent.com/u/0?v=4';
userAvatarElem.src = defaultAvatar;

const fetchUserData = userName => {
  return fetch(`https://api.github.com/users/${userName}`) // GET, can't use options
    .then(response => response.json());
};

const renderUserData = userData => {
  const { avatar_url, name, location } = userData;

  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : '';
};

const onSearchUser = () => {
  if (userNameInputElem.value === '') {
    return;
  }

  const userName = userNameInputElem.value;

  fetchUserData(userName).then(userData => renderUserData(userData));
};

showUserButtonElem.addEventListener('click', onSearchUser);
