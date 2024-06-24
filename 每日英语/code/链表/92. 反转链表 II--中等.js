/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// leetCode链接地址: https://leetcode.cn/problems/reverse-linked-list-ii/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  var index = 1;
  var standNode = new ListNode(null, head);
  var prevNode = standNode;
  var currentNode = head;

  var prev = null;
  var tail = null;

  while (currentNode) {
    if (index < left) {
      prevNode = currentNode;

      index++;
      currentNode = currentNode.next;
    } else if (index >= left && index <= right) {
      if (index === left) {
        tail = currentNode;
      }

      var tempNode = currentNode.next;

      currentNode.next = prev;
      prev = currentNode;

      if (index === right) {
        tail.next = tempNode; // 2->5
        prevNode.next = prev; // 1->4
      }

      index++;
      currentNode = tempNode;
    } else if (index > right) {
      currentNode = currentNode.next;
    }
  }

  return standNode.next;
};

var head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};
var a = reverseBetween(head, 2, 4);
console.log("a", a);
console.log("a.next.next", a.next.next);
