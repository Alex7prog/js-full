// pomises static methods

// asyncSum()
// in: [promises] / out: Promise

const getResolveNumber = number =>
  new Promise(resolve => {
    resolve(number);
  });

const asyncNumberOne = getResolveNumber(5);
const asyncNumberTwo = getResolveNumber(15);
const asyncNumberThree = getResolveNumber(25);

const getSum = numbers =>
  numbers.filter(num => !isNaN(num)).reduce((acc, num) => acc + Number(num), 0);

export const asyncSum = (...asyncNumbers) => {
  return Promise.all(asyncNumbers)
    .then(numbers => getSum(numbers))
    .catch(() => Promise.reject(new Error(`Can't calculate`)));
};

// test-data

// asyncSum(asyncNumberOne, asyncNumberTwo, asyncNumberThree).then(res => console.log(res));

// let asyncNumberTest = getResolveNumber('15');
// asyncSum(asyncNumberTest, asyncNumberTwo, asyncNumberThree).then(res => console.log(res));

// asyncNumberTest = getResolveNumber('a');
// asyncSum(asyncNumberOne, asyncNumberTest, asyncNumberThree).then(res => console.log(res));

// asyncSum(asyncNumberOne, Promise.reject(new Error('error')), asyncNumberThree).then(res =>
//   console.log(res),
// );
