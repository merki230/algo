/*
Write a function that reverses a string. The input string is given as an array of characters s.

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 

Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.

*/
const s = ["H","a","n","n","a","h"];

function reverse(input) {

  const tab = [];
  for(let i = input.length - 1; i>=0; i--) {
    tab.push(input[i]);
  }
  return tab;
}
console.log(reverse(s));