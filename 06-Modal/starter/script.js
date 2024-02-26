'use strict';

const modalBtns = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.hidden');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');

// showModal function

const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// hideModal function

const hideModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Adding event listener to show modal

for (let i = 0; i < modalBtns.length; i++) {
  modalBtns[i].addEventListener('click', showModal);
}
// Adding event listener to hide modal

closeBtn.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);

// Adding event listener to keyPress button

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      hideModal();
    }
  }
});
