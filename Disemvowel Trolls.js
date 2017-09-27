/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
*/

function disemvowel(str) {
  var vowels = "aeiouAEIOU";
  var mStr = str.lowercase;
  var newStr = "";
  
  for (i = 0; i < str.length; i++) {
    for (j = 0; j < vowels.length; j++) {
      if (str[i] !== vowels[j]) {
      } else {
        i++;
        j--;
      }  
    }
    newStr += str[i];
  }
  return newStr;
}