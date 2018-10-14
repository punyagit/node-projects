var fs = require('fs');
// reading file synchronomously
var readMe1 = fs.readFileSync('file.txt', 'utf8');
var readMe = readMe1.toLowerCase()
console.log(readMe)
var wordsToFind = "node";




function countWord(word){
  if (readMe.indexOf(word) >= 0) { 
    console.log("hey")
  } else { 
    console.log('No');
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
mult(readMe)
countWord(wordsToFind);

