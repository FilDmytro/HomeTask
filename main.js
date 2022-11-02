let a = "";
let b = "";
let operator = "";
let end = false;
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operators = ["-", "+", "X", "/"];

const show = document.querySelector(".display p");

function clearDisplay() {
  a = "";
  b = "";
  operator = "";
  end = false;
  show.textContent = 0;
};

document.querySelector(".ac").onclick = clearDisplay;
document.querySelector(".buttons").onclick = (event) => {
  if (!event.target.classList.contains("btn")) return;
  if (event.target.classList.contains("ac")) return;

  show.innerHTML = "";
  const key = event.target.innerHTML;

  if (numbers.includes(key)) {
    if (b === "" && operator === "") {
      a += key;
      show.innerHTML = a;
    } else if (a !== "" && b !== "" && end) {
      b = key;
      end = false;
      show.innerHTML = b;
    } else {
      b += key;
      show.innerHTML = b;
    };
    return;
  };

  if (operators.includes(key)) {
    operator = key;
    show.innerHTML = operator;
    return;
  };

  if (key === "=") {
    if (b === "") b = a;
    switch (operator) {
      case "+":
        a = +a + +b;
        break;
      case "-":
        a = a - b;
        break;
      case "X":
        a = a * b;
        break;
      case "/":
        if (b === "0") {
          show.innerHTML = "Error";
          a = "";
          b = "";
          operator = "";
          return;
        }
        a = a / b;
        break;
    };
    end = true;
    show.innerHTML = a;
  };
};

// Task.2 (To do List):

const input = document.querySelector("#input");
const btn = document.querySelector("#list-btn");
const ul = document.querySelector("#ul");

btn.addEventListener("click", (element) => {
  if (input.value === "") return;
  elementsManipulations(input.value);
  input.value = "";
});

function elementsManipulations(value) {
  const li = document.createElement("li");
  const btn = document.createElement("button");

  li.className = "li";
  li.innerHTML = value;
  ul.appendChild(li);

  btn.className = "list-btn";
  btn.innerHTML = "X";
  li.appendChild(btn);

  btn.addEventListener("click", (element) => {
    ul.removeChild(li);
  });
};

