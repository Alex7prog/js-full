'use strict';

/**
 * @param {object} obj
 * @return {undefined}
 */

// iterate object keys

function getKeys(obj) {
  return Object.keys(obj).map((elem) => console.log(elem));
}

// examples
getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' });
// prints ===>
// name
// city
// englishLevel
