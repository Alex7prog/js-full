// obj constructor User

export function User(name, age) {
  this.name = name;
  this.age = age;
  User.prototype.sayHi = function () {
    console.log(`Hi, I am ${this.name}`);
  };
  User.prototype.requestNewPhoto = function () {
    console.log(`New photo request was sent for ${this.name}`);
  };
  User.prototype.setAge = function (ageValue) {
    if (ageValue < 0) {
      return false;
    }

    this.age = ageValue;

    if (ageValue >= 25) {
      this.requestNewPhoto();
    }

    return ageValue;
  };
}

const userOne = new User('Tom', 17);

console.log(userOne);

userOne.sayHi();
userOne.requestNewPhoto();

console.log(userOne.setAge(-1));
console.log(userOne.age);

console.log(userOne.setAge());
console.log(userOne.age);

console.log(userOne.setAge(18));
console.log(userOne.age);

console.log(userOne.setAge(25));
console.log(userOne.age);

console.log(userOne.setAge(0));
console.log(userOne.age);

const userTwo = new User('Bob', 21);
console.log(userTwo);
