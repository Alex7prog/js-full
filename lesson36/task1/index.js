// Get user (async/await)

export const fetchUser = async userId => {
  try {
    const response = await fetch(`https://api.github.com/users/${userId}`);

    if (response.status === 404) {
      return null;
    }
    const userDate = await response.json();
    return userDate;
  } catch (err) {
    throw new Error('Failed to get user data');
  }
};

// test data
// getUser('facebook')
//   .then(userData => console.log(userData))
//   .catch(err => alert(err.message));

// getUser('faceboo')
//   .then(userData => console.log(userData))
//   .catch(err => alert(err.message));
