// protect class props

export class Wallet {
  #balance = 0;

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log('No enough funds');
      return;
    }

    this.#balance -= amount;
  }
}

const walletOne = new Wallet();

console.log('walletOne: ', walletOne);

walletOne.deposit(100);
console.log(walletOne.getBalance());

walletOne.withdraw(20);
console.log(walletOne.getBalance());

walletOne.withdraw(100);
console.log(walletOne.getBalance());
