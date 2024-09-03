const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  var arr = line.split(" ");
  console.log(arr[arr.length - 1].length);
});
