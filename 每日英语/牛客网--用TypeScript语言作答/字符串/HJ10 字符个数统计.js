const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  var hashMap = new Map();

  for (var s of line) {
    if (hashMap.has(s)) {
      hashMap.set(s, hashMap.get(s) + 1);
    } else {
      hashMap.set(s, 1);
    }
  }

  var list = Array.from(hashMap.keys());

  console.log(list.length);
});
