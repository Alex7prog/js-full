// Event handler 'change'

const inputText = document.querySelector('.text-input');

const inputTextHandler = () => {
  console.log(inputText.value);
};

inputText.addEventListener('change', inputTextHandler);
