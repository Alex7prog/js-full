// separate code and test

export const getSquaredNumbers = arr => arr.map(num => num ** 2);

export const getOddNumbers = arr => arr.filter(num => num % 2 === 1);

// const sum = (a, b) => a + b;
// function sum default export
export default (a, b) => a + b;
