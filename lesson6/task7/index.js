'use strict';

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkSum = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  let sum = 0;

  for (const elem of arr) {
    sum += elem;
  }

  if (sum > 100) {
    return true;
  } else {
    return false;
  }
};

// examples
checkSum([10, 10, 10]); // ===> false
console.log('checkSum([10, 10, 10]): ', checkSum([10, 10, 10]));
checkSum([10, 99, 1]); // ===> true
console.log('checkSum([10, 99, 1]): ', checkSum([10, 99, 1]));
checkSum([-6, -3, 200]); // ===> true
console.log('checkSum([-6, -3, 200]): ', checkSum([-6, -3, 200]));
