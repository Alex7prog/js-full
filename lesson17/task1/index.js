// Function execution context, context (this) - part 1

export const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

// // в JS this динамический и определяется в момент вызова функции
// user.getFullName(); // контекст объекта User
console.log('user.getFullName(): ', user.getFullName());

// const funcOne = user.getFullName;

// funcOne(); // произойдет потеря контекста функции // undefined undefined

// // .bind() - привязывает контекст к функции, который нельзя потом переопределить

// const funcTwo = user.getFullName.bind(user);

// funcTwo(); // John Doe

// const funcThree = user.getFullName;

// // funcThree.call(user); // еще один метод привязки к контексту //John Doe

// // funcThree.call({ firstName: 'Tom', lastName: 'Smith' }); // Tom Smith

// funcThree.apply({ firstName: 'Tom', lastName: 'Smith' }); // Tom Smith

// // ----------------------

// const userTwo = {
//   name: 'John',
//   sayHi(age, message) {
//     console.log(`${message} I'm ${this.name}. I'm ${age} years is old.`);
//   },
// };

// // const funcUser = userTwo.sayHi(17, 'Hello'); // Hello I'm John. I'm 17 years is old.

// const funcUser = userTwo.sayHi;

// // funcUser(17, 'Hello'); // Hello I'm . I'm 17 years is old.

// // funcUser.apply({ name: 'Tom' }); // undefined I'm Tom. I'm undefined years is old.

// // метод apply идентичен call, только умеет еще принимать аргументы в виде массива
// // funcUser.apply({ name: 'Tom' }, [17, 'Hello']); // Hello I'm Tom. I'm 17 years is old.

// // или к примеру:

// const anotherUser = {
//   name: 'Tom',
// };

// // funcUser.apply(anotherUser, [17, 'Hello']); // Hello I'm Tom. I'm 17 years is old.

// // call принимает в виде аргументов через ,
// funcUser.call(anotherUser, 17, 'Hello'); // Hello I'm Tom. I'm 17 years is old.
