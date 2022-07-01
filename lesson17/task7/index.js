export const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(strFullName) {
    [this.firstName, this.lastName] = strFullName.split(' ');
  },
};

user.setFullName('Tom Smith');
console.log('user: ', user);
