
// Task #1

// let serchMinNum = (num1, num2, num3, num4) => {
//     const result = Math.min(num1, num2, num3, num4);

//     if (isNaN(result)) {
//         console.log("Будь-ласка вводьте лише числа");
//     } else {
//         return result;
//     }
// };
// serchMinNum(4, 2, 7, 9);



// Task #2

// let commonDenominator = (num1, num2) => {

//     let denominator = (num1 > num2) ? num2 : num1;

//     while (denominator > 0 && denominator !== undefined) {
//         if (num1 % denominator === 0 && num2 % denominator === 0) {
//             break;
//         } else {
//             denominator--;
//         }
//     }

//     if (isNaN(denominator)) {
//         alert('Невірні параметри');
//     } else {
//         return denominator || alert("Невірні параметри");
//     }
// }
// commonDenominator(12, 24);

// Task #3

// const perfectNumber = (num) => {

//     let j = 0;
//     for (let i = 1; i <= num / 2; i++) {
//         if (num % i == 0) {
//             j += i;
//         }
//     }

//     if (j === num && j !== 0) {
//         console.log("Число є ідеальним");
//     } else {
//         console.log("Число не ідеальне");
//     }

// }
// perfectNumber(28);

// Task #4

// const sumNumber = (num1, num2) => {
//     let result = 0;

//     while (num1 <= num2) {
//         result += num1;
//         num1++;
//     }

//     return result;
// }

// sumNumber(10, 15);

// Task #5

// const fahrenheitConverter = (temp_C) => {

//     if (isNaN(temp_C)) {
//         console.log('Введіть числове значення');
//     } else {
//         result = temp_C * 1.8 + 32;
//     }

//     return result;
// }

// fahrenheitConverter(10);

// Task #6

// const getRndInteger = (num1 = 0, num2 = 40) => {
//     return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
// }

// getRndInteger();




