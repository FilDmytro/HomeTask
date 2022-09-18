
// Task #1

// for (let i = 10; i <= 25; i += 0.5) {
//     console.log(i);
// }

// Task #2

// const checkNumber = +prompt("Введіть число");

// let primeNumber = " просте";

// for (var i = 2; i < checkNumber; i++) {
//     if (checkNumber % i === 0) {
//         primeNumber = "не просте";
//         break;
//     }
// }

// console.log(`${checkNumber} ${primeNumber}`);

// Task #3

// const Purchase = +prompt('Введіть суму Вашої покупки');

// switch (true) {
//     case (Purchase <= 100):
//         console.log('Ваша знижка 3%');
//         break;
//     case (Purchase <= 200):
//         console.log('Ваша знижка 5%');
//         break;
//     case (Purchase > 200):
//         console.log('Ваша знижка 7%');
//         break;
//     default:
//         console.log('Упс! Щось пішло не так... спробуйте ще раз!');
//         break;
// }

// Task #4

// for (let i = 2; i <= 9; i++) {

//     var j = 1

//     while (j <= 9) {
//         console.log(i + " * " + j + " = " + i * j);
//         j++;
//     }
// }

// Task #5

// const Currency = "USD";
// const ExchangeRate = 36.76;
// let result;

// for (let i = 10; i <= 100; i += 10) {
//     result = (i * ExchangeRate);
//     console.log(`${i} ${Currency} = ${result.toFixed(2)} UAH`);
// }

// Task #6

// let amountPositive = 0;
// let amountNegative = 0;
// let amountZero = 0;
// let amountEven = 0;
// let amountOdd = 0;

// let askNumber = 0;
// let numberOfAttempts = 15;


// while (numberOfAttempts > 0) {
//     if (numberOfAttempts === 0) {
//         break;
//     }

//     const askNumber = +prompt('Введіть число');
//     if (askNumber > 0) {
//         ++amountPositive;
//     }

//     if (askNumber < 0) {
//         ++amountNegative;
//     }

//     if (askNumber === 0) {
//         ++amountZero;
//     }

//     if (askNumber % 2 === 0) {
//         ++amountOdd;
//     }

//     if (askNumber % 2 !== 0) {
//         ++amountEven;
//     }

//     numberOfAttempts--;
// }

// console.log(`Введено додатніх чисел ${amountPositive}`);
// console.log(`Введено від'ємних чисел ${amountNegative}`);
// console.log(`Введено нулів ${amountZero}`);
// console.log(`Введено парних чисел ${amountOdd}`);
// console.log(`Введено непарних чисел ${amountEven}`);






