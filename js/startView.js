function updateViewStart() {
  document.getElementById('app').innerHTML = /*html*/ `
    <main>
      <h1>Start Game</h1>
      <button onClick="startNewGame()" class="start-button">Start New Game</button>
    </main>
  `
}