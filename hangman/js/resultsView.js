function updateViewResults() {
  document.getElementById('app').innerHTML = /*html*/ `
  <main>
    ${createResultsHtml()}
    <button onClick="startNewGame()" class="results-button">NEXT PUZZLE</button>
   </main>
  `
}

function createResultsHtml() {
  const remainingBalloons = model.inputs.drawPage.remainingBalloons
  const result = remainingBalloons ? 'Solved!' : 'Game Over';
  const currentAnswer = model.inputs.drawPage.currentAnswer
  const correctAnswerText = remainingBalloons ? '' : `The correct answer was '${currentAnswer}'`;
  const balloonText = remainingBalloons ? `${remainingBalloons} 🎈` : 'You Saved 0 🎈';
  
  const html = /*html*/ `
      <h1>${result}</h1>
      <div>${correctAnswerText}</div>
      <p class="results-score">${balloonText}</p>
  `

  return html
}
