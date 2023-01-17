function submitLetter(letter) {
  const currentAnswer = model.inputs.drawPage.currentAnswer;
  const incorrectSelectedLetters = model.inputs.drawPage.incorrectSelectedLetters;

  if (currentAnswer.indexOf(letter) !== -1) {
    updateCurrentInput(letter);
  } else {
    incorrectSelectedLetters.push(letter);
    reduceScore();
  }

  checkProgress();
  updateView();
}

function updateCurrentInput(letter) {
  const correctAnswerArray = model.inputs.drawPage.currentAnswer.split('');
  let currentInputArray = model.inputs.drawPage.currentInput.split('');

  for (let i = 0; i < correctAnswerArray.length; i++) {
    if (correctAnswerArray[i] === letter) {
      currentInputArray[i] = letter
    }
  }

  model.inputs.drawPage.currentInput = currentInputArray.join('');
}

function reduceScore() {
  const remainingBalloons = model.inputs.drawPage.remainingBalloons;

  if (remainingBalloons > 0 ) {
    model.inputs.drawPage.remainingBalloons--;
  }
}

function checkProgress() {
  const currentAnswer = model.inputs.drawPage.currentAnswer;
  const currentInput = model.inputs.drawPage.currentInput;
  const remainingBalloons = model.inputs.drawPage.remainingBalloons;

  if (currentInput === currentAnswer || !remainingBalloons) {
    model.app.currentPage = 'results';
  }
}