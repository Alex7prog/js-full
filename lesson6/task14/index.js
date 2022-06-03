const getSubArray = (arr, numberOfElements) => {
  const subArr = [...arr];

  subArr.length = numberOfElements;

  return subArr;
};

console.log(getSubArray([1, 2, 3, 4, 5], 2));
