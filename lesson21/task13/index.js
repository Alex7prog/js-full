// Dom closest parent

// export squaredNumber(number)
// in: number / data-number === num
// out: string / data-section value

export const getSection = function (num) {
  const elemSpan = document.querySelector(`[data-number= "${num}"]`);

  return elemSpan.closest('.box').dataset.section;
};

// data-test

// console.log('getSection(3): ', getSection(3));
// console.log('getSection(5): ', getSection(5));
