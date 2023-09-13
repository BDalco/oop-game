/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startGameButton = document.getElementById('btn__reset');
const qwerty = document.getElementById('qwerty');
const keyboardDisplay = document.querySelectorAll(".key");
const phraseContainer = document.getElementById("phrase");
const lifeHearts = document.querySelectorAll(".tries img");
const overlay = document.getElementById('overlay');
const gameOverMessage = document.getElementById('game-over-message');

/** Adds listener event to Start Game  */
startGameButton.addEventListener('click', () => {
  game = new Game();
  game.startGame();
});

/** Adds listener event to the keyboard on the screen  */
qwerty.addEventListener('click', (e) => {
  if(e.target.className === 'key') {
    game.handleInteraction(e.target);
  }
});