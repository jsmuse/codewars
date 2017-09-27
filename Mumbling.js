/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
  var word = "";
  var res = [];
  s = s.toLowerCase();
  for (i = 0; i < s.length; i++) {
    word = "";
    for (j = 0; j < i + 1; j++) {
      if (j === 0) {
        word += s[i].toUpperCase();
      } else {
        word += s[i]; 
      }
    }
    res.push(word);
  }
  return res.join("-");
}