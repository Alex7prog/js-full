function isExist(arr, elem) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
      return true;
    }
  }

  return false;
}

function uniqueCount(array) {
  if (!Array.isArray(array)) {
    return null;
  }

  const noDuplArr = [];

  for (let i = 0; i < array.length; i++) {
    if (!isExist(noDuplArr, array[i])) {
      noDuplArr.push(array[i]);
    }
  }
  return noDuplArr.length;
}

console.log(uniqueCount([1, 2, 3, 3, 4, 4, 5, 6, 6, 7, 8]));

// console.log(isExist([1, 2, 3, 3, 4, 4, 5, 6, 6, 7, 8], 2));
// console.log(isExist([1, 2, 3, 3, 4, 4, 5, 6, 6, 7, 8], 0));
// console.log(isExist([], 2));
