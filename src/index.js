import './style.css';
import {
  formSubmitionHandler, validateInput, inputInFocus, handleRefresh,
} from './domHelpers.js';

const scoreForm = document.forms.score;
const { name, score } = scoreForm.elements;
const refresh = document.querySelector('#refresh');
// const gamesContainer = document.querySelector('.scores-container .content');
scoreForm.addEventListener('submit', formSubmitionHandler);
name.addEventListener('blur', validateInput);
score.addEventListener('blur', validateInput);
name.addEventListener('focus', inputInFocus);
score.addEventListener('focus', inputInFocus);
refresh.addEventListener('click', handleRefresh);