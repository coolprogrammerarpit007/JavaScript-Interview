`use strict`;

// Assignment 1

function describeCountry(country, population, capitalCity) {
  const description = `${country} has ${population} million people and it's capital city is ${capitalCity}`;

  return description;
}

// console.log(describeCountry("Finland", 6, "Helinski"));
// console.log(describeCountry("India", 140, "New Delhi"));
// console.log(describeCountry("China", 135, "Bejjing"));

// Assignment 2

const worldPopulation = 7900; // Millions

const percentageOfWorldPopulation = function (country, population) {
  const percentage = (population / worldPopulation) * 100;

  const description = `${country} has ${population} million and it's population is about ${percentage.toFixed(
    1
  )}% of world population`;

  return description;
};

// console.log(percentageOfWorldPopulation("China", 1441));
// console.log(percentageOfWorldPopulation("India", 1445));
// console.log(percentageOfWorldPopulation("USA", 330));

// Assignment 3

const percentageOfWorld = (country, population) => {
  const percentage = (population / worldPopulation) * 100;

  const description = `${country} has ${population} million people and it's population is about ${percentage.toFixed(
    1
  )}% of world population.`;
  return description;
};

// console.log(percentageOfWorld("China", 1441));

// Assignment 4

const percentageOfWorld2 = (population) => {
  return ((population / worldPopulation) * 100).toFixed(1);
};

const describePopulation = function (country, population) {
  const percentage = percentageOfWorld2(population);

  return `${country} has ${population} million people and it's population is about ${percentage}% of world population.`;
};

// console.log(describePopulation("China", 1441));

// Assignment 5

const populations = [1441, 1447, 330, 270]; // population in millions

// console.log(populations.length === 4);

const percentageOfWorld3 = function (populations) {
  const populationPercentages = [];
  for (let i = 0; i < populations.length; i++) {
    populationPercentages.push(Number(percentageOfWorld2(populations[i])));
  }

  return populationPercentages;
};

// console.log(populations);
// const percentages1 = percentageOfWorld3(populations);
// console.log(percentages1);
// console.log(typeof percentages1[0]);

// Assignment 6

const neighbours = [
  "pakisthan",
  "bhutan",
  "nepal",
  "bangladesh",
  "myanmar",
  "china",
];
// console.log(neighbours);
neighbours.push("Utopia");
// console.log(neighbours);
neighbours.pop();
// console.log(neighbours);

// console.log(
// neighbours.includes("Germany")
// ? "A central european country"
// : "Probably not a central european coutry"
// );

let index = neighbours.indexOf("china");
neighbours[index] = "peoples republic of china";
// console.log(neighbours);

// Assignment 7

// const myCountry = {
//   country: "India",
//   capital: "New Delhi",
//   language: "Hindi",
//   population: 1447,
//   neighbours: ["pakistan", "china", "nepal", "bangladesh", "bhutan"],
// };

// console.log(myCountry);

// Assignment 8
// console.log(
//   `${myCountry.country} has ${myCountry.population} million hindi speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital city called ${myCountry.capital}`
// );

// console.log((myCountry.population += 2));
// console.log((myCountry["population"] -= 2));

// we use bracket notation when property has to be computed otherwise use dot notation.

// Assignment 9
const myCountry = {
  country: "India",
  capital: "New Delhi",
  language: "Hindi",
  population: 1447,
  neighbours: ["pakistan", "china", "nepal", "bangladesh", "bhutan"],
  checkIsland: function () {
    this.isIsland = this.neighbours.length > 0 ? false : true;
    return this.isIsland;
  },
  describe: function () {
    return `${this.country} has ${this.population} milllion ${this.language} speaking, ${this.neighbours.length} neighbous and a capital called ${this.capital}`;
  },
};

// console.log(myCountry.describe());
myCountry.checkIsland();
// console.log(myCountry.isIsland);
