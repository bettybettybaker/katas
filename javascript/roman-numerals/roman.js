/*eslint no-console: ["off"] */
/*eslint one-var: ["error", "never"]*/
/*eslint max-statements: ["error", 15, { "ignoreTopLevelFunctions": true }]*/
/*eslint no-multiple-empty-lines: ["error", { "max": 4, "maxBOF": 1}]*/
/*eslint max-len: ["error", 300]*/
/*eslint sort-keys: ["off"]*/
/*eslint no-trailing-spaces: ["error", { "skipBlankLines": true }]*/
/*eslint max-statements: ["error", 20, { "ignoreTopLevelFunctions": true }]*/

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

function convertToRoman (numberToConvert) {
// // console.log("Start of numberToConvert ==> " + numberToConvert);
  if (numberToConvert <= 0) {
    return "";
  }
  const arabicNumberArray = Object.keys(numberSets);
  const romanNumeralArray = arabicNumberArray.map(function getRomanNumeral (value) {
    return numberSets[value];
  });

// for loop - loops throguh the arabicNumberArray
  for (let index = 0; index < arabicNumberArray.length; index += 1) {
    const arabicNumeral = arabicNumberArray[index];
    const romanNumeral = romanNumeralArray[index];

    // console.log("arabic numeral ==>  " + arabicNumeral);
    // console.log("roman numeral ==>  " + romanNumeral);
    parseInt(arabicNumeral, 10);
    if (numberToConvert >= arabicNumeral) {
      return romanNumeral + convertToRoman(numberToConvert - arabicNumeral);
    }
  }
  return "";
}


// TESTING //

function testArabicToRomanNumeral (numberToConvert, expected) {
  const actual = convertToRoman(numberToConvert);

  if (actual === expected){
     console.log("Passing Test: " + numberToConvert + " ==> " + expected);
  } else {
     console.log("Error: Entered " + numberToConvert + ". Returned " + actual + ", but expected " + expected);
  }
}


// testArabicToRomanNumeral(1, "I");
 // testArabicToRomanNumeral(2, "II");
// testArabicToRomanNumeral(3, "III");
 testArabicToRomanNumeral(4, "IV");
// testArabicToRomanNumeral(5, "V");
// testArabicToRomanNumeral(6, "VI");
// testArabicToRomanNumeral(7, "VII");
// testArabicToRomanNumeral(8, "VIII");
// testArabicToRomanNumeral(9, "IX");
// testArabicToRomanNumeral(10, "X");
// testArabicToRomanNumeral(55, "LV");
// testArabicToRomanNumeral(86, "LXXXVI");
// testArabicToRomanNumeral(357, "CCCLVII");
// testArabicToRomanNumeral(838, "DCCCXXXVIII");
// testArabicToRomanNumeral(920, "CMXX");
// testArabicToRomanNumeral(2374, "MMCCCLXXIV");
