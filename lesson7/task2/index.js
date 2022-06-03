// unsorted arrau => sorted array

// mutation
//const sortDesc = (numbers) => numbers.sort((a, b) => b - a);

// don't mutation

// const sortDesc = (numbers) => {
// //const copy = [...numbers]; //1й вариант копия массива, 2й slice()
// const copy = numbers.slice();
// //return copy.sort((a, b) => b - a);
//  return numbers.slice().sort((a, b) => b - a);
// };

// code refactoring
const sortDesc = (numbers) => numbers.slice().sort((a, b) => b - a);

const arr = [1, 2, 3, 18, 24, 5, 33, 7, 11, 8, 12, 10];
console.log(sortDesc(arr));
console.log(arr);
