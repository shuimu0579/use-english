/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  var size = 0;
  var tempNode1 = list1;
  while (tempNode1) {
    size++;
    tempNode1 = tempNode1.next;
  }

  var tail = null;
  var tempNode2 = list2;
  while (tempNode2) {
    tail = tempNode2;
    tempNode2 = tempNode2.next;
  }

  var standNode = new ListNode(null, list1);
  var prevNode = standNode;
  var currentNode = list1;
  var index = 0;
  while (currentNode) {
    if (index < a) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    } else if (index === a) {
      prevNode.next = list2;
      currentNode = currentNode.next;
    } else if (b > index > a) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    } else if (index === b) {
      tail.next = currentNode.next;
      prevNode = tail;
      currentNode = currentNode.next;
    } else {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    index++; // index++ 这一行代码必须要加上
  }

  return standNode.next;
};
