// Equilateral
var sides = [1, 1, 1];

function equilateral (sides){
  if (sides[0] === sides[1] && sides[1] === sides[2]) {
    console.log("This is an equilateral triangle.");
  } else {
    console.log("This is NOT an equilateral triangle.");
  }
  return sides;
}

equilateral(sides);

// Isosceles

function isosceles (sides){
  if (sides[0] === sides[1] || sides[1] === sides[2] || sides[2] === sides[0]){
    console.log("This is an isosceles triangle.");
} else {
    console.log("This is NOT an isosceles triangle.");
}
return sides;
}

isosceles(sides);

// Scalene

function scalene (sides){
  if (sides[0] != sides[1] && sides[1] != sides[2] && sides[2] != sides[0]){
  console.log("This is a scalene triangle.");
} else {
  console.log("This is NOT a scalene triangle.");
}
return sides;
}

scalene(sides);
