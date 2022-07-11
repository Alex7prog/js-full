// delay promise chain

export const delay = dalayTime => {
  const prTimeout = new Promise(resolve => {
    setTimeout(() => resolve(), dalayTime);
  });

  return prTimeout;
};

delay(3000).then(() => console.log('Done'));
