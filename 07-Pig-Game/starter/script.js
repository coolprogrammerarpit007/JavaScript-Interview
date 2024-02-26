'use strict';

// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdDiceBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// state variables
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// roll dice function

const rollDice = function () {
  let dice = Math.floor(Math.random() * 6) + 1;
  diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove('hidden');

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    currentScore = 0;
  }
};

// Adding EventListener to roll dice btn

rollDiceBtn.addEventListener('click', rollDice);
