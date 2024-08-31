```
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

字母异位词 是通过重新排列不同单词或短语的字母而形成的单词或短语，通常只使用所有原始字母一次。

示例 1:

输入: s = "anagram", t = "nagaram"
输出: true
示例 2:

输入: s = "rat", t = "car"
输出: false

提示:

1 <= s.length, t.length <= 5 * 104
s 和 t 仅包含小写字母
```;

// 这个算法的核心思想是使用哈希表（在这里用 Map 实现）来统计字符出现的次数。
// 通过比较两个字符串中字符出现的次数是否相同，我们可以判断它们是否为字母异位词。这种方法避免了排序，提高了效率。

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // 如果两个字符串长度不同，它们不可能是字母异位词
  if (s.length !== t.length) return false;

  // 创建一个 Map 来存储字符及其出现次数
  var hashMap = new Map();

  // 遍历第一个字符串，统计每个字符的出现次数
  for (var i of s) {
    if (hashMap.has(i)) {
      hashMap.set(i, hashMap.get(i) + 1);
    } else {
      hashMap.set(i, 1);
    }
  }

  // 遍历第二个字符串，减少 Map 中对应字符的计数
  for (var j of t) {
    if (hashMap.has(j)) {
      hashMap.set(j, hashMap.get(j) - 1);
    }
  }

  // 检查 Map 中所有值是否为 0，如果是，则两个字符串是字母异位词
  return [...hashMap.values()].every((i) => i === 0);
};
