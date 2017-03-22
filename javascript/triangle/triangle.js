// Equilateral

function equilateral (sides){
  if (sides[0] === sides[1] && sides[1] === sides[2]) {
    return true;
  } else {
    return false;
    }
}

equilateral([1, 1, 1]);   // true
equilateral([1, 2, 3]);   // false

// Isosceles

function isosceles (sides){
  if (sides[0] === sides[0] || sides[1] === sides[2] || sides[2] === sides[0]){
    return true;
} else {
    return false;
  }
}

isosceles([1, 3, 3]);   // true
isosceles([2, 2, 5]);   // true
isosceles([99, 80, 99]);  // true
isosceles([1, 2, 3]);   // false


// Scalene

function scalene (sides){
  if (sides[0] != sides[1] && sides[1] != sides[2] && sides[2] != sides[0]){
    return true;
} else {
    return false;
  }
}

scalene([1, 2, 3]);   // true
scalene([2, 2, 2]); // false
scalene([1, 3, 3]); // false
