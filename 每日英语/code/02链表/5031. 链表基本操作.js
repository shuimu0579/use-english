/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = val;
 *     this.next = next;
 * }
 */

// 链接：https://www.codecrush.cn/oj/problem/5

function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

/**
 * @param {ListNode|null} head
 * @param {number} value
 * @returns {ListNode}
 */
var insertAtHead = function (head, value) {
  var node = new ListNode(value, head);
  return node;
};

/**
 * @param {ListNode|null} head
 * @param {number} value
 * @returns {ListNode}
 */
var insertAtTail = function (head, value) {
  var tail = new ListNode(value, null);

  if (!head) return tail; // 当head 为 null时， 这个边界条件要加上

  var node = head;
  // while (true) {  // 应该为 while (node) 而不是 while (true)
  while (node) {
    if (!node.next) {
      break;
    }
    node = node.next;
  }
  node.next = tail;
  return head;
};

/**
 * @param {ListNode|null} head
 * @returns {number}
 */
var size = function (head) {
  if (!head) return 0;

  var num = 0;
  var node = head;
  while (node) {
    node = node.next;
    num++;
  }

  return num;
};

/**
 * @param {ListNode|null} head
 * @param {ListNode} enode
 * @returns {ListNode|null}
 */
// 获取前驱节点 prevNode
var prev = function (head, enode) {
  var prevNode = null;
  var node = head;
  while (node) {
    if (node.val === enode.val) {
      break;
    }
    prevNode = node;
    node = node.next;
  }

  return prevNode;
};

/**
 * @param {ListNode|null} head
 * @param {ListNode} enode
 * @returns {ListNode}
 */
var deleteNode = function (head, enode) {
  if (!head || !enode) return head;

  // var standNode = new ListNode(null, head);
  // var prevNode = standNode;
  var prevNode = null; // prevNode在这里指的是需要删除节点的前驱节点
  var node = head;
  while (node) {
    if (node.val === enode.val) {
      break;
    }
    prevNode = node;
    node = node.next;
  }
  if (!node) return head;

  if (!prevNode) {
    // 删除的是 head 头节点的情况
    head = head.next;
  } else {
    // 删除的是非头节点的情况
    prevNode.next = node.next;
  }

  // return standNode.next;
  return head;
};

var head = { val: 1, next: { val: 2, next: { val: 3, next: null } } };
// var head = { val: 1, next: null };

/***
 * insertAtHead
 *
 *
 */
// var value = 12;
// var insertAtHead = insertAtHead(head, value);
// console.log('insertAtHead', insertAtHead);

/**
 * insertAtTail
 */

// var value = 12;
// var insertAtTail = insertAtTail(head, value);
// console.log('insertAtTail', insertAtTail);

/***
 * 删除操作
 *
 */
// var enode = { val: 2, next: { val: 3, next: null } };
// var enode = { val: 3, next: null };
var enode = { val: 1, next: { val: 2, next: { val: 3, next: null } } };
// var enode = { val: 4, next: { val: 2, next: { val: 3, next: null } } };
// var enode = null;

let deleteNode01 = deleteNode(head, enode);
console.log("deleteNode01", deleteNode01);

/**
 * size
 */

var size = size(head);
console.log("size", size);

/**
 * prev
 */
var prev01 = prev();
console.log("prev01", prev01);
