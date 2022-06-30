// Borrowing method {wallet}

export const wallet = {
  transactions: [-55, 110, 15, 64, 337],
  getMax() {
    return Math.max(...this.transactions);
  },
  getMin() {
    return Math.min(...this.transactions);
  },
};

console.log(wallet.getMax());
console.log(wallet.getMin());
