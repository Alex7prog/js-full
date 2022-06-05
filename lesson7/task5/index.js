// array of number => array of square number

const squareArray = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.map((num) => num * num);
};

console.log(squareArray([1, 3, 6, 7, 8, 9]));
console.log(squareArray([]));
