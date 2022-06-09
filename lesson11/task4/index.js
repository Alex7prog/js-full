// count occurences

const countOccurences = (text = '', str) => {
  if (str === '') {
    return null;
  }

  return text.split(str).length - 1;
};

console.log(countOccurences('abcabcabcabc', 'ca'));
console.log(countOccurences('', 'ca'));
