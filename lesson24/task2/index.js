// UTC time

export const getGreenwichTime = date => {
  const options = {
    timeZone: 'UTC',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };

  return new Date(date).toLocaleString('en', options);
};

console.log(getGreenwichTime(new Date()));
