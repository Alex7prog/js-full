// defer(func, ms) => Function
// defer в данном случае функция обертка

const user = {
  name: 'Tom',
  sayHi() {
    console.log(`Hi! I'am ${this.name}`);
  },
};

// const defferedUser = defer(user.sayHi, 1000); // потеря контекста

// defferedUser(); // Hi! I'am

// 1й вариант

// const defferedUser = defer(user.sayHi.bind(user), 1000);

// defferedUser(); // Hi! I'am Tom

// 2й вариант

export function defer(func, ms) {
  return function () {
    // setTimeout(() => func.call(this, ...arguments), ms);
    // or
    setTimeout(() => func.apply(this, arguments), ms);
  };
}

const defferedUser = defer(user.sayHi.bind(user), 1000);

defferedUser();
// defferedUser.call({ name: 'Bob' }); // Hi! I'am Bob
