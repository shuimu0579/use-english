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
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  var size = 0;
  var currentSize = head;
  while (currentSize) {
    size++;
    currentSize = currentSize.next;
  }

  var index = 0;
  if (size % 2 === 1) {
    index = Math.floor(size / 2) + 1;
  } else if (size % 2 === 0) {
    index = size / 2 + 1;
  }

  var current = head;
  var currentIndex = 0;
  while (current) {
    currentIndex++;
    if (index === currentIndex) {
      break;
    }
    // currentIndex++;  currentIndex++ 应该放到前面
    current = current.next;
  }

  return current;
};
