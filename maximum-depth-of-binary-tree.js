/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:

Input: root = [1,null,2]
Output: 2

Example 3:

Input: root = []
Output: 0

Example 4:

Input: root = [0]
Output: 1
 
Constraints:

The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100*/


 // Definition for a binary tree node.
 function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
}
 

const root1= new TreeNode(9)
const root2 = new TreeNode(20, new TreeNode(15), new TreeNode(17))
const root = new TreeNode(3, root1, root2)

function maxDepTh(node){
  if(node==null){
    return 0
  }
  return Math.max(maxDepTh(node.left), maxDepTh(node.right)) + 1
}

console.log(maxDepTh(root))