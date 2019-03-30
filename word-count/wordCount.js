var fs = require('fs');
// reading file synchronomously
var readFile = fs.readFileSync('file.txt', 'utf8');
var readFileLowerCase = readFile.toLowerCase()
var wordsToFind = "javascript";

function countWord(word) {
  if (readFileLowerCase.indexOf(word) >= 0) {
    console.log("I found the word")
  } else {
    console.log('No Word is Found');
  }
}
let count = 0
function mult(file) {
  var sliceNum = file.indexOf(wordsToFind)
  //console.log(sliceNum)
  if (sliceNum < 0)
    return count
  count++
  return mult(file.slice(sliceNum + 1))
}
//console.log(readMe);
console.log(mult(readFileLowerCase))
//countWord(wordsToFind);
console.log("punya")
