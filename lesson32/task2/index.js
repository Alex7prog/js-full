// Promises race

// getUserASAP()
// in: string (userId) // out: Promise

const servers = ['https://server.com/us', 'https://server.com/eu', 'https://server.com/au'];

const getRandom = (from, to) => from + Math.random() * (to - from);

const request = userUrl =>
  new Promise(resolve => {
    const randomDelay = getRandom(1000, 3000);
    setTimeout(() => {
      resolve({
        userData: {
          name: 'Tom',
          age: 17,
        },
        source: userUrl,
      });
    }, randomDelay);
  });

export const getUserASAP = userId => {
  const userUrls = servers.map(serverUrl => `${serverUrl}/${userId}`);
  const requests = userUrls.map(userUrl => request(userUrl));

  return Promise.race(requests);
};

// test-data
// getUserASAP('user-id777').then(result => console.log(result));
