// Lexical environment

let message = 'Just learn it';

export const sendMessage = name => {
  const sender = 'Gromcode';

  console.log(`${name}, ${message}! You ${sender}`);
};

export const setMessage = msg => {
  message = msg;
};

sendMessage('Ann');

setMessage('Good Job');

sendMessage('Ann');
