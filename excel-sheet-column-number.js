/*
Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 

Example 1:

Input: columnTitle = "A"
Output: 1
Example 2:

Input: columnTitle = "AB"
Output: 28
Example 3:

(26*1)+(2)

Input: columnTitle = "ZY"
Output: 701
Example 4:

(26*26)+25

AAA

(26*1)+((26^2)*1)+1

Input: columnTitle = "FXSHRXW"
Output: 2147483647

(26*6)+(26^2*24)
 

Constraints:

1 <= columnTitle.length <= 7
columnTitle consists only of uppercase English letters.
columnTitle is in the range ["A", "FXSHRXW"].

*/

function excelNumber(input) {
  const tab = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];

  let sum = 0
  if(input.length<2){
    return tab.indexOf(input)+1
  }

  for(let i = 0; i < input.length - 1; i++) {
    sum += ((26**(i+1)) * (tab.indexOf(input[i]) + 1));
  }

  return sum + tab.indexOf(input[input.length-1]) +1
}  

console.log(excelNumber("HHH"))