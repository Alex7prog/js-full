// Dom data-attributes

// export squaredNumber(number)
// in: number
// out: number

export const squaredNumbers = function () {
  const elemList = document.querySelector('.list');

  for (let index = 0; index < elemList.children.length; index += 1) {
    elemList.children[index].dataset.squaredNumber = elemList.children[index].dataset.number ** 2;
  }
};

// squaredNumbers();
