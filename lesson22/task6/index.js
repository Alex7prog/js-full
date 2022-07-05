// Single handle the 'click' event

const btnSingleUse = document.querySelector('.single-use-btn');

const btnSingleUseHandler = () => {
  console.log('clicked');
  btnSingleUse.removeEventListener('click', btnSingleUseHandler);
};

btnSingleUse.addEventListener('click', btnSingleUseHandler);
