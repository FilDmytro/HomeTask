let userName = prompt("Ваше ім'я?");
let userSurname = prompt("Ваше Прізвище?");
let userFavoreNumber = prompt("Ваше улюблене число?");
alert(`Вітаю ${userName} ${userSurname}! Ваше улюблене число - ${userFavoreNumber}`);

let firstNumber = +prompt("Введіть перше число");
let secondNumber = +prompt("Введіть друге число");

console.log(firstNumber + secondNumber, firstNumber - secondNumber, firstNumber * secondNumber, firstNumber / secondNumber);

userBirthYear = prompt("Рік Вашого народження?");
yearNow = new Date().getFullYear();
userAge = yearNow - userBirthYear;
console.log(userAge);

console.log(`Остача від ділення числа ${firstNumber} на число ${secondNumber} рівна ${firstNumber / secondNumber}`);

let randomNumber = +prompt("Введіть випадкове число: ");
parityTestResult = (randomNumber % 2 == 0) ? "Ваше число парне" : "Ваше число не парне";
console.log(parityTestResult);