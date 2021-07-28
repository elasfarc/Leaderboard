/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-globals */

import LeaderBoard from './leaderboard.js';
import Game from './game.js';
import Player from './player.js';
import Error from './error.js';

const leaderboard = new LeaderBoard();
const errors = new Error();

function displayError(errors) {
  const scoreForm = document.querySelector('.score-form');
  const errorsList = document.createElement('ul');
  errorsList.classList.add('errorsList');

  errors.forEach((e) => {
    errorsList.innerHTML += `
          <li>${e.message}</li>
      `;
  });
  scoreForm.appendChild(errorsList);
}

function updateGameList(game) {
  const gamesContainer = document.querySelector('.scores-container .content');
  gamesContainer.innerHTML
    += `
        <li class='game'> ${game.player.name} : ${game.score} </li>
    `;
}
function clearInput(...elements) {
  [...elements].forEach((inputElement) => { inputElement.value = ''; });
}
export function formSubmitionHandler(event) {
  event.preventDefault();
  const { name, score } = event.target.elements;

  // check validation pass

  // errors('reset');
  if (errors.list.length > 0) {
    displayError(errors.list);
    errors.reset();
  } else {
    // add a new game obj into leaderboard
    const player = new Player({ name: name.value });
    const game = new Game({ player, score: +score.value });
    leaderboard.addGame(game);

    // update the dom
    updateGameList(game);

    // clear
    clearInput(name, score);
  }
}
function validateName(name) {
  (name.trim().length < 3) && errors.addError({ message: 'min name length 3 chars' });
}

function validateScore(score) {
  (isNaN(score) || (typeof +score !== 'number')) && errors.addError({ message: 'score must be a number' });
}

export function validateInput(event) {
  const userInput = event.target.value;
  (userInput.trim().length < 1) && errors.addError({ message: `${event.target.name} can't be empty!` });
  if (event.target.name === 'name') validateName(userInput);
  else (validateScore(userInput));

  (errors.list.length > 0) && displayError(errors.list);
}

export function inputInFocus() {
  const scoreForm = document.querySelector('.score-form');
  const errorsList = scoreForm.querySelector('.errorsList');
  (errorsList) && scoreForm.removeChild(errorsList);
  errors.reset();
}
