// set  date component

const weekDay = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

export const getDayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);

  return weekDay[new Date(dateInFuture).getDay()];
};

const resultDate = getDayOfWeek(new Date(2021, 11, 31), 7);

console.log(resultDate);
