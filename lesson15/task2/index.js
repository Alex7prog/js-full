// memory calculator factory

export const createCalculator = () => {
  let result = 0;

  const add = number => {
    result += number;
  };

  const decrease = number => {
    result -= number;
  };

  const reset = () => {
    result = 0;
  };

  const getMemo = () => {
    return result;
  };

  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};

const calculator1 = createCalculator();
calculator1.add(5);
console.log(calculator1.getMemo());
const calculator2 = createCalculator();
calculator2.add(15);
console.log(calculator2.getMemo());
