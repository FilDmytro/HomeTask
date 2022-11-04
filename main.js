const display = document.getElementById("display");
const start = document.querySelector(".start");
const input = document.querySelector("#input");
document.querySelector("button").onclick = myClick;

display.innerHTML = "00:00";

let timeOut;
let time = myClick;
function myClick() {
  time = document.querySelector("#input").value;
  console.log(time);
}

start.addEventListener("click", function () {
  timeOut = setInterval(timers, 1000);
});

function timers() {
  if (time <= 0) {
    window.location.reload();
  } else {
    let minutes = Math.floor(time / 60);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.innerHTML = `${minutes}:${seconds}`;
    time--;
  }
}

// Task.2

const confirm = document.querySelector("#confirm");
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
document.querySelector(".confirm").onclick = inputeDateTransform;

const currentDate = new Date();

function inputeDateTransform() {
  let dateEnd = document.querySelector("#input-data").value;
  dateEnd = Date.parse(dateEnd);
}

function myCalendarTimer() {
  const currentDate = new Date();
  let dateEnd = document.querySelector("#input-data").value;
  dateEnd = Date.parse(dateEnd);
  const diff = dateEnd - currentDate;

  const daysCalc = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hoursCalc = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutesCalc = Math.floor(diff / 1000 / 60) % 60;
  const secondsCalc = Math.floor(diff / 1000) % 60;

  days.innerText = daysCalc < 10 ? "0" + daysCalc : daysCalc;
  hours.innerText = hoursCalc < 10 ? "0" + hoursCalc : hoursCalc;
  minutes.innerText = minutesCalc < 10 ? "0" + minutesCalc : minutesCalc;
  seconds.innerText = secondsCalc < 10 ? "0" + secondsCalc : secondsCalc;
}

confirm.addEventListener("click", function () {
  out = setInterval(myCalendarTimer, 1000);
});

// Task #3

const chooseModel = document.querySelector(".model");
const ourPrice = document.querySelector(".out-price");
const brand = document.querySelector("#brand");
const ram = document.querySelector("#RAM");
const integralStorage = document.querySelector("#integral-storage");
document.querySelector(".choose").onclick = choosePhoneParam;

const phonePrice = [
  {
    phoneBrand: "iphone",
    ramStorage: "64",
    intStorage: "128",
    modelPrice: 550,
  },
  {
    phoneBrand: "iphone",
    ramStorage: "64",
    intStorage: "256",
    modelPrice: 570,
  },
  {
    phoneBrand: "iphone",
    ramStorage: "64",
    intStorage: "512",
    modelPrice: 580,
  },
  {
    phoneBrand: "iphone",
    ramStorage: "256",
    intStorage: "128",
    modelPrice: 590,
  },
  {
    phoneBrand: "iphone",
    ramStorage: "256",
    intStorage: "256",
    modelPrice: 600,
  },
  {
    phoneBrand: "iphone",
    ramStorage: "256",
    intStorage: "512",
    modelPrice: 610,
  },
  {
    phoneBrand: "iphone",
    ramStorage: "512",
    intStorage: "128",
    modelPrice: 620,
  },
  {
    phoneBrand: "iphone",
    ramStorage: "512",
    intStorage: "256",
    modelPrice: 630,
  },
  {
    phoneBrand: "iphone",
    ramStorage: "512",
    intStorage: "512",
    modelPrice: 640,
  },

  {
    phoneBrand: "samsung",
    ramStorage: "64",
    intStorage: "128",
    modelPrice: 450,
  },
  {
    phoneBrand: "samsung",
    ramStorage: "64",
    intStorage: "256",
    modelPrice: 460,
  },
  {
    phoneBrand: "samsung",
    ramStorage: "64",
    intStorage: "512",
    modelPrice: 470,
  },
  {
    phoneBrand: "samsung",
    ramStorage: "256",
    intStorage: "128",
    modelPrice: 480,
  },
  {
    phoneBrand: "samsung",
    ramStorage: "256",
    intStorage: "256",
    modelPrice: 490,
  },
  {
    phoneBrand: "samsung",
    ramStorage: "256",
    intStorage: "512",
    modelPrice: 500,
  },
  {
    phoneBrand: "samsung",
    ramStorage: "512",
    intStorage: "128",
    modelPrice: 510,
  },
  {
    phoneBrand: "samsung",
    ramStorage: "512",
    intStorage: "256",
    modelPrice: 520,
  },
  {
    phoneBrand: "samsung",
    ramStorage: "512",
    intStorage: "512",
    modelPrice: 530,
  },

  { phoneBrand: "nokia", ramStorage: "64", intStorage: "128", modelPrice: 350 },
  { phoneBrand: "nokia", ramStorage: "64", intStorage: "256", modelPrice: 360 },
  { phoneBrand: "nokia", ramStorage: "64", intStorage: "512", modelPrice: 370 },
  {
    phoneBrand: "nokia",
    ramStorage: "256",
    intStorage: "128",
    modelPrice: 380,
  },
  {
    phoneBrand: "nokia",
    ramStorage: "256",
    intStorage: "256",
    modelPrice: 390,
  },
  {
    phoneBrand: "nokia",
    ramStorage: "256",
    intStorage: "512",
    modelPrice: 400,
  },
  {
    phoneBrand: "nokia",
    ramStorage: "512",
    intStorage: "128",
    modelPrice: 410,
  },
  {
    phoneBrand: "nokia",
    ramStorage: "512",
    intStorage: "256",
    modelPrice: 420,
  },
  {
    phoneBrand: "nokia",
    ramStorage: "512",
    intStorage: "512",
    modelPrice: 430,
  },
];

function choosePhoneParam() {
  let phoneBrand = document.querySelector("#brand").value;
  let ramStorage = document.querySelector("#RAM").value;
  let intStorage = document.querySelector("#integral-storage").value;

  let price;

  for (let i = 0; i < phonePrice.length; i++) {
    if (
      phonePrice[i].phoneBrand === phoneBrand &&
      phonePrice[i].ramStorage === ramStorage &&
      phonePrice[i].intStorage === intStorage
    ) {
      price = phonePrice[i].modelPrice;
      ourPrice.innerText = `our price is ${price} USD`;
    }
  }
}
