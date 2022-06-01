'use strict';

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  const sqrArr = [...arr];

  for (let i = 0; i < sqrArr.length; i++) {
    sqrArr[i] *= sqrArr[i];
  }

  return sqrArr;
}

// examples
squareArray([1, 10, 9, 11]); // ==> [1, 100, 81, 121]
console.log('squareArray([1, 10, 9, 11]): ', squareArray([1, 10, 9, 11]));
squareArray([10, 0, -4]); // ==> [100, 0, 16]
console.log('squareArray([10, 0, -4]): ', squareArray([10, 0, -4]));
squareArray([1]); // ==> [1]
console.log('squareArray([1]): ', squareArray([1]));
console.log('squareArray(1): ', squareArray(1));
