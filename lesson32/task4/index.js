// Promise for multiple values

const promiseNumber1 = Promise.resolve(67);
const promiseNumber2 = Promise.resolve(23);
const promiseNumber3 = Promise.resolve(8);

/*
 * создай промис и присвой переменной resultPromise
 * чтобы в консоль вывелась сумма всех чисел из трех промисов
 */

const promisesResolveArray = (...promise) => {
  const arr = [];
  [...promise].map(pr => pr.then(num => arr.push(num)));
  return arr;
};

export const resultPromise = new Promise(resolve => {
  resolve(promisesResolveArray(promiseNumber1, promiseNumber2, promiseNumber3));
});

resultPromise
  .then(numbersList => {
    console.log(numbersList);
    const sum = numbersList.reduce((acc, num) => acc + num, 0);
    return sum;
  })
  .then(result => {
    console.log(result); // 98
  });
