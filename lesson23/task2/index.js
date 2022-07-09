// Event delegation

const renderElem = function (classElem, amountElem) {
  const arrElem = [...new Array(amountElem)].map((sector, num) => {
    const elem = document.createElement('div');
    elem.classList.add(classElem);
    elem.dataset.number = num + 1;

    return elem;
  });

  return arrElem;
};

const arenaElem = document.querySelector('.arena');
arenaElem.append(...renderElem('sector', 3));

const sectorElem = document.querySelectorAll('.sector');
sectorElem.forEach(el => el.append(...renderElem('sector__line', 10)));

const lineElem = document.querySelectorAll('.sector__line');
lineElem.forEach(el => el.append(...renderElem('sector__seat', 10)));

const handleSeatPosition = function (event) {
  const { target } = event;
  const boardSelectedSeatElem = document.querySelector('.board__selected-seat');

  if (target.classList.contains('sector__seat')) {
    boardSelectedSeatElem.textContent = `S ${target.closest('.sector').dataset.number} - L ${
      target.closest('.sector__line').dataset.number
    } - S ${target.dataset.number}`;
  }
};

arenaElem.addEventListener('click', handleSeatPosition);
