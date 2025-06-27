'use strict';

const number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  if (!guessNumber) {
    document.querySelector('.message').textContent =
      'No number entered !!!!!!!!!!';
  } else if (guessNumber === number) {
    document.querySelector('.message').textContent = 'Correct number 🎉🎉🎉';
    document.querySelector('body').style.backgroundColor = '#eee';
    document.querySelector('.message').style.color = '#222';
  } else if (guessNumber > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guessNumber < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
