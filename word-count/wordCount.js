var fs = require('fs');
// reading file synchronomously
var readMe = fs.readFileSync('file.txt', 'utf8');
var wordsToFind = "Node";

if (readMe.indexOf(wordsToFind) >= 0) { 
    console.log("hey")
  } else { 
    console.log('No');
  }



//console.log(readMe);

