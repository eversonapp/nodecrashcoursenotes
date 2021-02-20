const path = require('path')

// Base file name
console.log(path.basename(__filename));

// Base dir name
console.log(path.dirname(__filename));

//File extension
console.log(path.extname(__filename));

//Create path obj
console.log(path.parse(__filename));

//Concatenate path
console.log(path.join(__dirname, 'test', 'hello.html'));