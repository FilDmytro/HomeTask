// function Car() {
//   const carInfo = { ...arguments[0] };
//   this.fuelConsumption = carInfo[0];
//   this.engineType = carInfo[1];
//   this.engineVolume = carInfo[2];
//   this.modelName = carInfo[3];
//   this.madeYear = carInfo[4];
//   this.mass = carInfo[5];
//   this.carStatus = carInfo[6];
//   this.maintenance = 100;
// }

// Car.prototype.startRide = function () {
//   let tripStatus = "We started and we are going";
//   if (!this.status) {
//     this.status = true;
//     this.maintenance = +(this.maintenance - Math.random() * 2.5).toFixed(1);
//   } else {
//     tripStatus =
//       "The rights must have been given as a gift, anyway, we are going";
//   }
//   return tripStatus;
// };
// Car.prototype.stopRide = function () {
//   this.status = false;
//   return "We stopped and are standing";
// };

// function Hatchback() {
//   Car.call(this, arguments);
// }
// function Sedan() {
//   Car.call(this, arguments);
// }
// function Wagon() {
//   Car.call(this, arguments);
// }

// Hatchback.prototype = Object.create(Car.prototype);
// Sedan.prototype = Object.create(Car.prototype);
// Wagon.prototype = Object.create(Car.prototype);

// const myDacia = new Hatchback(
//   7,
//   "gasolina",
//   1.8,
//   "Dacia Sandero",
//   2011,
//   900,
//   true,
//   100
// );
// const myBMW = new Sedan(10, "diesel", 2.0, "BMW 520d", 2012, 1700, true, 100);
// const myWag = new Wagon(8, "diesel", 1.9, "VW Passat", 2014, 1200, true, 100);

// console.log(myDacia.startRide()); // We started and we are going
// console.log(myDacia.startRide()); // The rights must have been given as a gift, anyway, we are going
// console.log(myDacia.stopRide()); // We stopped and are standing
// console.log(myDacia); // maintenance: 99.4 (та постійно змінюється =) )

// function Dealer(Object) {
//   this.typeAuto = function () {
//     if (Object instanceof Hatchback) {
//       return (this.typeAutomobile = "Hatchback");
//     } else if (Object instanceof Sedan) {
//       return (this.typeAutomobile = "Sedan");
//     } else if (Object instanceof Wagon) {
//       return (this.typeAutomobile = "Wagon");
//     } else {
//       console.log("Unknown type");
//     }
//   };

//   this.damage = function () {
//     let myDamege = 100 - Object.maintenance;
//     return myDamege.toFixed(1);
//   };

//   this.HatchbackKoef = function () {
//     const prices = {};
//     if (Object.engineType === "diesel") {
//       prices.engineKoef = 2.2;
//     } else if (Object.engineType === "gasolina") {
//       prices.engineKoef = 1.8;
//     } else {
//       console.log("Ми не ремонтуємо двигуни такого типу");
//     }
//     if (Object.madeYear > 2019) {
//       prices.madeYearKoef = 1.2;
//     } else if (Object.madeYear > 2010 && Object.madeYear < 2018) {
//       prices.madeYearKoef = 1.4;
//     } else if (Object.madeYear > 2000 && Object.madeYear < 2009) {
//       prices.madeYearKoef = 1.7;
//     } else if (Object.madeYear > 1990 && Object.madeYear < 2000) {
//       prices.madeYearKoef = 2;
//     } else {
//       console.log("Авто старше 1990 року не ремонтуэмо");
//     }
//     if (Object.mass >= 800 && Object.mass <= 1100) {
//       prices.massKoef = 1.5;
//     } else if (Object.mass >= 1101 && Object.mass <= 1400) {
//       prices.massKoef = 1.7;
//     } else if (Object.mass >= 1401) {
//       prices.massKoef = 2;
//     } else {
//       console.log("Ви певні що це вага автомобіля?");
//     }
//     return prices;
//   };

//   this.SedanKoef = function () {
//     const prices = {};
//     if (Object.engineType === "diesel") {
//       prices.engineKoef = 2.5;
//     } else if (Object.engineType === "gasolina") {
//       prices.engineKoef = 2;
//     } else {
//       console.log("Ми не ремонтуємо двигуни такого типу");
//     }

//     if (Object.madeYear > 2019) {
//       prices.madeYearKoef = 1.5;
//     } else if (Object.madeYear > 2010 && Object.madeYear < 2018) {
//       prices.madeYearKoef = 1.8;
//     } else if (Object.madeYear > 2000 && Object.madeYear < 2009) {
//       prices.madeYearKoef = 2;
//     } else if (Object.madeYear > 1990 && Object.madeYear < 2000) {
//       prices.madeYearKoef = 2.6;
//     } else {
//       console.log("Авто старше 1990 року не ремонтуэмо");
//     }

//     if (Object.mass >= 800 && Object.mass <= 1100) {
//       prices.massKoef = 1.6;
//     } else if (Object.mass >= 1101 && Object.mass <= 1400) {
//       prices.massKoef = 1.8;
//     } else if (Object.mass >= 1401) {
//       prices.massKoef = 2.1;
//     } else {
//       console.log("Ви певні що це вага автомобіля?");
//     }
//     return prices;
//   };

//   this.WagonKoef = function () {
//     const prices = {};
//     if (Object.engineType === "diesel") {
//       prices.engineKoef = 2.9;
//     } else if (Object.engineType === "gasolina") {
//       prices.engineKoef = 2.4;
//     } else {
//       console.log("Ми не ремонтуємо двигуни такого типу");
//     }

//     if (Object.madeYear > 2019) {
//       prices.madeYearKoef = 2;
//     } else if (Object.madeYear > 2010 && Object.madeYear < 2018) {
//       prices.madeYearKoef = 2.2;
//     } else if (Object.madeYear > 2000 && Object.madeYear < 2009) {
//       prices.madeYearKoef = 2.5;
//     } else if (Object.madeYear > 1990 && Object.madeYear < 2000) {
//       prices.madeYearKoef = 3;
//     } else {
//       console.log("Авто старше 1990 року не ремонтуэмо");
//     }

//     if (Object.mass >= 800 && Object.mass <= 1100) {
//       prices.massKoef = 1.7;
//     } else if (Object.mass >= 1101 && Object.mass <= 1400) {
//       prices.massKoef = 1.9;
//     } else if (Object.mass >= 1401) {
//       prices.massKoef = 2.2;
//     } else {
//       console.log("Ви певні що це вага автомобіля?");
//     }
//     return prices;
//   };

//   this.myKoef = function () {
//     this.typeAuto();
//     if (this.typeAutomobile === "Hatchback") {
//       return (this.koef = this.HatchbackKoef());
//     } else if (this.typeAutomobile === "Sedan") {
//       return (this.koef = this.SedanKoef());
//     } else if (this.typeAutomobile === "Wagon") {
//       return (this.koef = this.WagonKoef());
//     } else {
//       return (this.koef = "Щось не так");
//     }
//   };

//   this.sumKoef = function () {
//     this.myKoef();
//     let sum = 0;
//     for (let key in this.koef) {
//       sum += this.koef[key];
//     }
//     return sum;
//   };

//   this.totalPrice = function () {
//     this.typeAuto();
//     this.a = this.sumKoef();
//     this.b = this.damage();
//     if (this.typeAutomobile === "Hatchback") {
//       this.price = +(1100 * this.b) * this.a;
//     } else if (this.typeAutomobile === "Sedan") {
//       this.price = +(1250 * this.b) * this.a;
//     } else if (this.typeAutomobile === "Wagon") {
//       this.price = +(1300 * this.b) * this.a;
//     } else {
//       ("Invalid");
//     }
//     return this.price;
//   };

//   // return Object.maintenance = 100; // Закоментив бо динамічно обнуляє вартість ремонту та пошкодження...
//   console.log(
//     `Авто було пошкоджене на ${this.damage()} пункти, а вартість ремонту ${this.totalPrice()}!`
//   );
// }
// const dealer = new Dealer(myDacia);
