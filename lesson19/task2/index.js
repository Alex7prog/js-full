// Obj own properties

const vehicle = {
  name: 'Argo',
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  name: 'sArgo',
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
  },
  stopMachine() {
    console.log(`${this.name} lifting anchor down`);
  },
};

export const getOwnProps = function (obj) {
  console.log(Object.keys(obj).filter(prop => typeof obj[prop] !== 'function'));
};

Object.setPrototypeOf(ship, vehicle);

console.log(ship);

getOwnProps(ship);
