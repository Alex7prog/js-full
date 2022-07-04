// DOM - finding element

export const getTitleElement = function () {
  const titleElem = document.querySelector('.title');
  console.dir(titleElem);

  return titleElem;
};

export const getInputElement = function () {
  const inputElem = document.querySelector('[type="text"]');
  console.dir(inputElem);

  return inputElem;
};

// test data

console.log('getTitleElement(): ', getTitleElement());
console.log('getInputElement(): ', getInputElement());
