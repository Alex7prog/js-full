// Promise handlers

'use strict';

/**
 * @param {string} userId
 * @return {promise}
 */
export const requestUserData = userId => {
  const prRequestUserData = new Promise((rulfilled, rejected) => {
    if (userId === 'broken') {
      rejected(new Error('User not found'));
    }

    setTimeout(
      rulfilled({
        name: 'John',
        age: 17,
        userId,
        email: `${userId}@example.com`,
      }),
      1000,
    );
  });

  return prRequestUserData;
};

// test-data
// requestUserData('userid777')
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// requestUserData('broken')
//   .then(data => console.log(data))
//   .catch(error => console.log(error));
