
// Task #1

// const createNewTeam = (nameOfTeam, nameOfDriver, dateBirthDriver, carBrand, teamSponsor, driversLicense) => {
//     return {
//         team: nameOfTeam,
//         name: nameOfDriver,
//         date: dateBirthDriver,
//         car:  carBrand,
//         sponsor: teamSponsor,
//         license: driversLicense,
//         isCreated: true,
//     }
// }

// const newTeam = createNewTeam("Hillel", "Dmytro", 1992, "BMW", "Fil Dmytro", "confirm");

// Task #2

// let userInfo = {
//     login: "",
//     password: "",
//     city: "",
//     country: "",
//     gender: "",
//     age: "",
// };

// function createNewUser() {

//     for (key in userInfo) {
//         userInfo[key] = prompt(`Enter user ${key}...`);
//     }

//     return userInfo;
// }
// const newUser = (createNewUser());
// console.log(newUser);




// Task #3

// function changeUserCity() {
//     newUser.city = prompt("Enter new city");
//     return newUser;
// }

// console.log(changeUserCity());

// Task #4

// const student = {
//     name: "Dmytro",
//     surname: "Fil",
//     age: 29,
//     course: 2,
//     city: "Kiev",
//     greeting: () => {
//         console.log('Hi everyone!');
//     },
//     addHomework: () => {
//         console.log('Sending my Homework...Please, wait');
//     },
// }

// student.greeting();
// student.addHomework();

// Task #5

// function isEmpty(object) {
//     for (let prop in object) {
//         if (object.hasOwnProperty(prop));
//         return false;
//     }

//     return true;
// }

// const newObject1 = {
//     name: "Dmytro",
// };

// const newObject2 = {};

// console.log(isEmpty(newObject1)); false
// console.log(isEmpty(newObject2)); true

// Task #6-10

// teamRevenue = {
//     Taras: 2000,
//     Marta: 10,
//     Ivan: 1200,
//     Petro: 400,
//     Roman: 366,
//     Alina: 829,
// }

// function sumRevenue() {
//     let sum = 0;
//     for (let key in teamRevenue) {
//         sum += teamRevenue[key];
//     } return sum;
// }

// const getMinKey = obj => {
//     const minValue = Math.min.apply(null, Object.values(obj));
//     return Object.keys(teamRevenue).filter(key => teamRevenue[key] === minValue);
// };
// console.log(`Продавець з найменшою виручкою ${getMinKey(teamRevenue)}`);

// const getMaxKey = obj => {
//     const maxValue = Math.max.apply(null, Object.values(obj));
//     return Object.keys(teamRevenue).filter(key => teamRevenue[key] === maxValue);
// };
// console.log(`Продавець з найбільшою виручкою ${getMaxKey(teamRevenue)}`);

// function getRandomProperty() {
//     const keys = Object.keys(teamRevenue);
//     return keys[Math.floor(Math.random() * keys.length)];
// };

// console.log(`Вітаю! Продавцем місяця стає: ${getRandomProperty()}!`);


