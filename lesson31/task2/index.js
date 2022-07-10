// promise chaining

export const asyncCalculator = numbr =>
  new Promise(resolve => {
    resolve(numbr);
  })
    .then(
      num =>
        new Promise(resolve => {
          setTimeout(() => {
            console.log(`initialValue: ${num}`);
            resolve(num);
          }, 500);
        }),
    )
    .then(
      num =>
        new Promise(resolve => {
          setTimeout(() => {
            const result = num * num;
            console.log(`Squared value: ${result}`);
            resolve(result);
          }, 500);
        }),
    )
    .then(
      num =>
        new Promise(resolve => {
          const result = num * 2;
          console.log(`Doubled value: ${result}`);
          resolve(result);
        }),
    );

asyncCalculator(5).then(number => console.log(number));
