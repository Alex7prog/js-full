const baseUrl = `https://api.github.com/users/`;

export const requestUserData = userName => {
  return fetch(`${baseUrl}${userName}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('failed to load data');
  });
};

export const requestUserRepos = reposUrl => {
  return fetch(`${reposUrl}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('failed to load data');
  });
};
