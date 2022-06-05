// average

const arrAverage = (arr) =>
  Array.isArray(arr)
    ? arr.reduce((accum, elem) => (accum += elem), 0) / arr.length
    : null;

console.log(arrAverage([2, 5, 6, 3]));
