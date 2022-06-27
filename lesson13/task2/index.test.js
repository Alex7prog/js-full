// separate code and test

import getSum, { getSquaredNumbers, getOddNumbers } from './calculator.js';

it('should get squared numbers', () => {
  const result = getSquaredNumbers([0, 1, 2, 3]);
  expect(result).toEqual([0, 1, 4, 9]);
});

it('should kepp odd numbers', () => {
  const result = getOddNumbers([1, 2, 3, 4, 5]);
  expect(result).toEqual([1, 3, 5]);
});

it('should get sum of two numbers', () => {
  const result = getSum(7, 9);
  expect(result).toEqual(16);
});
