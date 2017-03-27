/*eslint no-console: ["off"] */

let num = 0;

while (num <= 100){
  if (num % 15 == 0) {
    console.log("FizzBuzz");
    } else if (num % 3 == 0) {
    console.log("Fizz");
    } else if (num % 5 == 0) {
    console.log("Buzz");
    } else {
    console.log(num);
  }
num += 1;
}

// for (let num = 1; num <= 100; num += 1) {
//   if (num % 15 == 0) {
//     console.log("FizzBuzz");
//   } else if (num % 3 == 0) {
//     console.log("Fizz");
//   } else if (num % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(num);
//   }
// }
