// Pseudo arrays, sumOfSquares()

// export function sumOfSquares() {
//   return [...arguments].reduce((acc, arg) => acc + arg ** 2, 0);
// }

export function sumOfSquares(...restArg) {
  return [...restArg].reduce((acc, arg) => acc + arg ** 2, 0);
}

console.log(sumOfSquares(1, -2, '-3', '4'));
