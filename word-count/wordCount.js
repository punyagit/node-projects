var fs = require('fs');

var wordsToFind = 'node';
let count = 0;

function countWordFile(callback) {
  fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    var readFileLowerCase = data.toLowerCase();

    return callback(readFileLowerCase);
  });
}

function mult(file) {
  var sliceNum = file.indexOf(wordsToFind);
  //console.log(sliceNum)
  if (sliceNum < 0) return count;
  count++;
  return mult(file.slice(sliceNum + 1));
}

console.log(countWordFile(mult));
console.log('punya');
