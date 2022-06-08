// numbers check

const getFiniteNumbers = (numArr) =>
  numArr.filter((num) => Number.isFinite(num));

const getFiniteNumbersV2 = (numArr) => numArr.filter((num) => isFinite(num));

const getNaN = (numArr) => numArr.filter((num) => Number.isNaN(num));

const getNaNV2 = (numArr) => numArr.filter((num) => isNaN(num));

const getIntegers = (numArr) => numArr.filter((num) => Number.isInteger(num));

const arr = [
  0,
  1,
  '2',
  3.54,
  '-2.5',
  -10,
  '17abs',
  NaN,
  Infinity,
  -Infinity,
  undefined,
];

console.log('getFiniteNumbers: ', getFiniteNumbers(arr));
console.log('getFiniteNumbers: ', getFiniteNumbersV2(arr));
console.log('getFiniteNumbers: ', getNaN(arr));
console.log('getFiniteNumbers: ', getNaNV2(arr));
console.log('getFiniteNumbers: ', getIntegers(arr));
