// Users blog (async/await)

// in: [string] / out Promise() => [blog links]
const baseUrl = 'https://api.github.com/users';

export const getUsersBlogs = async users => {
  const prUsersBlogLink = await Promise.all(
    users.map(user => {
      const responseUserBlog = fetch(`${baseUrl}/${user}`)
        .then(responseUser => responseUser.json())
        .then(userData => userData.blog)
        .catch(error => new Error(error));

      return Promise.resolve(responseUserBlog);
    }),
  );
  return prUsersBlogLink;
};

// examples
// getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
// getUsersBlogs(['microsoft']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
