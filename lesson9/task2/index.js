// copy object

// option 1
// const copyObj = (obj) => Object.assign({}, obj);

// option 2
const copyObj = (obj) => ({ ...obj });

// examples
//getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }); // ==> { 'John Doe': 19, Bob: 18 }
console.log(copyObj({ 'John Doe': 19, Tom: 17, Bob: 18 }));
//getAdults({ Ann: 56, Andrey: 7 }); // ==> { Ann: 56 }
console.log(copyObj({ Ann: 56, Andrey: 7 }));
console.log(copyObj({}));
