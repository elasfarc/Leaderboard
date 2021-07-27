export function formSubmitionHandler(event) {
  event.preventDefault();
  const { name, score } = event.target.elements;
  return { name: name.value, score: +score.value };
}
function validateName(name) {
  const validation = (name.trim().length > 3) ? true : { message: 'min name length 3 chars' };
  return validation;
}

function validateScore(score) {
  const validation = (typeof score === 'number') ? true : { message: 'score must be a number' };
  return validation;
}

export function validateInput(event) {
  const userInput = event.target.value;
  if (userInput.trim().length < 1) return { message: `${event.target.name} can't be empty!` };
  if (event.target.name === 'name') return validateName(userInput);
  return validateScore(userInput);
}
