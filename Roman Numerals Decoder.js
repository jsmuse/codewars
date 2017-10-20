/*
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:

solution('XXI'); // should return 21
*/

function solution(roman){
  var decimal = [1, 5, 10, 50, 100, 500, 1000]; 
  var romans = ["I", "V", "X", "L", "C", "D", "M"];
  var res = [];
  var num = 0;

  for (i = 0; i < roman.length; i++) {
    for (j = 0; j < romans.length; j++) {
      if (romans[j] === roman[i]) {
        res.push(decimal[j]);
      }
    }
  }

  for(l = 0; l < res.length; l++) {
    if (res[l] < res[l + 1]) {
      num += res[l + 1] - res[l];
      l++;
    } else {
      num += res[l];
    }
  }
  return num;
}