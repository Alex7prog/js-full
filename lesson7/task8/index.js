// clone array

const cloneArr = (arr) => (Array.isArray(arr) ? [...arr].slice() : null);

console.log(cloneArr([1, 3, 6, 7, 8, 9]));
console.log(cloneArr([]));
