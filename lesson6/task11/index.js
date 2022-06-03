function checker(arr) {
  let min = 0;
  let max = 0;

  if (!Array.isArray(arr)) {
    return null;
  }

  arr.forEach((element) => {
    if (element < min) {
      min = element;
    }
    if (element > max) {
      max = element;
    }
  });

  if (min + max > 1000) {
    return true;
  }

  return false;
}

checker([1, 2, 3, 4, 5, 6, 7]);
console.log('checker([1, 2, 3, 4, 5, 6, 7]): ', checker([1, 2, 3, 4, 5, 6, 7]));
checker([1, 10, 0, 4, 4, 5, 5, 6, 7]);
console.log(
  'checker([1, 10, 0, 4, 4, 5, 5, 6, 7]): ',
  checker([1, 10, 0, 4, 4, 5, 5, 6, 7])
);
checker([1, 2, 3, -3, 4, 5, 10, 6, 6, 7]);
console.log(
  'checker([1, 2, 3, -3, 4, 5, 10, 6, 6, 7]): ',
  checker([1, 2, 3, -3, 4, 5, 1990, 6, 6, 7])
);
