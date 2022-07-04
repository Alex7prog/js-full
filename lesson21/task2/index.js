// DOM - finding element

export const getTitleElement = function () {
  const titleElem = document.querySelector('.title');
  console.dir(titleElem);
};

export const getInputElement = function () {
  const inputElem = document.querySelector('[type="text"]');
  console.log(inputElem);
};

// test data
getTitleElement();
getInputElement();
