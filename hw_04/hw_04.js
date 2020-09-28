'use strict';

/* Задание 1
Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
Например, для числа 45 мы должны получить следующий объект:
{
units: 5, //это единицы
tens: 4, //это десятки
hundreds: 0, //это сотни
}
Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

let num = Math.trunc(Number(prompt('Введите число от 0 до 999 включительно')));
let result = {
	numConversion: function(num) {
	if (!Number.isInteger(num) || num > 999 || Math.sign(num) === -1 || Math.sign(num) === -0) {
		console.log('Нужно ввести число от 0 до 999!');
	}else {
		let strNum = String(num).split('');
		if (strNum.length == 1) {
			strNum.unshift('0', '0');
		}else if (strNum.length == 2) {
			strNum.unshift('0');
		}
		this.units = Number(strNum[2]);
		this.tens = Number(strNum[1]);
		this.hundereds = Number(strNum[0]);
		}
	}
};

result.numConversion(num);
console.log(result);

// Возможно, что сначала неправильно
// понял задание, поэтому сделал функцию-конструктор,
// который более точно выполняет условия задачи.

function numConversion2(num) {
	if (!Number.isInteger(num) || num > 999 || Math.sign(num) === -1 || Math.sign(num) === -0) {
		console.log('Нужно ввести число от 0 до 999!');
	}else {
		let strNum = String(num).split('');
		if (strNum.length == 1) {
			strNum.unshift('0', '0');
		}else if (strNum.length == 2) {
			strNum.unshift('0');
		}
		this.units = Number(strNum[2]);
		this.tens = Number(strNum[1]);
		this.hundereds = Number(strNum[0]);
		}
}

let result2 = new numConversion2(num);
console.log(result2);

