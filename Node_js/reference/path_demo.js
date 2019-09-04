// Used for working with directories
const path = require('path');

console.log(__filename)

// Base File Name
console.log(path.basename(__filename))

// Directory Name
console.log(path.dirname(__filename))

// File Extension
console.log(path.extname(__filename))

// Path Object
console.log(path.parse(__filename))

// Concatenate paths
console.log(path.join(__dirname,'test','hello.html'))

console.log(path.dirname(__filename),path.dirname(path.dirname(__filename)))