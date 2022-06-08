// split text

const splitText = (text, len = 10) => {
  if (typeof text !== 'string') {
    return null;
  }

  const strArr = [];

  for (let pos = 0; pos < text.length; pos += len) {
    strArr.push(text[pos].toUpperCase() + text.substr(pos + 1, len - 1));
  }

  return strArr.join('\n');
};

console.log(splitText('abcdefghigk', 4));
console.log(splitText('abcdefghigk'));
console.log(splitText('', 5));
console.log(splitText(123, 5));
