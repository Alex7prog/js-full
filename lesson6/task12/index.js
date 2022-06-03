'use strict';

const arrIndexMin = function (arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  let min = arr[0];
  let minIndex = 0;
  // console.log(0, min, arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
      minIndex = i;
    }
  }

  return minIndex;
};

const arrIndexMax = function (arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  let max = arr[0];
  let maxIndex = 0;
  // console.log(0, min, arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      maxIndex = i;
    }
  }

  return maxIndex;
};

function sortAsc(array) {
  const arrAsc = [];
  const arrBuf = [...array];

  for (let i = 0; i < array.length; i++) {
    let index = arrIndexMin(arrBuf);
    arrAsc.push(arrBuf[index]);
    arrBuf.splice(index, 1);
  }

  return arrAsc;
}

function sortDesc(array) {
  const arrDesc = [];
  const arrBuf = [...array];

  for (let i = 0; i < array.length; i++) {
    let index = arrIndexMax(arrBuf);
    arrDesc.push(arrBuf[index]);
    arrBuf.splice(index, 1);
  }

  return arrDesc;
}

console.log(sortAsc([10, 21, 1, 2, 5, 9, 11, 1, 8, 9, 18, -1]));
console.log(sortDesc([10, 21, 1, 2, 5, 9, 11, 1, 8, 9, 18, -1]));

//console.log(arrIndexMin([10, 21, 1, 2, 5, 9, 11, 1, 8, 18]));
