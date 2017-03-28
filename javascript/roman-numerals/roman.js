/*eslint no-console: ["off"] */
/*eslint one-var: ["error", "never"]*/


function arabicToRomanNumeral (num) {
  let result = "";
  const number = num;

  if (number === 1){
    result += "I";
  } else if (number === 2) {
    result += "II";
  } else if (number === 3) {
    result += "III";
  } else if (number === 4) {
    result += "IV";
  } else if (number === 5) {
    result += "V";
  } else if (number === 6) {
    result += "VI";
  } else if (number === 7) {
    result += "VII";
  } else if (number === 8) {
    result += "VIII";
  } else if (number === 9) {
    result += "IX";
  } else if (number === 10) {
    result += "X";
  }

console.log(number);

return result;
}


function testArabicToRomanNumeral (number, expected) {
  const actual = arabicToRomanNumeral(number);

  if (actual === expected){
    console.log("Passing Test");
  } else {
    console.log("ERROR");
  }
}


testArabicToRomanNumeral(1, "I");
testArabicToRomanNumeral(2, "II");
testArabicToRomanNumeral(3, "III");
testArabicToRomanNumeral(4, "IV");
testArabicToRomanNumeral(5, "V");
testArabicToRomanNumeral(6, "VI");
testArabicToRomanNumeral(7, "VII");
testArabicToRomanNumeral(8, "VIII");
testArabicToRomanNumeral(9, "IX");
testArabicToRomanNumeral(10, "X");
