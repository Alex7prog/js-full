'use strict';

/**
 * @param {number} num
 * @param {number} prec
 * @return {number[]}
 */

// rounding numbers with precision

const superRound = (num, prec) => {
  const calc = 10 ** prec;

  return [
    Math.floor(num * calc) / calc,
    Math.trunc(num * calc) / calc,
    Math.ceil(num * calc) / calc,
    Math.round(num * calc) / calc,
    Number(num.toFixed(prec)),
  ];
};

// examples
superRound(11.12556, 2); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
// console.log('superRound(11.12556, 2): ', superRound(11.12556, 2));
superRound(6.11, 3); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
// console.log('superRound(6.11, 3): ', superRound(6.11, 3));
