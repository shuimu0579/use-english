const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  var list = line.toString().split("").reverse();
  var newList = Array.from(new Set(list));
  var str = newList.join("");

  console.log(parseInt(str));
});
