`use strict`;
console.log("Hello JavaScript");

// Coding Challenges

console.log(
  "**********************************************************************************************"
);

// Coding Challenge 1:-
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

let markMass = 78;
let johnMass = 92;
let markHeight = 1.69;
let johnHeight = 1.95;

markMass = 95;
johnMass = 85;
markHeight = 1.88;
johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

console.log(markBMI, johnBMI);

const markHigherBMI = markBMI > johnBMI;

console.log(
  markHigherBMI
    ? `Mark has higher BMI(${markBMI}) than John's BMI(${johnBMI})`
    : `John has higher BMI(${johnBMI}) than Mark's BMI(${markBMI})`
);

// JavaScript always generate Nan when it fail to do a number operation on non-number value.

// truthy and falshy values
// falshy values:- 0,'',false,null,undefined,NaN  . These are the only falshy values in JS
