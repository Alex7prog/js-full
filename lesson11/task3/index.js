// split text to array

const splitString = (str, len = 10) => {
  if (typeof str !== 'string') {
    return null;
  }

  const strArr = [];

  for (let pos = 0; pos < str.length; pos += len) {
    let chunk = str.substr(pos, len);
    chunk += '.'.repeat(len - chunk.length);

    strArr.push(chunk);
  }

  return strArr;
};

console.log(splitString('abcdefghigk', 4));
console.log(splitString('abcdefghigklmnop'));
// console.log(splitString('', 5));
// console.log(splitString(123, 5));
