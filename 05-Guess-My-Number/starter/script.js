'use strict';

/*
console.log(document.querySelector('.message').innerHTML);
document.querySelector('.message').innerHTML = 'Correct Number!'

document.querySelector('.number').innerHTML = 13;
document.querySelector('.score').innerHTML = 10;

document.querySelector('.guess').value = 23; 
console.log(document.querySelector('.guess').value);
*/
  
const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (guess === 0) {
    document.querySelector('.message').innerHTML = 'No Number!🛑';
  }
});
