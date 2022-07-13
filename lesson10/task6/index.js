// Random numbers array

// getRandomNumbers()
// in: number, number, number / out: [ int numbers]

// Algo:
// get round up - from, to
// validate: return null if don't have int numbers in the given interval or to > from
// fill array(length) random int number according to given interval numbers

const getRandomNumbers = (length, from, to) => {
  const fromCeil = Math.ceil(from);
  const toCeil = Math.ceil(to);

  if (toCeil - fromCeil < 1) {
    return null;
  }

  return [...Array(length)].map(num => Math.floor(Math.random() * (toCeil - fromCeil)) + fromCeil);
};

// examples
// getRandomNumbers(5, 1.4, 3.22); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22));
// getRandomNumbers(5, 1.4, 3.22); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 3.22));
// getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22));
// getRandomNumbers(3, 2.4, 4.5); // ==> [4, 3, 4]
console.log(getRandomNumbers(3, 2.4, 4.5));
// getRandomNumbers(3, 1.9, 2.5); // ==> [2, 2, 2]
console.log(getRandomNumbers(3, 1.9, 2.5));
// getRandomNumbers(3, 0.9, 1.1); // ==> [1, 1, 1]
console.log(getRandomNumbers(3, 0.9, 1.1));

// getRandomNumbers(7, 1.4, 1.9); // ==> null
console.log(getRandomNumbers(7, 1.4, 1.9));
// getRandomNumbers(7, 2.11, 2.9); // ==> null
console.log(getRandomNumbers(7, 2.11, 2.9));
// getRandomNumbers(1, 2.5, 0.9); // ==> null
console.log(getRandomNumbers(1, 2.5, 0.9));
