// DOM - update text content

// setTitle()
// input: string, text
// output: none, <.title>text<>

export const setTitle = function (text = '') {
  const titleElem = document.querySelector('.title');
  titleElem.textContent = text;
};

setTitle('I am one оf the best Front-End developers');

// test data

const titleElem = document.querySelector('.title');
console.log(titleElem.textContent);
