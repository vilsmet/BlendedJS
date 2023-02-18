// ЗАДАЧА 1
// НАПИШІТЬ РЕЧЕННЯ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА "ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ГАЛИНА, МЕНІ 35 РОКІВ, Я ВИВЧАЮ JAVASCRIPT"

// let name = 'Галина';
// let age = 35;
// let language = 'JavaScript';

// console.log(
//   `ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ${name}, МЕНІ ${age} РОКІВ, Я ВИВЧАЮ ${language}`
// );


// ЗАДАЧА 2
// ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ , ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"

// let name = prompt("Ваше ім`я");
// let email = prompt("Ваш емейл");
// let phone = prompt("Ваш телефон");

// console.log(`КОРИСТУВАЧ ${name} ВИКОРИСТОВУЄ  ${email} ПОЧТУ І ${phone} ТЕЛЕФОН`);

// ЗАДАЧА 3
// ПОРАХУЙТЕ СУМУ ТОВАРІВ У КОРЗИНІ . ПОТРІБНО ВВЕСТИ СУМУ 3-Х ТОВАРІВ І ПОРАХУВАТИ ЇХ СУМУ

// let item1 = Number(prompt("Введіть ціну телевізора"));
// let item2 = +prompt("Введіть ціну телеaфона");
// let item3 = +prompt("Введіть ціну комп'ютера");
// console.log((item1 + item2 + item3))
// ЗАДАЧА 4
// ВИКОРИСТОВУЮЧИ КОНСТРУКЦІЮ IF...ELSE , НАПИШИ КОД, ЯКИЙ БУДЕ ЗАПИТУВАТИ:
// "СКІЛЬКИ МІСЯЦІВ МАЄ РІК", ЯКЩО КОРИСТУВАЧ ВВОДИТЬ 12 ТО У КОНСОЛІ ПИШЕ ВІРНО, ЯКЩО НЕ ПРАВИЛЬНО КОРИСТУВАЧ ВВІВ, ТОДІ У КОНСОЛІ ПИШЕ
// "НЕ ЗНАЄТЕ? 12"

// let months = Number(prompt("СКІЛЬКИ МІСЯЦІВ МАЄ РІК?"));

// if (months === 12) {
//     console.log(true)
// }
// else {
//     console.log("НЕ ЗНАЄТЕ? 12")
// }
// ЗАДАЧА 5
// НАПИШІТЬ ПРОГРАМУ, ЯКА ДОЗВОЛЯТИМЕ ЮЗЕРУ ВВОДИТИ ЧИСЛО І ОПРИДІЛЯТИМЕ ЧИ ЦІЛЕ ЦЕ ЧИСЛО, ЧИ НЕ ЦІЛЕ
// let number = Number(prompt("Введіть число"));
// // if (number % 2 === 0) {
// //     console.log("Це ціле")
// // }
// // else {
// //     console.log("це не ціле число")
// // }
// let number1 = number % 2 === 0 ? "Це ціле" : "це не ціле число";
// console.log(number1)
// ЗАДАЧА 6
// НАПИШІТЬ ПРОГРАМУ , ДЕ МИ У КОРИСТОВАЧА ПИТАЄМОСЬ МІСЯЦЬ НАРОДЖЕННЯ, І ПОКАЗУЄМО У ЯКУ ПОРУ РОКУ ВІН НАРОДИВСЯ

// let birthMonth = Number(prompt("В якому місяці ви народилися?"));
// if (birthMonth === 12 || birthMonth === 1 || birthMonth === 2) {
//     console.log('Зима')
// }
// else if (birthMonth >= 3 && birthMonth < 6) {
//     console.log("Весна")
// }
// else if (birthMonth >= 6 && birthMonth < 9) {
//     console.log("Літо")
// }
// else if (birthMonth >= 9 && birthMonth < 12) {
//     console.log("Осінь")
// }

// else {
// console.log('Такої пори року немає')
// }

// ЗАДАЧА 1
// БАЗОВІ ОПЕРАЦІЇ З МАСИВОМ
// 1)створіть масив styles з елементами «Джаз» і «Блюз»
// 2)добавте «Рок-н-ролл» в кінець
// 3)замініть значення в середині на «Классика»
// 4)видаліть перший елемент і виведіть його в консоль
// 5)вставте «Рэп» і «Регги» на початок масиву

// МАСИВ ПО ХОДІ ВИПОВНЕННЯ ОПЕРАЦІЇ
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

// const styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");

// styles.splice(1, 1, "Классика");


// // console.log(styles.shift());
// styles.unshift("Рэп", "Регги");
// console.log(styles);

// ЗАДАЧА 2
// Напишіть ф-цію logItems(array) , яка буде получати масив і використовуючи цикл for , який для кожного елемента масива буде виводити в консоль
// повідомлення у форматі <індекс елемента> та <значення елемента>.
// Номерація для кожного елемента масива ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// const users = ["Mango", "Poly", "Ajax"];
// // function logItems(array) {
// //     for (let i = 0; i < array1.length; i += 1){
// //         console.log(i, array1[i])
// //     }
// // }
// for (let user of users) {
//     console.log(users.indexOf(user), user)
// }
// // logItems();

// ЗАДАЧА 3
// Напишіть код , який шукає саме найменше число в масиві
// 1) напишіть циклом for
// const numbers = [2, 17, 94, 1, 23, 37];
// 2) перепишіть функцією findSmallestNumber(numbers)
// console.log(findSmallestNumber([2, 17, 94, 1, 23, 37]));
// console.log(findSmallestNumber([49, 4, 83, 7, 12]));

// let smallestNumber = numbers[0];
// for (let number of numbers) {
//     if (smallestNumber > number) {
//         smallestNumber = number;
//     }
// }
 
// console.log(smallestNumber);

// function findSmallestNumber(numbers) {
//   let smallestNumber = numbers[0];
//   for (let number of numbers) {
//       if (smallestNumber > number) {
//           smallestNumber = number;
//       }
//     }
//     return smallestNumber;
// }

// console.log(findSmallestNumber([2, 17, 94, 1, 23, 37]));
// console.log(findSmallestNumber([49, 4, 83, 7, 12]));





