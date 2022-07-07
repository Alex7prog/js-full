// storage event

// Algo
// get document elements <.counter>, <.counter__value>
// event 'click' button => handler counterChange() => new counter value => set <.counter__value>, localStorage
// event 'storage' => set <.counter__value> localStorage.value

const counterElem = document.querySelector('.counter');
const counterValueElem = document.querySelector('.counter__value');

const onCounterChange = e => {
  const isButton = e.target.classList.contains('counter__button');

  if (!isButton) {
    return;
  }

  // const action = e.target.dataset.action;
  const { action } = e.target.dataset; // Use object destructuring

  const currentValue = Number(counterValueElem.textContent);
  const newValue = action === 'decrease' ? currentValue - 1 : currentValue + 1;

  counterValueElem.textContent = newValue;
  localStorage.setItem('counter', newValue);
};

const onStorageChange = e => {
  if (Number(counterValueElem.textContent) !== e.newValue) {
    counterValueElem.textContent = e.newValue;
  }
};

const onDocumentLoaded = () => {
  counterValueElem.textContent = localStorage.getItem('counter') || 0;
};

counterElem.addEventListener('click', onCounterChange);

window.addEventListener('storage', onStorageChange);

document.addEventListener('DOMContentLoaded', onDocumentLoaded);
