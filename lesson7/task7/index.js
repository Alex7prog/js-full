// increase even array elements by delta

// varint 1
// const increaseEvenEl = (arr, delta) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   return arr.map((elem) => (elem % 2 === 0 ? elem + delta : elem));
// };

// variant 2
const increaseEvenEl = (arr, delta) =>
  Array.isArray(arr)
    ? arr.map((elem) => (elem % 2 === 0 ? elem + delta : elem))
    : null;

console.log(increaseEvenEl([1, 3, 6, 7, 8, 9], 20));
console.log(increaseEvenEl([]));
