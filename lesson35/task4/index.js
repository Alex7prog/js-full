// Reliable parser

export const parseUser = jsonUser => {
  try {
    const user = JSON.parse(jsonUser);
    return user;
  } catch (error) {
    return null;
  }
};

// test-data

console.log(parseUser('{ "name": "Tom", "age": 19 }'));
console.log('script continues work ...');

console.log(parseUser('{ "name": "Tom", age": 19 }'));
console.log('script continues work ...');
