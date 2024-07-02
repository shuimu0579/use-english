class TripleStackInOne {
  /**
   * @param {number} stackSize
   */
  constructor(stackSize) {
    this.stackList = new Array(stackSize * 3).fill(null);
    this.sizeList = [0, 0, 0];
    this.stackSize = stackSize;
  }

  /**
   * @param {number} stackID
   * @param {number} value
   * @returns {boolean}
   */
  push(stackID, value) {
    if (this.sizeList[stackID] === this.stackSize) return false;

    this.stackList[this.sizeList[stackID] - 1 + 1 + this.stackSize * stackID] =
      value;
    this.sizeList[stackID]++;

    return true;
  }

  /**
   * @param {number} stackID
   * @returns {number}
   */
  pop(stackID) {
    if (this.sizeList[stackID] === 0) return -1;

    var pop =
      this.stackList[this.sizeList[stackID] - 1 + this.stackSize * stackID];
    this.stackList[this.sizeList[stackID] - 1 + this.stackSize * stackID] =
      null;
    this.sizeList[stackID]--;

    return pop;
  }

  /**
   * @param {number} stackID
   * @returns {number}
   */
  peek(stackID) {
    if (this.sizeList[stackID] === 0) return -1;
    var peek =
      this.stackList[this.sizeList[stackID] - 1 + this.stackSize * stackID];
    return peek;
  }

  /**
   * @param {number} stackID
   * @returns {boolean}
   */
  isEmpty(stackID) {
    return this.sizeList[stackID] === 0;
  }
}

var tripleStack = new TripleStackInOne(3);

console.log(tripleStack.push(0, 1));
console.log(tripleStack.push(1, 2));
console.log(tripleStack.push(2, 3));
// console.log("tripleStack.stackList", tripleStack.stackList);

console.log(tripleStack.push(0, 11));
console.log(tripleStack.push(1, 22));
console.log(tripleStack.push(2, 33));
// console.log("tripleStack.stackList", tripleStack.stackList);

console.log(tripleStack.push(0, 111));
console.log(tripleStack.push(1, 222));
console.log(tripleStack.push(2, 333));
// console.log("tripleStack.stackList", tripleStack.stackList);

console.log(tripleStack.pop(0));
console.log(tripleStack.pop(1));
console.log(tripleStack.pop(2));
console.log("tripleStack.stackList", tripleStack.stackList);

// console.log(tripleStack.pop(0));
// console.log(tripleStack.pop(1));
// console.log(tripleStack.pop(2));
// console.log("tripleStack.stackList", tripleStack.stackList);

// console.log(tripleStack.pop(0));
// console.log(tripleStack.pop(1));
// console.log(tripleStack.pop(2));
// console.log("tripleStack.stackList", tripleStack.stackList);

// console.log(tripleStack.peek(0));
// console.log(tripleStack.peek(1));
// console.log(tripleStack.peek(2));
// console.log("tripleStack.stackList", tripleStack.stackList);

// console.log("tripleStack.isEmpty", tripleStack.isEmpty(0));
// console.log("tripleStack.isEmpty", tripleStack.isEmpty(1));
// console.log("tripleStack.isEmpty", tripleStack.isEmpty(2));
