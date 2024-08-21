/**
 * @param {number} capacity
 */

// ```
// 为了达到O(1)的时间复杂度, 我们可以结合使用哈希表和双向链表。

// 哈希表提供快速查找, 而双向链表允许我们快速移动和删除节点。
// ```;

class Node {
  constructor(key = 0, value = 0) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = new Map();

  this.head = new Node();
  this.tail = new Node();

  this.head.next = this.tail;
  this.tail.prev = this.head;

  this.removeNode = function (node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  };

  this.addToHead = function (node) {
    node.next = this.head.next;
    this.head.next.prev = node;

    node.prev = this.head;
    this.head.next = node;
  };

  this.removeTail = function () {
    const tail = this.tail.prev;
    this.removeNode(tail);
    return tail;
  };
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.cache.has(key)) return -1;

  // 将访问的节点移到链表头部
  const node = this.cache.get(key);
  this.removeNode(node);
  this.addToHead(node);

  return node.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    // 如果key已存在,更新值并移到链表头部
    const node = this.cache.get(key);
    node.value = value;
    this.removeNode(node);
    this.addToHead(node);
  } else {
    // 如果key不存在,创建新节点
    const newNode = new Node(key, value);
    this.cache.set(key, newNode);
    this.addToHead(newNode);

    // 如果超出容量,删除最久未使用的节点
    if (this.cache.size > this.capacity) {
      const tail = this.removeTail();
      this.cache.delete(tail.key);
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
