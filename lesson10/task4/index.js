// max absolute number

'use strict';

/**
 * @param {number[]} arr
 * @return {number}
 */
const getMaxAbsoluteNumber = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }

  return Math.max(...arr.map((num) => Math.abs(num)));
};

// examples
getMaxAbsoluteNumber([-10, 10, -10]); // ===> 10
console.log(getMaxAbsoluteNumber([-10, 10, -10]));
getMaxAbsoluteNumber([2.1, 0, 1.6]); // ===> 2.1
console.log(getMaxAbsoluteNumber([2.1, 0, 1.6]));
getMaxAbsoluteNumber([-6, 3, 5, -1]); // ===> 6
console.log(getMaxAbsoluteNumber([-6, 3, 5, -1]));
getMaxAbsoluteNumber([-777, 3, -1, 45, -20]); // ===> 777
console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20]));
console.log(getMaxAbsoluteNumber([]));
console.log(getMaxAbsoluteNumber({}));
