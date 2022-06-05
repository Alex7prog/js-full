// Withdraw

'use strict';

const withdraw = (clients, balances, client, amount) =>
  // variant 1
  // balances[clients.indexOf(client)] > amount
  //     ? (balances[clients.indexOf(client)] -= amount)
  //     : -1;
  {
    if (balances[clients.indexOf(client)] > amount) {
      return (balances[clients.indexOf(client)] -= amount);
    }

    return -1;
  };
// example 1:

// input
const arrBalances = [1400, 87, -6];

withdraw(['Ann', 'John', 'User'], arrBalances, 'John', 50);
console.log('arrBalances: ', arrBalances);

// output
// 37
// и массив balances должен быть [1400, 37, -6]

// example 2:

// input
withdraw(['Ann', 'John', 'User'], arrBalances, 'User', 10);
console.log(withdraw(['Ann', 'John', 'User'], arrBalances, 'User', 10));
console.log('arrBalances: ', arrBalances);
// output
// -1
// и массив balances должен быть [1400, 87, -6]
