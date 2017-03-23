// Equilateral

function equilateral (sides){
  return sides[0] === sides[1] && sides[1] === sides[2];
}

// equilateral tests

const testCase = [
  [1, 1, 1], // equilateral
  [1, 2, 3], // scalene
  [1, 3, 3], // isosceles
  [2, 2, 5], // isosceles
  [99, 80, 99] // isosceles
];

// true
if (testCase[1] = false) {

console.log(
  `Sorry, testing ${testCase[1]} for an equilateral triangle returned false.`);
}

/*

// false
if (equilateral([1, 2, 3]) != true) {
  console.log(
    "Sorry, testing [1, 2, 3] for an equilateral triangle returned false.");
}


// Isosceles

function isosceles (sides){
  return (sides[0] === sides[1] || sides[1] === sides[2] || sides[2] === sides[0]);
}

// isosceles tests

//true
if (isosceles([1, 3, 3]) != true) {
  console.log(
    "Sorry, testing [1, 3, 3] for an isosceles triangle returned false.");
}

if (isosceles([2, 2, 5]) != true) {
  console.log(
    "Sorry, testing [2, 2, 5] for an isosceles triangle returned false.");
}

if (isosceles([99, 80, 99]) != true) {
  console.log(
    "Sorry, testing [99, 80, 99] for an isosceles triangle returned false.");
}

// false
if (isosceles([1, 2, 3]) != true) {
  console.log(
    "Sorry, testing [1, 2, 3] for an isosceles triangle returned false.");
}

// Scalene
function scalene (sides){
  return (sides[0] != sides[1] && sides[1] != sides[2] && sides[2] != sides[0]);
}

// scalene tests

// true
if (scalene([1, 2, 3]) != true) {
  console.log(
    "Sorry, testing [1, 2, 3] for a scalene triangle returned false.");
}

// false
if (scalene([2, 2, 2]) != true) {
  console.log(
    "Sorry, testing [2, 2, 2] for a scalene triangle returned false.");
}

if (scalene([1, 3, 3]) != true) {
  console.log(
    "Sorry, testing [1, 3, 3] for a scalene triangle returned false.");
}

*/
