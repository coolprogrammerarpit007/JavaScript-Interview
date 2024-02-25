// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// 4 Steps to solve a problem

// 1. Understand the problem, Ask the right questions to understand the bigger picture.

// 2. Divide and Conquer:- divide your bigger problem into smaller ones and try to solve them

// 3. Research:- Do all your research to solve these problems and understand them.

// 4. write pseudo code for bigger problems without first writing code.

// const measureKelvin = function () {
//   const measurment = {
//     type: 'temp',
//     unit: 'celcius',
//     value: Number(prompt('Degree Celcius: ')),
//   };

//   const kelvin = measurment.value + 273;
//   console.log(kelvin);
// };

// measureKelvin();

// coding challenge

// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]

const printForecast = function (temps) {
  let tempStr = '...';
  for (let i = 0; i < temps.length; i++) {
    tempStr += `${temps[i]} in ${i + 1} days ` + '...';
  }

  return tempStr;
};

const tempForecast = printForecast([17, 21, 23]);
console.log(tempForecast);
const tempForecast1 = printForecast([12, 5, -5, 0, 4]);
console.log(tempForecast1);
