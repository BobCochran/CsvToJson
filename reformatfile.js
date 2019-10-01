/* Code to reformat a file line by line into a json
 * string. A lot of this code was copied from Paige
 * Niedringhaus' post appearing in 
 * https://itnext.io/using-node-js-to-read-really-really-large-files-pt-1-d2057fe76b33
 * */
var fs = require('fs')

var readline = require('readline')

var stream = require('stream')

var instream = fs.createReadStream('csvdata2.csv')

var outstream = new stream()

var rl = readline.createInterface(instream, outstream)

var myFlds = [];

//Count number of lines read in
var lineCount = 0;

rl.on('line', function(line) {

	//increment line counter
	lineCount++

	//split the line on commas

	var flds = line.split(',')

	myFlds.push(flds)
} )

rl.on('close', function() {

	console.log("The line count is " + lineCount)
	console.log("Example of what is in myFlds" + myFlds[1])

})

//console.log(data.toString('utf8'))

