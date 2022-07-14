const baseUrl = `https://api.github.com/users/`;

export const requestUserData = userName => {
  return fetch(`${baseUrl}${userName}`).then(response => response.json());
};

export const requestUserRepos = ({ repos_url }) => {
  return fetch(`${repos_url}`).then(response => response.json());
};
