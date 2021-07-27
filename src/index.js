import './style.css';
import { formSubmitionHandler, validateInput } from './domHelpers.js';
import LeaderBoard from './leaderboard.js';

export const leaderboard = new LeaderBoard();
const scoreForm = document.forms.score;
const { name, score } = scoreForm.elements;
scoreForm.addEventListener('submit', formSubmitionHandler);
name.addEventListener('blur', validateInput);
score.addEventListener('blur', validateInput);
