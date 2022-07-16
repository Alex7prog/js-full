// compare objects

// Algo:
// compare [obj1.keys] !== [obj2.keys]
// iteration [obj1.keys] =>  exist obj2[keys] & equal obj1, obj2 value by key
// choose method some (some iteration < every iteration)

// function compareObjects(obj1, obj2) {
//   const keysObj1 = Object.keys(obj1);

//   if (keysObj1.length !== Object.keys(obj2).length) {
//     return false;
//   }

//   return !keysObj1.some(key => !hasOwnProperty.call(obj2, key) || obj1[key] !== obj2[key]);
// }

// refactoring
const compareObjects = (obj1, obj2) =>
  Object.keys(obj1).length !== Object.keys(obj2).length
    ? false
    : !Object.keys(obj1).some(key => !hasOwnProperty.call(obj2, key) || obj1[key] !== obj2[key]);

// test-data
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

const obj5 = {
  student: false,
  name: 'Bob',
  age: 17,
};

console.log('compareObjects(obj1, obj2): ', compareObjects(obj1, obj2));
console.log('compareObjects(obj2, obj3): ', compareObjects(obj2, obj3));
console.log('compareObjects(obj1, obj4): ', compareObjects(obj1, obj4));
console.log('compareObjects(obj3, obj2): ', compareObjects(obj3, obj2));
console.log('compareObjects(obj3, obj5): ', compareObjects(obj3, obj5));

// option 2 - JSON.stringify
// function compareObjects(obj1, obj2) {
//   const sortObj1 = Object.keys(obj1)
//     .sort()
//     .reduce((result, key) => {
//       result[key] = obj1[key];
//       return result;
//     }, {});
//   const sortObj2 = Object.keys(obj2)
//     .sort()
//     .reduce((result, key) => {
//       result[key] = obj2[key];
//       return result;
//     }, {});

//   return JSON.stringify(sortObj1) === JSON.stringify(sortObj2);
// }
