// DOM - update text content

// setTitle
// input: string, text
// output: none, <.title>text<>

export const setTitle = function (text) {
  const titleElem = document.querySelector('.title');
  titleElem.textContent = text;
};

// test data

setTitle('I am one оf the best Front-End developers');
