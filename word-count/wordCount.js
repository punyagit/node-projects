var fs = require('fs');
// reading file synchronomously
//var readFile = fs.readFileSync('file.txt', 'utf8');


var wordsToFind = "node";
let count = 0

function countWordFile(callback) {
  fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    var readFileLowerCase = data.toLowerCase()

    return callback(readFileLowerCase)


  });

}




function countWord(readFileLowerCase, word, callback) {
  if (readFileLowerCase.indexOf(word) >= 0) {
    console.log("I found the word")
  } else {
    console.log('No Word is Found');
  }
  callback(readFileLowerCase)
}



function mult(file) {
  var sliceNum = file.indexOf(wordsToFind)
  console.log(sliceNum)
  if (sliceNum < 0)

    return count
  count++
  return mult(file.slice(sliceNum + 1))
}

console.log(countWordFile(mult))
console.log("punya")

