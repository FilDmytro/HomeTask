// Task #1

// function CreateHuman(name, age, gender, nationality, country, tripList) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
//   this.nationality = nationality;
//   this.country = country;
//   this.tripList = [tripList];
// }

// CreateHuman.prototype.greet = function () {
//   console.log(
//     `Hi Everyone! I am ${this.name}, I am ${this.age} old years and born in ${this.country}!`
//   );
// };

// CreateHuman.prototype.aweke = function () {
//   console.log(`${this.name} Aaaaah good morning...`);
// };

// CreateHuman.prototype.sleep = function () {
//   console.log(
//     `${this.name} tired and going to bed, ${this.nationality} go to bed early...`
//   );
// };

// CreateHuman.prototype.trip = function () {
//   console.log(
//     `${this.tripList} These are countries that I always wanted to visit...`
//   );
// };

// const human1 = new CreateHuman("Alex", 25, "Female", "Ukrainian", "Ukraine", [
//   " Italy",
//   " Japan",
//   " Turkey",
// ]);
// const human2 = new CreateHuman("Max", 26, "Female", "Ukrainian", "Ukraine", [
//   " Spain",
//   " Greece",
//   " Denmark",
// ]);

// human1.greet();  Hi Everyone! I am Alex, I am 25 old years and born in Ukraine!
// human1.aweke();  Alex Aaaaah good morning...
// human1.sleep();  Alex tired and going to bed, Ukrainian go to bed early...
// human2.greet();  Hi Everyone! I am Max, I am 26 old years and born in Ukraine!
// human1.trip();   Italy, Japan, Turkey These are countries that I always wanted to visit...
// human2.trip();   Spain, Greece, Denmark These are countries that I always wanted to visit...

// Task #2

// function sum(...numbers) {
//   return numbers.reduce((x, y) => x + y, this.number);
// }

// Function.prototype.myBind = function (context, ...boundArguments) {
//   return (...newArguments) => {
//     return this.apply(context, [...boundArguments, ...newArguments]);
//   };
// };

// const context = {
//   number: 10,
// };
// console.log(sum.myBind(context, 1, 2, 3)());

// Task #3

// const object1 = { name: "Dmytro", age: 29 };
// const object2 = { name: "Dmytro", age: 29 };

// function isEqual(object1, object2) {
//   let property1 = Object.getOwnPropertyNames(object1);
//   let property2 = Object.getOwnPropertyNames(object2);

//   if (property1.length != property2.length) {
//     return false;
//   }

//   for (let i = 0; i < property1.length; i++) {
//     let prop = property1[i];

//     if (object1[prop] !== object2[prop]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isEqual(object1, object2));

// Task #4

// function Calculator() {
//   this.enterData = function () {
//     this.a = +prompt("First number?", 0);
//     this.b = +prompt("Second number?", 0);
//   };

//   this.calculateSum = function () {
//     if (this.a === undefined || this.b === undefined) {
//       this.enterData();
//     }
//     return `Sum is: ${this.a + this.b}`;
//   };

//   this.calculateNSD = function () {
//     if (this.a === undefined || this.b === undefined) {
//       this.enterData();
//     }

//     let NSD = this.a > this.b ? this.a : this.b;

//     while (NSD > 0 && NSD !== undefined) {
//       if (this.a % NSD === 0 && this.b % NSD === 0) {
//         break;
//       } else {
//         NSD--;
//       }
//     }

//     return `NSD is: ${NSD}`;
//   };

//   this.calculateNSK = function () {
//     if (this.a === undefined || this.b === undefined) {
//       this.enterData();
//     }
//     let NSD = this.a > this.b ? this.a : this.b;

//     while (NSD > 0 && NSD !== undefined) {
//       if (this.a % NSD === 0 && this.b % NSD === 0) {
//         break;
//       } else {
//         NSD--;
//       }
//     }
//     NSD;

//     const NSK = (this.a * this.b) / NSD;
//     return `NSK is: ${NSK}`;
//   };
// }

// const calculator = new Calculator();
// calculator.enterData();
// console.log(calculator.calculateSum());
// console.log(calculator.calculateNSD());
// console.log(calculator.calculateNSK());

