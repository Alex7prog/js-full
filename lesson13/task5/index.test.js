// Unit tests for previous tasks:
// array reverse
// withdraw
// getAdults

import { reverseArray, withdraw, getAdults } from './index.js';

it('function reverseArray', () => {
  const arr = [1, 3, 6, 7, 8, 9];
  expect(reverseArray(arr)).toEqual([9, 8, 7, 6, 3, 1]);
  expect(reverseArray('foo string')).toEqual(null);
  expect(reverseArray(555)).toEqual(null);
  expect(arr).toEqual([1, 3, 6, 7, 8, 9]);
});

it('function withdraw', () => {
  const arrBalances = [1400, 87, -6];

  expect(withdraw(['Ann', 'John', 'User'], arrBalances, 'John', 50)).toEqual(37);
  expect(arrBalances).toEqual([1400, 37, -6]);
  expect(withdraw(['Ann', 'John', 'User'], arrBalances, 'User', 10)).toEqual(-1);
  expect(arrBalances).toEqual([1400, 37, -6]);
});

it('function getAdults', () => {
  const objUsers = { 'John Doe': 19, Tom: 17, Bob: 18 };

  expect(getAdults(objUsers)).toEqual({ 'John Doe': 19, Bob: 18 });
  expect(objUsers).toEqual({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(Object.keys(getAdults({})).length).toEqual(0);
});
