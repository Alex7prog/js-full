// Dom data-attributes

// export squaredNumber(number)
// in: none / get data-attributes
// out: none / set data-attributes

export const squaredNumbers = function () {
  const elemList = document.querySelectorAll('.number');

  elemList.forEach(el => (el.dataset.squaredNumber = el.dataset.number ** 2));
};

squaredNumbers();
