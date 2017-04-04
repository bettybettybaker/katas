class Game {
  roll (pinsDown) {
    this.firstRoll = pinsDown;
  }
  score () {
    return this.firstRoll;
  }
}


function assertBowlingScore (expected, actual) {
  if (actual != expected) {
    console.log(`Error: Expected ${expected}, but got ${actual}`);
  }
}

/* TRIPLE 'A' TESTING PATTERN */

/* TEST CASE: Single Roll */
// Arrange
const game = new Game();

// Act
const actual = game.roll(2);

// Assert
assertBowlingScore(2, actual);

/* TEST CASE: 2 Rolls - no spare or strike */


/* TEST CASE: 2 Rolls - no spare or strike */


/* TEST CASE: 2 Rolls - Spare */
