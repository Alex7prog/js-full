// Write with interval

/**
 * @param {number} count
 * @param {number} period
 * @return {undefined}
 */
export const pinger = (count, period) => {
  let countPing = 1;
  console.log('Ping');

  const intervalPing = setInterval(() => {
    if (countPing === count) {
      clearInterval(intervalPing);
      return;
    }
    countPing += 1;
    console.log('Ping');
  }, period);
};

// examples
pinger(5, 1000); // makes 5 writes with 100 ms interval
pinger(7, 1500); // makes 7 writes with 1500 ms interval
