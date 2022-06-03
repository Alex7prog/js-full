function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  return [...arr];
}

const originalArray = [1, 2, 3, 4, 5];

let clArr = cloneArr(originalArray);

clArr[0] = 100;
console.log(clArr);
console.log(originalArray);
