// function bind

// export function saveFuncCalls(func) {
//   const argsArr = [];

//   function withMemory(...args) {
//     argsArr.push(args);

//     withMemory.callsHistory = argsArr;

//     return func.call(this, ...args);
//   }

//   return withMemory;
// }

export function bind(func, context, ...funcArg) {
  if (!bind.context) {
    bind.context = context;
  }

  bind.argum = funcArg;
  func.call(bind.context, ...bind.argum);

  return func;
}

const userOne = {
  name: 'Tom',
  sayHi(msg) {
    console.log(`${this.name} ${msg}`);
  },
};

const userTwo = {
  name: 'John',
  sayHi(msg) {
    console.log(`${this.name} ${msg}`);
  },
};

bind(userOne.sayHi, userOne, 'Hello!');
bind(userTwo.sayHi, userTwo, 'Hi!');
console.log(bind.context);
console.log(bind.argum);
