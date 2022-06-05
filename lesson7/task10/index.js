// clone array

const sum = (arr) =>
  Array.isArray(arr) ? arr.reduce((accum, elem) => (accum += elem), 0) : null;

console.log(sumArr([1, 3, 6, 7, 8]));
console.log(sumArr([]));
console.log(sumArr(2));
