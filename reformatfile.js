/* File system object */
var fs = require('fs')

data = fs.readFileSync('csvdata2.csv')

console.log(data.toString('utf8'))

