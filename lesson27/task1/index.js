// get localStorage data

const user = {
  name: 'Tom',
  age: 17,
  isStudent: false,
  driverLicense: null,
  hobbies: ['football', 'diving'],
  education: [
    {
      name: 'MIT Precourse',
      graduateDate: '2020-05-04T14:48:46.105Z',
    },
  ],
};

export const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (error) {
      newValue = value;
    }
    return {
      ...acc,
      [key]: newValue,
    };
  }, {});
};

// test-data

localStorage.setItem('userObj', JSON.stringify(user));
console.log(getLocalStorageData());
