// shmoment (chaining)

// in: Date / out: newDate{methods}

// My decision
// export const shmoment = dateValue => {
//   const changeDateTime = {
//     years: (valueDate, timeInterval) => {
//       return valueDate.setFullYear(valueDate.getFullYear() + timeInterval);
//     },
//     months: (valueDate, timeInterval) => {
//       return valueDate.setMonth(valueDate.getMonth() + timeInterval);
//     },
//     days: (valueDate, timeInterval) => {
//       return valueDate.setDate(valueDate.getDate() + timeInterval);
//     },
//     hours: (valueDate, timeInterval) => {
//       return valueDate.setHours(valueDate.getHours() + timeInterval);
//     },
//     minutes: (valueDate, timeInterval) => {
//       return valueDate.setMinutes(valueDate.getMinutes() + timeInterval);
//     },
//     seconds: (valueDate, timeInterval) => {
//       return valueDate.setSeconds(valueDate.getSeconds() + timeInterval);
//     },
//     milliseconds: (valueDate, timeInterval) => {
//       return valueDate.setMilliseconds(valueDate.getMilliseconds() + timeInterval);
//     },
//   };

//   let resultDate = new Date(dateValue);

//   const moment = {
//     days: () => {},
//     add(timeUnit, dateValue) {
//       resultDate = changeDateTime[timeUnit](new Date(resultDate), dateValue);
//       return this;
//     },
//     subtract(timeUnit, dateValue) {
//       this.add(timeUnit, -dateValue);
//       return this;
//     },

//     result() {
//       return new Date(resultDate);
//     },
//   };

//   return moment;
// };

// Refactoring

const getMethodsName = {
  years: 'getFullYear',
  months: 'getMonth',
  days: 'getDate',
  hours: 'getHours',
  minutes: 'getMinutes',
  seconds: 'getSeconds',
  milliseconds: 'getMilliseconds',
};

const setMethodsName = {
  years: 'setFullYear',
  months: 'setMonth',
  days: 'setDate',
  hours: 'setHours',
  minutes: 'setMinutes',
  seconds: 'setSeconds',
  milliseconds: 'setMilliseconds',
};

export const shmoment = dateValue => {
  let resultDate = new Date(dateValue);

  const moment = {
    days: () => {},
    add(timeUnit, dateValue) {
      const currentUnitDateValue = resultDate[getMethodsName[timeUnit]]();
      resultDate = new Date(resultDate[setMethodsName[timeUnit]](currentUnitDateValue + dateValue));
      // resultDate = new Date(
      //   resultDate[setMethodsName[timeUnit]](
      //     new Date(resultDate)[getMethodsName[timeUnit]]() + dateValue,
      //   ),
      // );
      return this;
    },
    subtract(timeUnit, dateValue) {
      this.add(timeUnit, -dateValue);
      return this;
    },

    result() {
      return new Date(resultDate);
    },
  };

  return moment;
};

// test-data

const date = new Date(2020, 0, 7, 17, 17, 17);

console.log(shmoment(date).add('minutes', 2).add('days', 8).subtract('years', 1).result());
console.log('date: ', date);

console.log(shmoment());
