// calculator with memory

let result = 0;

export const add = number => {
  result += number;
};

export const decrease = number => {
  result -= number;
};

export const reset = () => {
  result = 0;
};

export const getMemo = () => {
  return result;
};
