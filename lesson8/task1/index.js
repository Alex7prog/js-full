// create object

const transformToObject = (arr) => {
  if (arr.length === 0) {
    return {};
  }

  const obj = {};
  arr.map((el) => {
    obj[el] = el;
  });

  // arr.forEach((el) => {
  //   obj[el] = el;
  // });

  return obj;
};

// examples
// transformToObject(['a', 17.1, 'John Doe']); // ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }
console.log(transformToObject(['a', 17.1, 'John Doe']));
console.log(transformToObject([]));
