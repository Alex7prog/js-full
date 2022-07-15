const baseUrl = `https://api.github.com/users/`;

export const requestUserData = async userName => {
  const response = await fetch(`${baseUrl}${userName}`);
  if (response.ok) {
    const responseJSON = await response.json();
    return responseJSON;
  }
  throw new Error('Failed to load data');
};

// question for mentor
export const requestUserRepos = async reposUrl => {
  const response = await fetch(`${reposUrl}`);
  if (response.ok) {
    const responseJSON = await response.json();
    return responseJSON;
  }
  throw new Error('Failed to load data');
};
