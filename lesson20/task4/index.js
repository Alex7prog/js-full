// class Order

/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */
export class Order {
  constructor(price, city, type) {
    this.price = price;
    this.city = city;
    this.type = type;
  }

  id = `ID${Math.floor(Math.random() * 100000) + 1}`;
  dateCreated = new Date();
  isConfirmed = false;
  dateConfirmed = null;
  type = null;

  checkPrice() {
    if (this.price > 1000) {
      return true;
    }

    return false;
  }

  confirmOrder() {
    if (!this.isConfirmed) {
      this.isConfirmed = true;
      this.dateConfirmed = new Date();
    }
  }

  isValidType() {
    if (this.type === 'Buy' || this.type === 'Sell') {
      return true;
    }

    return false;
  }
}

const orderOne = new Order(1100, 'Kharkiv', 'Buy');
console.log('orderOne: ', orderOne);
orderOne.confirmOrder();
console.log('orderOne: ', orderOne);
console.log(orderOne.checkPrice());
console.log(orderOne.isValidType());

const orderTwo = new Order(900, 'Kyiv', 'Seeell');
console.log('orderTwo: ', orderTwo);
orderTwo.confirmOrder();
console.log('orderTwo: ', orderTwo);
console.log(orderTwo.checkPrice());
console.log(orderTwo.isValidType());

const orderThree = new Order();
console.log('orderThree: ', orderThree);
orderTwo.confirmOrder();
console.log('orderThree: ', orderThree);
console.log(orderThree.checkPrice());
console.log(orderThree.isValidType());
