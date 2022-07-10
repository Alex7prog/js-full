// Promise handlers

'use strict';

/**
 * @param {string} userId
 * @return {promise}
 */
export const requestUserData = userId => {
  const prRequestUserData = new Promise((rulfilled, rejected) => {
    if (userId === 'broken') {
      setTimeout(() => {
        rejected(new Error('User not found'));
      }, 500);
    }

    setTimeout(() => {
      rulfilled({
        name: 'John',
        age: 17,
        userId,
        email: `${userId}@example.com`,
      });
    }, 1000);
  });

  return prRequestUserData;
};

// test-data
requestUserData('userid777')
  .then(user => console.log(user))
  .catch(error => console.log(error));

requestUserData('broken')
  .then(user => console.log(user))
  .catch(error => console.log(error));
