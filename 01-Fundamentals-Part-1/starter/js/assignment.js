`use strict`;
console.log("****************************************************************");

// Assignment 1:- variables and values

// let country = "India";
// let continent = "Asia";
// let population = 140; // Population in Millions
// console.log(country);
// console.log(continent);
// console.log(population);

// // Assignment 2 :- data type

// let isIsland = false;
// let language;

// console.log(isIsland);
// console.log(language);

// Assignment 3:- let and const keyword

const country = "India";
const continent = "Asia";
let population = 140;
let language;
language = "Hindi";
const isIsland = false;

// console.log(country);
// console.log(continent);
// console.log(population);
// console.log(language);
// console.log(isIsland);

// Assignment 4:- Operators

let halfPopulation = population / 2;
// population in million

population += 1;
console.log(population);
console.log(halfPopulation);
let finlandPopulation = 6;
let averagePopulation = 33;
console.log(
  "My country has more population than Finland ",
  population > finlandPopulation
);
console.log(
  "My country has more population than average population ",
  population > averagePopulation
);

const description =
  country +
  " is in " +
  continent +
  ", and it's " +
  population +
  " million people speak " +
  language;

console.log(description);

// Assignment 5:- Template Strings

console.log(
  `${country} is in ${continent} and it's ${halfPopulation} million population speaks ${language}. `
);

// Assignment 6:- Type coercion
console.log("9" - "5"); //4
console.log("19" - "13" + "17"); // '617'
console.log("19" - "13" + 17);
23;
console.log("123" < 57); // false
console.log(5 + 6 + "4" + 9 - 4 - 2); //1143

// Assignment 7:- Equality Operator

// const numNeighbours = +prompt(
//   "Enter number of countries who are neighbour to your countries?"
// );

// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border!");
// } else {
//   console.log("No border.....");
// }

// Assignment 8:- Logical Operators

const myCountry = "UK";
const myCountryPopulation = 22; // in millions
const myCountryNativeLanguage = "English";
const isIslandMyCountry = false;

if (
  myCountryPopulation <= 50 &&
  myCountryNativeLanguage === "English" &&
  !isIslandMyCountry
) {
  console.log(
    `${myCountry} meets your criteria. you should come to ${myCountry}`
  );
} else {
  console.log(`${myCountry} does not meet your criteria.`);
}

// Assignment 9:- switch operator

// const nativeLanguage = prompt(`Enter your native language? `);

// // spanish: '2nd place in number of native speakers'
// // english: '3rd place'
// // hindi: 'Number 4'
// // arabic: '5th most spoken language'
// // for all other simply log 'Great language too :D'

// switch (nativeLanguage) {
//   case "mandarin":
//   case "chinese":
//     console.log("Most  number of native speakers.");
//     break;

//   case "spanish":
//     console.log("2nd place in number of native speakers");
//     break;

//   case "english":
//     console.log("3rd place");
//     break;

//   case "hindi":
//     console.log("4th place");
//     break;

//   case "arabic":
//     console.log("5th most spoken language");
//     break;

//   default:
//     console.log("Great language too :D");
//     break;
// }
