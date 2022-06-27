// separate code and test

import getMinSquaredNumber from './getMinSquaredNumber.js';

it('should get min suare of number from array or null', () => {
  expect(getMinSquaredNumber([-777, 3, -2, 6, 45, -20])).toEqual(4);
  expect(getMinSquaredNumber('foo string')).toEqual(null);
  expect(getMinSquaredNumber([])).toEqual(null);
});
