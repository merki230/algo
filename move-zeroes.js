/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
*/
const nums = [0,1,0,3,12]
function insertionSort(inputs) {
  const zeroes = []
  for(let i= 0; i<inputs.length; i++){
    if(inputs[i]==0){
      zeroes.push(0)
    }
  }

  const array = inputs.filter(x => x!==0 )
   let len = array.length
   let temp, i, j 
   for(i=1; i< len; i++){
     temp = array[i]
     j= i-1
     while(j>=0 && array[j]>temp){
       array[j+1] = array[j]
       j--
     }
     array[j+1] = temp
   }
   return [...array,...zeroes]
}

console.log(insertionSort(nums))