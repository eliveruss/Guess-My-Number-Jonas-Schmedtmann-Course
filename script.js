'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(`.number`).textContent = secretNumber;

const message = document.querySelector('.message');

let score = 20;

document.querySelector(`.check`).addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = 'No number';
  } else if (guess === secretNumber) {
    message.textContent = 'Correct number';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = 'Too high! Try again. -1 score';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = 'You lost the game!';
      document.querySelector('.score').textContent = '0';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = 'Too low! Try again. -1 score';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = 'You lost the game!';
    }
  }
});
