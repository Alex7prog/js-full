// Object to user array

const getCustomersList = (obj) => {
  if (!Object.keys(obj).length) {
    return [];
  }

  return Object.values(JSON.parse(JSON.stringify(obj)))
    .map((customerObj, index) => {
      customerObj.id = Object.keys(obj)[index];
      return customerObj;
    })
    .sort((a, b) => a.age - b.age);
};

const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: ' Tom',
    age: 17,
  },
};

getCustomersList(customers);

console.log('customers: ', customers);
