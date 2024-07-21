/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function reverseBookList(head) {
  const reversedHead = reverseList(head);
  return listToArray(reversedHead);
}

/**
 * 主函数：反转书单并返回数组
 * @param {ListNode} head
 * @return {number[]}
 */
var reverseList = function (head) {
  if (head === null || head.next === null) {
    return head;
  }

  const newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;

  return newHead;
};

/**
 * 将链表转换为数组
 * @param {ListNode} head
 * @return {number[]}
 */
function listToArray(head) {
  const result = [];
  let current = head;
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}
