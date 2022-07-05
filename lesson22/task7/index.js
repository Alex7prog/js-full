// Event target

const btnTwoButtons = document.querySelectorAll('.btn');

const handleClick = function (event) {
  console.log(event.target.textContent);
};

btnTwoButtons[0].addEventListener('click', handleClick);
btnTwoButtons[1].addEventListener('click', handleClick);
