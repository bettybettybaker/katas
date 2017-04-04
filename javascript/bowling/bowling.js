/*eslint no-console: ["off"] */
/*eslint one-var: ["error", "never"]*/
/*eslint max-statements: ["error", 15, { "ignoreTopLevelFunctions": true }]*/
/*eslint no-multiple-empty-lines: ["error", { "max": 4, "maxBOF": 1}]*/
/*eslint max-len: ["error", 300]*/
/*eslint sort-keys: ["off"]*/
/*eslint no-trailing-spaces: ["error", { "skipBlankLines": true }]*/
/*eslint max-statements: ["error", 20, { "ignoreTopLevelFunctions": true }]*/

class Game {
  roll (firstRoll, secondRoll) {
    this.firstRoll = firstRoll;
    this.secondRoll = secondRoll;
    this.frame = this.firstRoll + this.secondRoll;
    // console.log(this.frame);
  }
  score () {
    console.log(this.frame);
    return this.frame;
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
//const actual = game.roll(2);

// Assert
//assertBowlingScore(2, actual);

/* TEST CASE: 2 Rolls - no spare or strike */
// Arrange - See Single Roll Test Case

// Act
game.roll(1, 4);
const actual = game.score();

// Assert
assertBowlingScore(5, actual);

/* TEST CASE: 2 Rolls - no spare or strike */


/* TEST CASE: 2 Rolls - Spare */
