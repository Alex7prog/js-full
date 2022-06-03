function withdraw(clients, balances, client, amount) {
  for (let i = 0; i < clients.length; i++) {
    if (clients[i] === client) {
      if (balances[i] > amount) {
        balances[i] -= amount;
        return balances[i];
      }
    }
  }
  return -1;
}

// withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
console.log(
  "withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50): ",
  withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)
);

// withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
console.log(
  "withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10): ",
  withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)
);
