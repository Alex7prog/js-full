// compare objects

function compareObjects(obj1, obj2) {
  const sortObj1 = Object.keys(obj1)
    .sort()
    .reduce((result, key) => {
      result[key] = obj1[key];
      return result;
    }, {});
  const sortObj2 = Object.keys(obj2)
    .sort()
    .reduce((result, key) => {
      result[key] = obj2[key];
      return result;
    }, {});

  return JSON.stringify(sortObj1) === JSON.stringify(sortObj2);
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

// compareObjects(obj1, obj2); // ==> false
// console.log('compareObjects(obj1, obj2): ', compareObjects(obj1, obj2));
// compareObjects(obj2, obj3); // ==> false
// console.log('compareObjects(obj2, obj3): ', compareObjects(obj2, obj3));
// compareObjects(obj1, obj4); // ==> true
console.log('compareObjects(obj1, obj4): ', compareObjects(obj1, obj4));
// console.log(
//   Object.keys(obj3)
//     .sort()
//     .reduce(function (result, key) {
//       result[key] = obj3[key];
//       return result;
//     }, {})
// );
