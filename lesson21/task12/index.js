// Dom data-attributes

// export squaredNumber(number)
// in: none / get data-attributes
// out: none / set data-attributes

export const squaredNumbers = function () {
  const elemList = document.querySelector('.list');

  for (let index = 0; index < elemList.children.length; index += 1) {
    elemList.children[index].dataset.squaredNumber = elemList.children[index].dataset.number ** 2;
  }
};

// squaredNumbers();
