// DOM - finding multiple elements

export const getItemsList = function () {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);

  return elementsList;
};

export const getItemsArray = function () {
  const elementsArray = document.querySelectorAll('.tool');
  console.dir(elementsArray);

  return Array.from(elementsArray);
};

// test data

console.log(getItemsList());
console.log(getItemsArray());
