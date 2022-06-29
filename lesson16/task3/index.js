export const createArrayOfFunctions = (arrLen = 0) => {
  if (!Number.isInteger(arrLen)) {
    return null;
  }
  return [...Array(Math.abs(arrLen))].map(
    (elem, index) =>
      function () {
        return index;
      },
  );
};
