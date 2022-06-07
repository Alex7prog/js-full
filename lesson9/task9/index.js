'use strict';

/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */

// build object

function buildObject(keysList, valuesList) {
  return keysList.reduce((acc, elem, index) => {
    return { ...acc, [elem]: valuesList[index] };
  }, {});
}

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
console.log('result: ', result);
