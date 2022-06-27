// function calc test with jest

import { calc } from './calculator.js';

it('should get min suare of number from array or null', () => {
  expect(calc('5 + 2')).toEqual('5 + 2 = 7');
  expect(calc('5 - 2')).toEqual('5 - 2 = 3');
  expect(calc('5 * 2')).toEqual('5 * 2 = 10');
  expect(calc('5 / 2')).toEqual('5 / 2 = 2.5');
  expect(calc(5)).toEqual(null);
  expect(calc(['5 + 2'])).toEqual(null);
});
