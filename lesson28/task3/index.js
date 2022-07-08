// mult (currying)

// mult:
// in: number / out: function/number

export const mult = numOne => numTwo => numOne * numTwo;

export const twice = mult(2);
export const triple = mult(3);

// test-data

const result = mult(2);
console.log(mult(2)); // numTwo => numOne * numTwo
console.log(mult(2, 5)); // numTwo => numOne * numTwo
console.log(mult(2)(5)); // 10

console.log(twice); // numTwo => numOne * numTwo
console.log(twice(9)); // 18
console.log(triple(9)); // 27
