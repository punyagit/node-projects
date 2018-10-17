var fs = require('fs');
// reading file synchronomously
var readFile = fs.readFileSync('file.txt', 'utf8');
var readFileLowerCase = readFile.toLowerCase()
var wordsToFind = "node";

function countWord(word){
  if (readFileLowerCase.indexOf(word) >= 0) { 
    console.log("I found the word")
  } else { 
    console.log('No Word is Found');
  }
}

function mult(file) {
  //console.log(...args)
  var sliceNum = file.indexOf(wordsToFind)
  console.log(file.indexOf(wordsToFind))
  if (file.indexOf(wordsToFind) < 0){ // it will stop for ulimited loop
      console.log(file)
      return file
  }
  //console.log("here is " + args)
  return mult(file.slice(sliceNum + 1))
}
//console.log(readMe);
mult(readFileLowerCase)
countWord(wordsToFind);

