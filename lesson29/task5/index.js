// Load user data

/**
 * @param {string} userId
 * @param {function} callback
 * @return {undefined}
 */

const randomDelay = function (max) {
  return Math.round(1 + Math.random() * (max - 1)) * 1000;
};

export const requestUserData = (userId, callback) => {
  if (userId === 'broken') {
    setTimeout(callback.bind(requestUserData, null, 'Failed to load user data'), randomDelay(3));
    return;
  }

  const userObj = {
    userId,
    email: `${userId}@example.com`,
  };

  setTimeout(callback.bind(requestUserData, userObj), randomDelay(3));
};

const callbackFunc = (userObj, msg) => {
  if (!userObj) {
    return msg;
  }

  return userObj;
};

// test-data
// requestUserData('userid777', callbackFunc);
// requestUserData('broken', callbackFunc);
