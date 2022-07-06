// Date difference

export const getDiff = function (startDate, endDate) {
  const differenceDateMS = Math.abs(startDate - endDate);

  const seconds = Math.trunc((differenceDateMS / 1000) % 60);
  const minutes = Math.trunc((differenceDateMS / (1000 * 60)) % 60);
  const hours = Math.trunc((differenceDateMS / (1000 * 60 * 60)) % 24);
  const days = Math.trunc(differenceDateMS / (1000 * 60 * 60 * 24));

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

console.log(getDiff(new Date(), new Date(2023, 6, 31, 20, 30)));
