// create DOM elements and append to page

// export createButton(buttonText)
// in: string(buttonText)
// out: none, <body></body> => <body> <button>buttonText</button> </body>

export const createButton = function (buttonText) {
  const btnElem = document.createElement('button');
  btnElem.textContent = buttonText;

  document.body.append(btnElem);
};

// createButton('Button (.textContent)');
