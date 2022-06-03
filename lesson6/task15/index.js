'use strict';

/**
 * @param {number[]} arr
 * @param {number} num
 * @return {boolean}
 */
const includes = (arr, num) => {
  for (const elem of arr) {
    if (elem === num) {
      return true;
    }
  }

  return false;
};

// examples
includes([1, 4, 8, 3], 3); // ==> true
console.log('includes([1, 4, 8, 3], 3): ', includes([1, 4, 8, 3], 3));
includes([1, 4, 8, 3], 5); // ==> false
console.log('includes([1, 4, 8, 3], 5): ', includes([1, 4, 8, 3]));
