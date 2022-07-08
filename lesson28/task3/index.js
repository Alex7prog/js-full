// mult (currying)

// mult:
// in: number / out: function/number

export const mult = numOne => numTwo => numOne * numTwo;

export const twice = mult(2);
export const triple = mult(3);

// test-data

const result = mult(2);
console.log('result: ', mult(2)); // numTwo => numOne * numTwo
console.log('result: ', mult(2, 5)); // numTwo => numOne * numTwo
console.log('result: ', mult(2)(5)); // 10

console.log('result: ', twice(9)); // 18
console.log('result: ', triple(9)); // 27
