import './style.css';
import { formSubmitionHandler, validateInput } from './domHelpers.js';

const scoreForm = document.forms.score;
const { name, score } = scoreForm.elements;
// const gamesContainer = document.querySelector('.scores-container .content');
scoreForm.addEventListener('submit', formSubmitionHandler);
name.addEventListener('blur', validateInput);
score.addEventListener('blur', validateInput);
