// set child elements

// setButton(buttonText)
// in: string(buttonText)
// out: none, <body></body> => <body> <button> buttonText </button> </body>

export const setButton = function (buttonText) {
  document.body.innerHTML = `<button>${buttonText}</button>`;
  // document.body.textContent = `<button>${buttonText}</button>`;
};

setButton('Button (innerHTML)');
