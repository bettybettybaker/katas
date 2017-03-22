function toRoman(num){
  var result = '';
  var decimal = [1000, 500, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "D", "C", "L", "X", "V", "I"];
  for (var i = 0; i <= decimal.length; i++) {
    while (num % decimal[i] < num) {
      result += roman[i];
      num -= decimal[i];
    }
  }
  console.log(result);
return result;
}
toRoman(8);
