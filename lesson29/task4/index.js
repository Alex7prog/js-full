// Function for call delay

export const delay = (delay, callback, context, ...arg) => {
  setTimeout(callback.bind(context, ...arg), delay);
};

const func = (...arg) => console.log(`callback function arguments: ${arg}`);

delay(3000, func, delay, 1, 3, 4, 5);
