// numbers parsing

const getParsedIntegers = (arrNumbers) =>
  arrNumbers.map((num) => Number.parseInt(num));

const getParsedIntegersV2 = (arrNumbers) =>
  arrNumbers.map((num) => parseInt(num));

const getParsedFloats = (arrNumbers) =>
  arrNumbers.map((num) => Number.parseFloat(num));

const getParsedFloatsV2 = (arrNumbers) =>
  arrNumbers.map((num) => parseFloat(num));

const arr = [
  0,
  1,
  '2',
  3.54,
  '-2.5',
  -10,
  '17abs',
  'i29',
  NaN,
  Infinity,
  -Infinity,
  undefined,
];

console.log(getParsedIntegers(arr));
console.log(getParsedIntegersV2(arr));
console.log(getParsedFloats(arr));
console.log(getParsedFloatsV2(arr));
