// Event handler 'change'

const inputText = document.querySelector('.text-input');

const handleInputChange = function (event) {
  console.log(event.target.value);
};

inputText.addEventListener('change', handleInputChange);
