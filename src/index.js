import './style.css';
import { formSubmitionHandler, validateInput, inputInFocus } from './domHelpers.js';

const scoreForm = document.forms.score;
const { name, score } = scoreForm.elements;
// const gamesContainer = document.querySelector('.scores-container .content');
scoreForm.addEventListener('submit', formSubmitionHandler);
name.addEventListener('blur', validateInput);
score.addEventListener('blur', validateInput);
name.addEventListener('focus', inputInFocus);
score.addEventListener('focus', inputInFocus);
