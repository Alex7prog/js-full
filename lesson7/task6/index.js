// array reverse

const reverseArray = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.slice().reverse();
};

console.log(reverseArray([1, 3, 6, 7, 8, 9]));
console.log(reverseArray([]));
