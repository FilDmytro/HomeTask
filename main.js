
// Task #1

// function createArray() {
//     let userArray = [];
//     const count = +prompt("Яка кількість чисел?");
//     if (isNaN(count) || count === null || count === undefined || count === 0) {
//         return console.log('Введені дані не коректні!');
//     }

//     for (let i = 0; i < count; i++) {
//         const userNum = +prompt("Вводимо числа по одному:");
//         if (isNaN(userNum) || userNum === null || userNum === undefined || userNum === 0) {
//             return console.log('Введені дані не коректні!');
//         }
//         userArray.push(userNum);
//     }

//     return userArray;
// }

// createArray();

// Task #2

// userArray.sort((a, b) => a - b);
// console.log(userArray);    

// Task #3

// const shopList = [
//     { productName: "bread", productPrice: 14.5, productQuantity: 2, },
//     { productName: "milk", productPrice: 22, productQuantity: 3, },
//     { productName: "eggs", productPrice: 4, productQuantity: 10, },
//     { productName: "cheese", productPrice: 110, productQuantity: 4, },
//     { productName: "tomato", productPrice: 10, productQuantity: 6, },
//     { productName: "onion", productPrice: 5, productQuantity: 1, },
// ];

// let totalSum = 0;
// const totalPrice = shopList.forEach((element) => totalSum += element.productPrice * element.productQuantity);
// console.log(`Загальна вартість корзини становить ${totalSum} UAH`);

// const justProductQuntity = shopList.map(item => item.productQuantity);
// const minQuantity = Math.min.apply(null, justProductQuntity);

// function totalPoductQuantity(justProductQuntity) {
//     let sum = 0;
//     for (let i = 0; i < justProductQuntity.length; i++) {
//         sum += justProductQuntity[i];
//     }
//     return sum;
// };
// console.log(`Загальна кількість продуктів ${totalPoductQuantity(justProductQuntity)} шт.`);

// let mostExpenciveProduct = shopList.reduce((min, max) => min.productPrice > max.productPrice ? min : max);
// console.log(`Найбіль дорогим продуктом в списку є ${mostExpenciveProduct.productName}!`);

// const addItemInShopList = () => {
//     const createNewProduct = (productName, productPrice, productQuantity) => {
//         return {
//             productName: productName,
//             productPrice: productPrice,
//             productQuantity: productQuantity,
//         }

//     }
//     const newProduct = createNewProduct(
//         productName = prompt('Введіть назву продукту:'),
//         productPrice = +prompt('Введіть ціну продукту:'),
//         productQuantity = +prompt('Введіть кількість продукту'),
//     );

//     if (productName === undefined || productName === null || typeof productName != "string") {
//         console.log('Введені дані не коректні');
//     }
//     if (productPrice === undefined || productPrice === null || isNaN(productPrice) || productName === 0) {
//         console.log('Введені дані не коректні');
//     }
//     if (productQuantity === undefined || productQuantity === null || isNaN(productQuantity) || productName === 0) {
//         console.log('Введені дані не коректні');
//     }
//     shopList.push(newProduct);

// }
// addItemInShopList();




// function deleteExcessProduct() {
//     let anyProduct = prompt('Що викинемо?');
//     excessProduct = shopList.find(item => item.productName === anyProduct);

//     let excessIndex = shopList.indexOf(excessProduct);
//     if (excessIndex !== -1) {
//         shopList.splice(excessIndex, 1);
//     }
// }
    
// deleteExcessProduct();
// console.log(shopList);

// Tesk #4

// ourArray = [16, -3, 54, -4, 72, -56, 47, -12, 4, -16, 25, -37, 46, 4, -51, 27, -8, 4, -54, 76, -4, 12, 6, -35];

// function positiveElements() {
//     let sumValue = 0;
//     ourArray.forEach((element) => sumValue += element > 0 ? element : 0);

//     const positiveQty = ourArray.filter(element => (element > 0));
//     return `Кількість позитивних чисел в масиві ${positiveQty.length}, а їх сума = ${sumValue}`;
// }
// console.log(positiveElements());

// const minElemInOurArray = Math.min.apply(null, ourArray);
// console.log(`Мінімальне значення у масиві ${minElemInOurArray}, а його індекс = ${ourArray.indexOf(minElemInOurArray)}!`);

// const maxElemInOurArray = Math.max.apply(null, ourArray);
// console.log(`Максимальне значення у масиві ${maxElemInOurArray}, а його індекс = ${ourArray.indexOf(maxElemInOurArray)}!`);
      
// const negativeQty = ourArray.filter(element => (element < 0));
// console.log(negativeQty.length);

// const oddPositiveQty = ourArray.filter(element => (element > 0) && (element % 2 !== 0));
// console.log(oddPositiveQty.length);

// let sumPairNumQty = 0;
// for (var i = 0; i < ourArray.length; i++) {
//     if (ourArray[i] > 0 && ourArray[i] % 2 === 0){
//         sumPairNumQty += ourArray[i];
//     }
// }
// console.log(`Сума парних позитивних елементів ${sumPairNumQty}!`);

// let sumProdNumQty = 1;
// for (var i = 0; i < ourArray.length; i++) {
//     if (ourArray[i] > 0){
//         sumProdNumQty *= ourArray[i];
//     }
// }
// console.log(`Добуток позитивних елементів ${sumProdNumQty}!`);
    

// const totalPrice = shopList.map(item => item.productPrice);
// function sumTotalPrice(totalPrice) {
//     let sum = 0;
//     for (let i = 0; i < totalPrice.length; i++) {
//         sum += totalPrice[i];
//     }
//     return sum;
// };
// console.log(`Загальна вартість списку з продуктами ${sumTotalPrice(totalPrice)} UAH`);







