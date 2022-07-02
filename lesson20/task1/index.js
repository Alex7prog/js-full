// Object constructor

export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static createEmpty() {
    return new User('', null);
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(ageValue) {
    if (ageValue < 0) {
      return false;
    }

    this.age = ageValue;

    if (ageValue >= 25) {
      this.requestNewPhoto();
    }

    return ageValue;
  }
}

const userOne = new User('John', 19);
const userEmpty = User.createEmpty();

console.log('userOne: ', userOne);
console.log('userEmpty: ', userEmpty);

userOne.sayHi();

userOne.requestNewPhoto();

console.log(userOne.setAge(18));
console.log('userOne: ', userOne);

console.log(userOne.setAge(25));
console.log('userOne: ', userOne);

console.log(userOne.setAge(-5));
console.log('userOne: ', userOne);
