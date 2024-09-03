const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  var arr = line.split(";");
  var list = arr.filter((i) => /^[ADWS](\d){1,2}$/.test(i));

  var x = 0;
  var y = 0;
  for (var i of list) {
    if (i.startsWith("A")) {
      x -= Number(i.slice(1));
    } else if (i.startsWith("D")) {
      x += Number(i.slice(1));
    } else if (i.startsWith("W")) {
      y += Number(i.slice(1));
    } else if (i.startsWith("S")) {
      y -= Number(i.slice(1));
    }
  }

  var str = x + "," + y;
  console.log(str);
});
