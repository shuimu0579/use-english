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

  var list = arr.map((i) => [i.split(" ")[0], i.split(" ")[1]]);
  var hashMap = new Map();
  for (let i of list) {
    if (hashMap.has(i[0])) {
      hashMap.set(i[0], Number(hashMap.get(i[0])) + Number(i[1]));
    } else {
      hashMap.set(i[0], Number(i[1]));
    }
  }

  // 一定要记得排序；
  var sortList = Array.from(hashMap).sort((a, b) => a[0] - b[0]);

  for (let i of sortList) {
    console.log(`${i[0]} ${i[1]}`);
  }
});
