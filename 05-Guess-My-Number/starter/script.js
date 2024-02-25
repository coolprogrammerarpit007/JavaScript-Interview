'use strict';

// ALL DOM VARIABLES
const number = document.querySelector('.guess');
const secretNumber = document.querySelector('.number');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const msg = document.querySelector('.message');
const score = document.querySelector('.score');
const highestScore = document.querySelector('.highscore');

/*
      ******
// STATE VARIABLES
      *******
      */
let secretNum = Math.floor(Math.random() * 20) + 1;
let scoreNum = 20;
let highScore = 0;
let alreadyWon = false;

/*
 *************************
 *************************
 */
// function -> check button

const checkNum = function () {
  const guess = Number(number.value);

  // when there is no input
  if (!guess && !alreadyWon) {
    msg.textContent = 'Enter a value';
  }

  // when player wins the game
  else if (guess === secretNum && !alreadyWon) {
    msg.textContent = 'Correct Number';
    scoreNum--;
    score.textContent = scoreNum;
    document.body.style.backgroundColor = '#60b347';
    secretNumber.style.width = '30rem';
    secretNumber.textContent = secretNum;
    alreadyWon = true;
    console.log(`You won ${alreadyWon}`);
    console.log(alreadyWon);
    if (scoreNum > highScore) {
      highScore = scoreNum;
      highestScore.textContent = highScore;
    }
  }

  // when guess is different
  else if (guess !== secretNum && !alreadyWon) {
    if (scoreNum > 1) {
      msg.textContent = guess > secretNum ? 'Too High' : 'Too Low';
      scoreNum--;
      score.textContent = scoreNum;
    } else {
      document.body.style.backgroundColor = 'red';
      secretNumber.style.width = '30rem';
      score.textContent = 0;
      msg.textContent = 'You lose the game';
      secretNumber.textContent = secretNum;
      alreadyWon = true;
    }
  }
};

// function :-Reset the game

const reset = function () {
  secretNum = Math.floor(Math.random() * 20) + 1;
  scoreNum = 20;
  secretNumber.textContent = '?';
  msg.textContent = 'Start guessing...';
  score.textContent = scoreNum;
  document.body.style.backgroundColor = '#222';
  secretNumber.style.width = '15rem';
  alreadyWon = false;
  number.value = '';
};
// EventListener to the check Button

checkBtn.addEventListener('click', checkNum);

// Implementing reset functionality to the game

againBtn.addEventListener('click', reset);
