/* eslint-disable */

// Унарный плюс приводит операнд к числу
+17;
console.log('+17:', +17); //17
+'77';
console.log("+'77':", +'77'); //77

// Бинарный плюс складывает строки или прибавляет числа
10 + '5';
console.log("10 + '5':", 10 + '5'); //105
'some' + 'text';
console.log("'some' + 'text':", 'some' + 'text'); //sometext

// Математические операции с undefined возвращают NaN
undefined + 1;
console.log('undefined + 1:', undefined + 1); //NaN
null + 8;
console.log('null + 8:', null + 8); //8
undefined + '5';
console.log("undefined + '5':", undefined + '5'); //'undefined5'
7 - null;
console.log('7 - null:', 7 - null); //7
5 - undefined;
console.log('5 - undefined:', 5 - undefined); //NaN
'text' + null;
console.log("'text' + null:", 'text' + null); //'textnull';

// Постфиксная и префиксная форма записи
let num = 17;
console.log('++num:', ++num); //18
console.log('num++:', num++); //18

// математические операторы приводят операнды к числам
const a = 17;
console.log('a:', a); //17
const b = -a;
console.log('b:', b); //-17
'24' / 4;
console.log("'24' / 4:", '24' / 4); //6
18 * '3';
console.log("18 * '3':", 18 * '3'); //54
'9' - '3';
console.log("'9' - '3':", '9' - '3'); //6
'seventeen' / 3;
console.log("'seventeen' / 3:", 'seventeen' / 3); //NaN
4 * 'four';
console.log("4 * 'four':", 4 * 'four'); //NaN
17 / 0;
console.log('17 / 0:', 17 / 0); //Infinity

10 + 'seven';
console.log("10 + 'seven':", 10 + 'seven'); //'10seven'
undefined + 1;
console.log('undefined + 1:', undefined + 1); //NaN
null + 8;
console.log('null + 8:', null + 8); //8
undefined + '5';
console.log("undefined + '5':", undefined + '5'); //'undefined5'
'text' + null;
console.log("'text' + null:", 'text' + null); //'textnull'
