// clearing transactions data
const cleanTransactionsList = (transactionArr) =>
  transactionArr.filter((elem) => Number(elem)).map((elem) => `$${Number(elem).toFixed(2)}`);

console.log(cleanTransactionsList([' 1.9', '2', 3, '4 usd', '5.14 ', ' 6 ']));
