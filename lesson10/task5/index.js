// sum of float numbers

const getTotalPrice = (arrNumbers) =>
  `$${
    Math.floor(arrNumbers.reduce((accum, num) => (accum += num), 0) * 100) / 100
  }`;

console.log(getTotalPrice([1.554, 2, 7.317, 5]));
