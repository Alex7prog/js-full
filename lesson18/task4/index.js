// Spy function

/**
 * @param {function} func
 * @return {function}
 */

export function saveFuncCalls(func) {
  const argsArr = [];

  function withMemory(...args) {
    argsArr.push(args);

    withMemory.callsHistory = argsArr;

    return func.call(this, ...args);
  }

  return withMemory;
}

// example 1
function sum(firstNum, secondNum) {
  return firstNum + secondNum;
}

const sumWithMemory = saveFuncCalls(sum);
// sumWithMemory(4, 2); // ===> 6
console.log('sumWithMemory(4, 2): ', sumWithMemory(4, 2));
// sumWithMemory(9, 1); // ===> 10
console.log('sumWithMemory(9, 1): ', sumWithMemory(9, 1));

// sumWithMemory.callsHistory; // ===> [ [4, 2], [9, 1] ]
console.log('sumWithMemory.callsHistory: ', sumWithMemory.callsHistory);

// example 2
function addDelta(array, delta) {
  return array.map(el => el + delta);
}

const addDeltaWithMemory = saveFuncCalls(addDelta);
// addDeltaWithMemory([111, 22, 55, 4], 8); // ===> [119, 30, 63, 12]
console.log('addDeltaWithMemory([111, 22, 55, 4], 8): ', addDeltaWithMemory([111, 22, 55, 4], 8));
// addDeltaWithMemory([9, 1, -8, 15, 7, 0], 7); // ===> [16, 8, -1, 22, 14, 7]
console.log(
  'addDeltaWithMemory([9, 1, -8, 15, 7, 0], 7): ',
  addDeltaWithMemory([9, 1, -8, 15, 7, 0], 7),
);

// addDeltaWithMemory.callsHistory; // ===> [ [[111, 22, 55, 4], 8], [[9, 1, -8, 15, 7, 0], 7] ]
console.log('addDeltaWithMemory.callsHistory: ', addDeltaWithMemory.callsHistory);

// example 3
const user = {
  name: 'John',
  sayHi() {
    return this.name;
  },
};

const sayHiWithMemory = saveFuncCalls(user.sayHi);
// sayHiWithMemory(); // ===> throw error // because sayHiWithMemory lost context
const sayHiWithMemoryBinded = sayHiWithMemory.bind({ name: 'Tom' });
console.log(sayHiWithMemoryBinded()); // ===> Tom // because we fixed context with bind and run functon again

console.log(sayHiWithMemory.callsHistory); // [ [] ]
