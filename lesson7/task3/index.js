// [1, [2, 3, 4], 5, [6]] => [1, 2, 3, 4, 5, 6]

// 1. method .reduce()

// const flatArray = (arr) => {
//   const flatArray = arr.reduce((accum, elem) => {
//     return accum.concat(elem);
//   }, []);
//   return flatArray;
// };

// code refactoring

// const flatArray = (arr) => arr.reduce((accum, elem) => accum.concat(elem), []);

// 2. method .flat() - !!! new method, not all browsers support (check on caniuse.com)

const flatArray = (arr) =>
  arr
    .slice()
    .flat()
    .sort((a, b) => a - b);

const arr = [1, [2, 3], 18, 24, [5, 33, 7, 11]];
console.log(flatArray(arr));
console.log(arr);

// method .reduce() - analysis

// [1, 2, 3, 4] => 10 // sum 10

// [1, 2, 3, 4].reduce(function (accum, num) { return accum + num; }, 0);

// 1: 0, 1 => 1
// 2: 1, 2 => 3
// 3: 3, 3 => 6
// 4: 6, 4 => 10
