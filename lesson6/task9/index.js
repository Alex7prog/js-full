function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  const revArr = [...arr];

  for (let i = 0; i < arr.length / 2; i += 1) {
    revArr[i] = arr[arr.length - i - 1];
    revArr[revArr.length - i - 1] = arr[i];
  }

  return revArr;
}

reverseArray([1, 2, 3, 4, 5, 6, 7]);
reverseArray([1, 2, 3, 4, 5, 6, 7, 8]);
