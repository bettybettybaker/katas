/*eslint no-console: ["off"] */
/*eslint one-var: ["error", "never"]*/


function arabicToRomanNumeral (num) {
  let result = "";
  let number = num;

  while (number <= 10) {
    if (number == 10) {
      result += "X";
      number -= 10;
    }
  }
console.log(number);

return result;
}


function testArabicToRomanNumeral (number, expected) {
  const actual = arabicToRomanNumeral(number);

  if (actual === expected){
    console.log("true");
  } else {
    console.log("ERROR");
  }
}


testArabicToRomanNumeral(1, "I");
