'use strict';

/**
 * @param {number} from
 * @param {number} to
 * @return {number}
 */
function sum(from, to) {
  let sum = 0;

  for (let i = from; i <= to; i += 1) {
    sum += i;
  }

  return sum;
}

/**
 * @param {number} firstFrom
 * @param {number} firstTo
 * @param {number} secondFrom
 * @param {number} secondTo
 * @return {boolean}
 */
function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  if (sum(firstFrom, firstTo) > sum(secondFrom, secondTo)) {
    return true;
  } else {
    return false;
  }
}

// examples
sum(5, 10); // ===> 45
sum(11, 11); // ===> 11

compareSums(5, 10, 5, 10); // ===> false
compareSums(5, 15, 3, 5); // ===> true
compareSums(-2, 5, 5, 9); // ===> false
