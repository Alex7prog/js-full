// Date difference

export const getDiff = function (startDate, endDate) {
  const differenceDateMS = Math.abs(startDate - endDate);

  let seconds = parseInt((differenceDateMS / 1000) % 60);
  let minutes = parseInt((differenceDateMS / (1000 * 60)) % 60);
  let hours = parseInt((differenceDateMS / (1000 * 60 * 60)) % 24);
  let days = parseInt(differenceDateMS / (1000 * 60 * 60 * 24));

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

console.log(getDiff(new Date(), new Date(2023, 6, 31, 20, 30)));
