fs = require('fs')
fs.readFile('input.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var newData = data.replaceAll("1", "##").replaceAll("0", "||     ||");
  const lines = data.split("\n");
  //const lines = newData.split("\n");
  var line = 0;
  for (var i = 0; i < 4382; i++) {
    setTimeout(() => {
      for (var c = 0; c < 28; c++) {
        console.log(lines[line]);
        line++;
      }
      console.log("====================================");
    }, 41 * i);
  }
});
