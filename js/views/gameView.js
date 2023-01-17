function updateViewGame() {
  const currentCategoryId = model.inputs.drawPage.currentCategoryId
  const category = model.answers[currentCategoryId].category
  console.log(category)
  const remainingBalloons = model.inputs.drawPage.remainingBalloons;


  document.getElementById('app').innerHTML = /*html*/ `
  <main>
    ${createScoresHtml()}
    <h1 class=game-category>${category}</h1>
    ${createAnswerHtml()}
    <div class="game-section-container">
      <div class=game-buttons-flex>
        ${createButtonHtml()}
      </div>
      <div class="game-remaining-balloons">
        <p > Remaining Balloons: ${remainingBalloons}</p>
        <h1>🎈</h1>
      </div>
    </div>
  </main>
  `
}

function createScoresHtml() {
  const savedScore = model.scores.saved
  const bestScore = model.scores.best

  let html = /*html*/`
    <div class=game-results-container>
      <p class=game-results-balloon>🎈</p>
      <div>
        <p class=game-results-text>Saved: ${savedScore}</p>
        <p class=game-results-text>Best: ${bestScore}</p>
      </div>
    </div>
  `

  return html
}

function createAnswerHtml() {
  const currentAnswerArray = model.inputs.drawPage.currentAnswer.split('');
  const currentInputArray = model.inputs.drawPage.currentInput.split('');
  let html = `<p class="game-answer">`;

  for (letter of currentInputArray) {
    if (currentAnswerArray.includes(letter)) {
      html += letter + '&nbsp'
    } else if(letter === ' ') {
      html += '&nbsp &nbsp'
    } else {
      html += '_' + '&nbsp'
    }
  }
  html += `</p>`

  return html
}

function createButtonHtml() {
  const currentInput = model.inputs.drawPage.currentInput
  const incorrectSelectedLetters = model.inputs.drawPage.incorrectSelectedLetters;
  let html = '';

  for (let letter of model.alphabet) {
    if (incorrectSelectedLetters.includes(letter)) {
      html += /*html*/ 
      `<button 
        onClick="submitLetter('${letter}')"
        class="incorrect-answer game-button-letter"
        id="${letter}"
        disabled>
          ${letter}
      </button>`
    } else if (currentInput.includes(letter)) {
      html += /*html*/ 
      `<button 
        onClick="submitLetter('${letter}')"
        class="game-button-letter"
        id="${letter}"
        disabled>
          ${letter}
      </button>`
    } else {
      html += /*html*/ 
      `<button 
        onClick="submitLetter('${letter}')"
        class="game-button-letter"
        id="${letter}"
      >
          ${letter}
      </button>`
    }
  }

  return html
}