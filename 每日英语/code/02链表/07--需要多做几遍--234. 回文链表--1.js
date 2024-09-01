```
给你一个单链表的头节点 head ，请你判断该链表是否为
回文链表
。如果是，返回 true ；否则，返回 false 。
```;

```
采用 栈 实现
```;

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
  if (!head || !head.next) return true;

  var current = head;
  var size = 0;
  while (current) {
    size++;
    current = current.next;
  }

  var stack = [];
  var count = 0;
  var node = head;
  while (node) {
    // if(count <= Math.floor(size / 2)){
    if (count < Math.floor(size / 2)) {
      stack.push(node.val);
      node = node.next;
      // }else if(count === (size + 1) / 2){
    } else if (count + 1 === (size + 1) / 2) {
      node = node.next;
    } else {
      if (stack.pop() !== node.val) {
        return false;
      }
      node = node.next;
    }

    count++;
  }

  return stack.length === 0;
};

// 下面这种实现有问题
// var isPalindrome = function (head) {
//   if (!head || !head.next) return true;

//   var prev = null;
//   var current = head;
//   var next = null;

//   while (current) {
//     next = current.next;

//     current.next = prev;
//     prev = current;

//     current = next;
//   }

//   while (prev && head) {
//     if (prev.val !== head.val) {
//       return false;
//     } else {
//       prev = prev.next;
//       head = head.next;
//     }
//   }

//   return !prev && !head;
// };
