function getSum(firstNum, lastNum) {
  let sum = 0;

  for (let i = firstNum; i <= lastNum; i += 1) {
    if (i % 2 === 0) {
      sum += i;
    }
  }

  return sum;
}
