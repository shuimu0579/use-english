// enqueue 方法里面， 不是this.queue[(this.size[queueID] % this.queueSize) + queueID * this.queueSize]
// 而是 this.queue[(this.tail[queueID] % this.queueSize) + queueID * this.queueSize]

class TripleQueueInOne {
  /**
   * @param {number} queueSize
   */
  constructor(queueSize) {
    this.queueSize = queueSize;
    this.queue = new Array(3 * queueSize).fill(null);
    this.head = new Array(3).fill(0);
    this.tail = new Array(3).fill(0);
    this.size = new Array(3).fill(0);
  }

  /**
   * @param {number} queueID
   * @param {number} value
   * @returns {boolean}
   */
  enqueue(queueID, value) {
    if (this.size[queueID] === this.queueSize) return false;

    // this.queue[
    //   (this.size[queueID] % this.queueSize) + queueID * this.queueSize
    // ] = value;
    this.queue[
      (this.tail[queueID] % this.queueSize) + queueID * this.queueSize
    ] = value;

    this.tail[queueID] = (this.tail[queueID] + 1) % this.queueSize;
    this.size[queueID] = this.size[queueID] + 1;

    return true;
  }

  /**
   * @param {number} queueID
   * @returns {number}
   */
  dequeue(queueID) {
    if (this.size[queueID] === 0) return -1;

    var peek = this.queue[queueID * this.queueSize + this.head[queueID]];

    this.queue[queueID * this.queueSize + this.head[queueID]] = null;
    this.head[queueID] = (this.head[queueID] + 1) % this.queueSize;
    this.size[queueID] = this.size[queueID] - 1;

    return peek;
  }

  /**
   * @param {number} queueID
   * @returns {boolean}
   */
  isEmpty(queueID) {
    return this.size[queueID] === 0;
  }
}

var a = new TripleQueueInOne(3);
a.enqueue(0, 1);
a.enqueue(1, 1);
a.enqueue(2, 1);
a.dequeue(0);
a.dequeue(1);
a.dequeue(2);
console.log("a1", a);

a.enqueue(0, 2);
a.enqueue(0, 3);

a.enqueue(1, 2);
a.enqueue(1, 3);

a.enqueue(2, 2);
a.enqueue(2, 3);
console.log("a2", a);

a.dequeue(0);
a.dequeue(1);
a.dequeue(2);
console.log("a3", a);

a.dequeue(0);
a.dequeue(1);
a.dequeue(2);

a.dequeue(0);
a.dequeue(1);
a.dequeue(2);

var c = a.isEmpty(0);
var d = a.isEmpty(1);
var e = a.isEmpty(2);

console.log("a", a);
console.log("c", c);
console.log("d", d);
console.log("e", e);
