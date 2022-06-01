function getPrimes(num) {
  let isPrime;

  for (let i = 2; i <= num; i += 1) {
    isPrime = true;

    for (let j = 2; j < i; j += 1) {
      if (i % j === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
}

getPrimes(101);
