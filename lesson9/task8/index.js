/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */
// add computed property

function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}
// put your code here
function addPropertyV2(obj, key, value) {
  return Object.assign(obj, { [key]: value });
}
// put your code here
function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}
// put your code here
function addPropertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}
// examples
const transaction = {
  value: 170,
};
//addPropertyV1(transaction, 'currency', 'USD'); // ==> { value: 170, currency: 'USD' }
console.log(addPropertyV4(transaction, 'currency', 'USD'));
console.log(transaction);