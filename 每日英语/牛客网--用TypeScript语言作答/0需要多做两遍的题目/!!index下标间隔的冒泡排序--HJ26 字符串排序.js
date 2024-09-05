// ```
// 描述
// 编写一个程序，将输入字符串中的字符按如下规则排序。

// 规则 1 ：英文字母从 A 到 Z 排列，不区分大小写。

// 如，输入： Type 输出： epTy

// 规则 2 ：同一个英文字母的大小写同时存在时，按照输入顺序排列。

// 如，输入： BabA 输出： aABb

// 规则 3 ：非英文字母的其它字符保持原来的位置。

// 如，输入： By?e 输出： Be?y

// 数据范围：输入的字符串长度满足
// 1
// ≤
// n
// ≤
// 1000

// 1≤n≤1000
// ```;

// 下标间隔的冒泡排序
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  var list = line.split("");
  var charIndex = [];
  for (let i = 0; i < list.length; i++) {
    if (/[a-zA-Z]/.test(list[i])) {
      charIndex.push(i);
    }
  }

  for (let i = 0; i < charIndex.length; i++) {
    // for (let j = 0; j < charIndex.length - i; j++) {
    for (let j = 0; j < charIndex.length - i - 1; j++) {
      if (
        list[charIndex[j]].toLowerCase() > list[charIndex[j + 1]].toLowerCase()
      ) {
        [list[charIndex[j]], list[charIndex[j + 1]]] = [
          list[charIndex[j + 1]],
          list[charIndex[j]],
        ];
      }
    }
  }

  var str = list.join("");
  console.log(str);
});

// 下面这种选择排序， 是不稳定的排序
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.on("line", function (line) {
//   var list = line.split("");
//   for (let i = 0; i < list.length; i++) {
//     var minIndex = i;
//     for (let j = i + 1; j < list.length; j++) {
//       if (/[a-zA-Z]/.test(list[minIndex]) && /[a-zA-Z]/.test(list[j])) {
//         if (list[j].toLowerCase() < list[minIndex].toLowerCase()) {
//           minIndex = j;
//         }
//       }
//     }
//     if (minIndex !== i) {
//       [list[i], list[minIndex]] = [list[minIndex], list[i]];
//     }
//   }
//   let str = list.join("");
//   console.log(str);
// });
