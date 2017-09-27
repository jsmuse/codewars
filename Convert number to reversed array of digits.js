/*
Convert number to reversed array of digits

Given a random number:

C#: long;
C++: unsigned long;
You have to return the digits of this number within an array in reverse order.

Example:

348597 => [7,9,5,8,4,3]
*/

function digitize(n) {
  var numb = n.toString();
  var newArr = [];
  var j = 0;
  
  for (i = numb.length - 1; i > -1; i--) {
    newArr.push(+numb[i]);
  }
  return newArr;
}