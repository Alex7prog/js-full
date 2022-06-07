// object to array name
// {rooms} => [name]

const getPeople = (obj) => {
  return Object.values(obj)
    .flat()
    .map((elemObj) => elemObj[Object.keys(elemObj)]);
};

const rooms = {
  rooml: [
    { name: 'Jack' },
    { name: 'Andrey' },
    { name: 'Ann' },
    { name: 'Vasyl' },
  ],
  room2: [{ name: 'Dan' }],
  room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
};

console.log(getPeople(rooms));
