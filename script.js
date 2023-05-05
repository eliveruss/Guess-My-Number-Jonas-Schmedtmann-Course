'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const message = document.querySelector('.message');
const numberSpace = document.querySelector('.number');
const body = document.querySelector('body');
const scoreSpace = document.querySelector('.score');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const inputLabel = document.querySelector('.guess');
const highscoreSpace = document.querySelector('.highscore');
let score = 20;
let highscoreArr = [];

const check = function () {
  const guess = Number(inputLabel.value);
  if (!guess) {
    message.textContent = 'No number';
  } else if (guess === secretNumber) {
    message.textContent = 'Correct number';
    body.style.backgroundColor = 'green';
    numberSpace.style.width = '30rem';
    numberSpace.textContent = secretNumber;
    highscoreArr.push(score);
    highscoreSpace.textContent = Math.max.apply(null, highscoreArr);
    // console.log(highscoreArr);
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = 'Too high! Try again. -1 score';
      score--;
      scoreSpace.textContent = score;
    } else {
      message.textContent = 'You lost the game!';
      scoreSpace.textContent = '0';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = 'Too low! Try again. -1 score';
      score--;
      scoreSpace.textContent = score;
    } else {
      message.textContent = 'You lost the game!';
    }
  }
};

const again = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  numberSpace.textContent = '?';
  numberSpace.style.width = '15rem';
  message.textContent = 'Start guessing...';
  body.style.backgroundColor = '#222';
  inputLabel.value = '';
  score = 20;
  scoreSpace.textContent = score;
};

checkBtn.addEventListener('click', check);
againBtn.addEventListener('click', again);
