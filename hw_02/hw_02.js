/* Задание 1
Объясните почему код даёт именно такие результаты? */

//пример 1
//let a = 1, b = 1, c, d;
//c = ++a;
//alert(c); // ответ: 2
/* В этом примере используется инкремент префиксной формы, сначала к переменной a добавляется 1
 и после этого результат записывается в переменную c. */

//пример 2
//d = b++;
//alert(d); //ответ: 1
/* Здесь используется инкремент постфиксной формы, т.е. сначала значение переменной b записывается
 в переменную d, а после этого значение переменной b увеличивается на 1. */

//пример 3
//c = 2 + ++a;
//alert(c); //ответ: 5
/* Здесь используется оператор сложения "+" и инкремент префиксной формы, т.к. у переменной a
 значение уже равно 2, то после инкрементирования значение будет равно 3, а затем происходит сложение. */

//пример 4
//d = 2 + b++;
//alert(d); //ответ: 4
//alert(a); //3
//alert(b); //3
/* т.к. b уже равно 2, то сначала происходит сложение, затем запись в переменную d, а после инкрементирование
 переменной b
 инкрементирование подразумевает под собой увелечение значения инкрементируемой переменной на 1, т.к. в коде
 использовались инкременты для a и b 2 раза, то значения этих переменных увеличено на 2. */

/* Задание 2.
Чему будут равны переменные x и a в примере ниже? Написать почему так произошло
(описать последовательность действий). */

//let a = 2;
//let x = 1 + (a *= 2);
//alert('a = ' + a);
//alert('x = ' + x);
/* Сначала создается переменная a и ей присваивается значение 2, после создается переменная x,
 после происходит расчёт значений, сначала значение переменной a умножается на 2, затем результат
 присваивается переменной а, после мы получаем сумму 1 + a и присваиваем результат переменной x.
 x = 5, a = 4. */

/* Задание 3.
Объявить две переменные a и b и задать им целочисленные произвольные начальные
значения.
Затем написать скрипт, который работает по следующему принципу:
- если a и b положительные, вывести их разность (ноль можно считать положительным числом);
- если а и b отрицательные, вывести их произведение;
- если а и b разных знаков, вывести их сумму; */

//let a = Number(prompt('Введите число a'));
//let b = Number(prompt('Введите число b'));

//if((Math.sign(a) == 1 && Math.sign(b) == -1) || (Math.sign(a) == -1 && Math.sign(b) == 1))
//	alert(a + b);
//else if(Math.sign(a, b) == 1)
//	alert(a - b);
//else if(Math.sign(a, b) == -1)
//	alert(a * b);

/* Задание 4
Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
и возвращать результат.
Обязательно использовать оператор return. */

