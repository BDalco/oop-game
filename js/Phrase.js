/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /** Adds the phrase to the board */
  addPhraseToDisplay() {
    const ul = document.createElement('ul');
    phraseContainer.appendChild(ul);

    for (let i = 0; i < this.phrase.length; i++){
      const li = document.createElement('li');
      if(this.phrase[i] === ' '){
        li.className = 'space';
      } else{
        li.className = `hide letter ${this.phrase[i]}`;
        li.textContent = this.phrase[i];
      }
      ul.appendChild(li);
    }
  }
  
  /** Checks if the letter selected by the player matches a letter in the phrase */
  checkLetter(letter) {
    return this.phrase.includes(letter);
  }

  /** Reveals the letters on the board that matches the player's selection */
  showMatchedLetter(letterCheck) {
    const letters = document.querySelectorAll('.letter');
    letters.forEach(letter => {
      if(letter.textContent === letterCheck) {
        letter.classList.remove('hide');
        letter.classList.add('show');
      }
    });
  }
}