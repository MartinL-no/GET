function startNewGame() {
  const remainingBalloons = model.inputs.drawPage.remainingBalloons
  const savedScore = model.scores.saved
  const nextAnswerIndex = Math.floor(Math.random() * model.answers.length)
  const nextAnswer = model.answers[nextAnswerIndex]

  model.scores.best = calculateBestScore()
  model.scores.saved = remainingBalloons ? remainingBalloons + savedScore : 0
  model.inputs.drawPage.currentCategoryId = nextAnswer.id
  model.inputs.drawPage.currentAnswer = nextAnswer.answer
  model.inputs.drawPage.currentInput = nextAnswer.answer
    .split('')
    .map(letter => letter === ' ' ? ' ' : '?')
    .join('')
  model.inputs.drawPage.remainingBalloons = 7
  model.inputs.drawPage.incorrectSelectedLetters = []
  model.app.currentPage = 'game'

  updateView();
}

function calculateBestScore() {
  const remainingBalloons = model.inputs.drawPage.remainingBalloons
  const previousBestScore = model.scores.best
  const savedScore = model.scores.saved

  if((savedScore + remainingBalloons) > previousBestScore) {
    return savedScore + remainingBalloons
  } else {
    return previousBestScore
  }
}