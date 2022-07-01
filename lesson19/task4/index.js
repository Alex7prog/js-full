// object user

export default {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(fullNameStr) {
    [this.firstName, this.lastName] = fullNameStr.split(' ');
  },
};

// console.log(user);

// console.log(user.fullName);

// user.fullName = 'Tom Hardy';
// console.log(user.fullName);
// console.log(user);

// user.fullName = 'John Doe';
// console.log(user.fullName);
// console.log(user);
