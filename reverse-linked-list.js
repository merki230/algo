/**
 * Definition for singly-linked list.

//Reverse a singly linked list  */

/*
*/

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

const head = [1, 2, 3, 4, 5];

const linked = new ListNode(1, new ListNode(2, new ListNode(3)));
// new ListNode(3,
// new ListNode(4,
// new ListNode(5))

console.log(linked);
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//const head = [1,2]
var reverseList = function(head) {
	let node = head;
	let prev, next;
	while (node) {
		console.log(node);
    next = node.next;
    node.next = prev
		prev = node;
		node = next;
		//node.next = prev
	}
 return prev;
};

console.log(reverseList(linked));
