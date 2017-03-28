 /*eslint no-console: ["off"] */
 /*eslint one-var: ["error", "never"]*/
/*eslint max-statements: ["error", 15, { "ignoreTopLevelFunctions": true }]*/
/*eslint no-multiple-empty-lines: ["error", { "max": 4, "maxBOF": 1}]*/
/*eslint max-len: ["error", 100]*/
/*eslint sort-keys: ["off"]*/

const numberSets = {
  "1000": "M",
  "900": "CM",
  "500": "D",
  "400": "CD",
  "100": "C",
  "90": "XC",
  "50": "L",
  "40": "XL",
  "10": "X",
  "9": "IX",
  "5": "V",
  "4": "IV",
  "1": "I"
};

function convertToRoman (number) {
  if (number === 0) {
    return "";
  }
  for (let index = 0; index < numberSets.length; index += 1) {
    if (number >= numberSets[index][0]) {
      return numberSets[index][1] + convertToRoman(number - numberSets[index][0]);
    }
  }
  return "";
}


// TESTING //

function testArabicToRomanNumeral (number, expected) {
  const actual = convertToRoman(number);

  if (actual === expected){
    console.log("Passing Test: " + number + " ==> " + expected);
  } else {
    console.log("Error: Entered " + number + ". Returned " + actual + ", but expected " + expected);
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
testArabicToRomanNumeral(55, "LV");
testArabicToRomanNumeral(86, "LXXXVI");
testArabicToRomanNumeral(357, "CCCLVII");
testArabicToRomanNumeral(838, "DCCCXXXVIII");
testArabicToRomanNumeral(920, "CMXX");
testArabicToRomanNumeral(2374, "MMCCCLXXIV");


// if (number >= numberSets[index][0]) {
//   return numberSets[index][1] + convertToRoman(number - numberSets[index][0]);
// }
// }
