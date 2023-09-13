/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase('Are you not entertained'),
      new Phrase('I love lamp'),
      new Phrase('I am Iron Man'),
      new Phrase('Why so serious'),
      new Phrase('I am a golden god'),
    ];
    this.activePhrase = null;
  }

  /** Loads the game */
  startGame() {
    /** This will help reset the board */
    phraseContainer.innerHTML = "";

    /** This will hide the screen overlay to start the game */
    overlay.style.display = 'none';

    /** Sets the active phrase with a random phrase */
    this.activePhrase = this.getRandomPhrase();
    
    /** Adds the phrase to the board */
    this.activePhrase.addPhraseToDisplay();

    /** Resets the hearts */
    lifeHearts.forEach((heart) => (heart.src = "images/liveHeart.png"));

    /** Resets the keyboard display */
    keyboardDisplay.forEach((keyboard) => {
      keyboard.disabled = false;
      keyboard.classList.remove('chosen', 'wrong');
    });
  }

  /** Randomly gets a phrase from the phrases array */
  getRandomPhrase() {
    const newPhrase = this.phrases[ Math.floor(Math.random() * this.phrases.length) ];
    
    return newPhrase
  }

  /** Checks to see if the letter selected by player is correct */
  handleInteraction(button) {
    button.disabled = true;
    
    /** Letter the player chose */
    const selectedLetter = button.textContent;
    /** Comparing the letter to the phrase */
    const letterCheck = this.activePhrase.checkLetter(selectedLetter);

    /** Shows letter if correct and checks if player won game */
    if(letterCheck) {
      button.classList.add('chosen');
      this.activePhrase.showMatchedLetter(selectedLetter);
      if(this.checkForWin()) {
        this.gameOver(true);
      }
    } else { /** if not correct it shows letter as wrong and removes a heart */
      button.classList.add('wrong');
      this.removeLife();
    }
  }

  /** This method removes a heart when a letter is missed and checks if player has lost */
  removeLife() {
    if (this.missed < 5) {
      lifeHearts[this.missed].src = 'images/lostHeart.png';
      this.missed++;
    }

    if(this.missed === 5) {
      this.gameOver(false);
    }
  }

  /** Checks if the player has won */
  checkForWin() {
    const hiddenLetter = document.querySelectorAll('.hide');
    
    if( hiddenLetter.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  /** Displays the winning or losing message to the player */
  gameOver(playerWins) {
    overlay.style.display = 'block';
    
    if(playerWins) {
      overlay.className = 'win';
      gameOverMessage.textContent = 'Congrats You Win!';
    } else {
      overlay.className = 'lose';
      gameOverMessage.textContent = 'Better Luck Next Time!';
    }
  }
}