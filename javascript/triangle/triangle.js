const assert = require("assert");
// Equilateral

function equilateral (sides){
  if (sides[0] === sides[1] && sides[1] === sides[2]) {
    return true;
  }
}

// equilateral tests

// true

assert.deepEqual(
  true, equilateral([1, 1, 1]),
  "Sorry, testing [1, 1, 1] for an equilateral triangle returned false.");

// false
assert.deepEqual(
  true, equilateral([1, 2, 3]),
  "Sorry, testing [1, 2, 3] for an equilateral triangle returned false.");

// Isosceles

function isosceles (sides){
  if (sides[0] === sides[0] || sides[1] === sides[2] || sides[2] === sides[0]){
    return true;
  }
}

// isosceles tests

//true
assert.deepEqual(
  true, isosceles([1, 3, 3]),
  "Sorry, testing [1, 3, 3] for an isosceles triangle returned false.");

assert.deepEqual(
  true, isosceles([2, 2, 5]),
  "Sorry, testing [2, 2, 5] for an isosceles triangle returned false.");

assert.deepEqual(
  true, isosceles([1, 2, 3]),
  "Sorry, testing [1, 2, 3] for an isosceles triangle returned false.");

// false
assert.deepEqual(
  true, isosceles([99, 80, 99]),
  "Sorry, testing [99, 80, 99] for an isosceles triangle returned false.");


// Scalene

function scalene (sides){
  if (sides[0] != sides[1] && sides[1] != sides[2] && sides[2] != sides[0]){
    return true;
  }
}

// scalene tests

// true
assert.deepEqual(
  true, scalene([1, 2, 3]),
  "Sorry, testing [1, 2, 3] for an scalene triangle returned false.");

// false
// assert.deepEqual(
// true, scalene([2, 2, 2]),
// "Sorry, testing [2, 2, 2] for an scalene triangle returned false.");

// assert.deepEqual(
// true, scalene([1, 3, 3]),
// "Sorry, testing [1, 3, 3] for an scalene triangle returned false.");
