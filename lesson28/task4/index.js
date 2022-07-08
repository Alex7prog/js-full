// compose

// compose():
// in: (...funcsArg) / out: function/number

export const compose =
  (...funcs) =>
  value =>
    funcs.reduce((acc, func) => func(acc), value);

const add2 = value => value + 2;
const square = value => value * value;
const half = value => value / 2;

// test-data

const superFunc = compose(add2, square, half);
console.log(superFunc(4)); // 18
