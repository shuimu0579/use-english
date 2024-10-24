// 这样的计算方式：从前向后遍历 递增； 从后向前遍历 递增， 就能达到合唱队的效果。
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var arr = [];
rl.on("line", function (line) {
  arr.push(line);
});
rl.on("close", function () {
  arr.shift();
  var list = arr[0].split(" ").map(Number);
  let n = list.length;

  let dpAdd = new Array(n).fill(Number.MIN_SAFE_INTEGER);
  dpAdd[0] = 1;
  for (let i = 1; i < n; i++) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let j = 0; j < i; j++) {
      if (list[j] < list[i]) {
        max = Math.max(max, dpAdd[j]);
      }
    }
    if (max !== Number.MIN_SAFE_INTEGER) {
      dpAdd[i] = max + 1;
    } else {
      dpAdd[i] = 1;
    }
  }
  // var countMax = Number.MIN_SAFE_INTEGER;
  // for (let i = 0; i < n; i++) {
  //     countMax = Math.max(countMax, dpAdd[i]);
  // }

  let dpDecrease = new Array(n).fill(Number.MIN_SAFE_INTEGER);
  dpDecrease[list.length - 1] = 1;
  for (let i = list.length - 2; i > 0; i--) {
    // 从后向前遍历
    // for (let i = 1; i < n; i++) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let j = list.length - 1; j > i; j--) {
      // 从后向前遍历
      if (list[j] < list[i]) {
        max = Math.max(max, dpDecrease[j]);
      }
    }
    if (max !== Number.MIN_SAFE_INTEGER) {
      dpDecrease[i] = max + 1;
    } else {
      dpDecrease[i] = 1;
    }
  }
  // var countDeMax = Number.MIN_SAFE_INTEGER;
  // for (let i = 0; i < n; i++) {
  //     countDeMax = Math.max(countDeMax, dpDecrease[i]);
  // }

  // var count = list.length - (countMax + countDeMax - 1);

  var countMax = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    countMax = Math.max(countMax, dpAdd[i] + dpDecrease[i] - 1);
  }
  var count = list.length - countMax;

  console.log(count);
});

// 下面这样计算有问题：

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// var arr = [];
// rl.on("line", function (line) {
//   arr.push(line);
// });
// rl.on("close", function () {
//   arr.shift();
//   var list = arr[0].split(" ").map(Number);
//   let n = list.length;

//   let dpAdd = new Array(n).fill(Number.MIN_SAFE_INTEGER);
//   dpAdd[0] = 1;
//   for (let i = 1; i < n; i++) {
//     let max = Number.MIN_SAFE_INTEGER;
//     for (let j = 0; j < i; j++) {
//       if (list[j] < list[i]) {
//         max = Math.max(max, dpAdd[j]);
//       }
//     }
//     if (max !== Number.MIN_SAFE_INTEGER) {
//       dpAdd[i] = max + 1;
//     } else {
//       dpAdd[i] = 1;
//     }
//   }
//   var countMax = Number.MIN_SAFE_INTEGER;
//   for (let i = 0; i < n; i++) {
//     countMax = Math.max(countMax, dpAdd[i]);
//   }

//   let dpDecrease = new Array(n).fill(Number.MIN_SAFE_INTEGER);
//   dpDecrease[0] = 1;
//   for (let i = 1; i < n; i++) {
//     let max = Number.MIN_SAFE_INTEGER;
//     for (let j = list.length - 1; j > i; j--) {
//       if (list[j] < list[i]) {
//         max = Math.max(max, dpDecrease[j]);
//       }
//     }
//     if (max !== Number.MIN_SAFE_INTEGER) {
//       dpDecrease[i] = max + 1;
//     } else {
//       dpDecrease[i] = 1;
//     }
//   }
//   var countDeMax = Number.MIN_SAFE_INTEGER;
//   for (let i = 0; i < n; i++) {
//     countDeMax = Math.max(countDeMax, dpDecrease[i]);
//   }

//   var count = list.length - (countMax + countDeMax - 1);
//   console.log(count);
// });
