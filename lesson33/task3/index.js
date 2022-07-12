// active users

const baseUrl = 'api.github.com/repos/userId/repoId/commits?per_page=100';

const getMostActiveDevs = () => {
  return fetch(baseUrl).then(response => response.json());
};

getMostActiveDevs().then(result => {
  console.log(result);
});
