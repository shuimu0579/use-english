const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (hex) {
  var map = "0123456789ABCDEF";
  var count = 0;
  hex = hex.toUpperCase();

  for (var i = 0; i < hex.length; i++) {
    var index = map.indexOf(hex[i]) > -1 ? map.indexOf(hex[i]) : 0;
    count = count * 16 + index;
  }
  console.log(count);
});
