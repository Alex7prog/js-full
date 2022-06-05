// name filter

const filterNames = (arr, text) =>
  arr.filter((name) => name.includes(text) && name.length > 5);

const arrNames = ['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'];

console.log(filterNames(arrNames, 'ya'));
