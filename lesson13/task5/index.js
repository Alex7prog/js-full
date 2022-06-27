// Unit tests for previous tasks:
// array reverse
// withdraw
// getAdults

export const reverseArray = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.slice().reverse();
};

export const withdraw = (clients, balances, client, amount) =>
  balances[clients.indexOf(client)] > amount ? (balances[clients.indexOf(client)] -= amount) : -1;

// for a question to the mentor:
// {
// if (balances[clients.indexOf(client)] > amount) {
//   return (balances[clients.indexOf(client)] -= amount);
// }
// return -1;
// }

export const getAdults = users => {
  if (!Object.keys(users).length) {
    return {};
  }

  return Object.fromEntries(Object.entries(users).filter(user => user[1] >= 18));
};
