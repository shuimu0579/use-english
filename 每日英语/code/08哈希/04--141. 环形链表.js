/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 快慢指针的方法

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head || !head.next) return false;

  var slow = head.next;
  var fast = head.next.next;

  while (slow && fast && fast.next) {
    if (slow === fast) {
      return true;
    }
    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
};

// hashMap的方法
var hasCycle = function (head) {
  var hashMap = new Map();
  var current = head;

  while (current) {
    if (hashMap.has(current)) {
      return true;
    }

    hashMap.set(current, current);

    current = current.next;
  }

  return false;
};
