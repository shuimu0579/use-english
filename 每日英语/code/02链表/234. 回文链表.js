/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head) return false;

  var temp = head;
  var size = 0;
  while (temp) {
    temp = temp.next;
    size++;
  }

  var node = head;
  var index = 0;
  var stack = [];
  while (node) {
    if (index < Math.floor(size / 2)) {
      stack.push(node.val);
      node = node.next;
    } else if (index === (size + 1) / 2) {
      node = node.next;
    } else {
      var top = stack.pop();
      if (node.val === top) {
        node = node.next;
      } else {
        return false;
      }
    }
    index++;
  }

  return stack.length === 0;
};
