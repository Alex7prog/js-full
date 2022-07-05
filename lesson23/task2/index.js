// Event delegation

const arenaElem = document.querySelector('.arena');
const boardSelectedSeatElem = document.querySelector('.board__selected-seat');

const sectorArr = [...new Array(3)].map((sector, num) => {
  const sectorElem = document.createElement('div');
  sectorElem.classList.add('sector');
  sectorElem.dataset.sectorNumber = num + 1;

  return sectorElem;
});

const renderLineElem = function () {
  const lineArr = [...new Array(10)].map((line, num) => {
    const lineElem = document.createElement('div');
    lineElem.classList.add('sector__line');
    lineElem.dataset.lineNumber = num + 1;

    return lineElem;
  });

  return lineArr;
};
const renderSeatElem = function () {
  const seatArr = [...new Array(10)].map((sector, num) => {
    const seatElem = document.createElement('div');
    seatElem.classList.add('sector__seat');
    seatElem.dataset.seatNumber = num + 1;

    return seatElem;
  });
  return seatArr;
};

arenaElem.append(...sectorArr);

const sectorElem = document.querySelectorAll('.sector');
sectorElem.forEach(el => el.append(...renderLineElem()));

const lineElem = document.querySelectorAll('.sector__line');
lineElem.forEach(el => el.append(...renderSeatElem()));

const handleSeatPosition = function (event) {
  const target = event.target;
  if (target.classList.contains('sector__seat')) {
    boardSelectedSeatElem.textContent = `S ${target.closest('.sector').dataset.sectorNumber} - L ${
      target.closest('.sector__line').dataset.lineNumber
    } - S ${target.dataset.seatNumber}`;
  }
};

arenaElem.addEventListener('click', handleSeatPosition);
