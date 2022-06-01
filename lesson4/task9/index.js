let sum = 0;

for (let i = 0; i <= 1000; i += 1) {
  sum += i;
}

Math.trunc(sum / 1234) > sum % 1234 ? console.log(true) : console.log(false);
