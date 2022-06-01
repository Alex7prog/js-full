'use strict';

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swap(numbers) {
  const [start, ...rest] = numbers;
  return [...rest, start];
}

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swapManual(numbers) {
  const arrSwap = [];

  for (let i = 1; i < numbers.length; i++) {
    arrSwap[i - 1] = numbers[i];
  }
  arrSwap.push(numbers[0]);

  return arrSwap;
}

// examples
swap([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
console.log('swap([1, 10, 9, 11]): ', swap([1, 10, 9, 11]));
swapManual([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
console.log('swapManual([1, 10, 9, 11]): ', swapManual([1, 10, 9, 11]));
