// 'use strict';

const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  const incArr = [...arr];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      incArr[i] = arr[i] + delta;
    }
  }

  return incArr;
};

// examples
// increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20); // ===> [22, 5, 26, 28, 11, 9, 24]
console.log(
  'increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20): ',
  increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20)
);
// increaseEvenEl([7, 11, 1], 10); // ===> [7, 11, 1]
console.log('increaseEvenEl([7, 11, 1], 10): ', increaseEvenEl([7, 11, 1], 10));
// increaseEvenEl([], 120); // ===> []
console.log('increaseEvenEl([], 120): ', increaseEvenEl([], 120));
