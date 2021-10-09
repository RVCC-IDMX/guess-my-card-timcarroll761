/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */

/* app.js */

/*
  DO NOT FORGET
Edit random.js so getRandomInt(max)
will return a random number from
0 to the value of max (inclusively)

*/
import getRandomInt from './random';
import './style.css';

const farewell = document.querySelector('.farewell');
const suits = ['hearts', 'spades', 'diamonds', 'clubs'];

while (confirm('Would you like to play the game?')) {
  const suit = suits[getRandomInt(0, 4)];
  const guess = prompt('Choose a suit (clubs, diamonds, hearts, spades):', '');

  if (suit.toLowerCase() === guess.toLowerCase())
    alert('Congratulations, you win!');
  else alert('Sorry, you lose.');
}

farewell.innerHTML = '<h1>Thanks for playing!<h1>';
