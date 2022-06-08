// array of random number
const getRandomNumbers = (length, from, to) => {
  if (to - from < 1) {
    return null;
  }
  return Array(length)
    .fill()
    .map(() => Math.round(Math.random() * (to - from) + from));
};

// examples
getRandomNumbers(5, 1.4, 3.22); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22));
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 3.22));
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22));
