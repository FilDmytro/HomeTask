// addNumbers = 0.1 + 0.2;
// console.log(+addNumbers.toFixed(1));

// const userLogin = prompt('Enter your Login:');
// const userPassword = prompt('Enter your password:');

// if (userLogin === 'admin' && userPassword === '12pass33210') {
//     console.log("Login is successful");
// } else if (userLogin !== 'admin' && userPassword !== '12pass33210') {
//    console.log("You do not have access to admin panel");
// } else {
//     console.log("Problem with login or password");
// }




// const watermelonPrice = 21,
//       carrotPrice = 8,
//       potatoPrice = 12,
//       tomatoPrice = 20;

// let selectedProduct;
// let productQuantity;
// let userBalance;
// let userMoney = +prompt('how much money do you have?');

// if (userMoney >= watermelonPrice && userMoney >= carrotPrice && userMoney >= potatoPrice && userMoney >= tomatoPrice) {
//     console.log(`Price: watermelon: 21 UAH, carrot: 8 UAH, potato: 12 UAH, tomato: 20 UAH.`);
//     selectedProduct = prompt('select a product');
// } 

// if (userMoney <= watermelonPrice && userMoney <= carrotPrice && userMoney <= potatoPrice && userMoney <= tomatoPrice) {
//     console.log("Unfortunately, you do not have enough funds to purchase at least one of the products");
// } else if (selectedProduct === "watermelon" && userMoney >= watermelonPrice) {
//     console.log(`For ${userMoney} UAH you can buy ${productQuantity = parseInt(userMoney / watermelonPrice)} 
//     watermelon and the rest will be yours ${userBalance = userMoney % watermelonPrice} UAH `);
// } else if (selectedProduct === "carrot" && userMoney >= carrotPrice) {
//     console.log(`For ${userMoney} UAH you can buy ${productQuantity = parseInt(userMoney / carrotPrice)} 
//     carrot and the rest will be yours ${userBalance = userMoney % carrotPrice} UAH `);
// } else if (selectedProduct === "potato" && userMoney >= potatoPrice) {
//     console.log(`For ${userMoney} UAH you can buy ${productQuantity = parseInt(userMoney / potatoPrice)} 
//     potato and the rest will be yours ${userBalance = userMoney % potatoPrice} UAH `);
// } else if (selectedProduct === "tomato" && userMoney >= tomatoPrice) {
//     console.log(`For ${userMoney} UAH you can buy ${productQuantity = parseInt(userMoney / tomatoPrice)} 
//     tomato and the rest will be yours ${userBalance = userMoney % tomatoPrice} UAH `);
// } else if (selectedProduct === "watermelon" && userMoney <= watermelonPrice) {
//     console.log(`Unfortunately, you do not have enough funds to buy at least one watermelon`);
// } else if (selectedProduct === "carrot" && userMoney <= carrotPrice) {
//     console.log(`Unfortunately, you do not have enough funds to buy at least one carrot`);
// } else if (selectedProduct === "potato" && userMoney <= potatoPrice) {
//     console.log(`Unfortunately, you do not have enough funds to buy at least one potato`);
// } else if (selectedProduct === "tomato" && userMoney <= tomatoPrice) {
//     console.log(`Unfortunately, you do not have enough funds to buy at least one tomato`);
// } 

// const a = +prompt("firstSideTrincle?");
// const b = +prompt("secondSideTrincle?");
// const c = +prompt("thirdSideTrincle?");

// trincle = a + b > c && a + c > b && b + c > a;
// console.log(trincle);

// 2 && 0 && 3 || true && false   (все зводиться до 0 || false та дорівнює false)
//  false || " " || 3 && true  (все зводиться до " " || true та дорівнює " ")
// 1 && 1000 && '0' || 0 && 'Bob'  (все зводиться до '0' || 0 та дорівнює '0')
// -1 || 0 || 0 && "" || 1010 (все зводиться до -1 || 1010 та дорівнює -1)