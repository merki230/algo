/*
Given two integers a and b, return the sum of the two integers without using the operators + and -.

 
Example 1:

Input: a = 1, b = 2
Output: 3
Example 2:

Input: a = 2, b = 3
Output: 5
 

Constraints:

-1000 <= a, b <= 1000
*/

/*
create function sum
create variables a, b, c

0001 = 1
xor
0011 = 3
0010 = 2 :a

0001
&
0011
0001 = 1

0001 << 1
0010 = 2 : b

2

0010
xor
0010
0000 = 0:a

0010
&
0010
0010 

0010<<1
0100 = 4: b

3
0000
xor
0100
0100= 4: a

0000
&
0100
0000 

0000<<1
00000: b


*/

function add( a,  b)
{
    if (!b) {
        return a;
    }
 
    let sum = a ^ b;
    console.log("sum:",sum)
    let carry = (a & b) << 1;
    console.log('arry:', carry)
    return add(sum, carry);
}

console.log(add(1, 3));