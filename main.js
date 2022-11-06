
// Task #1

// document.querySelector('#first-btn').onclick = transformToСentury;
// const outFirstTask = document.querySelector('.first-task');

// function transformToСentury() {
//   const value = document.querySelector('.first-input').value; 
//   const century = +value.slice(0, 2) + 1;
//   const getEnding = function (d) {
//     if (d > 3 && d < 21) return "th";
//     switch (d % 10) {
//       case 1:
//         return "st";
//       case 2:
//         return "nd";
//       case 3:
//         return "rd";
//       default:
//         return "th";
//     };
//   };
  
//   outFirstTask.innerHTML = `${century}${getEnding(century)}`;
// };

// Task #2

// document.querySelector('#second-btn').onclick = toBinary;
// const outSecondTask = document.querySelector('.second-task');
    
// function toBinary() {
//     let result;
//     const secondInput = document.querySelector('.second-input').value;
//     const vowels = 'aeiou';
//     const isVowel = x => vowels.indexOf(x.toLowerCase()) !== -1;
  
//     outSecondTask.innerHTML = [...secondInput].map(isVowel).map(Number).join('');
// };

// Task #3

// document.querySelector('#third-btn').onclick = spinWords;
// const outThirdTask = document.querySelector('.third-task');

// function spinWords() {
//     const value = document.querySelector('.third-input').value;
//     const strings = value.split(' ');
//     const strReverse = str => [...str].reverse().join('');
  
//     outThirdTask.innerHTML = strings.map(word => word.length >= 5 ? strReverse(word) : word).join(' ');
// };

// Task #4

// document.querySelector('#four-btn').onclick = hightAndLow;
// const outFourTask = document.querySelector('.four-task');

// function hightAndLow() {
//     const fourInput = document.querySelector('.four-input').value;
//     const transformToArr = fourInput.split(' ');
//     const result = `${Math.min(...transformToArr)} ${Math.max(...transformToArr)}`;
//     outFourTask.innerHTML = `${result}`
// };

/* Task #5  Тут два варіанти т.к. по умові нам дано масив а з інтпуту я прямо отримую стрічку, 
перший варіант вирішений без масиву, у другому я отриману стрічку перетворюю у масив як в умові завдання */

// document.querySelector("#five-btn").onclick = createPhoneNumber;
// const outFiveTask = document.querySelector(".five-task");

// function createPhoneNumber() {
//   const fiveInput = document.querySelector(".five-input").value;
//   let phoneCode = fiveInput.substr(0, 3);
//   let part1 = fiveInput.substr(3, 3);
//   let part2 = fiveInput.substr(6);

//   outFiveTask.innerHTML = `(${phoneCode}) ${part1}-${part2}`;
// }

// document.querySelector('#five-btn').onclick = createPhoneNumber;
// const outFiveTask = document.querySelector('.five-task');

// function createPhoneNumber() {
//     const fiveInput = document.querySelector('.five-input').value;
//     const trToArr = fiveInput.split('');
//     outFiveTask.innerHTML = 
//     `(${trToArr[0]}${trToArr[1]}${trToArr[2]}) 
//     ${trToArr[3]}${trToArr[4]}${trToArr[5]}-${trToArr[6]}${trToArr[7]}${trToArr[8]}${trToArr[9]}`;
// };
