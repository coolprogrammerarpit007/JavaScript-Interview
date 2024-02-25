`use strict`;

// challenge 1

// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 2

let dolphinScore1 = 44;
let dolphinScore2 = 23;
let dolphinScore3 = 71;

dolphinScore1 = 85;
dolphinScore2 = 54;
dolphinScore3 = 41;

let koalasScore1 = 65;
let koalasScore2 = 54;
let koalasScore3 = 49;

koalasScore1 = 23;
koalasScore2 = 34;
koalasScore3 = 27;

const calcAvg = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dolphinAvgScore = calcAvg(dolphinScore1, dolphinScore2, dolphinScore3);
const koalasAvgScore = calcAvg(koalasScore1, koalasScore2, koalasScore3);

// console.log(dolphinAvgScore, koalasAvgScore);

const checkWinner = (avg1, avg2) => {
  if (avg1 >= 2 * avg2) {
    console.log(`Dolphin wins(${avg1} vs ${avg2})`);
  } else if (avg2 >= 2 * avg1) {
    console.log(`Koalas wins(${avg2} vs ${avg1})`);
  } else {
    console.log(`No one wins`);
  }
};

// checkWinner(dolphinAvgScore, koalasAvgScore);

// challenge 2

const bills = [125, 555, 44];

const calcTip = (bills) => {
  const tips = [];

  for (let i = 0; i < bills.length; i++) {
    let tip =
      bills[i] >= 50 && bills[i] <= 300 ? bills[i] * 0.15 : bills[i] * 0.2;
    tips.push(tip);
  }

  return tips;
};
// console.log(bills);
const tips = calcTip(bills);
// console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

// challenge 3

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicence: true,
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },
  // calcAge: function (birthYear) {
  //   return 2037 - this.birthYear;
  // },

  calcAge: function (birthYear) {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is ${this.age} years old ${this.job} and he ${
      this.hasDriversLicence
        ? " has drivers licence"
        : " has not drivers licence."
    }`;
  },
};

// console.log(jonas.calcAge(1991));
// console.log(jonas.calcAge());
jonas.calcAge();
// console.log(jonas.getSummary());

// coding challenge 3

// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

john.calcBMI();
mark.calcBMI();
// console.log(john.BMI);
// console.log(mark.BMI);
const higherBMI =
  john.BMI > mark.BMI
    ? `John's BMI(${john.BMI.toFixed(2)}) is higher than (${mark.BMI.toFixed(
        2
      )})`
    : `Mark's BMI(${mark.BMI.toFixed(
        2
      )}) is higher than John's BMI(${john.BMI.toFixed(2)})`;

// console.log(higherBMI);

// coding challenge4
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

const bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips1 = [];
const totals = [];
let sum = 0;

const calcTip1 = function (bills) {
  for (let i = 0; i < bills.length; i++) {
    let tip =
      bills[i] >= 50 && bills[i] <= 300 ? bills[i] * 0.15 : bills[i] * 0.2;

    tips1.push(tip);
    totals[i] = tip + bills[i];
  }
  return tips1;
};

const newTips = calcTip1(bills1);

const avgAmt = (totals) => {
  for (let i = 0; i < totals.length; i++) {
    sum = sum + totals[i];
  }
  return sum / totals.length;
};

const averageAmt = avgAmt(totals);
console.log(bills1);
console.log(newTips);
console.log(totals);
console.log(`Average Total: ${averageAmt}`);
