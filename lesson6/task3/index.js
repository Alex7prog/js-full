function getSpecialNumbers(from, to) {
  const arr = [];

  for (let i = from; i < to; i++) {
    if (i % 3 === 0) {
      arr.push(i);
    }
  }

  return arr;
}

// examples
getSpecialNumbers(1, 10); // ==> [3, 6, 9]
console.log('getSpecialNumbers(1, 10): ', getSpecialNumbers(1, 10));
getSpecialNumbers(-10, 10); // ==> [-9, -6, -3, 0, 3, 6, 9]
console.log('getSpecialNumbers(-10, 10): ', getSpecialNumbers(-10, 10));
getSpecialNumbers(1, 2); // ==> [ ]
console.log('getSpecialNumbers(1, 2): ', getSpecialNumbers(1, 2));
