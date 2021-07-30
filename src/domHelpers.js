/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-use-before-define */

import App from './app.js';
import LeaderBoard from './leaderboard.js';
import Game from './game.js';
import Player from './player.js';
import Error from './error.js';

// program starts
const app = new App();
let leaderboard;
let leaderBoardName;
const errors = new Error();
window.onload = async () => {
  if (app.isFirstTime) {
    leaderBoardName = window.prompt('Enter leaderBoard Name:');
    await app.addLeaderBoard(leaderBoardName);
  }

  const { id } = app.storage[0];
  leaderboard = new LeaderBoard(id);
  const header = document.querySelector('.header h1');
  header.innerText += ` ${app.storage[0].name}`;
  handleRefresh();
};

function displayFlashMsgs(messages) {
  const scoreForm = document.querySelector('.score-form');
  const errorsList = document.createElement('ul');
  errorsList.classList.add('errorsList');

  messages.forEach((e) => {
    errorsList.innerHTML += `
          <li>${e.message}</li>
      `;
  });
  scoreForm.appendChild(errorsList);
}

function updateGameList(games) {
  const gamesContainer = document.querySelector('.scores-container .content');
  games.forEach((game) => {
    const listItem = document.createElement('li');
    listItem.classList.add('game');
    listItem.innerText = `${game.user} : ${game.score}`;
    gamesContainer.insertAdjacentElement('afterbegin', listItem);
  });
}
function clearInput(...elements) {
  [...elements].forEach((inputElement) => { inputElement.value = ''; });
}
export async function formSubmitionHandler(event) {
  event.preventDefault();
  const { name, score } = event.target.elements;

  // check validation pass

  // errors('reset');
  if (errors.list.length > 0) {
    displayFlashMsgs(errors.list);
    // errors.reset();
  } else {
    // add a new game obj into leaderboard
    const player = new Player({ name: name.value });
    const game = new Game({ player, score: +score.value });

    // post scores && extract response
    const successMsg = await leaderboard.addGame(game);
    displayFlashMsgs([{ message: successMsg }]);

    // update the dom
    updateGameList([{ user: game.player.name, score: game.score }]);

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

  (errors.list.length > 0) && displayFlashMsgs(errors.list);
}

export function inputInFocus() {
  const scoreForm = document.querySelector('.score-form');
  const errorsList = scoreForm.querySelector('.errorsList');
  (errorsList) && scoreForm.removeChild(errorsList);
  errors.reset();
}

export async function handleRefresh() {
  const gamesContainer = document.querySelector('.scores-container .content');
  gamesContainer.innerHTML = '';
  const [...result] = await leaderboard.refresh();
  updateGameList(result);
}
