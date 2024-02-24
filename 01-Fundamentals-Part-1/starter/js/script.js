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

console.log(`*****************************************************`);

//  coding challenge 2
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

let dolphinScore1 = 96;
let dolphinScore2 = 108;
let dolphinScore3 = 89;

dolphinScore1 = 97;
dolphinScore2 = 112;
dolphinScore3 = 101;

dolphinScore1 = 97;
dolphinScore2 = 112;
dolphinScore3 = 101;

let koalasScore1 = 88;
let koalasScore2 = 91;
let koalasScore3 = 110;

koalasScore1 = 109;
koalasScore2 = 95;
koalasScore3 = 123;

koalasScore1 = 109;
koalasScore2 = 95;
koalasScore3 = 106;

const dolphinAvgScore = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
const koalasAvgScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

console.log(dolphinAvgScore, koalasAvgScore);

if (dolphinAvgScore > koalasAvgScore && dolphinAvgScore >= 100) {
  console.log(`dolphin wins!`);
} else if (koalasAvgScore > dolphinAvgScore && koalasAvgScore >= 100) {
  console.log(`Koalas win!!`);
} else if (
  koalasAvgScore === dolphinAvgScore &&
  dolphinAvgScore >= 100 &&
  koalasAvgScore >= 100
) {
  console.log("Match drawn!!");
} else {
  console.log(`No one wins`);
}

// coding challenge 3:--

const amount = Number(prompt("Enter Amount Value: "));

const tip = amount >= 50 && amount <= 300 ? amount * 0.15 : amount * 0.2;

console.log(
  `The bill was ${amount},the tip was ${tip}, and the total value ${
    amount + tip
  }`
);
