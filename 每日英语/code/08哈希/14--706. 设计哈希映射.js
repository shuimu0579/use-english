var MyHashMap = function () {
  this.hashMap = new Array(1000000).fill(null);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  if (this.hashMap[key % 1000000]) {
    this.hashMap[key % 1000000][key] = value;
  } else {
    // this.hashMap[key % 1000000] = {
    //    key:value
    // };
    this.hashMap[key % 1000000] = {
      [key]: value,
    };
  }

  return null;
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  if (this.hashMap[key % 1000000]) {
    return this.hashMap[key % 1000000][key];
  }

  return -1;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  this.hashMap[key % 1000000] = null;

  return null;
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
